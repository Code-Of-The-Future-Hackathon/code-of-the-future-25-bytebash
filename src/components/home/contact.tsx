"use client";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";

export function ContactSection() {
  return (
    <section className="mx-auto max-w-screen-2xl px-4 py-20">
      <p className="text-center text-sm font-bold uppercase tracking-widest text-primary">
        Contact Us
      </p>
      <h2 className="mb-14 mt-2 text-center text-4xl font-bold tracking-tight text-black dark:text-white md:text-6xl">
        Get in touch
      </h2>

      <form className="mx-auto max-w-2xl space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="mb-1 block text-sm font-medium text-primary"
            >
              Name
            </label>
            <Input type="text" id="name" placeholder="Your name" required />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-medium text-primary"
            >
              Email
            </label>
            <Input type="email" id="email" placeholder="Your email" required />
          </div>
        </div>

        <div>
          <label
            htmlFor="subject"
            className="mb-1 block text-sm font-medium text-primary"
          >
            Subject
          </label>
          <Input type="text" id="subject" placeholder="Subject" required />
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-1 block text-sm font-medium text-primary"
          >
            Message
          </label>
          <Textarea className={"max-h-[200px]"} id="message" placeholder="Your message" rows={5} required />
        </div>

        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>
    </section>
  );
}
