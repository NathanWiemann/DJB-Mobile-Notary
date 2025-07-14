import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Scale, Shield, ArrowRight } from 'lucide-react';

const TermsOfService = () => {
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
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Please read these terms carefully before using our website or services.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <h2>Introduction</h2>
            <p>
              These Terms of Service ("Terms") govern your use of the website danielbolanosnotary.com 
              (the "Website") and the notary services provided by Daniel J. Bolanos Mobile Notary 
              ("we," "our," or "us"). By accessing the Website or using our services, you agree to be 
              bound by these Terms. If you do not agree to these Terms, please do not use the Website 
              or our services.
            </p>

            <h2>Services</h2>
            <p>
              Daniel J. Bolanos Mobile Notary provides mobile notary services, including but not limited to:
            </p>
            <ul>
              <li>Document notarization</li>
              <li>Loan signing services</li>
              <li>Acknowledgments</li>
              <li>Jurats and verifications</li>
              <li>Oaths and affirmations</li>
              <li>Certified copies</li>
              <li>Remote online notarization (where permitted by law)</li>
            </ul>
            <p>
              All notarial services are provided in accordance with applicable state laws and regulations 
              governing notaries public.
            </p>

            <h2>Scheduling and Appointments</h2>
            <p>
              Appointments may be scheduled through our website, by phone, or by email. We make every effort 
              to accommodate your preferred appointment time, but availability is not guaranteed until confirmed.
            </p>
            <p>
              If you need to cancel or reschedule an appointment, please provide at least 24 hours' notice 
              when possible. For appointments canceled with less than 2 hours' notice, a cancellation fee 
              may apply.
            </p>

            <h2>Fees and Payment</h2>
            <p>
              Our fees for notary services are in accordance with state regulations. Additional fees may apply 
              for travel, after-hours service, or complex document packages. All fees will be disclosed and 
              agreed upon before services are rendered.
            </p>
            <p>
              Payment is due at the time services are provided. We accept cash, check, and various digital 
              payment methods.
            </p>

            <h2>Document Requirements</h2>
            <p>
              All signers must:
            </p>
            <ul>
              <li>Be physically present for the notarization (except for remote online notarization where permitted)</li>
              <li>Provide valid, government-issued photo identification</li>
              <li>Be willing and able to sign the document</li>
              <li>Understand the document they are signing</li>
              <li>Not be under duress or coercion</li>
            </ul>
            <p>
              Documents must be complete with no blank spaces (except for signature lines). We reserve the right 
              to refuse service if these requirements are not met or if we suspect fraud or illegal activity.
            </p>

            <h2>Limitations of Service</h2>
            <p>
              As a notary public, we cannot:
            </p>
            <ul>
              <li>Provide legal advice or prepare legal documents</li>
              <li>Advise on the content or effects of documents</li>
              <li>Recommend specific actions regarding documents</li>
              <li>Notarize documents in which we have a financial or beneficial interest</li>
              <li>Notarize documents if the signer's identity cannot be verified</li>
              <li>Notarize incomplete documents</li>
              <li>Notarize documents if the signer appears to be under duress or lacks capacity</li>
            </ul>

            <h2>Website Use</h2>
            <h3>Content</h3>
            <p>
              All content on the Website, including text, graphics, logos, images, and software, is the property 
              of Daniel J. Bolanos Mobile Notary or its content suppliers and is protected by United States and 
              international copyright laws.
            </p>

            <h3>User Conduct</h3>
            <p>
              You agree not to:
            </p>
            <ul>
              <li>Use the Website in any way that violates any applicable federal, state, local, or international law</li>
              <li>Attempt to gain unauthorized access to the Website or any related systems</li>
              <li>Interfere with the proper functioning of the Website</li>
              <li>Collect or store personal data about other users</li>
              <li>Introduce viruses, Trojan horses, worms, or other harmful material</li>
            </ul>

            <h2>Disclaimer of Warranties</h2>
            <p>
              THE WEBSITE AND SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTIES OF ANY KIND, 
              EITHER EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, 
              FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p>
              We do not guarantee that the Website will be secure or error-free, or that defects will be corrected.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              IN NO EVENT SHALL DANIEL J. BOLANOS MOBILE NOTARY BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, 
              CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR BUSINESS OPPORTUNITIES, 
              WHETHER BASED ON TORT, CONTRACT, OR ANY OTHER LEGAL THEORY, EVEN IF WE HAVE BEEN ADVISED OF THE 
              POSSIBILITY OF SUCH DAMAGES.
            </p>
            <p>
              Our total liability for all claims related to these Terms or our services shall not exceed the 
              amount you paid for the specific service giving rise to the claim.
            </p>

            <h2>Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Daniel J. Bolanos Mobile Notary and its officers, 
              directors, employees, agents, and representatives from and against any claims, liabilities, damages, 
              judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising 
              out of or relating to your violation of these Terms or your use of the Website or services.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We may revise these Terms at any time without notice. By continuing to use the Website or our 
              services after any changes, you accept and agree to be bound by the revised Terms.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the Commonwealth of Pennsylvania, 
              without regard to its conflict of law provisions. Any legal action or proceeding relating to these Terms 
              shall be brought exclusively in the state or federal courts located in Berks County, Pennsylvania.
            </p>

            <h2>Severability</h2>
            <p>
              If any provision of these Terms is held to be invalid or unenforceable, such provision shall be 
              struck and the remaining provisions shall be enforced.
            </p>

            <h2>Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
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
            Ready to Schedule Your Notary Service?
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

export default TermsOfService;