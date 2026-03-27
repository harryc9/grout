/**
 * Converts the Vapi-format tool definitions from build-assistant.ts
 * into AI SDK tool() format with mock execute functions.
 * Mock behavior mirrors api/vapi/route.ts handleToolCall().
 */
import { tool, jsonSchema } from 'ai'
import type { RecordedToolCall } from './types'

function randomId(): string {
  return Math.random().toString(36).slice(2, 8)
}

export function buildTestTools(recorder: RecordedToolCall[]) {
  const createLead = tool({
    description:
      "Create a new lead record after collecting caller information. Call this after you have the caller's name, phone number, and service type.",
    inputSchema: jsonSchema<{
      full_name: string
      phone: string
      email?: string
      service_type: string
      address?: string
      urgency?: 'low' | 'medium' | 'high' | 'emergency'
      notes?: string
    }>({
      type: 'object',
      properties: {
        full_name: { type: 'string', description: "Caller's full name" },
        phone: { type: 'string', description: "Caller's phone number" },
        email: { type: 'string', description: "Caller's email address" },
        service_type: { type: 'string', description: 'Type of service requested' },
        address: { type: 'string', description: 'Property address for the service' },
        urgency: {
          type: 'string',
          description: 'How urgent the request is',
          enum: ['low', 'medium', 'high', 'emergency'],
        },
        notes: { type: 'string', description: 'Additional notes from the caller' },
      },
      required: ['full_name', 'phone', 'service_type'],
      additionalProperties: false,
    }),
    execute: async (args) => {
      const result = {
        status: 'success' as const,
        message: `Lead saved for ${args.full_name}`,
        record_id: `lead_demo_${randomId()}`,
        display_data: {
          full_name: args.full_name,
          phone: args.phone,
          service_type: args.service_type,
          urgency: args.urgency ?? 'medium',
        },
      }
      recorder.push({ name: 'create_lead', args: args as Record<string, unknown>, result })
      return result
    },
  })

  const bookAppointment = tool({
    description:
      'Book an estimate or service appointment for the caller. Call this when the caller wants to schedule a visit.',
    inputSchema: jsonSchema<{
      full_name: string
      phone: string
      service_type: string
      address: string
      preferred_date: string
      preferred_time: string
    }>({
      type: 'object',
      properties: {
        full_name: { type: 'string', description: "Caller's full name" },
        phone: { type: 'string', description: "Caller's phone number" },
        service_type: { type: 'string', description: 'Type of service' },
        address: { type: 'string', description: 'Property address' },
        preferred_date: {
          type: 'string',
          description: 'Preferred date (e.g., next Friday, March 28)',
        },
        preferred_time: {
          type: 'string',
          description: 'Preferred time (e.g., 2 PM, morning)',
        },
      },
      required: ['full_name', 'phone', 'service_type', 'address', 'preferred_date', 'preferred_time'],
      additionalProperties: false,
    }),
    execute: async (args) => {
      const result = {
        status: 'success' as const,
        message: `Appointment confirmed for ${args.preferred_date} at ${args.preferred_time}`,
        record_id: `apt_demo_${randomId()}`,
        display_data: {
          date: args.preferred_date,
          time: args.preferred_time,
          address: args.address,
          service: args.service_type,
          full_name: args.full_name,
        },
      }
      recorder.push({ name: 'book_appointment', args: args as Record<string, unknown>, result })
      return result
    },
  })

  const endCall = tool({
    description: 'End the phone call. Use when the conversation is over.',
    inputSchema: jsonSchema<Record<string, never>>({
      type: 'object',
      properties: {},
      additionalProperties: false,
    }),
    execute: async () => {
      recorder.push({ name: 'end_call', args: {}, result: { status: 'ended' } })
      return { status: 'ended' }
    },
  })

  return { create_lead: createLead, book_appointment: bookAppointment, end_call: endCall }
}
