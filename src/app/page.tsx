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
      <div className="bg-background">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <header className="bg-background shadow-sm absolute z-50 top-0 inset-x-0">
            <nav className="items-center justify-between mx-auto flex max-w-screen-2xl p-4">
              {/*LOGO*/}
              <div className="lg:flex-1 flex">
                <a href="#" className="-m-1.5 p-1.5">
                  <Image
                      alt=""
                      src="https://res.cloudinary.com/speedwares/image/upload/v1659284687/windframe-logo-main_daes7r.png"
                      width={32}
                      height={32}
                      className="h-8 w-auto"
                  />
                </a>
              </div>
              {/*TODO Register*/}
              <Button>Regiter</Button>
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
              <p className="text-center text-gray-500 font-medium tracking-wide uppercase">smart monitoring for every school</p>
              <h1 className="mt-2 text-center text-4xl md:text-6xl font-bold tracking-tight text-black dark:text-white">
                The best way to monitor your school
              </h1>
              <p className="mt-6 text-lg text-primary text-center">
                Looking for complete access and control over your school&apos;s inventory? <br/>
                Effortlessly track and manage all school assets in one place. <br/><br/>
                <strong>Join thousands of educators and administrators who trust our app to keep their schools running smoothly!</strong>
              </p>
              {/*TODO*/}
              <div className="mt-24 w-full rounded-lg drop-shadow-xl p-2.5 flex justify-center items-center">
                <Button type="submit">Register</Button>
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
                <p className="text-center text-primary">
                  It&apos;s 100% secure and easy to use for a seamless experience.
                </p>
              </div>
            </div>
          </section>
        </div>

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
          <p className="text-center text-primary mb-2 font-medium tracking-wide uppercase">Features</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-black dark:text-white  text-center">Enjoy the best set of modules</h2>
          <p className="mt-5 text-primary text-lg text-center md:max-w-xl mx-auto">
            Choose from a wide range of modules tailored for your school, covering every aspect of technology management.
          </p>
          <div className="md:grid-cols-2 xl:grid-cols-3 mx-auto mt-10 grid gap-10">
            {/* Feature cards */}
            <Card className="rounded-xl justify-center items-center mx-auto px-10 py-24 bg-background border border-gray-300 flex flex-col gap-4 max-w-[30rem]">
              <CardContent className={`flex flex-col justify-center items-center`}>
                <div className="w-16 h-16 self-center bg-background rounded-full text-primary p-3 border">
                  <Activity className="w-full h-full" />
                </div>
                <h3 className="text-3xl font-medium text-center mt-4">Computers, Periphery and Wi-Fi</h3>
                <p className="text-center text-primary mt-2">
                  Monitor and manage all IT assets, including computers, accessories, and network infrastructure for smooth operation.
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-xl justify-center items-center mx-auto px-10 py-24 bg-background border border-gray-300 flex flex-col gap-4 max-w-[30rem]">
              <CardContent className={`flex flex-col justify-center items-center`}>
                <div className="w-16 h-16 self-center bg-background rounded-full text-primary p-3 border">
                  <Activity className="w-full h-full" />
                </div>
                <h3 className="text-3xl font-medium text-center mt-4">Security & Heating system</h3>
                <p className="text-center text-primary mt-2">
                  Track security devices, alarms, and heating systems to ensure a safe and comfortable environment.
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-xl justify-center items-center mx-auto px-10 py-24 bg-background border border-gray-300 flex flex-col gap-4 max-w-[30rem]">
              <CardContent className={`flex flex-col justify-center items-center`}>
                <div className="w-16 h-16 self-center bg-background rounded-full text-primary p-3 border">
                  <Activity className="w-full h-full" />
                </div>
                <h3 className="text-3xl font-medium text-center mt-4">Hygiene, Decor & Food</h3>
                <p className="text-center text-primary mt-2">
                  Oversee cleaning supplies, interior maintenance, and food inventory for a well-maintained and organized school.
                </p>
              </CardContent>
            </Card>
            {/* Add more feature cards */}
          </div>
        </section>

        {/* Content section */}
        <section className="mx-auto py-20 max-w-screen-2xl p-4">
          <p className="mb-2 text-primary font-medium tracking-wide text-center lg:text-left uppercase">content</p>
          <div className="mb-4 lg:mb-8 lg:gap-y-0 lg:flex-row lg:justify-between justify-center items-center flex flex-col gap-x-0 gap-y-6 max-md:max-w-lg max-md:mx-auto">
            <div className="w-full text-center lg:text-left lg:w-2/4">
              <h2 className="text-4xl lg:text-6xl lg:mb-6 lg:max-w-2xl lg:mx-0 font-bold tracking-tight leading-[3.25rem] mx-auto max-w-max">
                Increased productivity with ByteBash
              </h2>
            </div>
            <div className="w-full text-center lg:text-left lg:w-2/4">
              <p className="text-lg font-normal text-primary mb-5">
                Enhance productivity and streamline daily operations effortlessly with ByteBash, your ultimate solution for efficient school management.
              </p>
              {/*TODO*/}
              <a
                  href="#"
                  className="items-center justify-center text-base font-semibold text-black dark:dark:text-black text-white lg:justify-start flex flex-row gap-2"
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

        {/*/!* Stats section *!/*/}
        {/*<section className="bg-background text-black dark:dark:text-black text-white my-20 mx-auto max-w-screen-2xl p-6 relative isolate overflow-hidden">*/}
        {/*  <svg*/}
        {/*      className="h-[610px] w-[200px] absolute -z-10 transform-gpu overflow-hidden blur-2xl -top-32 right-0"*/}
        {/*      viewBox="0 0 468 788"*/}
        {/*      fill="none"*/}
        {/*      xmlns="http://www.w3.org/2000/svg"*/}
        {/*  >*/}
        {/*    <circle cx="44.5105" cy="378.637" r="156.383" fill="#4A3AFF" />*/}
        {/*    <circle cx="119.803" cy="529.24" r="156.383" fill="#702DFF" />*/}
        {/*    <circle cx="173.364" cy="372.857" r="156.383" fill="#2D5BFF" />*/}
        {/*    <g filter="url(#filter0_b_1410_520)">*/}
        {/*      <circle cx="73.5409" cy="394.049" r="393.819" fill="white" fillOpacity="0.79" />*/}
        {/*    </g>*/}
        {/*  </svg>*/}
        {/*  <p className="tracking-widest text-sm font-bold text-primary text-center uppercase">Stats</p>*/}
        {/*  <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-center">Our results in numbers</h2>*/}
        {/*  <div className="lg:grid-cols-3 mt-10 mx-auto grid place-items-center gap-20 max-w-screen-2xl">*/}
        {/*    <div className="w-full rounded-xl shadow-lg p-12 space-y-3 border border-gray-100">*/}
        {/*      <p className="font-bold text-5xl">99%</p>*/}
        {/*      <p className="font-bold text-2xl pt-2">Customer satisfaction</p>*/}
        {/*      <p className="text-gray-500">*/}
        {/*        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum similique magnam amet*/}
        {/*      </p>*/}
        {/*    </div>*/}
        {/*    <div className="w-full rounded-xl shadow-lg p-12 space-y-3 border border-gray-100">*/}
        {/*      <p className="font-bold text-5xl">32M</p>*/}
        {/*      <p className="font-medium text-2xl pt-2">Active users</p>*/}
        {/*      <p className="text-gray-500">*/}
        {/*        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum similique magnam amet*/}
        {/*      </p>*/}
        {/*    </div>*/}
        {/*    <div className="w-full rounded-xl shadow-lg p-12 space-y-3 border border-gray-100">*/}
        {/*      <p className="font-bold text-5xl">300%</p>*/}
        {/*      <p className="font-medium text-2xl pt-2">Company growth</p>*/}
        {/*      <p className="text-gray-500">*/}
        {/*        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum similique magnam amet*/}
        {/*      </p>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</section>*/}

        {/*/!* Blog posts section *!/*/}
        {/*<section className="mx-auto py-20 px-4 max-w-screen-2xl">*/}
        {/*  <p className="tracking-widest text-sm font-bold text-primary text-center uppercase">blog</p>*/}
        {/*  <h2 className="mt-2 mb-14 text-center text-4xl md:text-6xl font-bold text-black dark:dark:text-black text-white tracking-tight">*/}
        {/*    Our popular blogs*/}
        {/*  </h2>*/}
        {/*  <div className="mb-14 justify-center md:flex-wrap lg:flex-row lg:flex-nowrap lg:justify-between lg:gap-x-8 lg:gap-y-0 flex flex-wrap gap-y-8">*/}
        {/*    <div className="w-full rounded-2xl lg:w-1/3 group cursor-pointer border border-gray-300 p-5 transition-all duration-300 hover:border-black max-lg:max-w-xl">*/}
        {/*      <div className="mb-6 items-center flex">*/}
        {/*        <Image*/}
        {/*            alt="Blog image"*/}
        {/*            src="https://images.pexels.com/photos/4256211/pexels-photo-4256211.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"*/}
        {/*            width={500}*/}
        {/*            height={333}*/}
        {/*            className="w-full rounded-lg"*/}
        {/*        />*/}
        {/*      </div>*/}
        {/*      <div className="block">*/}
        {/*        <span className="mb-3 font-medium text-black dark:dark:text-black text-white block">Jan 01, 2024</span>*/}
        {/*        <p className="mb-5 text-xl font-medium leading-8 text-gray-900 line-clamp-2">Minimal is bliss</p>*/}
        {/*        <p className="mb-10 leading-6 text-gray-500 line-clamp-2">*/}
        {/*          Discover cool strategies to streamline and organize your workflow...*/}
        {/*        </p>*/}
        {/*        <a href="#" className="text-lg font-semibold text-black dark:dark:text-black text-white cursor-pointer">*/}
        {/*          Read more...*/}
        {/*        </a>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*    /!* Add two more blog post cards here *!/*/}
        {/*  </div>*/}
        {/*  <div className="items-center justify-center flex">*/}
        {/*    <a href="#" className="h-fit w-fit items-center font-medium flex gap-2">*/}
        {/*      <span>View all</span>*/}
        {/*      <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
        {/*        <path*/}
        {/*            d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5"*/}
        {/*            stroke="currentColor"*/}
        {/*            strokeWidth="1"*/}
        {/*            strokeLinecap="round"*/}
        {/*            strokeLinejoin="round"*/}
        {/*        />*/}
        {/*      </svg>*/}
        {/*    </a>*/}
        {/*  </div>*/}
        {/*</section>*/}

        {/* Product Timeline section */}
        <section className="mx-auto py-20 px-4 max-w-screen-2xl">
          <p className="tracking-widest text-sm font-bold text-primary text-center uppercase">Timeline</p>
          <h2 className="mt-2 mb-14 text-center text-4xl md:text-6xl font-bold text-black dark:dark:text-black text-white tracking-tight">
            The Journey of ByteBash
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200"></div>
            <div className="space-y-12">
              {[
                {
                  year: "21.02.2025",
                  title: "Starting project",
                  description: "We launched our first version with core features.",
                },
                {
                  year: "21.02.2025 (Night)",
                  title: "Version one is Done",
                  description: "We built the structure and main functionalities.",
                },
                {
                  year: "22.02.2025",
                  title: "Verion Two",
                  description: "Built the whole app and all the features.",
                },
                {
                  year: "23.02.2025",
                  title: "Final Version",
                  description: "Launched our app and ready to present.",
                },
              ].map((item, index) => (
                  <div key={item.year} className={`flex ${index % 2 === 0 ? "flex-row-reverse" : ""} items-center`}>
                    <div className="w-1/2"></div>
                    <div className="w-6 h-6 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 bg-primary rounded-full"></div>
                    <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
                      <div className="bg-background p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold mb-2">{item.year}</h3>
                        <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                        <p className="text-primary">{item.description}</p>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials section */}
        <section className="mx-auto py-20 px-4 max-w-screen-2xl bg-gray-50">
          <p className="tracking-widest text-sm font-bold text-primary text-center uppercase">Testimonials</p>
          <h2 className="mt-2 mb-14 text-center text-4xl md:text-6xl font-bold text-black  dark:text-white tracking-tight">
            What our customers say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "John Doe",
                role: "A Fan of ByteBash",
                image: "https://randomuser.me/api/portraits/men/1.jpg",
                quote: "ByteBash is a 100% to win the Hackathon 2025 in Burgas!",
              },
              {
                name: "Jane Smith",
                role: "A Fan of ByteBash",
                image: "https://randomuser.me/api/portraits/women/2.jpg",
                quote: "The user interface is intuitive and the features are exactly what we needed.",
              },
              {
                name: "Mike Johnson",
                role: "A Fan of ByteBash",
                image: "https://randomuser.me/api/portraits/men/3.jpg",
                quote: `This is the best app, my school is much better now.`,
              },
            ].map((testimonial, index) => (
                <Card key={index} className="bg-background">
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
                        <p className="text-sm text-primary">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">&quot;{testimonial.quote}&quot;</p>
                  </CardContent>
                </Card>
            ))}
          </div>
        </section>

        {/* Pricing section */}
        <section className="mx-auto py-20 px-4 max-w-screen-2xl">
          <p className="tracking-widest text-sm font-bold text-primary text-center uppercase">Pricing</p>
          <h2 className="mt-2 mb-14 text-center text-4xl md:text-6xl font-bold text-black dark:dark:text-black text-white tracking-tight">
            Choose your plan
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Free",
                price: "$0",
                features: ["3 modules", "7 GB storage", "Basic support"],
                isPopular: false,
              },
              {
                name: "Pro",
                price: "$29",
                features: ["Up to 10 modules", "80 GB storage", "Priority support", "Advanced analytics"],
                isPopular: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                features: ["All of the modules", "Dedicated support", "Custom integrations"],
                isPopular: false,
              },
            ].map((plan, index) => (
                <Card key={index} className={`${plan.isPopular ? "border-primary" : "border-gray-200"} relative`}>
                  {plan.isPopular && (
                      <div className="absolute top-0 right-0 bg-primary dark:text-black text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                        Popular
                      </div>
                  )}
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-4xl font-bold mb-4">
                      {plan.price}
                      <span className="text-base font-normal text-primary">/month</span>
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

        {/*<section className="mx-auto py-20 px-4 max-w-screen-2xl">*/}
        {/*  <p className="tracking-widest text-sm font-bold text-primary text-center uppercase">Our Team</p>*/}
        {/*  <h2 className="mt-2 mb-14 text-center text-4xl md:text-6xl font-bold text-black dark:dark:text-black text-white tracking-tight">*/}
        {/*    Meet the experts*/}
        {/*  </h2>*/}
        {/*  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">*/}
        {/*    {[*/}
        {/*      {*/}
        {/*        name: "John Smith",*/}
        {/*        role: "CEO & Founder",*/}
        {/*        image: "https://randomuser.me/api/portraits/men/1.jpg",*/}
        {/*      },*/}
        {/*      {*/}
        {/*        name: "Sarah Johnson",*/}
        {/*        role: "CTO",*/}
        {/*        image: "https://randomuser.me/api/portraits/women/2.jpg",*/}
        {/*      },*/}
        {/*      {*/}
        {/*        name: "Michael Brown",*/}
        {/*        role: "Lead Designer",*/}
        {/*        image: "https://randomuser.me/api/portraits/men/3.jpg",*/}
        {/*      },*/}
        {/*      {*/}
        {/*        name: "Emily Davis",*/}
        {/*        role: "Marketing Director",*/}
        {/*        image: "https://randomuser.me/api/portraits/women/4.jpg",*/}
        {/*      },*/}
        {/*    ].map((member, index) => (*/}
        {/*        <Card key={index} className="bg-background">*/}
        {/*          <CardContent className="p-6 text-center">*/}
        {/*            <Image*/}
        {/*                src={member.image || "/placeholder.svg"}*/}
        {/*                alt={member.name}*/}
        {/*                width={200}*/}
        {/*                height={200}*/}
        {/*                className="rounded-full mx-auto mb-4"*/}
        {/*            />*/}
        {/*            <h3 className="font-semibold text-xl">{member.name}</h3>*/}
        {/*            <p className="text-primary">{member.role}</p>*/}
        {/*          </CardContent>*/}
        {/*        </Card>*/}
        {/*    ))}*/}
        {/*  </div>*/}
        {/*</section>*/}

        {/*/!* FAQ section *!/*/}
        {/*<section className="mx-auto py-20 px-4 max-w-screen-2xl bg-background">*/}
        {/*  <p className="tracking-widest text-sm font-bold text-primary text-center uppercase">FAQ</p>*/}
        {/*  <h2 className="mt-2 mb-14 text-center text-4xl md:text-6xl font-bold text-black tracking-tight">*/}
        {/*    Frequently Asked Questions*/}
        {/*  </h2>*/}
        {/*  <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">*/}
        {/*    {faqs.map((faq, index) => (*/}
        {/*        <AccordionItem key={index} value={`item-${index + 1}`}>*/}
        {/*          <AccordionTrigger>{faq.question}</AccordionTrigger>*/}
        {/*          <AccordionContent>{faq.answer}</AccordionContent>*/}
        {/*        </AccordionItem>*/}
        {/*    ))}*/}
        {/*  </Accordion>*/}
        {/*</section>*/}

        {/* Contact form section */}
        <section className="mx-auto py-20 px-4 max-w-screen-2xl">
          <p className="tracking-widest text-sm font-bold text-primary text-center uppercase">Contact Us</p>
          <h2 className="mt-2 mb-14 text-center text-4xl md:text-6xl font-bold text-black dark:text-white tracking-tight">
            Get in touch
          </h2>
          <form className="max-w-2xl mx-auto space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-primary mb-1">
                  Name
                </label>
                <Input type="text" id="name" placeholder="Your name" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary mb-1">
                  Email
                </label>
                <Input type="email" id="email" placeholder="Your email" required />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-primary mb-1">
                Subject
              </label>
              <Input type="text" id="subject" placeholder="Subject" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-primary mb-1">
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
        <section className="mx-auto py-20 px-4 max-w-screen-2xl bg-primary dark:text-black text-white">
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
        <footer className="bg-background text-primary py-12">
          <div className="mx-auto max-w-screen-2xl px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg text-primary font-semibold mb-4">About Us</h3>
                <p className="text-primary">
                  We&apos;re on a mission to make work easier and more productive for teams everywhere.
                </p>
              </div>
              <div>
                <h3 className="text-lg text-primary font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-primary hover:text-accent  transition-colors">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-primary hover:text-accent  transition-colors">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-primary hover:text-accent transition-colors">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-primary hover:text-black transition-colors">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-primary hover:dark:text-black transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-primary hover:dark:text-black transition-colors">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-primary hover:dark:text-black transition-colors">
                      Cookie Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Connect</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-primary hover:dark:text-black transition-colors">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-primary hover:dark:text-black transition-colors">
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-primary hover:dark:text-black transition-colors">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-primary hover:dark:text-black   transition-colors">
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-800 text-center text-primary">
              <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
            </div>
          </div>
        </footer>

        {/* Add remaining sections: Team, FAQ, Contact form, CTA, and Footer */}
      </div>
  )
}

export default LandingPage

