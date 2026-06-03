'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Building,
  User,
  MessageSquare,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { FadeIn } from '@/components/animations';
import { submitContactQuery } from '@/services/contact.service';
import { toast } from 'sonner';

const contactInfo = [
  {
    icon: Building,
    title: 'Company Name',
    value: 'SCTI Pvt. Ltd.',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'scti@gmail.com',
    href: 'mailto:scti@gmail.com',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '8189858785',
    href: 'tel:8189858785',
  },
  {
    icon: Clock,
    title: 'Support Hours',
    value: '24/7 Available',
  },
];

const offices = [
  {
    city: 'Head Office',
    address: 'SCTI Pvt. Ltd., Main Office, India',
    phone: '8189858785',
    email: 'scti@gmail.com',
  },
];

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number required"),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(contactSchema),
    mode: 'onTouched',
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    }
  });

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    try {
      const response = await submitContactQuery(data);
      if (response.success) {
        toast.success(response.message || 'Your query successfully recorded. We will contact you as soon as possible.');
        reset();
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('Failed to submit query. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Let us Start a <span className="gradient-text">Conversation</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions about our services? Want to schedule a demo? We are here to help
              you find the perfect solution for your institute.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900/50 dark:to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <FadeIn key={info.title} delay={index * 0.1}>
                <Card className="glass-card text-center hover:shadow-xl transition-shadow">
                  <CardContent className="pt-6">
                    <div className="h-14 w-14 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4">
                      <info.icon className="h-7 w-7 text-white" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">{info.title}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="font-semibold hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="font-semibold">{info.value}</p>
                    )}
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <FadeIn>
              <div>
                <span className="text-primary font-semibold text-sm uppercase tracking-wide">Get In Touch</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Send Us a Message</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>

                <Card className="glass-card">
                  <CardContent className="pt-6">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            <User className="h-4 w-4 inline-block mr-1" />
                            Full Name *
                          </label>
                          <input
                            type="text"
                            {...register('name')}
                            placeholder="Enter your name"
                            className={`w-full px-4 py-3 rounded-xl border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all ${errors.name ? 'border-red-500' : ''}`}
                          />
                          {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message as string}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            <Mail className="h-4 w-4 inline-block mr-1" />
                            Email Address *
                          </label>
                          <input
                            type="email"
                            {...register('email')}
                            placeholder="Enter your email"
                            className={`w-full px-4 py-3 rounded-xl border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all ${errors.email ? 'border-red-500' : ''}`}
                          />
                          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message as string}</p>}
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            <Phone className="h-4 w-4 inline-block mr-1" />
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            {...register('phone')}
                            placeholder="Enter your phone"
                            className={`w-full px-4 py-3 rounded-xl border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all ${errors.phone ? 'border-red-500' : ''}`}
                          />
                          {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message as string}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            <MessageSquare className="h-4 w-4 inline-block mr-1" />
                            Subject *
                          </label>
                          <input
                            type="text"
                            {...register('subject')}
                            placeholder="How can we help?"
                            className={`w-full px-4 py-3 rounded-xl border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all ${errors.subject ? 'border-red-500' : ''}`}
                          />
                          {errors.subject && <p className="text-xs text-red-500 mt-1">{errors.subject.message as string}</p>}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Message *</label>
                        <textarea
                          rows={5}
                          {...register('message')}
                          placeholder="Tell us about your requirements..."
                          className={`w-full px-4 py-3 rounded-xl border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none ${errors.message ? 'border-red-500' : ''}`}
                        />
                        {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message as string}</p>}
                      </div>
                      <Button type="submit" disabled={isSubmitting} className="w-full gradient-primary text-white rounded-full" size="lg">
                        <Send className="h-4 w-4 mr-2" />
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </FadeIn>

            {/* Map & Office Info */}
            <FadeIn direction="left" delay={0.2}>
              <div>
                <span className="text-primary font-semibold text-sm uppercase tracking-wide">Our Location</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Find Us Here</h2>
                <p className="text-muted-foreground mb-8">
                  Visit our office or reach out through any of the channels below.
                </p>

                {/* Map Placeholder */}
                <div className="rounded-2xl overflow-hidden shadow-xl mb-8">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                      <p className="font-semibold">SCTI Pvt. Ltd.</p>
                      <p className="text-sm text-muted-foreground">India</p>
                      <a
                        href="https://maps.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block text-primary hover:underline text-sm"
                      >
                        View on Google Maps
                      </a>
                    </div>
                  </div>
                </div>

                {/* Office Information */}
                <div className="space-y-4">
                  {offices.map((office) => (
                    <Card key={office.city} className="glass-card">
                      <CardContent className="pt-6">
                        <h3 className="font-semibold text-lg mb-3">{office.city}</h3>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-start gap-3">
                            <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{office.address}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                            <a href={`tel:${office.phone}`} className="hover:text-primary transition-colors">
                              {office.phone}
                            </a>
                          </div>
                          <div className="flex items-center gap-3">
                            <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                            <a href={`mailto:${office.email}`} className="hover:text-primary transition-colors">
                              {office.email}
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ Hint */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900/50 dark:to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Have More Questions?</h2>
            <p className="text-muted-foreground mb-6">
              Check out our franchise page for frequently asked questions or reach out directly.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="outline" className="rounded-full" asChild>
                <a href="/franchise">View Franchise FAQ</a>
              </Button>
              <a
                href="tel:8189858785"
                className="flex items-center gap-2 text-primary font-medium hover:underline"
              >
                <Phone className="h-5 w-5" />
                Call: 8189858785
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}
