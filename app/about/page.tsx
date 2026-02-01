"use client";

import { useState } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { FounderSection } from "@/components/about/FounderSection";
import { ValuesSection } from "@/components/about/ValuesSection";
import { LocationSection } from "@/components/about/LocationSection";
import { ReservationModal } from "@/components/shared/ReservationModal";

export default function AboutPage() {
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);

  return (
    <>
      <Navigation onReserveClick={() => setIsReservationModalOpen(true)} />
      <main>
        <AboutHero />
        <FounderSection />
        <ValuesSection />
        <LocationSection />
      </main>
      <Footer />
      <ReservationModal
        isOpen={isReservationModalOpen}
        onClose={() => setIsReservationModalOpen(false)}
      />
    </>
  );
}
