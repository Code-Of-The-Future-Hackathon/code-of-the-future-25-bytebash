"use client";
import Image from "next/image";
import Link from "next/link";

import { Button } from "~/components/ui/button";

export function HeroSection() {
  return (
    <section className="max-w-2xl:mt-[--nav-height] relative flex min-h-screen flex-wrap items-center justify-around gap-6 p-4">
      <div className="animate-fade-right flex h-full max-w-2xl flex-col items-start justify-center gap-6 max-md:items-center max-md:text-center">
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-foreground md:text-8xl">
          ByteBash
        </h1>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-foreground">
          The best way to monitor your school
        </h1>
        <p className="text-lg text-muted-foreground">
          Looking for complete access and control over your school&apos;s
          inventory? <br />
          Effortlessly track and manage all school assets in one place.
        </p>
        <p className="font-bold">
          Join thousands of educators and administrators who trust our app to
          keep their schools running smoothly!
        </p>
        <Button
          asChild
          className="w-full rounded-md bg-foreground px-3 py-2 text-secondary"
        >
          <Link href="/app">Register</Link>
        </Button>
      </div>
      <Image
        alt="content image"
        src="https://i.imgur.com/SNEjwAt.png"
        width={2940}
        height={1960}
        className="animate-fade-left max-h-[540px] w-full max-w-3xl rounded-xl object-cover object-top grayscale"
      />
    </section>
  );
}
