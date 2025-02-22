import { Lamp, Laptop, Monitor, Network, UserMinus } from "lucide-react";
import { type Navigation } from "~/types";

export function getNavigationList(pathname: string): Navigation[] {
  return [
    {
      title: "Computers",
      url: "/app",
      icon: Laptop,
      active: pathname.endsWith("/app"),
    },
    {
      title: "Lamps",
      url: "/app/lamps",
      icon: Lamp,
      active: pathname.includes("/app/lamps"),
    },
    {
      title: "Equipment",
      url: "/app/equipment",
      icon: Monitor,
      active: pathname.includes("/app/equipment"),
    },
    {
      title: "Absentees",
      url: "/app/absentees",
      icon: UserMinus,
      active: pathname.includes("/app/absentees"),
    },
    {
      title: "Networks",
      url: "/app/networks",
      icon: Network,
      active: pathname.includes("/app/networks"),
    },
  ];
}
