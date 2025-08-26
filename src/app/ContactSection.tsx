import React, { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Clock,
  AlertCircle,
} from "lucide-react";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useLoadScript,
} from "@react-google-maps/api";

// Google Maps configuration
const libraries: "places"[] = ["places"];
const mapContainerStyle = {
  width: "100%",
  height: "24rem",
};

// Seven The Hair and Beauty Salon location coordinates (Pradhikaran, Pune)
const center = {
  lat: 18.6478,
  lng: 73.7637,
};

// Minimal map styles to keep natural colors
const mapStyles = [
  {
    featureType: "poi.business",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "poi.medical",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "poi.school",
    stylers: [{ visibility: "off" }],
  },
];

// Map options
const mapOptions = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,
  fullscreenControl: true,
};

// Form validation schema with Zod
const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(
      /^(\+91|91)?[6-9]\d{9}$/,
      "Please enter a valid Indian phone number (10 digits starting with 6-9)"
    ),
  message: z
    .string()
    .min(1, "Message is required")
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

// Google Maps Component
const GoogleMapSection: React.FC = () => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [showInfoWindow, setShowInfoWindow] = useState<boolean>(false);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey:
      process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "YOUR_GOOGLE_MAPS_API_KEY",
    libraries,
  });

  const onLoad = useCallback(function callback(map: google.maps.Map) {
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map: google.maps.Map) {
    setMap(null);
  }, []);

  const onMarkerClick = () => {
    setShowInfoWindow(true);
  };

  if (loadError) {
    return (
      <div className="h-96 w-full rounded-lg overflow-hidden shadow-lg bg-gray-200 flex items-center justify-center">
        <div className="text-center">
          <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
          <p className="text-gray-500">Error loading maps</p>
          <p className="text-xs text-gray-400 mt-1">
            Regent Arcade, Pradhikaran, Pune
          </p>
        </div>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="h-96 w-full rounded-lg overflow-hidden shadow-lg bg-gray-200 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black mx-auto mb-2"></div>
          <p className="text-gray-500">Loading map...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={16}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={mapOptions}
      >
        <Marker
          position={center}
          onClick={onMarkerClick}
          icon={{
            path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
            fillColor: "#000000",
            fillOpacity: 1,
            strokeWeight: 0,
            scale: 1.5,
            anchor: new window.google.maps.Point(12, 24),
          }}
        />

        {showInfoWindow && (
          <InfoWindow
            position={center}
            onCloseClick={() => setShowInfoWindow(false)}
          >
            <div className="p-3 max-w-xs">
              <div className="flex items-start space-x-3">
                <div className="bg-black p-2 rounded-full flex-shrink-0">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">
                    Seven The Hair and Beauty Salon
                  </h4>
                  <p className="text-sm text-gray-600 mb-1">
                    Shop No. B 12/13, Regent Arcade
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    Pradhikaran, Pune 411044
                  </p>
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-3 h-3 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 ml-1">
                      4.8 (320)
                    </span>
                  </div>
                  <a
                    href="tel:+919112664990"
                    className="inline-flex items-center space-x-1 text-xs bg-black text-white px-3 py-1 rounded-full hover:bg-gray-800 transition-colors"
                  >
                    <Phone className="h-3 w-3" />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
};

// Contact Section Component
const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      // Clean phone number for processing
      const cleanedPhone = data.phone.replace(/[\s-]/g, "");

      // Prepare email data
      const subject = encodeURIComponent(
        `Appointment Inquiry from ${data.name}`
      );
      const body = encodeURIComponent(
        `Hello Seven The Hair and Beauty Salon,\n\n` +
          `I would like to inquire about your services.\n\n` +
          `Name: ${data.name}\n` +
          `Email: ${data.email}\n` +
          `Phone: ${cleanedPhone}\n\n` +
          `Message:\n${data.message}\n\n` +
          `Best regards,\n${data.name}`
      );

      const mailtoLink = `mailto:info@sevensalon.com?subject=${subject}&body=${body}`;

      // Open email client
      window.location.href = mailtoLink;

      // Clear form after successful submission
      reset();

      alert(
        "Your email client has been opened with the message. Please send the email to complete your inquiry!"
      );
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(
        "There was an error processing your request. Please try calling us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6">Contact</h2>
          <div className="w-20 h-px bg-black mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Call us today to discuss your beauty needs and discover the
            difference that expert styling and personalized care can make.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information & Map */}
          <div className="space-y-8">
            {/* Google Maps */}
            <div>
              <h3 className="text-xl font-light mb-4 tracking-wide">FIND US</h3>
              <GoogleMapSection />
            </div>

            {/* Contact Details */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-black p-3 rounded-full flex-shrink-0">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">VISIT US</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Shop No. B 12/13, Regent Arcade
                      <br />
                      Pradhikaran, Pune 411044
                      <br />
                      <span className="text-sm text-gray-500">
                        Opposite PanOrtho Hospital
                      </span>
                    </p>
                    <a
                      href="https://maps.google.com/?q=Regent+Arcade,+Pradhikaran,+Pune"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-xs text-gray-500 hover:text-black transition-colors mt-2"
                    >
                      <span>Get Directions</span>
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-black p-3 rounded-full flex-shrink-0">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">CALL US</h4>
                    <a
                      href="tel:+919112664990"
                      className="text-gray-600 hover:text-black transition-colors text-lg"
                    >
                      +91 91126 64990
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-black p-3 rounded-full flex-shrink-0">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">EMAIL</h4>
                    <a
                      href="mailto:info@sevensalon.com"
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      info@sevensalon.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-black p-3 rounded-full flex-shrink-0">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">HOURS</h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span className="font-medium">Mon - Sat</span>
                        <span>10:00 AM - 8:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Sunday</span>
                        <span>10:00 AM - 6:00 PM</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        Appointments recommended
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-black p-3 rounded-full flex-shrink-0">
                    <Instagram className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">
                      FOLLOW US
                    </h4>
                    <a
                      href="https://instagram.com/seven_thesalon"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      @seven_thesalon
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 shadow-sm rounded-lg">
            <h3 className="text-xl font-light mb-6 tracking-wide">
              BOOK CONSULTATION
            </h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Full Name *"
                  className={`w-full p-4 border ${
                    errors.name ? "border-red-500" : "border-gray-200"
                  } bg-white focus:outline-none focus:border-black transition-colors rounded-sm`}
                />
                {errors.name && (
                  <div className="flex items-center mt-1 text-red-600 text-sm">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    <span>{errors.name.message}</span>
                  </div>
                )}
              </div>

              <div>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Email Address *"
                  className={`w-full p-4 border ${
                    errors.email ? "border-red-500" : "border-gray-200"
                  } bg-white focus:outline-none focus:border-black transition-colors rounded-sm`}
                />
                {errors.email && (
                  <div className="flex items-center mt-1 text-red-600 text-sm">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    <span>{errors.email.message}</span>
                  </div>
                )}
              </div>

              <div>
                <input
                  {...register("phone")}
                  type="tel"
                  placeholder="Phone Number * (10 digits)"
                  className={`w-full p-4 border ${
                    errors.phone ? "border-red-500" : "border-gray-200"
                  } bg-white focus:outline-none focus:border-black transition-colors rounded-sm`}
                />
                {errors.phone && (
                  <div className="flex items-center mt-1 text-red-600 text-sm">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    <span>{errors.phone.message}</span>
                  </div>
                )}
              </div>

              <div>
                <textarea
                  {...register("message")}
                  rows={5}
                  placeholder="Tell us about your requirements, preferred services, or any specific requests *"
                  className={`w-full p-4 border ${
                    errors.message ? "border-red-500" : "border-gray-200"
                  } bg-white focus:outline-none focus:border-black transition-colors resize-none rounded-sm`}
                />
                {errors.message && (
                  <div className="flex items-center mt-1 text-red-600 text-sm">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    <span>{errors.message.message}</span>
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-white py-4 text-sm tracking-wide hover:bg-gray-800 transition-colors rounded-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "OPENING EMAIL..." : "SEND MESSAGE"}
              </button>
            </form>

            {/* Quick Contact Actions */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="tel:+919112664990"
                  className="flex items-center justify-center space-x-2 bg-gray-100 text-black px-4 py-3 text-sm tracking-wide hover:bg-gray-200 transition-colors rounded-sm"
                >
                  <Phone className="h-4 w-4" />
                  <span>CALL NOW</span>
                </a>
                <a
                  href="mailto:info@sevensalon.com"
                  className="flex items-center justify-center space-x-2 bg-gray-100 text-black px-4 py-3 text-sm tracking-wide hover:bg-gray-200 transition-colors rounded-sm"
                >
                  <Mail className="h-4 w-4" />
                  <span>EMAIL US</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
