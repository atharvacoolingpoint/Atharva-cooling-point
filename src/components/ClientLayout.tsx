'use client';

import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import MobileDock from './MobileDock';
import BookingModal from './BookingModal';
import WhatsAppFloat from './WhatsAppFloat';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      <Header onOpenBooking={() => setBookingOpen(true)} />
      <main className="flex-grow pb-24 lg:pb-0">
        {children}
      </main>
      <Footer />
      <WhatsAppFloat />
      <MobileDock onOpenBooking={() => setBookingOpen(true)} />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}
