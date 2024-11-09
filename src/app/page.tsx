import {
  AboutSoftwareSection,
  GallerySection,
  HeroSection,
  PricingSection,
  ReviewSection,
  ServicesSection,
  VideoSection,
} from "@/ui/home/sections";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ReviewSection />
      <VideoSection />
      <GallerySection />
      <AboutSoftwareSection />
      <ServicesSection />
      <PricingSection />
    </>
  );
}
