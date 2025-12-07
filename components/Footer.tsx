import React from "react";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[var(--color-navy-900)] text-white py-16">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <Image
              src="/logos.png"
              alt="KREMS Technologies"
              width={210}
              height={68}
              className="mb-4"
            />
            <p className="text-gray-400 mb-4">
              Engineering practical AI & software that scales.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[var(--color-teal-500)] rounded-lg flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[var(--color-teal-500)] rounded-lg flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[var(--color-teal-500)] rounded-lg flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-[var(--color-teal-400)] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-[var(--color-teal-400)] transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  className="text-gray-400 hover:text-[var(--color-teal-400)] transition-colors"
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-[var(--color-teal-400)] transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="text-gray-400 hover:text-[var(--color-teal-400)] transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-[var(--color-teal-400)] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#web-mobile"
                  className="text-gray-400 hover:text-[var(--color-teal-400)] transition-colors"
                >
                  Web & Mobile Dev
                </a>
              </li>
              <li>
                <a
                  href="#ml-data"
                  className="text-gray-400 hover:text-[var(--color-teal-400)] transition-colors"
                >
                  Machine Learning
                </a>
              </li>
              <li>
                <a
                  href="#agentic-ai"
                  className="text-gray-400 hover:text-[var(--color-teal-400)] transition-colors"
                >
                  Agentic AI & RAG
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[var(--color-teal-400)] transition-colors"
                >
                  Data Engineering
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[var(--color-teal-400)] transition-colors"
                >
                  Cloud Architecture
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[var(--color-teal-400)] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[var(--color-teal-400)] flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:hello@krems.tech"
                  className="text-gray-400 hover:text-[var(--color-teal-400)] transition-colors"
                >
                  rifat8851@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[var(--color-teal-400)] flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+8801234567890"
                  className="text-gray-400 hover:text-[var(--color-teal-400)] transition-colors"
                >
                  +880 1720447606
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} KREMS Technologies Ltd. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#privacy"
              className="text-gray-400 hover:text-[var(--color-teal-400)] text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="text-gray-400 hover:text-[var(--color-teal-400)] text-sm transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#cookies"
              className="text-gray-400 hover:text-[var(--color-teal-400)] text-sm transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
