"use client";

import { useState } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { MenuHero } from "@/components/menu/MenuHero";
import { MenuBook } from "@/components/menu/MenuBook";
import { ReservationModal } from "@/components/shared/ReservationModal";

export default function MenuPage() {
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);

  return (
    <>
      <Navigation onReserveClick={() => setIsReservationModalOpen(true)} />
      <main>
        <MenuHero />
        <MenuBook />
      </main>
      <Footer />
      <ReservationModal
        isOpen={isReservationModalOpen}
        onClose={() => setIsReservationModalOpen(false)}
      />
    </>
  );
}
