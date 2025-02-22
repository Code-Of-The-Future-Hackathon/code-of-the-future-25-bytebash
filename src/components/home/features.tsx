"use client";

import {
    ChevronRight,
    LucideIcon,
    MonitorSmartphone,
    UserX,
    Wifi,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Card, CardContent } from "~/components/ui/card";

const features = [
  {
    icon: Wifi,
    title: "Computers, Periphery and Wi-Fi",
    description:
      "Monitor and manage all IT assets, including computers, accessories, and network infrastructure for smooth operation.",
    link: "/app/computers",
  },
  {
    icon: MonitorSmartphone,
    title: "Security & Equipment",
    description:
      "Track security devices, alarms, and other equipment to ensure a safe and well-equipped environment.",
    link: "/app/equipment",
  },
  {
    icon: UserX,
    title: "Absentee Management",
    description:
      "Efficiently track and manage student absences, improving attendance rates and communication with parents.",
    link: "/app/absentees",
  },
];

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
};
const FeatureCard = ({
  icon: Icon,
  title,
  description,
  link,
}: FeatureCardProps) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = (y - centerY) / 10;
    const tiltY = (centerX - x) / 10;
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <Link href={link}>
      <Card
        className={`group flex max-w-lg flex-col items-center justify-center gap-4 rounded-xl border border-gray-300 bg-background px-10 transition-all duration-300 ease-out md:aspect-square ${
          isHovered ? "border-primary drop-shadow-lg" : ""
        }`}
        style={{
          transform: `perspective(2000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          boxShadow: isHovered
            ? `0 0 20px 5px rgba(var(--primary-rgb), 0.3), 
               0 0 30px 10px rgba(var(--primary-rgb), 0.2), 
               0 0 40px 15px rgba(var(--primary-rgb), 0.1)`
            : "",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <CardContent className="flex flex-col items-center justify-center">
          <div
            className={`h-16 w-16 self-center rounded-full border bg-background p-3 text-primary transition-all duration-300 ${
              isHovered ? "scale-110" : ""
            }`}
          >
            <Icon className="h-full w-full" />
          </div>
          <h3 className="mt-4 text-center text-xl font-medium md:text-3xl">
            {title}
          </h3>
          <p className="mt-2 text-center text-sm text-primary md:text-base">
            {description}
          </p>
          <h5 className="flex p-2 font-bold transition-all duration-500 group-hover:text-lg">
            Checkout More <ChevronRight />
          </h5>
        </CardContent>
      </Card>
    </Link>
  );
};

export default function FeatureSection() {
  return (
    <section className="relative isolate overflow-hidden bg-primary p-4 py-20">
      <p className="mb-2 text-center font-medium uppercase tracking-wide text-secondary">
        Features
      </p>
      <h2 className="text-center text-4xl font-bold tracking-tight text-secondary md:text-6xl">
        Enjoy the best set of modules
      </h2>
      <p className="mx-auto mt-5 text-center text-lg text-secondary md:max-w-xl">
        Choose from a wide range of modules tailored for your school, covering
        every aspect of technology management and student attendance.
      </p>
      <div className="mx-auto mt-10 grid gap-10 px-10 md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
}
