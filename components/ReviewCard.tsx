interface ReviewCardProps {
  name: string;
  location: string;
  service: string;
  review: string;
}

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewCard({ name, location, service, review }: ReviewCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col">
      <Stars />
      <blockquote className="mt-5 text-gray-700 text-sm leading-relaxed flex-1">
        &ldquo;{review}&rdquo;
      </blockquote>
      <div className="mt-6 pt-5 border-t border-gray-100">
        <p className="font-bold text-[#1A1A1A] text-sm">{name}</p>
        <p className="text-gray-500 text-xs mt-0.5">
          {location} · {service}
        </p>
      </div>
    </div>
  );
}
