import Header from "../components/Header";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Terms & Conditions
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Last updated: December 18, 2024
        </p>

        <div className="bg-white rounded-xl p-8 md:p-12 shadow-md space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              Welcome to Muvette. These Terms and Conditions ("Terms") govern your use of our website and the purchase of products from Muvette. By accessing our website and placing an order, you agree to be bound by these Terms. Please read them carefully before making a purchase.
            </p>
          </section>

          {/* Company Information */}
          <section>
            <h2 className="text-2xl font-bold mb-4">2. Company Information</h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>Business Name:</strong> Muvette<br />
              <strong>Contact:</strong> +34 675 977 794<br />
              <strong>Website:</strong> www.muvette.com
            </p>
          </section>

          {/* Products and Pricing */}
          <section>
            <h2 className="text-2xl font-bold mb-4">3. Products and Pricing</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              All products displayed on our website are subject to availability. We reserve the right to modify product descriptions, prices, and availability at any time without prior notice.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Prices are displayed in Euros (€) and include applicable taxes unless otherwise stated. Shipping costs will be calculated at checkout.
            </p>
          </section>

          {/* Orders and Payment */}
          <section>
            <h2 className="text-2xl font-bold mb-4">4. Orders and Payment</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By placing an order, you are making an offer to purchase the products. We reserve the right to accept or decline any order for any reason. Payment must be completed at the time of purchase through our secure payment gateway.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We accept major credit cards and other payment methods as displayed during checkout. All transactions are processed securely, and your payment information is protected.
            </p>
          </section>

          {/* Shipping and Delivery */}
          <section>
            <h2 className="text-2xl font-bold mb-4">5. Shipping and Delivery</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Processing Time:</strong> All orders are processed within 24 hours of purchase confirmation (excluding weekends and holidays).
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Delivery Time:</strong> Standard shipping takes a maximum of 10 business days from the processing date. Delivery times may vary depending on your location.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Tracking:</strong> Once your order is shipped, you will receive a tracking number via email to monitor your delivery status.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We are not responsible for delays caused by shipping carriers, customs clearance, or force majeure events.
            </p>
          </section>

          {/* Returns and Refunds - CRITICAL SECTION */}
          <section className="bg-primary/20 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">6. Returns and Refund Policy</h2>
            
            <h3 className="text-xl font-bold mb-3">6.1 General Policy</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Returns and refunds are <strong>ONLY</strong> accepted under the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li>The product arrives damaged or defective</li>
              <li>The order does not arrive at its destination within the specified delivery timeframe</li>
            </ul>

            <h3 className="text-xl font-bold mb-3">6.2 Damaged Products</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              If your product arrives damaged or defective, you must:
            </p>
            <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700">
              <li><strong>Document the damage:</strong> Take a clear video showing the damaged product, packaging, and any visible defects</li>
              <li><strong>Contact us immediately:</strong> Send the video via WhatsApp to <strong className="text-accent">+34 675 977 794</strong> within 48 hours of receiving the product</li>
              <li><strong>Include order details:</strong> Provide your order number and a brief description of the issue</li>
            </ol>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our team will review your claim and, if approved, provide a refund or replacement. Claims submitted after 48 hours or without proper video documentation will not be accepted.
            </p>

            <h3 className="text-xl font-bold mb-3">6.3 Non-Delivery</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              If your order does not arrive within the maximum delivery timeframe (10 business days + processing time), please contact us at <strong className="text-accent">+34 675 977 794</strong>. We will investigate with the shipping carrier and provide a resolution.
            </p>

            <h3 className="text-xl font-bold mb-3">6.4 Exclusions</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>The following are NOT eligible for returns or refunds:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
              <li>Change of mind or dissatisfaction with the product</li>
              <li>Products that have been used, opened, or removed from original packaging (unless defective)</li>
              <li>Damage caused by misuse, negligence, or accidents after delivery</li>
              <li>Products purchased during promotional sales (unless defective or non-delivered)</li>
            </ul>

            <h3 className="text-xl font-bold mb-3">6.5 Refund Processing</h3>
            <p className="text-gray-700 leading-relaxed">
              Approved refunds will be processed within 5-10 business days to the original payment method. Shipping costs are non-refundable unless the error was on our part.
            </p>
          </section>

          {/* Warranty */}
          <section>
            <h2 className="text-2xl font-bold mb-4">7. Warranty</h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>No manufacturer warranty is provided.</strong> The product is sold "as is." Any defects or issues must be reported as per our Returns and Refund Policy (Section 6).
            </p>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-bold mb-4">8. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed">
              All content on this website, including but not limited to text, images, logos, graphics, and software, is the property of Muvette and protected by copyright laws. You may not reproduce, distribute, or use any content without our express written permission.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-bold mb-4">9. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To the fullest extent permitted by law, Muvette shall not be liable for any indirect, incidental, special, or consequential damages arising from:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Use or inability to use our products</li>
              <li>Delays or errors in delivery</li>
              <li>Any unauthorized access to or alteration of your data</li>
              <li>Any other matter relating to our services</li>
            </ul>
          </section>

          {/* Privacy and Data Protection */}
          <section>
            <h2 className="text-2xl font-bold mb-4">10. Privacy and Data Protection</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We are committed to protecting your personal information. By using our website, you consent to the collection and use of your data as described in our Privacy Policy.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Your data will be used for:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Processing and fulfilling your orders</li>
              <li>Communicating with you about your purchase</li>
              <li>Improving our products and services</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              We will never sell or share your personal information with third parties without your consent, except as required by law.
            </p>
          </section>

          {/* Dispute Resolution */}
          <section>
            <h2 className="text-2xl font-bold mb-4">11. Dispute Resolution</h2>
            <p className="text-gray-700 leading-relaxed">
              In the event of any dispute arising from these Terms or your purchase, you agree to first contact us at +34 675 977 794 to attempt to resolve the matter amicably. If a resolution cannot be reached, disputes shall be subject to the jurisdiction of the courts of Spain.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-bold mb-4">12. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms and Conditions are governed by and construed in accordance with the laws of Spain. Any legal action or proceeding arising from these Terms shall be brought exclusively in the courts located in Spain.
            </p>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-2xl font-bold mb-4">13. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our website after changes are posted constitutes acceptance of the modified Terms.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-bold mb-4">14. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about these Terms and Conditions, please contact us:
            </p>
            <div className="mt-4 p-4 bg-primary/20 rounded-lg">
              <p className="text-gray-700">
                <strong>WhatsApp:</strong> +34 675 977 794<br />
                <strong>Email:</strong> support@muvette.com
              </p>
            </div>
          </section>

          {/* Acceptance */}
          <section className="border-t pt-8">
            <p className="text-gray-700 leading-relaxed text-center">
              By placing an order on our website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
            </p>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2024 Muvette. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

