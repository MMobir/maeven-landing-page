import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import SocialProof from "@/components/social-proof";
import AhaMoment from "@/components/aha-moment";
import HowItWorks from "@/components/how-it-works";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SocialProof />
      <AhaMoment />
      <HowItWorks />
      <Footer />
    </>
  );
}
