import PageHeader from "../components/shared/PageHeader";
import SectionTitle from "../components/shared/SectionTitle";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Header Section */}
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with us for any inquiries"
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
      />

      {/* Contact Details Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <SectionTitle
            title="Get in Touch"
            subtitle="Reach out to us through any of the following methods."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-8">
            {/* Address */}
            <div className="flex flex-col items-center bg-white shadow-md p-6 rounded-lg">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mt-4">Address</h3>
              <p className="mt-2 text-gray-700 text-center">
                B-54, Maharajpura, Industrial Area, <br />
                Gwalior, Madhya Pradesh 474005
              </p>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center bg-white shadow-md p-6 rounded-lg">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mt-4">Phone</h3>
              <p className="mt-2 text-gray-700">
                <a href="tel:+918224000620" className="hover:text-blue-500 transition">
                  +91 82240 00620
                </a>
              </p>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center bg-white shadow-md p-6 rounded-lg">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full">
                <Mail className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mt-4">Email</h3>
              <p className="mt-2 text-gray-700">
                <a href="mailto:info@amarindustries.co.in" className="hover:text-blue-500 transition">
                  info@amarindustries.co.in
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="h-96 w-full">
        <iframe
          title="Our Location"
          className="w-full h-full rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.994633951644!2d78.1825!3d26.2183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDEzJzEwLjgiTiA3OMKwMTEnMTIuOCJF!5e0!3m2!1sen!2sin!4v1612345678901!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default ContactPage;
