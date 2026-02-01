"use client";

import { useState } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { PopularDishes } from "@/components/home/PopularDishes";
import { EventsSection } from "@/components/home/EventsSection";
import { ReservationBanner } from "@/components/home/ReservationBanner";
import { ReservationModal } from "@/components/shared/ReservationModal";

export default function Home() {
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);

  const openReservationModal = () => setIsReservationModalOpen(true);
  const closeReservationModal = () => setIsReservationModalOpen(false);

  return (
    <>
      <Navigation onReserveClick={openReservationModal} />
      <main>
        <HeroSection onReserveClick={openReservationModal} />
        <PopularDishes />
        <EventsSection />
        <ReservationBanner onReserveClick={openReservationModal} />
      </main>
      <Footer />
      <ReservationModal
        isOpen={isReservationModalOpen}
        onClose={closeReservationModal}
      />
    </>
  );
}
