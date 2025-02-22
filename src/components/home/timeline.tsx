import type React from "react";
import { cn } from "~/lib/utils";

const timelineItems = [
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
    title: "Version Two",
    description: "Built the whole app and all the features.",
  },
  {
    year: "23.02.2025",
    title: "Final Version",
    description: "Launched our app and ready to present.",
  },
];

const Timeline: React.FC = () => {
  return (
    <section className="mx-auto max-w-screen-2xl px-4 py-12 sm:py-16 md:py-20">
      <p className="text-center text-sm font-bold uppercase tracking-widest text-primary">
        Timeline
      </p>
      <h2 className="mb-8 mt-2 text-center text-3xl font-bold tracking-tight text-foreground sm:mb-12 sm:text-4xl md:mb-14 md:text-5xl lg:text-6xl">
        The Journey of ByteBash
      </h2>
      <div className="relative">
        <div className="absolute left-4 top-0 h-full w-0.5 bg-muted md:left-1/2 md:-translate-x-1/2" />
        <div className="space-y-8 md:space-y-12">
          {timelineItems.map((item, index) => (
            <div
              key={item.year}
              className={cn(
                "flex flex-col md:flex-row",
                index % 2 === 0 ? "md:flex-row-reverse" : "",
              )}
            >
              <div className="md:w-1/2" />
              <div className="absolute left-4 h-4 w-4 rounded-full bg-primary md:left-1/2 md:-translate-x-1/2" />
              <div
                className={cn(
                  "w-full pl-8 md:w-1/2",
                  index % 2 === 0 ? "md:pl-0 md:pr-8" : "md:pl-8",
                  index % 2 === 0 ? "md:text-right" : "md:text-left",
                )}
              >
                <div className="rounded-lg bg-card p-4 shadow-md transition-all duration-300 hover:shadow-lg sm:p-6">
                  <h3 className="mb-2 text-xl font-bold text-primary sm:text-2xl">
                    {item.year}
                  </h3>
                  <h4 className="mb-2 text-lg font-semibold text-card-foreground sm:text-xl">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground sm:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
