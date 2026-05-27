'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Users,
  BookOpen,
  Award,
  Clock,
  CreditCard,
  MonitorPlay,
  BarChart,
  Globe,
  Bell,
  UserCheck,
  FileCheck,
  Building,
  Palette,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { FadeIn, StaggerContainer, staggerItem } from '@/components/animations';

const services = [
  {
    icon: Users,
    title: 'Student Management System',
    description: 'Complete student lifecycle management from admission to certification. Track progress, manage records, and communicate effectively with students and parents.',
    features: ['Admission Management', 'Student Profiles', 'Progress Tracking', 'Parent Communication'],
  },
  {
    icon: BookOpen,
    title: 'Course Management System',
    description: 'Design courses, manage curriculum, and organize batches efficiently. Create flexible learning paths with our intuitive course builder.',
    features: ['Course Design', 'Curriculum Planning', 'Batch Management', 'Resource Library'],
  },
  {
    icon: MonitorPlay,
    title: 'Online Exam Portal',
    description: 'Conduct secure online examinations with automated evaluation. Randomized questions, time limits, and instant results.',
    features: ['Question Bank', 'Automated Grading', 'Anti-cheating Features', 'Instant Results'],
  },
  {
    icon: Award,
    title: 'Certificate Management Portal',
    description: 'Generate professional certificates with QR code verification. Secure, authentic, and internationally recognized format.',
    features: ['QR Code Integration', 'Template Designer', 'Bulk Generation', 'Verification Portal'],
  },
  {
    icon: FileCheck,
    title: 'Marksheet Verification Portal',
    description: 'Issue verified marksheets with tamper-proof security. Students and employers can verify authenticity instantly.',
    features: ['Digital Marksheets', 'Verification System', 'Secure Storage', 'Print Ready'],
  },
  {
    icon: UserCheck,
    title: 'Attendance Management',
    description: 'Track attendance with biometric integration and manual entry options. Generate detailed reports and send absence alerts.',
    features: ['Biometric Support', 'Manual Entry', 'Absent Alerts', 'Detailed Reports'],
  },
  {
    icon: CreditCard,
    title: 'Fee Management System',
    description: 'Complete fee collection and tracking system. Generate receipts, send reminders, and manage pending payments.',
    features: ['Fee Collection', 'Receipt Generation', 'Payment Reminders', 'Pending Tracking'],
  },
  {
    icon: Users,
    title: 'Faculty Management',
    description: 'Manage faculty profiles, schedules, and performance. Track teaching hours and assign course responsibilities.',
    features: ['Faculty Profiles', 'Schedule Management', 'Performance Reviews', 'Workload Tracking'],
  },
  {
    icon: Clock,
    title: 'Batch Management',
    description: 'Organize students into batches based on courses, timing, or preferences. Easy scheduling and resource allocation.',
    features: ['Batch Creation', 'Student Allocation', 'Schedule Management', 'Resource Planning'],
  },
  {
    icon: BarChart,
    title: 'Result Management',
    description: 'Comprehensive result analysis and reporting. Generate grade cards, analyze performance, and track improvements.',
    features: ['Result Calculation', 'Grade Generation', 'Performance Analysis', 'Report Cards'],
  },
  {
    icon: MonitorPlay,
    title: 'Online Learning Dashboard',
    description: 'Provide students with a personal learning dashboard. Access courses, track progress, and view results.',
    features: ['Personal Dashboard', 'Course Access', 'Progress Tracking', 'Resource Download'],
  },
  {
    icon: Globe,
    title: 'Franchise Management System',
    description: 'Manage multiple branches from a single dashboard. Track performance, manage resources, and ensure consistency.',
    features: ['Multi-branch Control', 'Centralized Database', 'Performance Tracking', 'Resource Sharing'],
  },
  {
    icon: Palette,
    title: 'Institute Branding Support',
    description: 'Customize the platform with your institute branding. Logo, colors, and custom domain support.',
    features: ['Custom Logo', 'Theme Colors', 'Custom Domain', 'Branded Certificates'],
  },
  {
    icon: Bell,
    title: 'SMS & Email Notifications',
    description: 'Automated notifications for important events. Fee reminders, attendance alerts, and result announcements.',
    features: ['Fee Reminders', 'Attendance Alerts', 'Result Notifications', 'Custom Messages'],
  },
  {
    icon: Building,
    title: 'Multi-branch Management',
    description: 'Connect and manage all your branches seamlessly. Centralized control with local flexibility.',
    features: ['Branch Dashboard', 'Central Control', 'Local Flexibility', 'Consolidated Reports'],
  },
];

export default function ServicesPage() {
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
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Complete Solutions for <span className="gradient-text">Institute Success</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              From admission to certification, we provide comprehensive services that streamline
              every aspect of your coaching institute operations.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div key={service.title} variants={staggerItem}>
                <Card className="h-full glass-card hover:shadow-2xl transition-all duration-300 hover-lift group">
                  <CardContent className="p-8">
                    <div className="h-16 w-16 rounded-2xl gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {feature}
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

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let us help you choose the right services for your institute
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 rounded-full px-8 group">
                Request a Demo
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
