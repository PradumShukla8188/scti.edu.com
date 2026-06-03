'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { FadeIn, StaggerContainer, staggerItem } from '@/components/animations';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Server, RefreshCw } from 'lucide-react';
import Link from 'next/link';

const policies = [
  {
    icon: Eye,
    title: 'Information Collection',
    content: 'We collect information you provide directly to us, such as when you create or modify your account, request on-demand services, contact customer support, or otherwise communicate with us. This includes name, email, phone number, and transaction details.'
  },
  {
    icon: Lock,
    title: 'Data Usage & Protection',
    content: 'Your data is strictly used to provide, maintain, and improve our services. We implement state-of-the-art security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.'
  },
  {
    icon: Shield,
    title: 'Information Sharing',
    content: 'We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information with our business partners.'
  },
  {
    icon: Server,
    title: 'Cookies & Tracking',
    content: 'Our site may use "cookies" to enhance user experience. Your web browser places cookies on your hard drive for record-keeping purposes. You may choose to set your web browser to refuse cookies, but some parts of the site may not function properly.'
  },
  {
    icon: RefreshCw,
    title: 'Policy Updates',
    content: 'SCTI reserves the right to update this privacy policy at any time. When we do, we will post a notification on the main page of our site. We encourage you to frequently check this page for any changes.'
  }
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen pt-20 flex flex-col">
      <Navbar />

      <section className="flex-grow section-padding bg-gray-50 dark:bg-gray-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

          <FadeIn className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              Legal Document
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your privacy is critically important to us. At SCTI, we have a few fundamental principles about protecting your personal data.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: June 3, 2026
            </p>
          </FadeIn>

          <StaggerContainer className="space-y-8">
            {policies.map((policy, index) => {
              const Icon = policy.icon;
              return (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col md:flex-row gap-6"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{policy.title}</h2>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {policy.content}
                    </p>
                  </div>
                </motion.div>
              );
            })}

            <motion.div variants={staggerItem} className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-blue-600 to-primary text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Questions or Concerns?</h3>
              <p className="mb-6 text-blue-100">
                If you have any questions about this Privacy Policy or our treatment of your personal data, please write to us.
              </p>
              <Link href="/contact" className="inline-block px-8 py-3 rounded-full bg-white text-primary font-semibold hover:bg-blue-50 transition-colors shadow-md">
                Contact Support
              </Link>
            </motion.div>
          </StaggerContainer>

        </div>
      </section>

      <Footer />
    </main>
  );
}
