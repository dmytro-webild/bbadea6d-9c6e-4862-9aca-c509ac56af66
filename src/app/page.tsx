"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import BlogCardTwo from '@/components/sections/blog/BlogCardTwo';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardTwentyThree from '@/components/sections/feature/FeatureCardTwentyThree';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="smallMedium"
        sizing="mediumLarge"
        background="blurBottom"
        cardStyle="glass-depth"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="layered"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "#hero",
        },
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Shop",
          id: "#products",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="Mooshine"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardGallery
      background={{
        variant: "gradient-bars",
      }}
      title="Style That Doesn't Cost The Earth"
      description="Discover timeless, organic clothing crafted for longevity and comfort. Mooshine merges style with sustainability for your daily essentials."
      buttons={[
        {
          text: "Shop Collection",
          href: "#products",
        },
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448804.jpg",
          imageAlt: "Sustainable fashion lifestyle",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-pregnant-waiting-baby_1303-25659.jpg",
          imageAlt: "Model in organic clothing",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/couple-sharing-tender-public-intimacy-moments_23-2149430232.jpg",
          imageAlt: "Sustainable clothing store",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-spring-wardrobe-switch_23-2150478993.jpg",
          imageAlt: "Lifestyle model detail",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-with-long-red-hair-linen-dress-gathering-mushrooms-forest_1321-1475.jpg",
          imageAlt: "Organic fabric detail",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/straw-hat-hanging-beach-towels_53876-95418.jpg",
          imageAlt: "Ethical fashion brand",
        },
      ]}
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="Our Commitment to Nature"
      description={[
        "Mooshine Clothing was born from a simple idea: that fashion shouldn't compromise the planet.",
        "We source only 100% GOTS-certified organic cotton and recycled materials for every piece we make.",
        "Our ethical supply chain ensures fair wages and safe working conditions for every person in our process.",
      ]}
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Organic Crewneck",
          price: "$45",
          variant: "Forest Green",
          imageSrc: "http://img.b2bpic.net/free-photo/low-angle-female-with-skateboard_23-2148436021.jpg",
        },
        {
          id: "p2",
          name: "Linen Everyday Shirt",
          price: "$65",
          variant: "Sand",
          imageSrc: "http://img.b2bpic.net/free-photo/young-handsome-man-posing-quarry_1303-28636.jpg",
        },
        {
          id: "p3",
          name: "Sustainable Hoodie",
          price: "$80",
          variant: "Deep Green",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-with-backpack-forest_23-2148523877.jpg",
        },
        {
          id: "p4",
          name: "Canvas Tote Bag",
          price: "$25",
          variant: "Natural",
          imageSrc: "http://img.b2bpic.net/free-photo/women-s-day-still-life-with-makeup-jewelry_23-2149263160.jpg",
        },
        {
          id: "p5",
          name: "Knit Beanie",
          price: "$30",
          variant: "Earth Tone",
          imageSrc: "http://img.b2bpic.net/free-photo/blond-woman-warm-clothes_23-2147966112.jpg",
        },
        {
          id: "p6",
          name: "Organic Joggers",
          price: "$70",
          variant: "Forest Green",
          imageSrc: "http://img.b2bpic.net/free-photo/stylish-lady-wearing-sportswear-sneakers-spending-time-city-while-enjoying-hot-drink-female-fashion-city-lifestyle_132075-9200.jpg",
        },
      ]}
      title="Curated Essentials"
      description="Browse our latest drop of organic essentials, designed to be worn on repeat."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyThree
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",
          title: "100% Organic",
          tags: [
            "Eco-friendly",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/view-depressed-man-laying-floor_23-2149699133.jpg",
        },
        {
          id: "f2",
          title: "Ethical Production",
          tags: [
            "Fair Trade",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-hand-holding-paper-piece_23-2150061866.jpg",
        },
        {
          id: "f3",
          title: "Zero Plastic Packaging",
          tags: [
            "Sustainable",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-posing-with-flower_23-2150170558.jpg",
        },
      ]}
      title="Why Choose Mooshine?"
      description="More than just clothes—a movement toward a cleaner future."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah Miller",
          role: "Creative Director",
          company: "Design Studio",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-lovable-woman-with-trench-coat_197531-19748.jpg",
        },
        {
          id: "2",
          name: "David Chen",
          role: "Photographer",
          company: "Lens Co.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/positive-brunette-woman-white-t-shirt-pink-jacket-touches-her-hair-band-smiles-against-wall-cafe-terrace_197531-17037.jpg",
        },
        {
          id: "3",
          name: "Emily Watson",
          role: "Teacher",
          company: "Local Schools",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-with-flowers_23-2149235781.jpg",
        },
        {
          id: "4",
          name: "Michael Reed",
          role: "Freelancer",
          company: "Self Employed",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/park_23-2148015188.jpg",
        },
        {
          id: "5",
          name: "Jessica Lee",
          role: "Architect",
          company: "Build Works",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/image-overjoyed-curly-haired-woman-striped-jumper-spends-spare-time-garment-shop_273609-32939.jpg",
        },
      ]}
      title="Community Voices"
      description="Hear what our wearers say about Mooshine comfort."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "Where are your products made?",
          content: "Our clothes are responsibly crafted in ethically audited facilities in Portugal and Turkey.",
        },
        {
          id: "q2",
          title: "Do you offer international shipping?",
          content: "Yes, we ship globally using carbon-neutral logistics providers.",
        },
        {
          id: "q3",
          title: "What is your return policy?",
          content: "We offer easy 30-day returns for any unworn items in original condition.",
        },
      ]}
      title="Common Questions"
      description="Everything you need to know about our sourcing and shipping."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="blog" data-section="blog">
      <BlogCardTwo
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      title="Sustainability Insights"
      description="Deep dives into eco-friendly living and style."
      blogs={[
        {
          id: "b1",
          category: "Environment",
          title: "The True Cost of Fast Fashion",
          excerpt: "Why choosing organic matters more than ever.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-stylish-girl-wearing-blank-t-shirt-looking-down_273609-13736.jpg",
          authorName: "Mooshine",
          authorAvatar: "http://img.b2bpic.net/free-photo/portrait-happy-woman-with-shopping-bags_23-2147823576.jpg",
          date: "Oct 12, 2024",
        },
        {
          id: "b2",
          category: "Lifestyle",
          title: "How to Build a Capsule Wardrobe",
          excerpt: "Curating essentials for a minimalist life.",
          imageSrc: "http://img.b2bpic.net/free-photo/photo-fabric-texture-pattern_58702-11608.jpg",
          authorName: "Mooshine",
          authorAvatar: "http://img.b2bpic.net/free-photo/fashion-woman-casual-summer-clothes_158538-10412.jpg",
          date: "Sep 28, 2024",
        },
        {
          id: "b3",
          category: "Care",
          title: "Caring for Organic Cotton",
          excerpt: "Keep your garments looking fresh longer.",
          imageSrc: "http://img.b2bpic.net/free-photo/smiley-woman-standing-clean-urban-space_23-2149015679.jpg",
          authorName: "Mooshine",
          authorAvatar: "http://img.b2bpic.net/free-photo/portrait-stylish-woman-posing-fashionable-outfit_23-2149021803.jpg",
          date: "Sep 15, 2024",
        },
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Get in touch"
      title="Join the Mooshine Community"
      description="Sign up for early access to drops and exclusive sustainability tips."
      buttons={[
        {
          text: "Contact Support",
          href: "mailto:hello@mooshine.clothing",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Shop",
          items: [
            {
              label: "All Products",
              href: "#products",
            },
            {
              label: "New Arrivals",
              href: "#",
            },
          ],
        },
        {
          title: "About",
          items: [
            {
              label: "Our Story",
              href: "#about",
            },
            {
              label: "Sustainability",
              href: "#",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Shipping",
              href: "#",
            },
            {
              label: "Returns",
              href: "#",
            },
          ],
        },
      ]}
      logoText="MOOSHINE"
      copyrightText="© 2025 Mooshine Clothing. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
