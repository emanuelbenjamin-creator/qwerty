import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TargetAudienceSection } from './components/TargetAudienceSection';
import { MethodSection } from './components/MethodSection';
import { AuthorSection } from './components/AuthorSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { EditionsSection } from './components/EditionsSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { PurchaseModal } from './components/Modals/PurchaseModal';
import { BookPreviewModal } from './components/Modals/BookPreviewModal';
import { InfoModal } from './components/Modals/InfoModal';

export default function App() {
  const [purchaseModalOpen, setPurchaseModalOpen] = useState(false);
  const [selectedEdition, setSelectedEdition] = useState<'digital' | 'print' | 'audio'>('digital');
  const [readerModalOpen, setReaderModalOpen] = useState(false);
  const [infoModalType, setInfoModalType] = useState<'privacy' | 'terms' | 'contact' | 'press' | null>(null);

  const handleOpenPurchase = (edition: 'digital' | 'print' | 'audio' = 'digital') => {
    setSelectedEdition(edition);
    setPurchaseModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f9f9f9] text-[#1a1c1c] font-sans antialiased selection:bg-[#ffd9e2] selection:text-[#410008] flex flex-col">
      {/* Top Sticky Navigation */}
      <Navbar
        onOpenPurchase={() => handleOpenPurchase('digital')}
        onOpenReader={() => setReaderModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection
          onSelectEdition={(edition) => handleOpenPurchase(edition)}
          onOpenReader={() => setReaderModalOpen(true)}
        />

        {/* Target Audience / Problems Solved */}
        <TargetAudienceSection />

        {/* The Method / Deep Dive (Obsidian Dark) */}
        <MethodSection />

        {/* About the Author */}
        <AuthorSection />

        {/* Reader Testimonials & Social Proof */}
        <TestimonialsSection />

        {/* Book Editions & Formats */}
        <EditionsSection onSelectEdition={(edition) => handleOpenPurchase(edition)} />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Final Conversion CTA */}
        <FinalCtaSection onOpenPurchase={() => handleOpenPurchase('digital')} />
      </main>

      {/* Footer */}
      <Footer onOpenInfo={(type) => setInfoModalType(type)} />

      {/* Interactive Modals */}
      {purchaseModalOpen && (
        <PurchaseModal
          initialEdition={selectedEdition}
          onClose={() => setPurchaseModalOpen(false)}
        />
      )}

      {readerModalOpen && (
        <BookPreviewModal
          onClose={() => setReaderModalOpen(false)}
          onOpenPurchase={() => {
            setReaderModalOpen(false);
            handleOpenPurchase('digital');
          }}
        />
      )}

      {infoModalType && (
        <InfoModal
          type={infoModalType}
          onClose={() => setInfoModalType(null)}
        />
      )}
    </div>
  );
}
