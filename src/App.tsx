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
import { BookPreviewModal } from './components/Modals/BookPreviewModal';
import { InfoModal } from './components/Modals/InfoModal';

export default function App() {
  const [readerModalOpen, setReaderModalOpen] = useState(false);
  const [infoModalType, setInfoModalType] = useState<'privacy' | 'terms' | 'contact' | 'press' | null>(null);

  const handleScrollToFormats = () => {
    const el = document.getElementById('formatos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f9f9f9] text-[#1a1c1c] font-sans antialiased selection:bg-[#ffd9e2] selection:text-[#410008] flex flex-col">
      {/* Top Sticky Navigation */}
      <Navbar
        onOpenPurchase={handleScrollToFormats}
        onOpenReader={() => setReaderModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection
          onSelectEdition={handleScrollToFormats}
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
        <EditionsSection onSelectEdition={handleScrollToFormats} />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Final Conversion CTA */}
        <FinalCtaSection onOpenPurchase={handleScrollToFormats} />
      </main>

      {/* Footer */}
      <Footer onOpenInfo={(type) => setInfoModalType(type)} />

      {/* Reader Sample Modal */}
      {readerModalOpen && (
        <BookPreviewModal
          onClose={() => setReaderModalOpen(false)}
          onOpenPurchase={() => {
            setReaderModalOpen(false);
            handleScrollToFormats();
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
