/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import {
  ArrowRight,
  Receipt,
  BarChart3,
  MapPin,
  CreditCard,
  Download,
  Star,
  CheckCircle2,
  Smartphone,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

export default function BillbuckzPage() {
  return (
    <div className="container mx-auto">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted py-20 md:py-32">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="relative h-10 w-10 overflow-hidden">
                      <Image
                        src="/bill-buckz/cashbucks-icon.png"
                        alt="Billbuckz Logo"
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <h2 className="text-2xl font-bold">Billbuckz</h2>
                  </div>
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Get Cashback on Your Everyday Purchases
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl mt-4">
                    Upload your invoices, track expenses, and discover nearby
                    shops - all while earning cashback rewards.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <Button size="lg" className="gap-2">
                    <Download className="h-5 w-5" />
                    Download App
                  </Button>
                  <Button size="lg" variant="outline">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center gap-4 mt-6">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-background"
                      >
                        <Image
                          src={`/bill-buckz/cashbucks-icon.png`}
                          alt={`User ${i}`}
                          width={32}
                          height={32}
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Joined by{" "}
                    <span className="font-medium text-foreground">10,000+</span>{" "}
                    happy users
                  </p>
                </div>
              </div>
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                <div className="relative h-[600px] w-[300px] overflow-hidden rounded-[40px] border-[8px] border-muted bg-background shadow-xl">
                  <Image
                    src="/bill-buckz/screen-1.png"
                    alt="Billbuckz App Screenshot"
                    fill
                    className="object-contain pt-3"
                  />
                </div>
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/10 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-xl font-bold text-yellow-500">4.8</p>
                    <div className="flex">
                      <Star className="h-3 w-3 fill-yellow-500 text-primary" />
                      <Star className="h-3 w-3 fill-yellow-500 text-primary" />
                      <Star className="h-3 w-3 fill-yellow-500 text-primary" />
                      <Star className="h-3 w-3 fill-yellow-500 text-primary" />
                      <Star className="h-3 w-3 fill-primary/50 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Key Features
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Why Choose Billbuckz?
              </h2>
              <p className="text-muted-foreground max-w-[800px]">
                Billbuckz makes it easy to save money and manage your expenses
                with these powerful features.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-muted/50 border-none">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="rounded-full bg-primary/10 p-3 mb-4">
                    <Receipt className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Invoice Upload</h3>
                  <p className="text-muted-foreground">
                    Simply snap a photo of your receipt and upload it to earn
                    cashback on your purchases.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-muted/50 border-none">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="rounded-full bg-primary/10 p-3 mb-4">
                    <CreditCard className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Instant Cashback</h3>
                  <p className="text-muted-foreground">
                    Earn cashback rewards that you can withdraw to your bank
                    account or use for future purchases.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-muted/50 border-none">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="rounded-full bg-primary/10 p-3 mb-4">
                    <BarChart3 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Expense Tracking</h3>
                  <p className="text-muted-foreground">
                    Monitor your monthly spending habits with detailed analytics
                    and categorized expenses.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-muted/50 border-none">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="rounded-full bg-primary/10 p-3 mb-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Nearby Shops</h3>
                  <p className="text-muted-foreground">
                    Discover local stores and businesses that offer exclusive
                    cashback deals through Billbuckz.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">
                Simple Process
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                How Billbuckz Works
              </h2>
              <p className="text-muted-foreground max-w-[800px]">
                Getting cashback has never been easier. Follow these simple
                steps to start saving.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="relative flex flex-col items-center text-center">
                <div className="absolute -right-16 top-10 hidden md:block">
                  <svg
                    width="120"
                    height="30"
                    viewBox="0 0 120 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 15H115"
                      stroke="currentColor"
                      strokeDasharray="2 2"
                      className="text-muted-foreground"
                    />
                    <path
                      d="M115 15L105 5"
                      stroke="currentColor"
                      strokeDasharray="2 2"
                      className="text-muted-foreground"
                    />
                    <path
                      d="M115 15L105 25"
                      stroke="currentColor"
                      strokeDasharray="2 2"
                      className="text-muted-foreground"
                    />
                  </svg>
                </div>
                <div className="relative h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Download the App</h3>
                <p className="text-muted-foreground">
                  Get the Billbuckz app from the App Store or Google Play Store
                  and create your account.
                </p>
              </div>
              <div className="relative flex flex-col items-center text-center">
                <div className="absolute -right-16 top-10 hidden md:block">
                  <svg
                    width="120"
                    height="30"
                    viewBox="0 0 120 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 15H115"
                      stroke="currentColor"
                      strokeDasharray="2 2"
                      className="text-muted-foreground"
                    />
                    <path
                      d="M115 15L105 5"
                      stroke="currentColor"
                      strokeDasharray="2 2"
                      className="text-muted-foreground"
                    />
                    <path
                      d="M115 15L105 25"
                      stroke="currentColor"
                      strokeDasharray="2 2"
                      className="text-muted-foreground"
                    />
                  </svg>
                </div>
                <div className="relative h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Upload Your Invoices</h3>
                <p className="text-muted-foreground">
                  Take a photo of your receipts and upload them through the app
                  to verify your purchases.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="relative h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Earn Cashback</h3>
                <p className="text-muted-foreground">
                  Receive cashback rewards directly in your Billbuckz wallet
                  that you can withdraw or use for future purchases.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* App Screenshots */}
        <section className="py-20 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                App Preview
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                See Billbuckz in Action
              </h2>
              <p className="text-muted-foreground max-w-[800px]">
                Explore the intuitive interface and powerful features of the
                Billbuckz app.
              </p>
            </div>
            <Tabs defaultValue="cashback" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
                <TabsTrigger value="cashback">Cashback</TabsTrigger>
                <TabsTrigger value="shops">Nearby Shops</TabsTrigger>
              </TabsList>
              <TabsContent value="cashback" className="mt-4">
                <div className="flex justify-center gap-6 overflow-hidden">
                  <div className="relative h-[500px] w-[250px] overflow-hidden rounded-[30px] border-[8px] border-muted bg-background shadow-lg">
                    <Image
                      src="/bill-buckz/cashback-screen.png"
                      alt="Cashback Screen"
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div className="relative hidden md:block h-[500px] w-[250px] overflow-hidden rounded-[30px] border-[8px] border-muted bg-background shadow-lg">
                    <Image
                      src="/bill-buckz/screen-3.png"
                      alt="Upload Receipt Screen"
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div className="relative hidden lg:block h-[500px] w-[250px] overflow-hidden rounded-[30px] border-[8px] border-muted bg-background shadow-lg">
                    <Image
                      src="/bill-buckz/screen 4.png"
                      alt="Rewards Screen"
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="shops" className="mt-4">
                <div className="flex justify-center gap-6 overflow-hidden">
                  <div className="relative h-[500px] w-[250px] overflow-hidden rounded-[30px] border-[8px] border-muted bg-background shadow-lg">
                    <Image
                      src="/bill-buckz/screen-1.png"
                      alt="Shop Map Screen"
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div className="relative hidden md:block h-[500px] w-[250px] overflow-hidden rounded-[30px] border-[8px] border-muted bg-background shadow-lg">
                    <Image
                      src="/bill-buckz/screen-2.png"
                      alt="Shop Details Screen"
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">
                User Stories
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                What Our Users Say
              </h2>
              <p className="text-muted-foreground max-w-[800px]">
                Don't just take our word for it. Here's what people are saying
                about Billbuckz.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full">
                      <Image
                        src="/placeholder.svg?height=40&width=40&text=RS"
                        alt="Rahul S."
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">Rahul S.</h4>
                      <div className="flex">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <Star className="h-4 w-4 fill-primary text-primary" />
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "I've earned over ₹5,000 in cashback in just three months
                    using Billbuckz. The expense tracking feature has also
                    helped me budget better."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full">
                      <Image
                        src="/placeholder.svg?height=40&width=40&text=PK"
                        alt="Priya K."
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">Priya K.</h4>
                      <div className="flex">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <Star className="h-4 w-4 fill-primary/50 text-primary" />
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "The nearby shops feature is amazing! I discovered so many
                    local businesses offering great deals that I wouldn't have
                    known about otherwise."
                  </p>
                </CardContent>
              </Card>
              <Card className="md:col-span-2 lg:col-span-1">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full">
                      <Image
                        src="/placeholder.svg?height=40&width=40&text=AM"
                        alt="Arun M."
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">Arun M.</h4>
                      <div className="flex">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <Star className="h-4 w-4 fill-primary text-primary" />
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "As a small business owner, I love how easy it is to track
                    my business expenses. The monthly reports have been
                    invaluable for my accounting."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Download CTA */}
        <section className="py-20 bg-background">
          <div className="container px-4 md:px-6">
            <div className="rounded-2xl bg-muted p-6 md:p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
              <div className="relative z-10 grid gap-6 lg:grid-cols-2 items-center">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                      Start Saving Today with Billbuckz
                    </h2>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                      Download the app now and join thousands of users who are
                      earning cashback on their everyday purchases.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link href="https://play.google.com/store/apps/details?id=com.devcodersubha.billbucks&pli=1">
                        <Button size="lg" className="gap-2 cursor-pointer">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5"
                          >
                            <path d="M12 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5" />
                            <path d="M16 19h6" />
                            <path d="M19 16v6" />
                          </svg>
                          Google Play
                        </Button>
                      </Link>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span className="text-sm">Free Download</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span className="text-sm">Secure & Private</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span className="text-sm">Regular Updates</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative mx-auto">
                  <div className="relative h-[300px] w-[300px]">
                    <Image
                      src="/bill-buckz/qr-bill-buckz.png"
                      alt="QR Code to download app"
                      width={300}
                      height={300}
                      className="object-contain rounded-3xl"
                    />
                  </div>
                  <div className="absolute mt-2 bottom-0 left-1/2 -translate-x-1/2 text-center">
                    <p className="text-sm text-yellow-500">Scan to download</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">
                FAQ
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground max-w-[800px]">
                Have questions about Billbuckz? Find answers to common questions
                below.
              </p>
            </div>
            <div className="mx-auto max-w-3xl space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">
                    How much cashback can I earn?
                  </h3>
                  <p className="text-muted-foreground">
                    Cashback rates vary by merchant and promotion, typically
                    ranging from 1% to 10% of your purchase amount. Special
                    promotions may offer even higher rates.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">
                    How do I withdraw my cashback?
                  </h3>
                  <p className="text-muted-foreground">
                    You can withdraw your cashback to your linked bank account
                    once you reach the minimum withdrawal amount of any it can
                    ₹5. Withdrawals typically process within 1-3 business days.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">
                    What types of receipts are accepted?
                  </h3>
                  <p className="text-muted-foreground">
                    Billbuckz accepts receipts from most retail stores,
                    restaurants, and service providers. The receipt must clearly
                    show the date, merchant name, and purchase amount to be
                    eligible for cashback.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">Is my data secure?</h3>
                  <p className="text-muted-foreground">
                    Yes, we take data security seriously. All personal and
                    financial information is encrypted and stored securely. We
                    never share your data with third parties without your
                    consent.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">
                    Is Billbuckz available nationwide?
                  </h3>
                  <p className="text-muted-foreground">
                    Yes, Billbuckz is available across India. However, the
                    nearby shops feature may have more options in major cities
                    and towns.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Support
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Need Help?
              </h2>
              <p className="text-muted-foreground max-w-[800px]">
                Our support team is here to assist you with any questions or
                issues.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="rounded-full bg-primary/10 p-3 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Call Us</h3>
                  <p className="text-muted-foreground mb-4">
                    Our customer support team is available Monday-Saturday,
                    9am-6pm.
                  </p>
                  <p className="font-medium">+91 1169313594</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="rounded-full bg-primary/10 p-3 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Email Us</h3>
                  <p className="text-muted-foreground mb-4">
                    Send us an email and we'll get back to you within 24 hours.
                  </p>
                  <p className="font-medium">contact@codvix.in</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="rounded-full bg-primary/10 p-3 mb-4">
                    <Smartphone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">In-App Support</h3>
                  <p className="text-muted-foreground mb-4">
                    Get help directly through the Billbuckz app for the fastest
                    response.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
