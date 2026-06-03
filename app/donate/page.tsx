'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { FadeIn, StaggerContainer, staggerItem } from '@/components/animations';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, CreditCard, Shield, Users } from 'lucide-react';
import { createDonation, verifyDonation } from '@/services/payment.service';
import Script from 'next/script';
import { toast } from 'sonner';
import { ReceiptModal, ReceiptData } from '@/components/receipt-modal';

const donationSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(10, "Valid phone number required"),
  amount: z.number().min(1, "Amount must be at least ₹1")
});

export default function DonatePage() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [receiptData, setReceiptData] = useState<ReceiptData | null>(null);

  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm({
    resolver: zodResolver(donationSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
      amount: 500,
    }
  });

  const onSubmit = async (formData: any) => {
    setIsProcessing(true);
    try {
      const orderData = await createDonation({
        fullName: formData.fullName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        amount: formData.amount,
      });

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: orderData.amount,
        currency: orderData.currency,
        name: 'SCTI Foundation',
        description: 'Thank you for your generous donation',
        order_id: orderData.id,
        handler: async function (response: any) {
          const verifyData = await verifyDonation({
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          });
          
          if (verifyData.success) {
            toast.success('Donation Successful! Thank you for your support.');
            setReceiptData({
              id: verifyData.transactionId || response.razorpay_payment_id,
              type: 'Donation',
              amount: formData.amount,
              date: new Date().toLocaleDateString(),
              name: formData.fullName,
              email: formData.email,
            });
            reset();
          } else {
            toast.error('Donation Verification Failed!');
          }
        },
        prefill: {
          name: formData.fullName,
          email: formData.email,
          contact: formData.phoneNumber,
        },
        theme: {
          color: '#3b82f6', // blue-500
        },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.on('payment.failed', function (response: any) {
        toast.error(response.error.description);
      });
      rzp.open();
    } catch (error) {
      console.error('Donation Error', error);
      toast.error('Error initiating donation');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <main className="min-h-screen pt-20 flex flex-col">
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <Navbar />

      <section className="flex-grow section-padding bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <FadeIn direction="right">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 text-sm font-semibold mb-6 flex items-center w-fit">
                  <Heart className="w-4 h-4 mr-2" /> Make a Difference
                </span>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
                  Empower Education, <br />
                  <span className="text-blue-600 dark:text-blue-400">Transform Lives.</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Your generous donation helps us provide quality education, necessary resources, and opportunities to students who need it the most. Together, we can build a brighter future.
                </p>

                <StaggerContainer className="space-y-4">
                  <motion.div variants={staggerItem} className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0 text-blue-600 dark:text-blue-400">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Reach More Students</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Every rupee goes directly toward expanding educational reach.</p>
                    </div>
                  </motion.div>

                  <motion.div variants={staggerItem} className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/50 flex items-center justify-center flex-shrink-0 text-green-600 dark:text-green-400">
                      <Shield className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Secure & Transparent</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">100% secure payments via Razorpay. Full transparency on usage.</p>
                    </div>
                  </motion.div>
                </StaggerContainer>
              </div>
            </FadeIn>

            {/* Right Form */}
            <FadeIn direction="left" delay={0.2}>
              <Card className="shadow-2xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold">Donate Now</h2>
                    <p className="text-sm text-muted-foreground mt-2">Enter your details and contribution amount.</p>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input id="fullName" {...register('fullName')} placeholder="John Doe" className="bg-white dark:bg-gray-900" />
                      {errors.fullName && <p className="text-xs text-red-500">{errors.fullName.message as string}</p>}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" {...register('email')} placeholder="john@example.com" className="bg-white dark:bg-gray-900" />
                        {errors.email && <p className="text-xs text-red-500">{errors.email.message as string}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phoneNumber">Phone Number</Label>
                        <Input id="phoneNumber" type="tel" {...register('phoneNumber')} placeholder="9999999999" className="bg-white dark:bg-gray-900" />
                        {errors.phoneNumber && <p className="text-xs text-red-500">{errors.phoneNumber.message as string}</p>}
                      </div>
                    </div>

                    <div className="space-y-3 pt-2">
                      <Label>Select Amount (₹)</Label>
                      <div className="grid grid-cols-3 gap-3">
                        {[100, 500, 1000].map((amt) => (
                          <Button 
                            key={amt} 
                            type="button" 
                            variant="outline"
                            onClick={() => setValue('amount', amt)}
                            className="bg-white dark:bg-gray-900 hover:border-blue-500 hover:text-blue-600"
                          >
                            ₹{amt}
                          </Button>
                        ))}
                      </div>
                      <div className="relative mt-2">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-medium">₹</span>
                        <Input 
                          type="number" 
                          {...register('amount', { valueAsNumber: true })} 
                          className="pl-8 bg-white dark:bg-gray-900 text-lg font-semibold"
                        />
                      </div>
                      {errors.amount && <p className="text-xs text-red-500">{errors.amount.message as string}</p>}
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isProcessing}
                      className="w-full h-12 text-lg mt-6 bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-200 dark:shadow-none transition-all"
                    >
                      {isProcessing ? 'Processing...' : (
                        <span className="flex items-center justify-center gap-2">
                          <CreditCard className="w-5 h-5" /> Proceed to Donate
                        </span>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </FadeIn>

          </div>
        </div>
      </section>

      <Footer />
      <ReceiptModal 
        isOpen={!!receiptData} 
        onClose={() => setReceiptData(null)} 
        data={receiptData} 
      />
    </main>
  );
}
