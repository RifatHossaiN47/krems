"use client";
import React, { useState } from "react";
import { Button } from "./smallcomp/Button";
import { Send, Calendar, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

export function ContactCTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectBrief: "",
    budget: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Replace these with your actual EmailJS credentials
      const serviceId = "service_y7p3hoo"; // e.g., 'service_abc123'
      const templateId = "template_jtuu4pp"; // e.g., 'template_xyz456'
      const publicKey = "9Om0NKQMWA5y34NgK"; // e.g., 'AbCdEfGhIjKlMnOp'

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || "Not provided",
        budget: formData.budget,
        message: formData.projectBrief,
        to_email: "rifat8851@gmail.com", // Your email
      };

      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      console.log("Email sent successfully:", response);

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: "",
          email: "",
          company: "",
          projectBrief: "",
          budget: "",
        });
      }, 5000);
    } catch (error) {
      console.error("Email send failed:", error);
      setError(
        "Failed to send message. Please try again or email us directly at rifat8851@gmail.com"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      className="py-20 lg:py-32 bg-gradient-to-br from-[var(--color-navy-900)] via-[var(--color-navy-800)] to-[var(--color-navy-700)] text-white relative overflow-hidden"
      id="contact"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        ></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Info */}
          <div>
            <h2 className="text-white mb-6">
              Let&apos;s Build Something Great
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Whether it&apos;s a web app, ML pipeline, or AI agent—we are ready
              to turn your vision into production-grade software.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[var(--color-teal-500)] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white mb-2">Quick Response</h4>
                  <p className="text-gray-300">
                    We typically respond within 24 hours with initial thoughts
                    and next steps.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[var(--color-orange-500)] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white mb-2">Discovery Call</h4>
                  <p className="text-gray-300">
                    Book a free 30-minute consultation to discuss your project
                    in detail.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#8b5cf6] rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white mb-2">Transparent Pricing</h4>
                  <p className="text-gray-300">
                    Clear project estimates with no hidden fees—we work within
                    your budget.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Email Link */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <p className="text-sm text-gray-300 mb-3">
                Prefer to email directly?
              </p>
              <a
                href="mailto:rifat8851@gmail.com"
                className="text-[var(--color-teal-400)] font-medium hover:text-[var(--color-teal-300)] transition-colors inline-flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                rifat8851@gmail.com
              </a>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-[var(--color-navy-800)] mb-6">
                  Get a Project Quote
                </h3>

                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-red-600 text-sm">{error}</p>
                  </div>
                )}

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[var(--color-navy-800)] mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[var(--color-gray-300)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-teal-500)] focus:border-transparent text-[var(--color-navy-800)]"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[var(--color-navy-800)] mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[var(--color-gray-300)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-teal-500)] focus:border-transparent text-[var(--color-navy-800)]"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-[var(--color-navy-800)] mb-2"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[var(--color-gray-300)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-teal-500)] focus:border-transparent text-[var(--color-navy-800)]"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label
                    htmlFor="projectBrief"
                    className="block text-sm font-medium text-[var(--color-navy-800)] mb-2"
                  >
                    Project Brief *
                  </label>
                  <textarea
                    id="projectBrief"
                    name="projectBrief"
                    required
                    rows={4}
                    value={formData.projectBrief}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[var(--color-gray-300)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-teal-500)] focus:border-transparent text-[var(--color-navy-800)] resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <div>
                  <label
                    htmlFor="budget"
                    className="block text-sm font-medium text-[var(--color-navy-800)] mb-2"
                  >
                    Budget Range *
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    required
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[var(--color-gray-300)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-teal-500)] focus:border-transparent text-[var(--color-navy-800)]"
                  >
                    <option value="">Select a range</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k+">$50,000+</option>
                    <option value="not-sure">Not sure yet</option>
                  </select>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Submit Request"}
                  <Send className="w-5 h-5" />
                </Button>

                <p className="text-xs text-[var(--color-text-muted)] text-center">
                  By submitting, you agree to our privacy policy. We&apos;ll
                  never share your information.
                </p>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-[var(--color-teal-500)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-[var(--color-navy-800)] mb-2">
                  Thank You!
                </h3>
                <p className="text-[var(--color-text-secondary)]">
                  We have received your request and will get back to you within
                  24 hours.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
