import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CollectionsSection from "@/components/CollectionsSection";
import TimelineSection from "@/components/TimelineSection";
import QRScannerSection from "@/components/QRScannerSection";
import Gallery3DSection from "@/components/Gallery3DSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <CollectionsSection />
        <TimelineSection />
        <QRScannerSection />
        <Gallery3DSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
