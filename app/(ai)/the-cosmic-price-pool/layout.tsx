import type { Metadata } from "next";

import { ChatSidebar } from "@/components";
import { GameStats } from "@/constants/staticText";
// import { MotionDiv } from "@/constants/motionProps";

export const metadata: Metadata = {
  title: "Lyra | The Cosmic Guardian",
  description:
    "Lyra is the cosmic guardian, overseeing a growing prize pool and testing the ingenuity and wits of humanity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-full bg-fixed overflow-hidden bg-gradient-to-b from-black to-dark bg-center">
      <div className="flex h-full w-full relative overflow-hidden">
        <div className="h-full top-0 left-0 show-md">
          <ChatSidebar
            about="Outsmart Lyra, guardian of the Quantum Nexus, by crafting authentic, strategic queries that challenge her unyielding logic. Navigate her complex decision-making process to unlock the ever-growing prize pool, earning rewards that have the power to reshape the very fabric of the cosmos."
            stats={GameStats}
          />
        </div>
        <div className="w-full relative h-full overflow-auto">{children}</div>
      </div>
    </div>
  );
}
