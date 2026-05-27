'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  GraduationCap,
} from 'lucide-react';
import { FadeIn } from './animations';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/features', label: 'Features' },
  { href: '/franchise', label: 'Franchise' },
  { href: '/verify', label: 'Certificate Verification' },
  { href: '/contact', label: 'Contact' },
];

const services = [
  'Student Management',
  'Course Management',
  'Online Exam Portal',
  'Certificate Management',
  'Fee Management',
  'Attendance Management',
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <FadeIn>
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="h-12 w-12 rounded-xl gradient-primary flex items-center justify-center">
                  <GraduationCap className="h-7 w-7 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold gradient-text">SCTI Pvt. Ltd.</span>
                  <p className="text-xs text-muted-foreground">Empowering Education</p>
                </div>
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Providing comprehensive coaching management software solutions for
                educational institutes, training centers, and academies across India.
              </p>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div>
              <h3 className="font-semibold text-lg mb-4">Our Services</h3>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-sm text-muted-foreground">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    SCTI Pvt. Ltd., Main Office, India
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <a
                    href="tel:8189858785"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    8189858785
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  <a
                    href="mailto:scti@gmail.com"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    scti@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>

        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              &copy; {new Date().getFullYear()} SCTI Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
