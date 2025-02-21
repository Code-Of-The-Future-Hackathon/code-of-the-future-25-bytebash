"use client"

import Image from "next/image"
import { useState } from "react"
import { Card, CardContent } from "~/components/ui/card"
import { Input } from "~/components/ui/input"
import { Button } from "~/components/ui/button"
import { Activity, Play, Check } from "lucide-react"
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@radix-ui/react-accordion";
import {Textarea} from "~/components/ui/textarea";

const LandingPage = () => {
  const [email, setEmail] = useState("")

  return (
      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <header className="bg-white shadow-sm absolute z-50 top-0 inset-x-0">
            <nav className="items-center justify-between mx-auto flex max-w-screen-2xl p-4">
              <div className="lg:flex-1 flex">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Windframe</span>
                  <Image
                      alt=""
                      src="https://res.cloudinary.com/speedwares/image/upload/v1659284687/windframe-logo-main_daes7r.png"
                      width={32}
                      height={32}
                      className="h-8 w-auto"
                  />
                </a>
              </div>
              <Button>Get Started</Button>
            </nav>
          </header>
          <section className="mx-auto mt-16 pt-24 pb-28 relative max-w-screen-2xl p-4 isolate">
            <svg
                className="w-[468px] h-[788px] absolute top-0 left-0 -z-10 transform-gpu overflow-hidden blur-2xl"
                viewBox="0 0 468 788"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="44.5105" cy="378.637" r="156.383" fill="#4A3AFF" />
              <circle cx="119.803" cy="529.24" r="156.383" fill="#702DFF" />
              <circle cx="173.364" cy="372.857" r="156.383" fill="#2D5BFF" />
              <g filter="url(#filter0_b_1410_520)">
                <circle cx="73.5409" cy="394.049" r="393.819" fill="white" fillOpacity="0.79" />
              </g>
            </svg>
            <div className="mx-auto max-w-2xl">
              <p className="text-center text-gray-500 font-medium tracking-wide uppercase">tailwind page builder</p>
              <h1 className="mt-2 text-center text-4xl md:text-6xl font-bold tracking-tight text-black">
                The best way to organize your work
              </h1>
              <p className="mt-6 text-lg text-gray-600 text-center">
                Want to receive a monthly email in your inbox with awesome free tips and resources on productivity? Please
                submit your email below.
              </p>
              <div className="mt-24 w-full bg-white rounded-lg drop-shadow-xl p-2.5 flex border border-gray-300">
                <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-none focus:outline-none p-2.5 flex-1 flex-shrink-0 text-lg w-full"
                />
                <Button type="submit">Subscribe</Button>
              </div>
              <div className="items-center justify-center mt-6 flex gap-3">
                <svg className="w-6 h-6" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M11.0527 22.0752C17.128 22.0752 22.0527 17.1505 22.0527 11.0752C22.0527 4.9999 17.128 0.0751953 11.0527 0.0751953C4.97743 0.0751953 0.0527344 4.9999 0.0527344 11.0752C0.0527344 17.1505 4.97743 22.0752 11.0527 22.0752Z"
                      fill="currentColor"
                  />
                  <path
                      d="M5.55273 11.6251L8.85273 14.9251L16.5527 7.2251"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                  />
                </svg>
                <p className="text-center text-gray-600">
                  It&apos;s 100% free and we will never send more than one email per month
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Trusted by section */}
        <section className="mx-auto py-20 max-w-screen-2xl p-4">
          <p className="text-center text-gray-600 font-medium tracking-wide uppercase">trusted by</p>
          <div className="md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 mt-10 grid place-items-center gap-10">
            {/* Add logo SVGs here */}
          </div>
        </section>

        {/* Features section */}
        <section className="mx-auto py-20 max-w-screen-2xl p-4 relative isolate overflow-hidden">
          <svg
              className="w-[468px] h-[788px] absolute -top-28 -right-20 -z-10 transform-gpu overflow-hidden blur-2xl"
              viewBox="0 0 468 788"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
          >
            {/* Add SVG content */}
          </svg>
          <p className="text-center text-gray-600 mb-2 font-medium tracking-wide uppercase">Features</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-center">Enjoy the best set of features</h2>
          <p className="mt-5 text-gray-600 text-lg text-center md:max-w-xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolore facilis modi, tempore minus et adipisci
            sapiente consequaturl.
          </p>
          <div className="md:grid-cols-2 xl:grid-cols-3 mx-auto mt-10 grid gap-10">
            {/* Feature cards */}
            <Card className="rounded-xl justify-center items-center mx-auto px-10 py-24 bg-white border border-gray-300 flex flex-col gap-4 max-w-[30rem]">
              <CardContent>
                <div className="w-16 h-16 bg-white rounded-full text-gray-600 p-3 border">
                  <Activity className="w-full h-full" />
                </div>
                <h3 className="text-3xl font-medium text-center mt-4">Work management</h3>
                <p className="text-center text-gray-600 mt-2">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis debitis, ex laboriosam, vel
                  maiores neque quasi alias consectetur.
                </p>
              </CardContent>
            </Card>
            {/* Add more feature cards */}
          </div>
        </section>

        {/* Content section */}
        <section className="mx-auto py-20 max-w-screen-2xl p-4">
          <p className="mb-2 text-gray-600 font-medium tracking-wide text-center lg:text-left uppercase">content</p>
          <div className="mb-4 lg:mb-8 lg:gap-y-0 lg:flex-row lg:justify-between justify-center items-center flex flex-col gap-x-0 gap-y-6 max-md:max-w-lg max-md:mx-auto">
            <div className="w-full text-center lg:text-left lg:w-2/4">
              <h2 className="text-4xl lg:text-6xl lg:mb-6 lg:max-w-2xl lg:mx-0 font-bold tracking-tight leading-[3.25rem] mx-auto max-w-max">
                Increased productivity with our product
              </h2>
            </div>
            <div className="w-full text-center lg:text-left lg:w-2/4">
              <p className="text-lg font-normal text-gray-600 mb-5">
                We provide all the advantages that can simplify all your workflows without any further requirements and
                make life easier
              </p>
              <a
                  href="#"
                  className="items-center justify-center text-base font-semibold text-black lg:justify-start flex flex-row gap-2"
              >
                Get Started
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="relative">
            <Image
                alt="content image"
                src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={2940}
                height={1960}
                className="max-h-[540px] object-cover object-top grayscale w-full"
            />
            <a
                href="#"
                aria-label="Play Video"
                className="items-center justify-center w-full h-full bg-gray-900 flex absolute inset-0 transition-colors duration-300 bg-opacity-50 group hover:bg-opacity-25"
            >
              <div className="items-center justify-center w-32 h-32 bg-gray-100 rounded-full shadow-2xl flex transition duration-300 transform group-hover:scale-110">
              <span className="items-center justify-center w-20 text-gray-900 flex">
                <Play className="w-full h-full" />
              </span>
              </div>
            </a>
          </div>
        </section>

        {/* Stats section */}
        <section className="bg-white text-black my-20 mx-auto max-w-screen-2xl p-6 relative isolate overflow-hidden">
          <svg
              className="h-[610px] w-[200px] absolute -z-10 transform-gpu overflow-hidden blur-2xl -top-32 right-0"
              viewBox="0 0 468 788"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="44.5105" cy="378.637" r="156.383" fill="#4A3AFF" />
            <circle cx="119.803" cy="529.24" r="156.383" fill="#702DFF" />
            <circle cx="173.364" cy="372.857" r="156.383" fill="#2D5BFF" />
            <g filter="url(#filter0_b_1410_520)">
              <circle cx="73.5409" cy="394.049" r="393.819" fill="white" fillOpacity="0.79" />
            </g>
          </svg>
          <p className="tracking-widest text-sm font-bold text-gray-600 text-center uppercase">Stats</p>
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-center">Our results in numbers</h2>
          <div className="lg:grid-cols-3 mt-10 mx-auto grid place-items-center gap-20 max-w-screen-2xl">
            <div className="w-full rounded-xl shadow-lg p-12 space-y-3 border border-gray-100">
              <p className="font-bold text-5xl">99%</p>
              <p className="font-bold text-2xl pt-2">Customer satisfaction</p>
              <p className="text-gray-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum similique magnam amet
              </p>
            </div>
            <div className="w-full rounded-xl shadow-lg p-12 space-y-3 border border-gray-100">
              <p className="font-bold text-5xl">32M</p>
              <p className="font-medium text-2xl pt-2">Active users</p>
              <p className="text-gray-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum similique magnam amet
              </p>
            </div>
            <div className="w-full rounded-xl shadow-lg p-12 space-y-3 border border-gray-100">
              <p className="font-bold text-5xl">300%</p>
              <p className="font-medium text-2xl pt-2">Company growth</p>
              <p className="text-gray-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum similique magnam amet
              </p>
            </div>
          </div>
        </section>

        {/* Blog posts section */}
        <section className="mx-auto py-20 px-4 max-w-screen-2xl">
          <p className="tracking-widest text-sm font-bold text-gray-600 text-center uppercase">blog</p>
          <h2 className="mt-2 mb-14 text-center text-4xl md:text-6xl font-bold text-black tracking-tight">
            Our popular blogs
          </h2>
          <div className="mb-14 justify-center md:flex-wrap lg:flex-row lg:flex-nowrap lg:justify-between lg:gap-x-8 lg:gap-y-0 flex flex-wrap gap-y-8">
            <div className="w-full rounded-2xl lg:w-1/3 group cursor-pointer border border-gray-300 p-5 transition-all duration-300 hover:border-black max-lg:max-w-xl">
              <div className="mb-6 items-center flex">
                <Image
                    alt="Blog image"
                    src="https://images.pexels.com/photos/4256211/pexels-photo-4256211.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    width={500}
                    height={333}
                    className="w-full rounded-lg"
                />
              </div>
              <div className="block">
                <span className="mb-3 font-medium text-black block">Jan 01, 2024</span>
                <p className="mb-5 text-xl font-medium leading-8 text-gray-900 line-clamp-2">Minimal is bliss</p>
                <p className="mb-10 leading-6 text-gray-500 line-clamp-2">
                  Discover cool strategies to streamline and organize your workflow...
                </p>
                <a href="#" className="text-lg font-semibold text-black cursor-pointer">
                  Read more...
                </a>
              </div>
            </div>
            {/* Add two more blog post cards here */}
          </div>
          <div className="items-center justify-center flex">
            <a href="#" className="h-fit w-fit items-center font-medium flex gap-2">
              <span>View all</span>
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </section>

        {/* Product Timeline section */}
        <section className="mx-auto py-20 px-4 max-w-screen-2xl">
          <p className="tracking-widest text-sm font-bold text-gray-600 text-center uppercase">Timeline</p>
          <h2 className="mt-2 mb-14 text-center text-4xl md:text-6xl font-bold text-black tracking-tight">
            Our product journey
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200"></div>
            <div className="space-y-12">
              {[
                {
                  year: "2020",
                  title: "Product Launch",
                  description: "We launched our first version with core features.",
                },
                {
                  year: "2021",
                  title: "Major Update",
                  description: "Introduced AI-powered recommendations and analytics.",
                },
                {
                  year: "2022",
                  title: "Global Expansion",
                  description: "Expanded our services to 50+ countries worldwide.",
                },
                {
                  year: "2023",
                  title: "Mobile App Release",
                  description: "Launched our mobile app for iOS and Android.",
                },
              ].map((item, index) => (
                  <div key={item.year} className={`flex ${index % 2 === 0 ? "flex-row-reverse" : ""} items-center`}>
                    <div className="w-1/2"></div>
                    <div className="w-6 h-6 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 bg-primary rounded-full"></div>
                    <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
                      <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold mb-2">{item.year}</h3>
                        <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials section */}
        <section className="mx-auto py-20 px-4 max-w-screen-2xl bg-gray-50">
          <p className="tracking-widest text-sm font-bold text-gray-600 text-center uppercase">Testimonials</p>
          <h2 className="mt-2 mb-14 text-center text-4xl md:text-6xl font-bold text-black tracking-tight">
            What our customers say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "John Doe",
                role: "CEO, TechCorp",
                image: "https://randomuser.me/api/portraits/men/1.jpg",
                quote: "This product has revolutionized our workflow. Highly recommended!",
              },
              {
                name: "Jane Smith",
                role: "Designer, CreativeCo",
                image: "https://randomuser.me/api/portraits/women/2.jpg",
                quote: "The user interface is intuitive and the features are exactly what we needed.",
              },
              {
                name: "Mike Johnson",
                role: "Freelancer",
                image: "https://randomuser.me/api/portraits/men/3.jpg",
                quote: "As a freelancer, this tool has been a game-changer for managing my projects.",
              },
            ].map((testimonial, index) => (
                <Card key={index} className="bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="rounded-full mr-4"
                      />
                      <div>
                        <h3 className="font-semibold">{testimonial.name}</h3>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">&quot{testimonial.quote}&quot</p>
                  </CardContent>
                </Card>
            ))}
          </div>
        </section>

        {/* Pricing section */}
        <section className="mx-auto py-20 px-4 max-w-screen-2xl">
          <p className="tracking-widest text-sm font-bold text-gray-600 text-center uppercase">Pricing</p>
          <h2 className="mt-2 mb-14 text-center text-4xl md:text-6xl font-bold text-black tracking-tight">
            Choose your plan
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic",
                price: "$9",
                features: ["5 projects", "10 GB storage", "Basic support"],
                isPopular: false,
              },
              {
                name: "Pro",
                price: "$29",
                features: ["Unlimited projects", "100 GB storage", "Priority support", "Advanced analytics"],
                isPopular: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                features: ["Unlimited everything", "Dedicated support", "Custom integrations"],
                isPopular: false,
              },
            ].map((plan, index) => (
                <Card key={index} className={`${plan.isPopular ? "border-primary" : "border-gray-200"} relative`}>
                  {plan.isPopular && (
                      <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                        Popular
                      </div>
                  )}
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-4xl font-bold mb-4">
                      {plan.price}
                      <span className="text-base font-normal text-gray-600">/month</span>
                    </p>
                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <Check className="text-green-500 mr-2" size={16} />
                            <span>{feature}</span>
                          </li>
                      ))}
                    </ul>
                    <Button className="w-full" variant={plan.isPopular ? "default" : "outline"}>
                      Choose Plan
                    </Button>
                  </CardContent>
                </Card>
            ))}
          </div>
        </section>
        <section className="mx-auto py-20 px-4 max-w-screen-2xl">
          <p className="tracking-widest text-sm font-bold text-gray-600 text-center uppercase">Our Team</p>
          <h2 className="mt-2 mb-14 text-center text-4xl md:text-6xl font-bold text-black tracking-tight">
            Meet the experts
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "John Smith",
                role: "CEO & Founder",
                image: "https://randomuser.me/api/portraits/men/1.jpg",
              },
              {
                name: "Sarah Johnson",
                role: "CTO",
                image: "https://randomuser.me/api/portraits/women/2.jpg",
              },
              {
                name: "Michael Brown",
                role: "Lead Designer",
                image: "https://randomuser.me/api/portraits/men/3.jpg",
              },
              {
                name: "Emily Davis",
                role: "Marketing Director",
                image: "https://randomuser.me/api/portraits/women/4.jpg",
              },
            ].map((member, index) => (
                <Card key={index} className="bg-white">
                  <CardContent className="p-6 text-center">
                    <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={200}
                        height={200}
                        className="rounded-full mx-auto mb-4"
                    />
                    <h3 className="font-semibold text-xl">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                  </CardContent>
                </Card>
            ))}
          </div>
        </section>

        {/* FAQ section */}
        <section className="mx-auto py-20 px-4 max-w-screen-2xl bg-gray-50">
          <p className="tracking-widest text-sm font-bold text-gray-600 text-center uppercase">FAQ</p>
          <h2 className="mt-2 mb-14 text-center text-4xl md:text-6xl font-bold text-black tracking-tight">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
            {[
              {
                question: "What is your product?",
                answer:
                    "Our product is a comprehensive project management tool designed to streamline workflows and increase productivity for teams of all sizes.",
              },
              {
                question: "How does pricing work?",
                answer:
                    "We offer flexible pricing plans to suit different needs. Our plans range from a basic free tier to custom enterprise solutions. You can find more details on our pricing page.",
              },
              {
                question: "Do you offer a free trial?",
                answer:
                    "Yes, we offer a 14-day free trial on all our paid plans. No credit card is required to start your trial.",
              },
              {
                question: "How secure is your platform?",
                answer:
                    "Security is our top priority. We use industry-standard encryption, regular security audits, and comply with GDPR and other data protection regulations to ensure your data is safe.",
              },
            ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Contact form section */}
        <section className="mx-auto py-20 px-4 max-w-screen-2xl">
          <p className="tracking-widest text-sm font-bold text-gray-600 text-center uppercase">Contact Us</p>
          <h2 className="mt-2 mb-14 text-center text-4xl md:text-6xl font-bold text-black tracking-tight">
            Get in touch
          </h2>
          <form className="max-w-2xl mx-auto space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <Input type="text" id="name" placeholder="Your name" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input type="email" id="email" placeholder="Your email" required />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <Input type="text" id="subject" placeholder="Subject" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <Textarea id="message" placeholder="Your message" rows={5} required />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </section>

        {/* CTA section */}
        <section className="mx-auto py-20 px-4 max-w-screen-2xl bg-primary text-white">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to get started?</h2>
            <p className="text-xl mb-8">
              Join thousands of satisfied customers and take your productivity to the next level.
            </p>
            <Button variant="secondary" size="lg">
              Start Your Free Trial
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="mx-auto max-w-screen-2xl px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">About Us</h3>
                <p className="text-gray-400">
                  We&apos;re on a mission to make work easier and more productive for teams everywhere.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Cookie Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Connect</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
            </div>
          </div>
        </footer>

        {/* Add remaining sections: Team, FAQ, Contact form, CTA, and Footer */}
      </div>
  )
}

export default LandingPage

