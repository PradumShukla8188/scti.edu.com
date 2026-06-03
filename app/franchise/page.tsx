'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Script from 'next/script';
import { getPlans, createOrder, verifyPayment } from '@/services/payment.service';
import { toast } from 'sonner';
import { ReceiptModal, ReceiptData } from '@/components/receipt-modal';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
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
  Star,
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

const reviews = [
  { name: "Rahul Sharma", role: "Director, Apex Classes", review: "The institute management features are top-notch. The certificate and marksheet issuing works flawlessly and saves us a ton of time!", rating: 5 },
  { name: "Priya Singh", role: "Owner, Excellence Academy", review: "Great platform! Setup was so quick and the team was extremely helpful in migrating our existing student data.", rating: 5 },
  { name: "Amit Verma", role: "Founder, Vision Coaching", review: "Best franchise decision. The 24/7 support is real, they helped us onboard fast.", rating: 4 },
  { name: "Neha Gupta", role: "Manager, Future Prep", review: "Highly recommend for any growing coaching center. Very transparent revenue model.", rating: 5 },
];

const buyFormSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  phoneNumber: z.string().min(10, "Valid phone number required"),
  instituteName: z.string().min(2, "Institute name is required")
});

export default function FranchisePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [plans, setPlans] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [receiptData, setReceiptData] = useState<ReceiptData | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(buyFormSchema)
  });

  useEffect(() => {
    // Fetch plans from backend
    getPlans()
      .then(data => setPlans(data))
      .catch(err => console.error('Failed to fetch plans', err));
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleBuyClick = (plan: any) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const onSubmitBuy = async (formData: any) => {
    try {
      if (!selectedPlan) return;
      const orderData = await createOrder({
        fullName: formData.fullName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        instituteName: formData.instituteName,
        planId: selectedPlan._id,
      });

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Use the environment variable
        amount: orderData.amount,
        currency: orderData.currency,
        name: 'SCTI Franchise',
        description: `Payment for ${selectedPlan.planName}`,
        order_id: orderData.id,
        handler: async function (response: any) {
          const verifyData = await verifyPayment({
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          });
          
          if (verifyData.success) {
            toast.success('Payment Successful!');
            setReceiptData({
              id: verifyData.transactionId || response.razorpay_payment_id,
              type: 'Franchise Subscription',
              amount: selectedPlan.price,
              date: new Date().toLocaleDateString(),
              name: formData.fullName,
              email: formData.email,
              details: `Plan: ${selectedPlan.planName}`
            });
            setIsModalOpen(false);
            reset();
          } else {
            toast.error('Payment Verification Failed!');
          }
        },
        prefill: {
          name: formData.fullName,
          email: formData.email,
          contact: formData.phoneNumber,
        },
        theme: {
          color: '#3399cc',
        },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.on('payment.failed', function (response: any) {
        toast.error(response.error.description);
      });
      rzp.open();
      
      setIsModalOpen(false);
      reset();
    } catch (error) {
      console.error('Payment Error', error);
      toast.error('Error initiating payment');
    }
  };

  return (
    <main className="min-h-screen">
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
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
              Flexible investment options to suit your budget and business goals. Complete payment options including GPay, PhonePe, Net Banking, and Cards are supported.
            </p>
          </FadeIn>

          {plans.length > 0 ? (
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {plans.map((plan, index) => (
                <motion.div key={plan._id || index} variants={staggerItem}>
                  <Card className={`h-full ${index === 1 ? 'border-primary shadow-xl' : ''} hover:shadow-xl transition-shadow`}>
                    <CardContent className="pt-8 flex flex-col justify-between h-full">
                      <div>
                        {index === 1 && (
                          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
                            Most Popular
                          </span>
                        )}
                        <h3 className="text-2xl font-bold mb-2 capitalize">{plan.planName}</h3>
                        <div className="flex items-baseline gap-2 mb-6">
                          <p className="text-3xl font-bold gradient-text">{plan.displayPrice || `₹${plan.price}`}</p>
                          {plan.duration && <span className="text-sm text-muted-foreground">/ {plan.duration}</span>}
                        </div>
                        <ul className="space-y-3 mb-6">
                          {plan.features?.map((feature: string, fIndex: number) => (
                            <li key={fIndex} className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button 
                        onClick={() => handleBuyClick(plan)}
                        className="w-full mt-auto bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        Buy Now
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </StaggerContainer>
          ) : (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          )}
        </div>
      </section>

      {/* Subscriber Reviews Slider */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wide">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">What Our Partners Say</h2>
          </FadeIn>

          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {reviews.map((review, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-4">
                  <Card className="h-full bg-white dark:bg-gray-800 border-none shadow-md">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center gap-1 mb-4 text-yellow-400">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <p className="text-muted-foreground flex-grow mb-6 italic">"{review.review}"</p>
                      <div>
                        <p className="font-semibold">{review.name}</p>
                        <p className="text-xs text-primary">{review.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="-left-12" />
              <CarouselNext className="-right-12" />
            </div>
          </Carousel>
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
                        {plans.map(p => (
                          <option key={p._id} value={p._id}>{p.planName} - ₹{p.price}</option>
                        ))}
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

      {/* Buy Now Dialog */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Complete Your Purchase</DialogTitle>
            <DialogDescription>
              Please provide your details to buy the {selectedPlan?.planName}.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmitBuy)} className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input id="fullName" {...register('fullName')} placeholder="John Doe" />
              {errors.fullName && <p className="text-xs text-red-500">{errors.fullName.message as string}</p>}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" {...register('email')} placeholder="john@example.com" />
              {errors.email && <p className="text-xs text-red-500">{errors.email.message as string}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input id="phoneNumber" type="tel" {...register('phoneNumber')} placeholder="9999999999" />
              {errors.phoneNumber && <p className="text-xs text-red-500">{errors.phoneNumber.message as string}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="instituteName">Institute Name</Label>
              <Input id="instituteName" {...register('instituteName')} placeholder="My Coaching Center" />
              {errors.instituteName && <p className="text-xs text-red-500">{errors.instituteName.message as string}</p>}
            </div>

            <div className="pt-4">
              <Button type="submit" className="w-full">
                Proceed to Payment
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <ReceiptModal 
        isOpen={!!receiptData} 
        onClose={() => setReceiptData(null)} 
        data={receiptData} 
      />
    </main>
  );
}
