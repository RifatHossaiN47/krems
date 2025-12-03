import React from 'react';
import { LucideIcon } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

export interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  benefits: string[];
  link: string;
  gradient?: string;
}

export function ServiceCard({ icon: Icon, title, benefits, link, gradient = 'from-[var(--color-teal-500)] to-[var(--color-teal-600)]' }: ServiceCardProps) {
  return (
    <div className="group bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-[var(--color-gray-200)] hover:border-[var(--color-teal-500)] cursor-pointer">
      {/* Icon */}
      <div className={`w-14 h-14 bg-gradient-to-br ${gradient} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-7 h-7 text-white" />
      </div>

      {/* Title */}
      <h3 className="mb-4">{title}</h3>

      {/* Benefits */}
      <ul className="space-y-3 mb-6">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-2 text-[var(--color-text-secondary)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-teal-500)] mt-2 flex-shrink-0"></span>
            <span>{benefit}</span>
          </li>
        ))}
      </ul>

      {/* Link */}
      <a 
        href={link} 
        className="inline-flex items-center gap-2 text-[var(--color-teal-500)] font-medium group-hover:gap-3 transition-all duration-300"
      >
        Learn more
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
}
