import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingSocials from "@/components/layout/FloatingSocials";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <FloatingSocials />
      <main>{children}</main>
      <Footer />
    </>
  );
}
