import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, FileText, ArrowRight } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-teal-50 to-teal-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <img 
              src="/djb-mobile-notary-logo.png" 
              alt="Daniel J. Bolanos Mobile Notary Logo" 
              className="h-16 w-16"
            />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            This Privacy Policy outlines how Daniel J. Bolanos Mobile Notary collects, uses, and protects your personal information.
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <h2>Introduction</h2>
            <p>
              Daniel J. Bolanos Mobile Notary ("we," "our," or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when 
              you visit our website danielbolanosnotary.com or use our mobile notary services.
            </p>
            <p>
              Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, 
              please do not access the website or use our services.
            </p>

            <h2>Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul>
              <li>Complete forms on our website</li>
              <li>Schedule notary services</li>
              <li>Contact us via email, phone, or text message</li>
              <li>Sign up for our newsletter</li>
              <li>Participate in surveys or promotions</li>
            </ul>
            <p>
              The personal information we may collect includes:
            </p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Mailing address</li>
              <li>Information about the documents you need notarized</li>
              <li>Preferred appointment times and locations</li>
            </ul>

            <h3>Notarial Records</h3>
            <p>
              As a notary public, we are required by law to maintain certain records of notarial acts. 
              These records may include:
            </p>
            <ul>
              <li>Names of document signers</li>
              <li>Types of documents notarized</li>
              <li>Dates of notarization</li>
              <li>Types of notarial acts performed</li>
              <li>Information from identification documents</li>
            </ul>
            <p>
              These records are maintained in accordance with state notary laws and regulations.
            </p>

            <h3>Automatically Collected Information</h3>
            <p>
              When you visit our website, we may automatically collect certain information about your device, 
              including:
            </p>
            <ul>
              <li>IP address</li>
              <li>Browser type</li>
              <li>Operating system</li>
              <li>Pages visited</li>
              <li>Time and date of your visit</li>
              <li>Referring website addresses</li>
            </ul>
            <p>
              This information helps us analyze trends, administer the site, track user movements, and gather 
              demographic information for aggregate use.
            </p>

            <h2>How We Use Your Information</h2>
            <p>
              We may use the information we collect for various purposes, including:
            </p>
            <ul>
              <li>Providing, maintaining, and improving our services</li>
              <li>Processing and fulfilling notary service requests</li>
              <li>Communicating with you about appointments and services</li>
              <li>Sending administrative information, such as updates to our policies</li>
              <li>Responding to your comments, questions, and requests</li>
              <li>Maintaining required notarial records</li>
              <li>Analyzing usage patterns to improve our website and services</li>
              <li>Protecting against, identifying, and preventing fraud and other illegal activities</li>
            </ul>

            <h2>Information Sharing and Disclosure</h2>
            <p>
              We take your privacy seriously and do not sell, rent, or trade your personal information. 
              We may share your information in the following circumstances:
            </p>
            <ul>
              <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.</li>
              <li><strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.</li>
              <li><strong>With Your Consent:</strong> We may share your information with third parties when we have your consent to do so.</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect the security of your personal information. 
              However, please be aware that no method of transmission over the Internet or method of electronic storage is 100% secure.
            </p>

            <h2>Your Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul>
              <li>The right to access personal information we hold about you</li>
              <li>The right to request correction of inaccurate information</li>
              <li>The right to request deletion of your information (subject to legal requirements)</li>
              <li>The right to object to processing of your information</li>
              <li>The right to data portability</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the information provided below.
            </p>

            <h2>Children's Privacy</h2>
            <p>
              Our website and services are not directed to children under 18 years of age. 
              We do not knowingly collect personal information from children under 18. 
              If we learn that we have collected personal information from a child under 18, 
              we will promptly delete that information.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The updated version will be indicated by 
              an updated "Revised" date and the updated version will be effective as soon as it is accessible. 
              We encourage you to review this Privacy Policy frequently to be informed of how we are protecting your information.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions or concerns about this Privacy Policy, please contact us at:
            </p>
            <p>
              Daniel J. Bolanos Mobile Notary<br />
              Phone: (914) 619-8328<br />
              Email: Djbnotary22@gmail.com
            </p>

            <p className="text-sm text-gray-500 mt-8">
              Last Updated: June 20, 2025
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Need Professional Notary Services?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact me today to schedule your notarization appointment. I provide reliable, 
            professional service throughout Berks County.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+19146198328"
              className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Call (914) 619-8328
            </a>
            <Link
              to="/contact"
              className="bg-teal-800 hover:bg-teal-900 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Schedule Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;