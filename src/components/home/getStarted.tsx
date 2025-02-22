"use client";

import Link from "next/link";
import { Button } from "~/components/ui/button";

export function GetStartedSection() {
  return (
    <section className="bg-primary px-4 py-20 text-secondary">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-6 text-4xl font-bold md:text-6xl">
          Ready to get started?
        </h2>
        <p className="mb-8 text-xl">
          Join thousands of satisfied customers and take your productivity to
          the next level.
        </p>
        <Button variant="secondary" size="lg">
          <Link href="/app"> Start Your Journey</Link>
        </Button>
      </div>
    </section>
  );
}
