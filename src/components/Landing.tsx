'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import {
  Phone,
  PhoneIncoming,
  PhoneOff,
  CalendarCheck,
  MessageSquare,
  Clock,
  DollarSign,
  ShieldCheck,
  Zap,
  ArrowRight,
  CheckCircle2,
  Headphones,
  Bot,
  Wrench,
} from 'lucide-react'
import { useState } from 'react'

function StatItem({
  icon: Icon,
  value,
  label,
}: {
  icon: React.ElementType
  value: string
  label: string
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-orange-100 p-2.5 rounded-xl">
        <Icon className="h-5 w-5 text-orange-600" />
      </div>
      <div>
        <div className="text-2xl font-bold text-gray-900">{value}</div>
        <div className="text-sm text-gray-500">{label}</div>
      </div>
    </div>
  )
}

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType
  title: string
  description: string
}) {
  return (
    <Card className="bg-white border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="pt-6">
        <div className="bg-orange-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-orange-600" />
        </div>
        <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  )
}

function PricingCard({
  tier,
  price,
  minutes,
  overage,
  features,
  highlighted = false,
}: {
  tier: string
  price: string
  minutes: string
  overage: string
  features: string[]
  highlighted?: boolean
}) {
  return (
    <Card
      className={`relative ${
        highlighted
          ? 'border-orange-500 border-2 shadow-lg'
          : 'border-gray-200 shadow-sm'
      }`}
    >
      {highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge className="bg-orange-500 text-white px-3 py-0.5">
            Most Popular
          </Badge>
        </div>
      )}
      <CardHeader className="text-center pb-2">
        <CardTitle className="text-lg text-gray-900">{tier}</CardTitle>
        <div className="pt-2">
          <span className="text-4xl font-bold text-gray-900">{price}</span>
          <span className="text-gray-500">/month</span>
        </div>
        <p className="text-sm text-gray-500 pt-1">
          {minutes} included &middot; {overage}/min overage
        </p>
      </CardHeader>
      <CardContent>
        <Separator className="mb-4" />
        <ul className="space-y-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
        <Button
          className={`w-full mt-6 ${
            highlighted
              ? 'bg-orange-500 hover:bg-orange-600'
              : 'bg-gray-900 hover:bg-gray-800'
          }`}
          size="lg"
        >
          Start Free Trial
        </Button>
        <p className="text-xs text-center text-gray-400 mt-2">
          7-day free trial &middot; No credit card required
        </p>
      </CardContent>
    </Card>
  )
}

function ConversationDemo() {
  const messages = [
    {
      role: 'agent' as const,
      text: "Good morning, Thompson Roofing! This is your AI assistant. How can I help you today?",
    },
    {
      role: 'caller' as const,
      text: "Hi, I need a quote for a roof replacement. It's a two-story house in Etobicoke.",
    },
    {
      role: 'agent' as const,
      text: "I'd be happy to help with that. A two-story roof replacement in Etobicoke. What type of roofing material are you looking for?",
    },
    {
      role: 'caller' as const,
      text: 'Asphalt shingles, probably architectural ones.',
    },
    {
      role: 'agent' as const,
      text: "Great choice. What's your timeline for this project? And can I get your name and callback number so we can follow up with a detailed quote?",
    },
  ]

  return (
    <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 space-y-4 max-w-lg mx-auto">
      <div className="flex items-center gap-2 pb-2">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
          Live Demo Call
        </span>
      </div>
      {messages.map((msg, i) => (
        <div
          key={i}
          className={`flex ${msg.role === 'agent' ? 'justify-start' : 'justify-end'}`}
        >
          <div
            className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
              msg.role === 'agent'
                ? 'bg-white border border-gray-200 text-gray-800'
                : 'bg-orange-500 text-white'
            }`}
          >
            {msg.role === 'agent' && (
              <div className="flex items-center gap-1.5 mb-1">
                <Bot className="h-3 w-3 text-orange-500" />
                <span className="text-[10px] font-semibold text-orange-500 uppercase">
                  AI Agent
                </span>
              </div>
            )}
            {msg.text}
          </div>
        </div>
      ))}
      <div className="flex justify-start">
        <div className="bg-white border border-gray-200 rounded-2xl px-4 py-2.5">
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" />
            <div
              className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
              style={{ animationDelay: '0.15s' }}
            />
            <div
              className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
              style={{ animationDelay: '0.3s' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export function Landing() {
  const [email, setEmail] = useState('')

  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-orange-500 rounded-lg p-1.5">
              <Headphones className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-xl text-gray-900">
              BuilderBuddy
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#features" className="hover:text-gray-900 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="hover:text-gray-900 transition-colors">
              How It Works
            </a>
            <a href="#pricing" className="hover:text-gray-900 transition-colors">
              Pricing
            </a>
          </div>
          <Button
            size="sm"
            className="bg-orange-500 hover:bg-orange-600"
            onClick={() =>
              document
                .getElementById('waitlist')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Get Early Access
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-20 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge
                  variant="secondary"
                  className="bg-orange-50 text-orange-700 border-orange-200 font-medium"
                >
                  <Wrench className="h-3 w-3 mr-1" />
                  Built for Construction
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-gray-900 tracking-tight">
                  Never miss
                  <br />
                  a call again
                </h1>
                <p className="text-lg text-gray-500 max-w-md leading-relaxed">
                  AI phone agent that answers like a real office admin.
                  Collects quotes, books appointments, and notifies you
                  instantly &mdash; 24/7.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <StatItem
                  icon={PhoneOff}
                  value="35-80%"
                  label="calls missed"
                />
                <StatItem
                  icon={DollarSign}
                  value="$5K+"
                  label="avg job lost"
                />
                <StatItem
                  icon={Clock}
                  value="391%"
                  label="more conversions"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-base gap-2"
                  onClick={() =>
                    document
                      .getElementById('waitlist')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  Get Early Access
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base gap-2"
                  onClick={() =>
                    document
                      .getElementById('demo')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  See Demo
                </Button>
              </div>

              <p className="text-xs text-gray-400">
                10-minute setup &middot; No technical skills needed &middot;
                Cancel anytime
              </p>
            </div>

            {/* Demo conversation */}
            <div className="hidden lg:block">
              <ConversationDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Pain Point */}
      <section className="py-16 px-6 bg-gray-50 border-y border-gray-100">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Your crew is on the job site.
            <br />
            Your phone keeps ringing.
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            Every missed call is a potential $2K&ndash;$10K job walking to your
            competitor. Responding within 1 minute increases conversions by 391%.
            BuilderBuddy answers every call in under 2 seconds.
          </p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Everything a great receptionist does
            </h2>
            <p className="text-gray-500">
              But available 24/7 and fluent in construction
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={PhoneIncoming}
              title="Inbound Call Answering"
              description="Custom greeting with your business name. Natural conversation that understands construction terminology."
            />
            <FeatureCard
              icon={MessageSquare}
              title="Quote Collection"
              description="Collects job type, location, timeline, and budget. Sends you an SMS with lead details instantly."
            />
            <FeatureCard
              icon={CalendarCheck}
              title="Appointment Booking"
              description="Checks your Google Calendar, books site visits, and sends calendar invites to both parties."
            />
            <FeatureCard
              icon={ShieldCheck}
              title="Smart Escalation"
              description="Detects emergencies — leaks, no power, safety issues — and transfers directly to your cell."
            />
            <FeatureCard
              icon={Zap}
              title="Instant Notifications"
              description="Get an SMS the moment a new lead calls. Full details: job type, location, budget, contact info."
            />
            <FeatureCard
              icon={Phone}
              title="Call Transcripts"
              description="Full transcript of every call. Dashboard with call volume, peak hours, and conversion analytics."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Set up in 10 minutes
            </h2>
            <p className="text-gray-500">No technical skills required</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Tell us about your business',
                desc: 'Services, area, pricing ranges, business hours. We have templates for every trade.',
              },
              {
                step: '2',
                title: 'Get your phone number',
                desc: 'Pick a local number instantly or port your existing number. Ready in 30 seconds.',
              },
              {
                step: '3',
                title: 'Start catching leads',
                desc: "Every call answered, every lead captured. You get an SMS + dashboard with full details.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center space-y-3">
                <div className="bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mx-auto">
                  {item.step}
                </div>
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo section (mobile) */}
      <section id="demo" className="py-20 px-6 lg:hidden">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              See it in action
            </h2>
            <p className="text-gray-500">
              A real conversation with your AI agent
            </p>
          </div>
          <ConversationDemo />
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Simple, transparent pricing
            </h2>
            <p className="text-gray-500">
              One captured quote pays for months of service
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <PricingCard
              tier="Starter"
              price="$99"
              minutes="100 minutes"
              overage="$0.50"
              features={[
                '1 local phone number',
                '~25 calls/month included',
                'Quote collection & SMS alerts',
                'Google Calendar integration',
                'Call transcripts & dashboard',
                'Email support',
              ]}
            />
            <PricingCard
              tier="Professional"
              price="$299"
              minutes="300 minutes"
              overage="$0.40"
              highlighted
              features={[
                'Everything in Starter',
                '~75 calls/month included',
                '5 team member logins',
                'Custom branding on SMS/email',
                'Advanced analytics',
                'Priority support',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Trades */}
      <section className="py-16 px-6 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-2xl font-bold text-gray-900">
              Built for every trade
            </h2>
            <p className="text-gray-500">
              Pre-configured knowledge for your industry
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              'Electrician',
              'Plumber',
              'HVAC',
              'Roofer',
              'Framer',
              'Carpenter',
              'Painter',
              'Landscaper',
              'Concrete',
              'Mason',
              'Drywall',
              'Flooring',
              'General Contractor',
              'Insulation',
              'Demolition',
            ].map((trade) => (
              <Badge
                key={trade}
                variant="secondary"
                className="text-sm px-3 py-1 bg-white border border-gray-200 text-gray-700 font-normal"
              >
                {trade}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist CTA */}
      <section id="waitlist" className="py-24 px-6">
        <div className="max-w-lg mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Stop losing jobs to missed calls
          </h2>
          <p className="text-gray-500">
            Join the waitlist for early access. Be the first to try
            BuilderBuddy when we launch.
          </p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 px-6"
            >
              Join Waitlist
            </Button>
          </div>
          <p className="text-xs text-gray-400">
            Free to join &middot; No spam &middot; Launch updates only
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="bg-orange-500 rounded-lg p-1">
              <Headphones className="h-4 w-4 text-white" />
            </div>
            <span className="font-semibold text-gray-900">BuilderBuddy</span>
          </div>
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} BuilderBuddy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
