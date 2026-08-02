/**
 * Root home page — served at "/"
 * Wraps the marketing layout (Navbar + Footer + FloatingSocials)
 * around the DotTech home page content.
 */
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingSocials from "@/components/layout/FloatingSocials";
import HomePageContent from "./(marketing)/HomeContent";

export default function RootPage() {
  return (
    <>
      <Navbar />
      <FloatingSocials />
      <HomePageContent />
      <Footer />
    </>
  );
}
