"use client";
import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./smallcomp/Button";
import Image from "next/image";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[var(--color-gray-200)] shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/logos.png"
              alt="KREMS Technologies"
              width={200}
              height={60}
              className="h-17 w-48"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <a
              href="#home"
              className="text-[var(--color-text-primary)] hover:text-[var(--color-teal-500)] transition-colors"
            >
              Home
            </a>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-[var(--color-text-primary)] hover:text-[var(--color-teal-500)] transition-colors">
                Services
                <ChevronDown className="w-4 h-4" />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-[var(--color-gray-200)] py-2">
                  <a
                    href="#web-mobile"
                    className="block px-4 py-3 text-[var(--color-text-primary)] hover:bg-[var(--color-gray-50)] hover:text-[var(--color-teal-500)] transition-colors"
                  >
                    Web & Mobile Development
                  </a>
                  <a
                    href="#ml-data"
                    className="block px-4 py-3 text-[var(--color-text-primary)] hover:bg-[var(--color-gray-50)] hover:text-[var(--color-teal-500)] transition-colors"
                  >
                    Machine Learning & Data
                  </a>
                  <a
                    href="#agentic-ai"
                    className="block px-4 py-3 text-[var(--color-text-primary)] hover:bg-[var(--color-gray-50)] hover:text-[var(--color-teal-500)] transition-colors"
                  >
                    Agentic AI & RAG
                  </a>
                </div>
              )}
            </div>

            <a
              href="#work"
              className="text-[var(--color-text-primary)] hover:text-[var(--color-teal-500)] transition-colors"
            >
              Work
            </a>
            <a
              href="#about"
              className="text-[var(--color-text-primary)] hover:text-[var(--color-teal-500)] transition-colors"
            >
              About
            </a>
            <a
              href="#blog"
              className="text-[var(--color-text-primary)] hover:text-[var(--color-teal-500)] transition-colors"
            >
              Blog
            </a>
            <a
              href="#contact"
              className="text-[var(--color-text-primary)] hover:text-[var(--color-teal-500)] transition-colors"
            >
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              variant="primary"
              size="md"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[var(--color-navy-800)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[var(--color-gray-200)]">
            <div className="flex flex-col gap-4">
              <a
                href="#home"
                className="text-[var(--color-text-primary)] hover:text-[var(--color-teal-500)] py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
              <div className="flex flex-col gap-2 pl-4">
                <a
                  href="#web-mobile"
                  className="text-[var(--color-text-secondary)] hover:text-[var(--color-teal-500)] py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Web & Mobile Development
                </a>
                <a
                  href="#ml-data"
                  className="text-[var(--color-text-secondary)] hover:text-[var(--color-teal-500)] py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Machine Learning & Data
                </a>
                <a
                  href="#agentic-ai"
                  className="text-[var(--color-text-secondary)] hover:text-[var(--color-teal-500)] py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Agentic AI & RAG
                </a>
              </div>
              <a
                href="#work"
                className="text-[var(--color-text-primary)] hover:text-[var(--color-teal-500)] py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Work
              </a>
              <a
                href="#about"
                className="text-[var(--color-text-primary)] hover:text-[var(--color-teal-500)] py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#blog"
                className="text-[var(--color-text-primary)] hover:text-[var(--color-teal-500)] py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </a>
              <a
                href="#contact"
                className="text-[var(--color-text-primary)] hover:text-[var(--color-teal-500)] py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <Button
                variant="primary"
                size="md"
                className="mt-2"
                onClick={() => {
                  setMobileMenuOpen(false);
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get a Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
