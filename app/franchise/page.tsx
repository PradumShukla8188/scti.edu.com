'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Building,
  Users,
  DollarSign,
  HeadphonesIcon,
  BookOpen,
  Award,
  CheckCircle,
  HelpCircle,
  Phone,
  Mail,
  MapPin,
  Rocket,
  Shield,
  TrendingUp,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { FadeIn, StaggerContainer, staggerItem } from '@/components/animations';

const benefits = [
  {
    icon: Building,
    title: 'Established Brand',
    desc: 'Associate with a trusted name in education technology',
  },
  {
    icon: Rocket,
    title: 'Quick Start',
    desc: 'Ready-to-use platform with minimal setup time',
  },
  {
    icon: HeadphonesIcon,
    title: 'Full Support',
    desc: 'Training, marketing materials, and ongoing assistance',
  },
  {
    icon: TrendingUp,
    title: 'High ROI',
    desc: 'Proven business model with excellent returns',
  },
];

const eligibility = [
  'Passion for education and technology',
  'Minimum 200 sq. ft. space',
  'Basic computer knowledge',
  'Investment capacity of ₹50,000 - ₹2,00,000',
  'Dedication to quality service',
  'Good local network',
];

const investments = [
  { level: 'Basic', amount: '₹50,000 - ₹75,000', features: ['Single Location', 'Basic Features', 'Email Support'] },
  { level: 'Standard', amount: '₹75,000 - ₹1,50,000', features: ['Multiple Locations', 'All Features', 'Phone Support'] },
  { level: 'Premium', amount: '₹1,50,000 - ₹2,00,000', features: ['District Level', 'Custom Features', 'Priority Support', 'Marketing Assistance'] },
];

const support = [
  { icon: BookOpen, title: 'Training', desc: 'Complete technical and business training' },
  { icon: Shield, title: 'Technology', desc: 'Fully hosted and maintained platform' },
  { icon: Award, title: 'Marketing', desc: 'Branding and promotional materials' },
  { icon: HeadphonesIcon, title: 'Support', desc: '24/7 technical assistance' },
];

const faqs = [
  {
    q: 'What is the minimum investment required?',
    a: 'The minimum investment starts from ₹50,000 for a basic franchise. Detailed investment options are available based on territory and features.',
  },
  {
    q: 'How much technical knowledge do I need?',
    a: 'Basic computer knowledge is sufficient. We provide comprehensive training on using the platform and managing operations.',
  },
  {
    q: 'What support do you provide?',
    a: 'We provide complete training, marketing materials, technical support, and ongoing guidance. Our team assists you every step of the way.',
  },
  {
    q: 'How long does it take to start?',
    a: 'Once the agreement is signed, you can start within 7-15 days. Setup time varies based on customization requirements.',
  },
  {
    q: 'Can I run this alongside my existing institute?',
    a: 'Yes, our software can be integrated with existing institutes. Many franchise partners use it to manage their own institutions while offering services to others.',
  },
  {
    q: 'What is the revenue model?',
    a: 'You earn by offering institute management services to coaching centers in your area. Revenue share models are transparent and discussed during the consultation.',
  },
];

export default function FranchisePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-5" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
              Partner With Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Become a <span className="gradient-text">SCTI Franchise</span> Partner
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Join our growing network of education technology partners. Start your own
              institute management business with our proven platform.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wide">Franchise Benefits</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Why Partner With Us?</h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <motion.div key={benefit.title} variants={staggerItem}>
                <Card className="h-full glass-card text-center hover:shadow-xl transition-shadow">
                  <CardContent className="pt-8 pb-6">
                    <div className="h-14 w-14 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Eligibility */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-900/50 dark:to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <span className="text-primary font-semibold text-sm uppercase tracking-wide">Requirements</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Eligibility Criteria</h2>
                <p className="text-muted-foreground mb-6">
                  We look for passionate individuals who want to make a difference in education.
                  Here are the basic requirements to become a franchise partner.
                </p>
                <div className="space-y-3">
                  {eligibility.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <div className="glass-card rounded-3xl p-8">
                <img
                  src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Franchise partnership"
                  className="rounded-2xl w-full"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Investment Plans */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wide">Investment</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Choose Your Plan</h2>
            <p className="text-muted-foreground">
              Flexible investment options to suit your budget and business goals
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {investments.map((plan, index) => (
              <motion.div key={plan.level} variants={staggerItem}>
                <Card className={`h-full ${index === 1 ? 'border-primary shadow-xl' : ''} hover:shadow-xl transition-shadow`}>
                  <CardContent className="pt-8">
                    {index === 1 && (
                      <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
                        Most Popular
                      </span>
                    )}
                    <h3 className="text-2xl font-bold mb-2">{plan.level}</h3>
                    <p className="text-3xl font-bold gradient-text mb-6">{plan.amount}</p>
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Support Provided */}
      <section className="section-padding bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Support We Provide</h2>
            <p className="text-blue-100">
              We are invested in your success. Here is what you get when you partner with us
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {support.map((item) => (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm"
              >
                <div className="h-14 w-14 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-blue-100 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Registration Form */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <FadeIn className="text-center mb-12">
              <span className="text-primary font-semibold text-sm uppercase tracking-wide">Register Now</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Franchise Inquiry Form</h2>
              <p className="text-muted-foreground">
                Fill out the form below and our team will contact you within 24 hours
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card className="glass-card">
                <CardContent className="pt-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="Enter your full name"
                          className="w-full px-4 py-3 rounded-xl border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email Address *</label>
                        <input
                          type="email"
                          required
                          placeholder="Enter your email"
                          className="w-full px-4 py-3 rounded-xl border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder="Enter your phone number"
                          className="w-full px-4 py-3 rounded-xl border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">City *</label>
                        <input
                          type="text"
                          required
                          placeholder="Enter your city"
                          className="w-full px-4 py-3 rounded-xl border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Investment Range</label>
                      <select className="w-full px-4 py-3 rounded-xl border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all">
                        <option value="">Select investment range</option>
                        <option value="basic">₹50,000 - ₹75,000</option>
                        <option value="standard">₹75,000 - ₹1,50,000</option>
                        <option value="premium">₹1,50,000 - ₹2,00,000</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Your Background</label>
                      <textarea
                        rows={3}
                        placeholder="Tell us about your educational background and business experience"
                        className="w-full px-4 py-3 rounded-xl border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                      />
                    </div>
                    <Button type="submit" className="w-full gradient-primary text-white rounded-full" size="lg">
                      Submit Inquiry
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-900/50 dark:to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wide">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Frequently Asked Questions</h2>
          </FadeIn>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <FadeIn key={index} delay={index * 0.05}>
                <div className="mb-4">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-4 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow text-left"
                  >
                    <span className="font-semibold flex items-center gap-3">
                      <HelpCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      {faq.q}
                    </span>
                    <motion.div
                      animate={{ rotate: openFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <HelpCircle className="h-5 w-5 text-muted-foreground" />
                    </motion.div>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openFaq === index ? 'auto' : 0,
                      opacity: openFaq === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 pl-12 text-muted-foreground">{faq.a}</div>
                  </motion.div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center mt-8">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:8189858785" className="flex items-center gap-2 text-primary font-medium hover:underline">
                <Phone className="h-5 w-5" />
                8189858785
              </a>
              <a href="mailto:scti@gmail.com" className="flex items-center gap-2 text-primary font-medium hover:underline">
                <Mail className="h-5 w-5" />
                scti@gmail.com
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}
