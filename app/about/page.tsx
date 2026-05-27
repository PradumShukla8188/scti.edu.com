'use client';

import { motion } from 'framer-motion';
import {
  Target,
  Eye,
  Heart,
  Trophy,
  Users,
  Star,
  Calendar,
  Rocket,
  Award,
  CheckCircle,
  Building,
  Globe,
} from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { FadeIn, StaggerContainer, staggerItem } from '@/components/animations';

const timeline = [
  { year: '2015', title: 'Foundation', desc: 'SCTI Pvt. Ltd. was founded with a vision to revolutionize institute management' },
  { year: '2017', title: 'First 100 Institutes', desc: 'Reached milestone of serving 100+ coaching institutes' },
  { year: '2019', title: 'Certificate System', desc: 'Launched QR-based certificate verification system' },
  { year: '2021', title: 'Cloud Migration', desc: 'Migrated entire platform to cloud infrastructure' },
  { year: '2023', title: '500+ Institutes', desc: 'Growing rapidly with 500+ institutes across India' },
  { year: '2025', title: 'AI Integration', desc: 'Integrated AI-powered analytics and recommendations' },
];

const values = [
  { icon: Heart, title: 'Integrity', desc: 'We build trust through transparency and honesty in all our dealings' },
  { icon: Star, title: 'Excellence', desc: 'We strive for the highest quality in every feature and service' },
  { icon: Users, title: 'Customer First', desc: 'Your success is our priority. We listen, adapt, and deliver' },
  { icon: Rocket, title: 'Innovation', desc: 'We continuously evolve our technology to stay ahead' },
];

const achievements = [
  { number: '500+', label: 'Happy Institutes' },
  { number: '100K+', label: 'Students Managed' },
  { number: '50+', label: 'Cities Covered' },
  { number: '99%', label: 'Uptime' },
];

export default function AboutPage() {
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
              About SCTI Pvt. Ltd.
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Empowering Education Since <span className="gradient-text">2015</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              We are dedicated to transforming how coaching institutes operate, making management
              seamless, efficient, and growth-oriented through cutting-edge technology solutions.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="relative">
                <div className="absolute inset-0 gradient-primary rounded-3xl transform -rotate-3 opacity-20" />
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Our team"
                  className="relative rounded-3xl shadow-xl"
                />
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div>
                <span className="text-primary font-semibold text-sm uppercase tracking-wide">Who We Are</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                  Leading Provider of Education Management Solutions
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  SCTI Pvt. Ltd. started with a simple mission: to help coaching institutes focus on
                  what they do best - teaching. We handle the complexities of institute management
                  so educators can focus on shaping futures.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Over the years, we have grown from a small startup to a trusted partner for
                  hundreds of institutes across India. Our comprehensive suite of tools covers
                  everything from student enrollment to certificate verification, making us a
                  one-stop solution for all institute management needs.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'Student Management',
                    'Course Tracking',
                    'Fee Management',
                    'Certificate System',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-900/50 dark:to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn>
              <div className="glass-card rounded-3xl p-8 h-full">
                <div className="h-14 w-14 rounded-2xl gradient-primary flex items-center justify-center mb-6">
                  <Target className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower educational institutes with smart, reliable, and affordable
                  management solutions that streamline operations, enhance learning outcomes,
                  and drive growth. We believe every institute deserves access to world-class
                  technology, regardless of size or location.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="glass-card rounded-3xl p-8 h-full">
                <div className="h-14 w-14 rounded-2xl gradient-secondary flex items-center justify-center mb-6">
                  <Eye className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become the most trusted education technology partner in India, serving
                  thousands of institutes and millions of students. We envision a future where
                  every educational institution operates efficiently, teachers are empowered,
                  and students receive quality education without administrative barriers.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Our Goals */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wide">Our Goals</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">What Drives Us Forward</h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Building,
                title: 'Expand Reach',
                desc: 'Take our solutions to every district in India, making quality education management accessible to all',
              },
              {
                icon: Globe,
                title: 'Global Standards',
                desc: 'Build software that meets international standards while being affordable for local institutes',
              },
              {
                icon: Trophy,
                title: 'Industry Leader',
                desc: 'Set industry benchmarks for innovation, support, and customer satisfaction in ed-tech',
              },
              {
                icon: Award,
                title: 'Quality Certifications',
                desc: 'Help institutes issue universally recognized and verifiable certificates',
              },
              {
                icon: Users,
                title: 'Community Building',
                desc: 'Create a network of institutes that share best practices and grow together',
              },
              {
                icon: Rocket,
                title: 'Continuous Innovation',
                desc: 'Keep adding advanced features like AI analytics, predictive insights, and automation',
              },
            ].map((goal) => (
              <motion.div key={goal.title} variants={staggerItem}>
                <div className="glass-card rounded-2xl p-6 h-full hover:shadow-xl transition-shadow">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <goal.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{goal.title}</h3>
                  <p className="text-muted-foreground text-sm">{goal.desc}</p>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Institutes Trust Us */}
      <section className="section-padding bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Institutes Trust Us</h2>
            <p className="text-blue-100">
              Our commitment to excellence has earned us the trust of educators across the nation
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {achievements.map((stat) => (
              <motion.div
                key={stat.label}
                variants={staggerItem}
                className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm"
              >
                <p className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</p>
                <p className="text-blue-100">{stat.label}</p>
              </motion.div>
            ))}
          </StaggerContainer>

          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Reliable Technology',
                desc: '99.9% uptime guarantee with cloud infrastructure that scales automatically',
              },
              {
                title: 'Dedicated Support',
                desc: '24/7 support team that responds within 30 minutes for critical issues',
              },
              {
                title: 'Regular Updates',
                desc: 'Monthly feature releases and security patches at no extra cost',
              },
              {
                title: 'Affordable Pricing',
                desc: 'Flexible plans designed to fit budgets of institutes of all sizes',
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="flex gap-4 items-start p-6 rounded-2xl bg-white/10 backdrop-blur-sm"
              >
                <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-blue-100 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wide">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">The Principles We Live By</h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={staggerItem}
                className="text-center p-8 rounded-3xl glass-card hover:shadow-xl transition-shadow"
              >
                <div className="h-16 w-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Company Journey Timeline */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-900/50 dark:to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wide">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Growing Together</h2>
            <p className="text-muted-foreground">
              A decade of innovation, growth, and partnership with educational institutes
            </p>
          </FadeIn>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 to-cyan-500 hidden md:block" />

            {timeline.map((item, index) => (
              <FadeIn
                key={item.year}
                delay={index * 0.1}
                direction={index % 2 === 0 ? 'right' : 'left'}
              >
                <div className={`relative flex items-center mb-8 md:mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  <div className="flex-1 hidden md:block" />
                  <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex">
                    <div className="h-12 w-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold z-10">
                      <Calendar className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="flex-1 md:px-8">
                    <div className="glass-card rounded-2xl p-6">
                      <div className="flex items-center gap-2 mb-2 md:hidden">
                        <Calendar className="h-5 w-5 text-primary" />
                        <span className="text-primary font-bold">{item.year}</span>
                      </div>
                      <span className="hidden md:block text-primary font-bold">{item.year}</span>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
