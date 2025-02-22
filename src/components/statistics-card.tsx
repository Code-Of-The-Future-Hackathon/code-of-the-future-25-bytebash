import * as React from "react";

interface StatisticsCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
}

export function StatisticsCard({ title, value, icon }: StatisticsCardProps) {
  return (
    <div className="flex items-center space-x-4 rounded-md border p-4">
      <div className="flex-shrink-0 rounded-full bg-primary/10 p-2">{icon}</div>
      <div>
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
}
