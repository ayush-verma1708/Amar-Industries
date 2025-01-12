import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import ContactForm from '../components/contact/ContactForm';
import SectionTitle from '../components/shared/SectionTitle';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactPage = () => {
  return (
    <div>
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with us for any inquiries"
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
      />
      
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionTitle
                title="Get in Touch"
                subtitle="We'd love to hear from you. Send us a message and we'll respond as soon as possible."
                centered={false}
              />
              
              <div className="space-y-6 mt-8">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Address</h3>
                    <p className="mt-1 text-gray-600">
                      123 Industrial Area<br />
                      Mumbai, Maharashtra<br />
                      India - 400001
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-blue-600 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                    <p className="mt-1 text-gray-600">+91 1234567890</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-blue-600 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Email</h3>
                    <p className="mt-1 text-gray-600">info@amarindustries.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="h-96 bg-gray-200">
        {/* Add Google Maps iframe here */}
        <div className="w-full h-full bg-gray-300 flex items-center justify-center">
          <p className="text-gray-600">Google Maps Integration</p>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;