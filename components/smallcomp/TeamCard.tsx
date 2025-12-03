import React from "react";
import { Linkedin } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallBack";

export interface TeamCardProps {
  name: string;
  role: string;
  expertise: string;
  image: string;
  linkedin?: string;
}

export function TeamCard({
  name,
  role,
  expertise,
  image,
  linkedin,
}: TeamCardProps) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-[var(--color-gray-200)]">
      {/* Image */}
      <div className="relative overflow-hidden aspect-square bg-[var(--color-gray-100)]">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy-800)]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[var(--color-navy-800)] p-3 rounded-full hover:bg-[var(--color-teal-500)] hover:text-white transition-colors"
              aria-label={`${name} LinkedIn`}
            >
              <Linkedin className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h4 className="mb-1">{name}</h4>
        <div className="text-[var(--color-teal-500)] font-medium mb-3">
          {role}
        </div>
        <p className="text-sm text-[var(--color-text-secondary)]">
          {expertise}
        </p>
      </div>
    </div>
  );
}
