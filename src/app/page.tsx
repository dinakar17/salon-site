"use client";

import React, { useState, useEffect } from "react";
import {
  Phone,
  Menu,
  X,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Play,
} from "lucide-react";
import ContactSection from "./ContactSection";
import Image from "next/image";

// Smooth scroll function
const smoothScroll = (targetId: string) => {
  const element = document.getElementById(targetId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

// Navigation Component
const Navigation = ({ scrolled, isMenuOpen, setIsMenuOpen }: any) => {
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    smoothScroll(targetId);
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          <div>
            <Image
              src="/images/logo.png"
              alt="Lumina Logo"
              width={120}
              height={40}
              className="h-auto"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "home")}
              className="text-sm tracking-wide hover:text-gray-600 transition-colors cursor-pointer"
            >
              HOME
            </a>
            <a
              href="#services"
              onClick={(e) => handleNavClick(e, "services")}
              className="text-sm tracking-wide hover:text-gray-600 transition-colors cursor-pointer"
            >
              SERVICES
            </a>
            <a
              href="#gallery"
              onClick={(e) => handleNavClick(e, "gallery")}
              className="text-sm tracking-wide hover:text-gray-600 transition-colors cursor-pointer"
            >
              GALLERY
            </a>
            <a
              href="#testimonials"
              onClick={(e) => handleNavClick(e, "testimonials")}
              className="text-sm tracking-wide hover:text-gray-600 transition-colors cursor-pointer"
            >
              TESTIMONIALS
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="text-sm tracking-wide hover:text-gray-600 transition-colors cursor-pointer"
            >
              CONTACT
            </a>

            <div className="flex items-center space-x-4">
              <div className="text-sm tracking-wide text-gray-600">
                (+91) 91126 64990
              </div>
              <a
                href="tel:+919112664990"
                className="bg-black text-white px-6 py-2 text-sm tracking-wide hover:bg-gray-800 transition-colors"
              >
                CALL NOW
              </a>
            </div>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-6 py-4 space-y-4">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "home")}
              className="block text-sm tracking-wide cursor-pointer"
            >
              HOME
            </a>
            <a
              href="#services"
              onClick={(e) => handleNavClick(e, "services")}
              className="block text-sm tracking-wide cursor-pointer"
            >
              SERVICES
            </a>
            <a
              href="#gallery"
              onClick={(e) => handleNavClick(e, "gallery")}
              className="block text-sm tracking-wide cursor-pointer"
            >
              GALLERY
            </a>
            <a
              href="#testimonials"
              onClick={(e) => handleNavClick(e, "testimonials")}
              className="block text-sm tracking-wide cursor-pointer"
            >
              TESTIMONIALS
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="block text-sm tracking-wide cursor-pointer"
            >
              CONTACT
            </a>
            <div className="text-sm tracking-wide text-gray-600 py-2">
              (+91) 91126 64990
            </div>
            <a
              href="tel:+919112664990"
              className="block w-full bg-black text-white px-6 py-2 text-sm tracking-wide text-center"
            >
              CALL NOW
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

// Hero Section Component
const HeroSection = () => {
  const handleServiceClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    smoothScroll("services");
  };

  return (
    <section id="home" className="min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-6xl md:text-7xl font-light leading-tight">
              Beauty
              <br />
              Refined
            </h1>
            <p className="text-xl font-light opacity-80 leading-relaxed max-w-lg">
              Experience the art of beauty at our luxury salon, where every
              detail is crafted to perfection and every moment is designed to
              inspire.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                onClick={handleServiceClick}
                className="bg-black text-white px-8 py-4 text-sm tracking-wide hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>DISCOVER SERVICES</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="tel:+12125550123"
                className="border border-black text-black px-8 py-4 text-sm tracking-wide hover:bg-black hover:text-white transition-colors flex items-center justify-center space-x-2"
              >
                <Phone className="h-4 w-4" />
                <span>CALL NOW</span>
              </a>
            </div>
          </div>

          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/images/home.webp"
              alt="Luxury Salon Interior"
              className="w-full h-full object-cover shadow-2xl"
              width={800}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Services Section Component
const ServicesSection = () => {
  const services = [
    {
      name: "Hair Design & Styling",
      description: "Expert cuts, color treatments, and premium hair styling",
      price: "From ₹500",
    },
    {
      name: "Nail Artistry",
      description: "Professional manicures, pedicures, and creative nail art",
      price: "From ₹400",
    },
    {
      name: "Skincare & Facials",
      description: "Rejuvenating facials and advanced skincare treatments",
      price: "From ₹800",
    },
    {
      name: "Bridal & Special Events",
      description: "Complete bridal makeover and occasion styling services",
      price: "From ₹3,500",
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6">Our Services</h2>
          <div className="w-20 h-px bg-black mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Experience premium beauty services at Seven The Hair and Beauty
            Salon, Pune's trusted unisex salon offering expert styling and
            treatments with uncompromising attention to detail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="bg-white p-8 hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="text-center">
                  <h3 className="text-xl font-light mb-4 tracking-wide">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="text-lg font-light mb-6">{service.price}</div>
                  <a
                    href="tel:+912027425151"
                    className="text-sm tracking-wide border-b border-black hover:border-gray-400 transition-colors"
                  >
                    CALL FOR APPOINTMENT
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Gallery Modal Component
const GalleryModal = ({
  isOpen,
  currentIndex,
  media,
  onClose,
  onPrevious,
  onNext,
}: any) => {
  if (!isOpen) return null;

  const currentMedia = media[currentIndex];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:text-gray-300 z-10"
      >
        <X className="h-8 w-8" />
      </button>

      <button
        onClick={onPrevious}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>

      <button
        onClick={onNext}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      <div className="max-w-4xl max-h-full p-6">
        {currentMedia.type === "video" ? (
          <video
            src={currentMedia.url}
            controls
            autoPlay
            className="max-w-full max-h-full object-contain"
          />
        ) : (
          <Image
            src={currentMedia.url}
            alt={`Gallery ${currentIndex + 1}`}
            className="max-w-full max-h-full object-contain"
            width={600}
            height={400}
          />
        )}
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-sm">
        {currentIndex + 1} / {media.length}
      </div>
    </div>
  );
};

// Gallery Section Component
const GallerySection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const media = [
    {
      type: "image",
      url: "/images/gallery1.webp",
    },
    {
      type: "image",
      url: "/images/gallery2.jpeg",
    },
    {
      type: "image",
      url: "/images/gallery3.png",
    },
    {
      type: "image",
      url: "/images/gallery4.png",
    },
    {
      type: "image",
      url: "/images/gallery5.png",
    },
    {
      type: "image",
      url: "/images/gallery6.jpeg",
    },
    {
      type: "image",
      url: "/images/gallery7.jpeg",
    },
    {
      type: "image",
      url: "/images/gallery8.jpeg",
    },
    {
      type: "image",
      url: "/images/gallery9.jpeg",
    },
  ];

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % media.length);
  };

  return (
    <>
      <section id="gallery" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6">Gallery</h2>
            <div className="w-20 h-px bg-black mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A glimpse into our world of beauty and the artistry that defines
              our craft.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2">
            {media.map((item, index) => (
              <div
                key={index}
                className={`relative overflow-hidden bg-gray-100 group cursor-pointer ${
                  index % 7 === 0
                    ? "md:col-span-2 md:row-span-2"
                    : index % 5 === 0
                    ? "md:row-span-2"
                    : ""
                }`}
                style={{
                  aspectRatio:
                    index % 7 === 0 ? "1" : index % 5 === 0 ? "1/1.5" : "1",
                }}
                onClick={() => openModal(index)}
              >
                {item.type === "video" ? (
                  <>
                    <video
                      src={item.url}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      muted
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/80 rounded-full p-3">
                        <Play className="h-6 w-6 text-black" />
                      </div>
                    </div>
                  </>
                ) : (
                  <Image
                    src={item.url}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    width={600}
                    height={400}
                  />
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GalleryModal
        isOpen={modalOpen}
        currentIndex={currentIndex}
        media={media}
        onClose={closeModal}
        onPrevious={goToPrevious}
        onNext={goToNext}
      />
    </>
  );
};

// Testimonials Section Component
interface Testimonial {
  name: string;
  text: string;
  location: string;
}

interface StatItem {
  value: string;
  label: string;
  showStars?: boolean;
}

// Testimonials Section Component
const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Priya Sharma",
      text: "Seven Salon has been my go-to place for the past two years. The staff is incredibly skilled and always makes me feel comfortable. Every time I leave, I feel absolutely beautiful and confident.",
      location: "Pradhikaran",
    },
    {
      name: "Rajesh Patil",
      text: "As a working professional, I appreciate their attention to detail and punctuality. The unisex setup is perfect for my family. The hair styling and grooming services are top-notch.",
      location: "Pimpri Chinchwad",
    },
    {
      name: "Sneha Joshi",
      text: "The nail art services here are exceptional! The hygiene standards are impressive, and the staff treats you like family. I've recommended this salon to all my friends in Pune.",
      location: "Nigdi",
    },
  ];

  const stats: StatItem[] = [
    {
      value: "4.8",
      label: "Average Rating",
      showStars: true,
    },
    {
      value: "320+",
      label: "Happy Customers",
    },
    {
      value: "255+",
      label: "Photos Shared",
    },
  ];

  return (
    <section id="testimonials" className="py-12 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 md:mb-6">
            What Our Clients Say
          </h2>
          <div className="w-16 md:w-20 h-px bg-black mx-auto mb-6 md:mb-8"></div>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
            Discover why clients across Pune choose Seven The Hair and Beauty
            Salon for their grooming and beauty needs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 md:p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 rounded-lg"
            >
              {/* Quote Mark */}
              <div className="mb-4 md:mb-6">
                <div className="text-4xl md:text-6xl text-gray-200 font-serif leading-none">
                  &quot;
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6 md:mb-8 italic text-sm md:text-base">
                {testimonial.text}
              </p>

              {/* Author Info */}
              <div className="border-t border-gray-100 pt-4 md:pt-6">
                <div className="font-light text-base md:text-lg tracking-wide text-gray-900">
                  {testimonial.name}
                </div>
                <div className="text-gray-500 text-xs md:text-sm tracking-wide mt-1">
                  {testimonial.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="text-center mt-12 md:mt-16">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm inline-block w-full max-w-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <React.Fragment key={index}>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-light text-gray-800 mb-2">
                      {stat.value}
                    </div>

                    {stat.showStars && (
                      <div className="flex justify-center mb-2 md:mb-1">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className="text-yellow-400 text-lg md:text-xl"
                            role="img"
                            aria-label="star"
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="text-xs md:text-sm text-gray-600 leading-tight">
                      {stat.label}
                    </div>
                  </div>

                  {/* Divider - Hidden on mobile for cleaner layout */}
                  {index < stats.length - 1 && (
                    <div className="hidden sm:flex items-center justify-center">
                      <div className="w-px h-12 md:h-16 bg-gray-200"></div>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// About Section Component
const AboutSection = () => (
  <section className="py-24">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <Image
            src="/images/about.jpeg"
            alt="Seven Salon Team"
            className="w-full h-full object-cover shadow-lg"
            width={600}
            height={400}
          />
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl font-light mb-6">
              About Seven The Hair and Beauty Salon
            </h2>
            <div className="w-20 h-px bg-black mb-8"></div>
          </div>

          <p className="text-lg leading-relaxed text-gray-700">
            Located in the heart of Pradhikaran, Seven The Hair and Beauty Salon
            has been Pune&apos;s trusted destination for premium unisex grooming
            and beauty services. Our team of skilled professionals is dedicated
            to bringing out your natural beauty with precision and care.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            We pride ourselves on creating a welcoming environment where every
            client feels valued. Using high-quality products and maintaining
            exceptional hygiene standards, we ensure that your salon experience
            is both relaxing and transformative.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-base italic text-gray-600 leading-relaxed">
              &quot;Our mission is to make every client look and feel their
              absolute best. Whether you&apos;re here for a simple trim or a
              complete makeover, we treat every service with the same level of
              expertise and attention to detail.&quot;
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-8">
            <div className="text-center">
              <div className="text-3xl font-light mb-2">4.8</div>
              <div className="text-sm tracking-wide text-gray-600">RATING</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light mb-2">320+</div>
              <div className="text-sm tracking-wide text-gray-600">CLIENTS</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light mb-2">8+</div>
              <div className="text-sm tracking-wide text-gray-600">
                SERVICES
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Footer Component
const Footer = () => (
  <footer className="bg-black text-white py-12">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <div className="text-2xl font-light tracking-wider mb-4">SEVEN</div>
          <p className="text-gray-400 mb-4">The Hair and Beauty Salon</p>
          <p className="text-gray-400 text-sm leading-relaxed">
            Your trusted unisex salon in Pradhikaran, Pune, offering premium
            beauty and grooming services with exceptional care.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-light mb-4 tracking-wide">
            CONTACT INFO
          </h3>
          <div className="space-y-2 text-gray-400 text-sm">
            <p>📍 Shop No. B 12/13, Regent Arcade</p>
            <p>Pradhikaran, Pune 411044</p>
            <p>📞 +91 20 2742 5151</p>
            <p>⭐ 4.8/5 Rating | 320+ Reviews</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-light mb-4 tracking-wide">SERVICES</h3>
          <div className="space-y-2 text-gray-400 text-sm">
            <p>Hair Design & Styling</p>
            <p>Nail Art & Manicure</p>
            <p>Skincare & Facials</p>
            <p>Bridal Makeovers</p>
            <p>Men&apos;s Grooming</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-8 text-center">
        <p className="text-gray-400 text-sm">
          © 2025 Seven The Hair and Beauty Salon. All rights reserved.
        </p>
        <p className="text-gray-500 text-xs mt-2">
          Opposite PanOrtho Hospital, Pradhikaran, Pune
        </p>
      </div>
    </div>
  </footer>
);

// Main App Component
const PremiumSalon = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white text-gray-900">
      <Navigation
        scrolled={scrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default PremiumSalon;
