'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  QrCode,
  Award,
  Users,
  Monitor,
  BookOpen,
  Smartphone,
  Shield,
  Database,
  BarChart,
  Bell,
  Globe,
  Zap,
  Lock,
  Cloud,
  ArrowRight,
  FileCheck,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { FadeIn, StaggerContainer, staggerItem } from '@/components/animations';

const features = [
  {
    icon: QrCode,
    title: 'Live Certificate Verification',
    description: 'Instantly verify any certificate with QR code scanning. Secure, tamper-proof verification system trusted by employers and institutions.',
    highlight: 'QR-Based',
  },
  {
    icon: FileCheck,
    title: 'Live Marksheet Verification',
    description: 'Verify marksheets in real-time. Students can share verified results with employers instantly.',
    highlight: 'Real-time',
  },
  {
    icon: Monitor,
    title: 'Student Dashboard',
    description: 'Personalized dashboard for students to track courses, attendance, fees, and results. Mobile-friendly design.',
    highlight: 'Personalized',
  },
  {
    icon: Users,
    title: 'Admin Dashboard',
    description: 'Comprehensive admin panel with complete institute overview. Manage everything from a single dashboard.',
    highlight: 'Centralized',
  },
  {
    icon: BookOpen,
    title: 'Teacher Dashboard',
    description: 'Teachers get their own workspace to manage classes, assignments, and track student performance.',
    highlight: 'Dedicated',
  },
  {
    icon: Smartphone,
    title: 'Responsive Mobile Access',
    description: 'Access all features on any device. Fully responsive design for mobile, tablet, and desktop.',
    highlight: 'Any Device',
  },
  {
    icon: Shield,
    title: 'Secure Login System',
    description: 'Multi-factor authentication and role-based access control. Bank-grade security for your data.',
    highlight: 'MFA Enabled',
  },
  {
    icon: Cloud,
    title: 'Cloud Data Storage',
    description: 'All data stored securely on cloud servers. Automatic backups and 99.9% uptime guarantee.',
    highlight: '99.9% Uptime',
  },
  {
    icon: BarChart,
    title: 'Analytics & Reports',
    description: 'Comprehensive analytics with visual reports. Track institute performance, student progress, and more.',
    highlight: 'Visual Reports',
  },
  {
    icon: QrCode,
    title: 'QR Code Certificate',
    description: 'Every certificate comes with unique QR code for instant verification. Prevents fraud and builds trust.',
    highlight: 'Anti-fraud',
  },
  {
    icon: Bell,
    title: 'Real-time Notifications',
    description: 'Instant alerts for fees, attendance, results, and announcements via SMS and email.',
    highlight: 'Instant Alerts',
  },
  {
    icon: Globe,
    title: 'Multi-branch Support',
    description: 'Connect multiple branches centrally. Unified dashboard for managing all locations.',
    highlight: 'Centralized',
  },
  {
    icon: Lock,
    title: 'Role-based Access',
    description: 'Granular permissions for admins, teachers, students, and staff. Control who sees what.',
    highlight: 'Secure Access',
  },
  {
    icon: Database,
    title: 'Data Backup',
    description: 'Automatic daily backups with easy restore options. Never lose important data.',
    highlight: 'Daily Backups',
  },
  {
    icon: Zap,
    title: 'Fast Performance',
    description: 'Optimized for speed with modern infrastructure. Load pages instantly, even with large datasets.',
    highlight: 'Blazing Fast',
  },
  {
    icon: Award,
    title: 'Custom Certificates',
    description: 'Design certificates with your institute branding. Multiple templates and customization options.',
    highlight: 'Branded',
  },
];

export default function FeaturesPage() {
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
              Advanced Features
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Powerful Features for <span className="gradient-text">Modern Institutes</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our comprehensive feature set designed specifically for coaching institutes
              and educational academies.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div key={feature.title} variants={staggerItem}>
                <Card className="h-full glass-card hover:shadow-xl transition-all duration-300 group overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-startjustify-between mb-4">
                      <div className="h-12 w-12 rounded-xl gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                        {feature.highlight}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Feature Highlight Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-900/50 dark:to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <span className="text-primary font-semibold text-sm uppercase tracking-wide">Highlight Feature</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                  QR Code Certificate Verification
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our industry-leading certificate verification system uses unique QR codes to
                  ensure authenticity. Employers and institutions can verify certificates instantly,
                  preventing fraud and building trust.
                </p>
                <div className="space-y-4">
                  {[
                    'Unique QR code for every certificate',
                    'Instant verification from any device',
                    'Tamper-proof digital signatures',
                    'Lifetime verification availability',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <QrCode className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <div className="relative">
                <div className="absolute inset-0 gradient-primary rounded-3xl transform rotate-3 opacity-20" />
                <div className="relative glass-card rounded-3xl p-8">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl">
                    <div className="flex items-center justify-center mb-4">
                      <div className="h-32 w-32 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                        <QrCode className="h-20 w-20 text-gray-400" />
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-lg">Certificate ID: SCTI-2024-001234</p>
                      <p className="text-sm text-muted-foreground">Scan to verify</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience All Features</h2>
            <p className="text-xl text-blue-100 mb-8">
              Schedule a demo to see our features in action
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 rounded-full px-8 group">
                Schedule Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}
