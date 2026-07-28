import { useState } from "react";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import type { PropertyCard as PropertyCardType } from "../../data/mockDashboardData";

interface PropertyCardProps {
  card: PropertyCardType;
}

const DOT_COUNT = 3;

export function PropertyCard({ card }: PropertyCardProps) {
  const [activeDot, setActiveDot] = useState(0);

  const handlePrev = () =>
    setActiveDot((d) => (d === 0 ? DOT_COUNT - 1 : d - 1));
  const handleNext = () =>
    setActiveDot((d) => (d === DOT_COUNT - 1 ? 0 : d + 1));

  return (
    <div
      className="relative rounded-2xl overflow-hidden bg-gray-900 aspect-[3/4] sm:aspect-[4/5] md:aspect-auto md:h-72 lg:h-80 xl:h-[340px] w-full
        hover:shadow-xl transition-shadow duration-300 group "
    >
      {/* Background Image */}
      <img
        src={card.bgImage}
        alt={card.title ?? card.statLabel}
        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/30" />

      {/* Top Badges */}
      {card.badges && card.badges.length > 0 && (
        <div className="absolute top-3 left-3 flex items-center gap-2 z-10">
          {card.badges.map((badge) => (
            <span
              key={badge.label}
              className={`
                flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-semibold
                transition-all duration-200 bg-black/60 backdrop-blur-sm
                ${
                  badge.active
                    ? "text-[#FFFF00] "
                    : "bg-white/20 text-white border border-white/30"
                }
              `}
            >
              {badge.active && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFFF00] inline-block" />
              )}

              {badge.label}
            </span>
          ))}
        </div>
      )}

      {/* Navigation Arrows */}
      {card.showNav && (
        <>
          <button
            id={`card-prev-${card.id}`}
            aria-label="Previous"
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10
              w-8 h-8 rounded-full bg-black/60 hover:bg-white/20 backdrop-blur-sm
              flex items-center justify-center text-white
               transition-all duration-200 cursor-pointer"
          >
            <ChevronLeft size={16} strokeWidth={2.5} />
          </button>
          <button
            id={`card-next-${card.id}`}
            aria-label="Next"
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10
              w-8 h-8 rounded-full bg-black/60 hover:bg-white/20 backdrop-blur-sm 
              flex items-center justify-center text-white
               transition-all duration-200 cursor-pointer"
          >
            <ChevronRight size={16} strokeWidth={2.5} />
          </button>
        </>
      )}

      {/* Bottom Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        {/* Stat Label */}
        <p className="text-[10px] font-medium text-white/70 uppercase tracking-widest mb-1">
          {card.statLabel}
        </p>

        {/* Title */}
        {card.title && (
          <h3 className="text-base font-bold text-white leading-snug mb-0.5">
            {card.title}
          </h3>
        )}

        {/* Location */}
        {card.location && (
          <p className="text-xs text-white/70 mb-2">{card.location}</p>
        )}

        {/* Stat Value */}
        <p className="text-xl font-extrabold text-[#FFFF00] leading-none">
          {card.statValue}
        </p>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-1.5 mt-3">
          {Array.from({ length: DOT_COUNT }).map((_, i) => (
            <button
              key={i}
              id={`card-dot-${card.id}-${i}`}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setActiveDot(i)}
              className={`
                h-1.5 rounded-full transition-all duration-300 cursor-pointer
                ${i === activeDot ? "w-4 bg-white" : "w-1.5 bg-white/40"}
              `}
            />
          ))}
        </div>
      </div>

      {/* Chat Bubble FAB */}
      {card.showChat && (
        <button
          id={`card-chat-${card.id}`}
          aria-label="Open chat"
          className="absolute bottom-4 right-4 z-10
            w-10 h-10 rounded-full bg-white
            flex items-center justify-center
            shadow-lg hover:shadow-xl hover:scale-105
            transition-all duration-200 cursor-pointer"
        >
          <MessageCircle size={18} className="text-[#101828]" strokeWidth={2} />
        </button>
      )}
    </div>
  );
}
