'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import {
  Users,
  BookOpen,
  Award,
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Globe,
  Shield,
  Zap,
  BarChart,
  FileCheck,
  Bell,
  Smartphone,
  MonitorPlay,
  UserCheck,
  Database,
  QrCode,
  ChevronRight,
  Phone,
  Mail,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { FadeIn, StaggerContainer, staggerItem, ScaleOnHover } from '@/components/animations';

const stats = [
  { number: 500, suffix: '+', label: 'Institutes Connected' },
  { number: 100, suffix: 'K+', label: 'Students Managed' },
  { number: 50, suffix: '+', label: 'Cities Covered' },
  { number: 99, suffix: '%', label: 'Client Satisfaction' },
];

const features = [
  {
    icon: Users,
    title: 'Student Management',
    description: 'Complete student lifecycle management from enrollment to certification.',
  },
  {
    icon: BookOpen,
    title: 'Course Management',
    description: 'Flexible course creation and curriculum management tools.',
  },
  {
    icon: Award,
    title: 'Certification System',
    description: 'Generate and verify certificates with QR code integration.',
  },
  {
    icon: Clock,
    title: 'Attendance Tracking',
    description: 'Real-time attendance monitoring and reporting system.',
  },
  {
    icon: FileCheck,
    title: 'Exam Portal',
    description: 'Conduct online exams with automated evaluation.',
  },
  {
    icon: BarChart,
    title: 'Analytics Dashboard',
    description: 'Comprehensive insights and performance reports.',
  },
];

const services = [
  {
    title: 'Student Management',
    description: 'Complete student database with enrollment, progress tracking, and communication tools.',
    icon: Users,
  },
  {
    title: 'Course Management',
    description: 'Design and manage courses, batches, and curriculum effortlessly.',
    icon: BookOpen,
  },
  {
    title: 'Online Exams',
    description: 'Create and conduct online tests with instant results and analytics.',
    icon: MonitorPlay,
  },
  {
    title: 'Certificate Portal',
    description: 'Generate authentic certificates with digital verification.',
    icon: Award,
  },
  {
    title: 'Fee Management',
    description: 'Track fees, generate receipts, and send payment reminders.',
    icon: TrendingUp,
  },
  {
    title: 'Attendance System',
    description: 'Biometric and manual attendance with detailed reports.',
    icon: UserCheck,
  },
];

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Director, Tech Academy',
    content: 'SCTI transformed our institute management. The software is intuitive and our staff productivity increased by 40%.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Principal, English Institute',
    content: 'The certificate verification system gave our students credibility. Parents trust our certifications now.',
    rating: 5,
  },
  {
    name: 'Amit Patel',
    role: 'Owner, Computer Center',
    content: 'From enrollment to exams, everything is seamless. The support team is exceptional.',
    rating: 5,
  },
];

const softwareFeatures = [
  { icon: Smartphone, label: 'Mobile Responsive' },
  { icon: Shield, label: 'Secure Database' },
  { icon: Database, label: 'Cloud Storage' },
  { icon: Bell, label: 'Notifications' },
  { icon: QrCode, label: 'QR Verification' },
  { icon: Globe, label: 'Multi-branch' },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = target / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text">
      {count}{suffix}
    </span>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 gradient-primary opacity-5" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-block"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
                <span className="text-sm">✨</span>
                <motion.span
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  className="font-bold text-sm bg-[linear-gradient(90deg,#2563eb,#06b6d4,#14b8a6,#2563eb)] bg-[length:200%_100%] bg-clip-text text-transparent"
                >
                  Trusted by 500+ Institutes across India
                </motion.span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6"
            >
              Empowering Education with
              <span className="block gradient-text">Smart Solutions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
            >
              Complete coaching management software for computer institutes, English coaching,
              training centers, and educational academies. Streamline operations, enhance learning, and grow your institute.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/contact">
                <Button size="lg" className="gradient-primary text-white rounded-full px-8 group">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="rounded-full px-8">
                  Explore Services
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 flex flex-wrap justify-center gap-8"
            >
              {softwareFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-muted-foreground">
                  <feature.icon className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">{feature.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-start justify-center p-1"
          >
            <motion.div className="w-1.5 h-1.5 bg-primary rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Company Introduction */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <span className="text-primary font-semibold text-sm uppercase tracking-wide">About SCTI</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                  Your Trusted Partner in Institute Management
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  SCTI Pvt. Ltd. is a leading provider of comprehensive coaching management software
                  solutions. We specialize in empowering educational institutes, training centers,
                  and academies with cutting-edge technology to streamline operations and enhance
                  learning outcomes.
                </p>
                <div className="space-y-4">
                  {['Complete automation of institute operations', 'Real-time data and analytics', 'Secure and compliant systems', '24/7 dedicated support'].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <div className="relative">
                <div className="absolute inset-0 gradient-primary rounded-3xl transform rotate-6 opacity-20" />
                <div className="relative glass-card rounded-3xl p-8 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Team collaboration"
                    className="rounded-2xl w-full object-cover"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-900/50 dark:to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wide">Core Features</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Everything You Need to Run Your Institute
            </h2>
            <p className="text-muted-foreground">
              Our comprehensive suite of features covers every aspect of institute management,
              from enrollment to certification.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <motion.div key={feature.title} variants={staggerItem}>
                <ScaleOnHover>
                  <Card className="h-full glass-card hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="h-12 w-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                </ScaleOnHover>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Services Cards */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wide">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Comprehensive Solutions for Every Need
            </h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <motion.div key={service.title} variants={staggerItem}>
                <Card className="h-full hover:border-primary/50 transition-all duration-300 hover-lift">
                  <CardContent className="pt-6">
                    <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 flex items-center justify-center mb-4">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </StaggerContainer>

          <FadeIn className="text-center mt-10">
            <Link href="/services">
              <Button size="lg" variant="outline" className="rounded-full group">
                View All Services
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose SCTI?</h2>
            <p className="text-blue-100">
              We are committed to delivering excellence through innovation and dedicated support.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: 'Fast Implementation', desc: 'Get started within days, not months' },
              { icon: Shield, title: 'Bank-grade Security', desc: 'Your data is always protected' },
              { icon: Star, title: 'Expert Support', desc: '24/7 dedicated assistance' },
              { icon: TrendingUp, title: 'Regular Updates', desc: 'New features added monthly' },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20"
              >
                <item.icon className="h-10 w-10 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-blue-100 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Statistics Counter */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <FadeIn key={stat.label} delay={index * 0.1}>
                <div className="text-center">
                  <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                  <p className="text-muted-foreground mt-2">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Software Screenshots */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-900/50 dark:to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wide">Platform Preview</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Beautiful, Intuitive Interface</h2>
            <p className="text-muted-foreground">
              Designed with modern UI/UX principles for effortless navigation and maximum productivity.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Admin Dashboard', img: 'https://images.pexels.com/photos/20108244/pexels-photo-20108244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
              { title: 'Student Portal', img: 'https://images.pexels.com/photos/200416423/pexels-photo-200416423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
              { title: 'Exam Module', img: 'https://images.pexels.com/photos/3912014/pexels-photo-3912014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
            ].map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.1}>
                <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="aspect-[16/10] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Institute Management Features */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <span className="text-primary font-semibold text-sm uppercase tracking-wide">For Institutes</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                  Complete Institute Management Suite
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Manage every aspect of your coaching institute with our comprehensive platform.
                  From student enrollment to certificate generation, we have got you covered.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'Multi Branch Support',
                    'Role-based Access',
                    'Fee Tracking',
                    'Attendance Reports',
                    'Batch Management',
                    'Result Analysis',
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <div className="glass-card rounded-3xl p-8">
                <img
                  src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Institute dashboard"
                  className="rounded-2xl w-full"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-900/50 dark:to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wide">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">What Our Clients Say</h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <motion.div key={testimonial.name} variants={staggerItem}>
                <Card className="h-full glass-card">
                  <CardContent className="pt-6">
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">&quot;{testimonial.content}&quot;</p>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full gradient-primary flex items-center justify-center text-white font-semibold">
                        {testimonial.name[0]}
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-500 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Ready to Transform Your Institute?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join 500+ institutes already using SCTI to streamline their operations and grow their business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 rounded-full px-8 group">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/franchise">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-full px-8">
                  Become a Franchise
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <FadeIn>
              <div>
                <span className="text-primary font-semibold text-sm uppercase tracking-wide">Contact Us</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Get In Touch</h2>
                <p className="text-muted-foreground mb-6">
                  Have questions? Our team is here to help you find the perfect solution for your institute.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <a href="tel:8189858785" className="text-lg font-semibold hover:text-primary transition-colors">
                        8189858785
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a href="mailto:scti@gmail.com" className="text-lg font-semibold hover:text-primary transition-colors">
                        scti@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <Card className="glass-card">
                <CardContent className="pt-6">
                  <form className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-3 rounded-xl border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full px-4 py-3 rounded-xl border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-full px-4 py-3 rounded-xl border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    />
                    <textarea
                      rows={4}
                      placeholder="Your Message"
                      className="w-full px-4 py-3 rounded-xl border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                    />
                    <Button className="w-full gradient-primary text-white rounded-full" size="lg">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
