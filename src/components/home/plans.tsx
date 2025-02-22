"use client";
import { Check } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";

interface Plan {
  name: string;
  price: string;
  features: string[];
  isPopular: boolean;
}

const plans: Plan[] = [
  {
    name: "Free",
    price: "$0",
    features: ["3 modules", "Basic support"],
    isPopular: false,
  },
  {
    name: "Pro",
    price: "$29",
    features: [
      "Up to 10 modules",
      "Priority support",
      "Advanced analytics",
    ],
    isPopular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "All of the modules",
      "Dedicated support",
      "Custom integrations",
    ],
    isPopular: false,
  },
];

export function PlansSection() {
  return (
    <section className="mx-auto max-w-screen-2xl px-4 py-20">
      <p className="text-center text-sm font-bold uppercase tracking-widest text-primary">
        Pricing
      </p>
      <h2 className="mb-14 mt-2 text-center text-4xl font-bold tracking-tight text-foreground md:text-6xl">
        Choose your plan
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {plans.map((plan, index) => (
          <Card
            key={index}
            className={`relative ${plan.isPopular ? "border-primary" : "border-gray-200"}`}
          >
            {plan.isPopular && (
              <div className="absolute right-0 top-0 rounded-bl-lg rounded-tr-lg bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                Popular
              </div>
            )}

            <CardContent className="p-6">
              <h3 className="mb-2 text-2xl font-bold">{plan.name}</h3>
              <p className="mb-4 text-4xl font-bold">
                {plan.price}
                <span className="text-base font-normal text-muted-foreground">
                  /month
                </span>
              </p>

              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="mr-2 text-green-500" size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className="w-full"
                variant={plan.isPopular ? "default" : "outline"}
              >
                Choose Plan
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
