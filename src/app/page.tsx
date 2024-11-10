import {
  AboutCRMSection,
  AboutSoftwareSection,
  GallerySection,
  HeroSection,
  InquiryFormSection,
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
      <InquiryFormSection />
      <VideoSection />
      <GallerySection />
      <AboutCRMSection />
      <AboutSoftwareSection />
      <ServicesSection />
      <PricingSection />
    </>
  );
}
