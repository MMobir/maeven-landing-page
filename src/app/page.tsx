import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import SocialProof from "@/components/social-proof";
import Problem from "@/components/problem";
import HowItWorks from "@/components/how-it-works";
import Handles from "@/components/handles";
import Quote from "@/components/quote";
import Founder from "@/components/founder";
import FinalCta from "@/components/final-cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SocialProof />
      <Problem />
      <HowItWorks />
      <Handles />
      <Quote />
      <Founder />
      <FinalCta />
      <Footer />
    </>
  );
}
