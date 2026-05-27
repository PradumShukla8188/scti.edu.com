'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Award,
  FileCheck,
  CheckCircle,
  XCircle,
  QrCode,
  User,
  Calendar,
  BookOpen,
  Shield,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { FadeIn } from '@/components/animations';

export default function VerifyPage() {
  const [certificateId, setCertificateId] = useState('');
  const [searchType, setSearchType] = useState<'certificate' | 'marksheet'>('certificate');
  const [verificationResult, setVerificationResult] = useState<{
    verified: boolean | null;
    data?: {
      id: string;
      name: string;
      course: string;
      institute: string;
      date: string;
      grade?: string;
    } | null;
  }>({ verified: null, data: null });

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulated verification - in production this would be an API call
    if (certificateId.toUpperCase().startsWith('SCTI')) {
      setVerificationResult({
        verified: true,
        data: {
          id: certificateId.toUpperCase(),
          name: 'Rajesh Kumar',
          course: searchType === 'certificate' ? 'Advanced Computer Applications' : 'Diploma in Computer Science',
          institute: 'Tech Academy Institute',
          date: '15 March 2024',
          grade: searchType === 'marksheet' ? 'A+' : undefined,
        },
      });
    } else if (certificateId.length >= 6) {
      setVerificationResult({ verified: false, data: null });
    }
  };

  const resetSearch = () => {
    setCertificateId('');
    setVerificationResult({ verified: null, data: null });
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
              Verification Portal
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Verify <span className="gradient-text">Certificates & Marksheets</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Enter your certificate or marksheet ID to verify authenticity. Our QR-based
              verification system ensures secure and instant validation.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Verification Form */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-900/50 dark:to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <FadeIn>
              <Card className="glass-card shadow-2xl">
                <CardContent className="pt-8">
                  {/* Type Toggle */}
                  <div className="flex mb-8 p-1 bg-gray-100 dark:bg-gray-800 rounded-xl">
                    <button
                      onClick={() => {
                        setSearchType('certificate');
                        resetSearch();
                      }}
                      className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
                        searchType === 'certificate'
                          ? 'bg-white dark:bg-gray-700 shadow-sm text-primary'
                          : 'text-muted-foreground'
                      }`}
                    >
                      <span className="flex items-center justify-center gap-2">
                        <Award className="h-5 w-5" />
                        Certificate
                      </span>
                    </button>
                    <button
                      onClick={() => {
                        setSearchType('marksheet');
                        resetSearch();
                      }}
                      className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
                        searchType === 'marksheet'
                          ? 'bg-white dark:bg-gray-700 shadow-sm text-primary'
                          : 'text-muted-foreground'
                      }`}
                    >
                      <span className="flex items-center justify-center gap-2">
                        <FileCheck className="h-5 w-5" />
                        Marksheet
                      </span>
                    </button>
                  </div>

                  {/* Search Form */}
                  <form onSubmit={handleVerify} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Enter {searchType === 'certificate' ? 'Certificate' : 'Marksheet'} ID
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          value={certificateId}
                          onChange={(e) => setCertificateId(e.target.value.toUpperCase())}
                          placeholder={searchType === 'certificate' ? 'SCTI-2024-XXXXXX' : 'SCTI-MARK-2024-XXXXX'}
                          className="w-full px-4 py-4 pl-12 rounded-xl border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all font-mono text-lg"
                        />
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        You can find the ID on your {searchType === 'certificate' ? 'certificate' : 'marksheet'} or scan the QR code
                      </p>
                    </div>
                    <Button
                      type="submit"
                      className="w-full gradient-primary text-white rounded-full"
                      size="lg"
                      disabled={!certificateId}
                    >
                      Verify {searchType === 'certificate' ? 'Certificate' : 'Marksheet'}
                    </Button>
                  </form>

                  {/* Verification Result */}
                  <AnimatePresence mode="wait">
                    {verificationResult.verified !== null && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="mt-8"
                      >
                        {verificationResult.verified ? (
                          <div className="rounded-xl border-2 border-green-500 bg-green-50 dark:bg-green-900/20 p-6">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="h-12 w-12 rounded-full bg-green-500 flex items-center justify-center">
                                <CheckCircle className="h-6 w-6 text-white" />
                              </div>
                              <div>
                                <p className="font-bold text-green-700 dark:text-green-400 text-lg">Verified!</p>
                                <p className="text-green-600 dark:text-green-500 text-sm">This {searchType} is authentic</p>
                              </div>
                            </div>

                            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 space-y-3">
                              <div className="flex items-center gap-3">
                                <User className="h-5 w-5 text-primary" />
                                <div>
                                  <p className="text-xs text-muted-foreground">Student Name</p>
                                  <p className="font-semibold">{verificationResult.data?.name}</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <BookOpen className="h-5 w-5 text-primary" />
                                <div>
                                  <p className="text-xs text-muted-foreground">Course</p>
                                  <p className="font-semibold">{verificationResult.data?.course}</p>
                                </div>
                              </div>
                              {verificationResult.data?.grade && (
                                <div className="flex items-center gap-3">
                                  <Award className="h-5 w-5 text-primary" />
                                  <div>
                                    <p className="text-xs text-muted-foreground">Grade</p>
                                    <p className="font-semibold">{verificationResult.data.grade}</p>
                                  </div>
                                </div>
                              )}
                              <div className="flex items-center gap-3">
                                <Calendar className="h-5 w-5 text-primary" />
                                <div>
                                  <p className="text-xs text-muted-foreground">Date Issued</p>
                                  <p className="font-semibold">{verificationResult.data?.date}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="rounded-xl border-2 border-red-500 bg-red-50 dark:bg-red-900/20 p-6">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="h-12 w-12 rounded-full bg-red-500 flex items-center justify-center">
                                <XCircle className="h-6 w-6 text-white" />
                              </div>
                              <div>
                                <p className="font-bold text-red-700 dark:text-red-400 text-lg">Not Found</p>
                                <p className="text-red-600 dark:text-red-500 text-sm">
                                  No {searchType} found with this ID
                                </p>
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Please check the ID and try again. If you believe this is an error,
                              contact the issuing institute.
                            </p>
                          </div>
                        )}

                        <Button
                          variant="outline"
                          className="w-full mt-4 rounded-full"
                          onClick={resetSearch}
                        >
                          Search Again
                        </Button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Sample Preview */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wide">Sample Preview</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              How Our {searchType === 'certificate' ? 'Certificates' : 'Marksheets'} Look
            </h2>
            <p className="text-muted-foreground">
              Professionally designed with QR code for instant verification
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <FadeIn>
              <Card className="glass-card overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-blue-600 to-cyan-500 p-4 text-white text-center">
                    <Award className="h-8 w-8 mx-auto mb-2" />
                    <p className="font-bold">Certificate Sample</p>
                  </div>
                  <div className="p-6 bg-white dark:bg-gray-800">
                    <div className="border-4 border-double border-gray-300 dark:border-gray-600 p-6 text-center">
                      <h3 className="text-xl font-bold mb-2 gradient-text">CERTIFICATE</h3>
                      <p className="text-sm text-muted-foreground mb-4">OF COMPLETION</p>
                      <div className="w-24 h-0.5 bg-gray-300 dark:bg-gray-600 mx-auto mb-4" />
                      <p className="text-muted-foreground mb-2">This is to certify that</p>
                      <p className="text-lg font-bold mb-2">Student Name</p>
                      <p className="text-muted-foreground mb-4">has successfully completed</p>
                      <p className="font-semibold text-primary mb-4">Course Name</p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground mt-6">
                        <span>Date: 15/03/2024</span>
                        <div className="h-16 w-16 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center">
                          <QrCode className="h-10 w-10 text-gray-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.1}>
              <Card className="glass-card overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-cyan-500 to-teal-500 p-4 text-white text-center">
                    <FileCheck className="h-8 w-8 mx-auto mb-2" />
                    <p className="font-bold">Marksheet Sample</p>
                  </div>
                  <div className="p-6 bg-white dark:bg-gray-800">
                    <div className="border-4 border-double border-gray-300 dark:border-gray-600 p-6">
                      <div className="text-center mb-4">
                        <h3 className="text-lg font-bold gradient-text">MARKSHEET</h3>
                        <p className="text-xs text-muted-foreground">Academic Session 2023-24</p>
                      </div>
                      <div className="space-y-3 mb-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Student Name:</span>
                          <span className="font-semibold">Rajesh Kumar</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Course:</span>
                          <span className="font-semibold">DCA</span>
                        </div>
                        <div className="w-full h-px bg-gray-200 dark:bg-gray-700" />
                        <table className="w-full text-xs">
                          <thead>
                            <tr className="text-left text-muted-foreground">
                              <th className="pb-2">Subject</th>
                              <th className="pb-2 text-right">Marks</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr><td>Computer Fund.</td><td className="text-right">85/100</td></tr>
                            <tr><td>MS Office</td><td className="text-right">90/100</td></tr>
                            <tr><td>Internet</td><td className="text-right">88/100</td></tr>
                          </tbody>
                        </table>
                        <div className="w-full h-px bg-gray-200 dark:bg-gray-700" />
                        <div className="flex justify-between font-semibold">
                          <span>Total:</span>
                          <span>263/300 (87.6%)</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="h-12 w-12 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center">
                          <QrCode className="h-8 w-8 text-gray-400" />
                        </div>
                        <div className="text-right text-xs text-muted-foreground">
                          <p>Grade: A+</p>
                          <p>Result: PASS</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-900/50 dark:to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wide">Process</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">How Verification Works</h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { step: 1, icon: QrCode, title: 'Get ID', desc: 'Find the certificate ID or scan QR code on your document' },
              { step: 2, icon: Search, title: 'Enter ID', desc: 'Enter the ID in the verification form above' },
              { step: 3, icon: Shield, title: 'Verify', desc: 'Instant verification with complete details' },
            ].map((item, index) => (
              <FadeIn key={item.step} delay={index * 0.1}>
                <div className="text-center">
                  <div className="h-16 w-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
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
