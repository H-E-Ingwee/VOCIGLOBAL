'use client';

interface SectionTitleProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionTitle({
  label,
  title,
  description,
  centered = true,
}: SectionTitleProps) {
  return (
    <div className={centered ? 'text-center mb-16' : 'mb-16'}>
      {label && (
        <p className="text-voci-gold font-semibold uppercase tracking-widest text-sm md:text-base mb-4">
          {label}
        </p>
      )}
      <h2 className="text-4xl md:text-5xl font-bold text-voci-dark-blue mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-voci-gray text-lg md:text-xl max-w-2xl mx-auto">
          {description}
        </p>
      )}
      <div className="w-20 h-1 bg-gradient-to-r from-voci-blue to-voci-gold mx-auto mt-6 rounded-full"></div>
    </div>
  );
}
