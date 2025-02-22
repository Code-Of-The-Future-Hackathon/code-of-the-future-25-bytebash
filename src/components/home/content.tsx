"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "../ui/button";

export function ContentSection() {
  return (
    <section className="mx-auto max-w-screen-2xl p-4 py-20">
      {/* Top label */}
      <p className="mb-2 text-center font-medium uppercase tracking-wide text-primary lg:text-left">
        content
      </p>

      {/* Title & description */}
      <div className="mb-4 flex flex-col items-center justify-center gap-y-6 max-md:mx-auto max-md:max-w-lg lg:mb-8 lg:flex-row lg:justify-between lg:gap-y-0">
        <div className="w-full text-center lg:w-2/4 lg:text-left">
          <h2 className="mx-auto max-w-max text-4xl font-bold lg:mx-0 lg:mb-6 lg:max-w-2xl lg:text-6xl">
            Increased productivity with ByteBash
          </h2>
        </div>
        <div className="w-full text-center lg:w-2/4 lg:text-left">
          <p className="mb-5 text-lg text-primary">
            Enhance productivity and streamline daily operations effortlessly
            with ByteBash, your ultimate solution for efficient school
            management.
          </p>

          {/* Shadcn Button -> Next.js Link */}
          <Button
            asChild
            variant="default"
            className="flex w-fit flex-row items-center justify-center gap-2 text-base font-semibold lg:justify-start"
          >
            <Link href="/app">
              Get Started
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Image and overlay */}
      <div className="relative">
        <Image
          alt="content image"
          src="https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          width={2940}
          height={1960}
          className="max-h-[540px] w-full object-cover object-center grayscale"
        />
      </div>
    </section>
  );
}
