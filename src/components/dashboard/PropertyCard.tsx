import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { PropertyCard as PropertyCardType } from "../../data/mockDashboardData";

interface PropertyCardProps {
  card: PropertyCardType;
  className?: string;
}

export function PropertyCard({ card, className }: PropertyCardProps) {
  const initialMode = card.defaultMode ?? card.modes[0]?.value ?? "";
  const [activeMode, setActiveMode] = useState(initialMode);
  const [activeSlide, setActiveSlide] = useState(0);

  const currentMode = useMemo(
    () => card.modes.find((mode) => mode.value === activeMode) ?? card.modes[0],
    [activeMode, card.modes],
  );

  const currentSlide =
    currentMode?.slides[activeSlide] ?? currentMode?.slides[0];
  const slides = currentMode?.slides ?? [];
  const hasMultipleSlides = slides.length > 1;
  const hasModeSwitch = card.modes.length > 1;

  const handlePrev = () => {
    if (!hasMultipleSlides) return;

    setActiveSlide((index) => (index === 0 ? slides.length - 1 : index - 1));
  };

  const handleNext = () => {
    if (!hasMultipleSlides) return;

    setActiveSlide((index) => (index === slides.length - 1 ? 0 : index + 1));
  };

  const handleModeChange = (modeValue: string) => {
    setActiveMode(modeValue);
    setActiveSlide(0);
  };

  if (!currentSlide) {
    return null;
  }

  return (
    <article
      className={`group relative h-[340px] w-full overflow-hidden rounded-2xl bg-gray-900 md:h-72 lg:h-80 xl:h-[340px] ${className ?? ""}`}
    >
      <img
        src={currentSlide.bgImage}
        alt={currentSlide.title}
        className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/30" />

      {hasModeSwitch && (
        <div className="absolute left-4 top-4 z-10 flex w-fit overflow-hidden rounded-[8px] bg-[#2B2E33]">
          {card.modes.map((mode, index) => {
            const isActive = mode.value === activeMode;

            return (
              <button
                key={mode.value}
                type="button"
                aria-pressed={isActive}
                onClick={() => handleModeChange(mode.value)}
                className={`inline-flex shrink-0 whitespace-nowrap h-7 flex-1 items-center justify-center gap-2 px-2 text-xs text-[13px] font-medium transition-colors duration-200 cursor-pointer ${
                  index > 0 ? "border-l border-white/10" : ""
                } ${
                  isActive
                    ? " text-[#FFFF00]"
                    : "text-[#D4D4D8] hover:bg-white/5 hover:text-white"
                }`}
              >
                {isActive && (
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFFF00]" />
                )}
                {mode.label}
              </button>
            );
          })}
        </div>
      )}

      {hasMultipleSlides && (
        <>
          <button
            type="button"
            id={`card-prev-${card.id}`}
            aria-label="Previous image"
            onClick={handlePrev}
            className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20 md:h-8 md:w-8 cursor-pointer"
          >
            <ChevronLeft size={16} strokeWidth={2.5} />
          </button>
          <button
            type="button"
            id={`card-next-${card.id}`}
            aria-label="Next image"
            onClick={handleNext}
            className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20 md:h-8 md:w-8 cursor-pointer"
          >
            <ChevronRight size={16} strokeWidth={2.5} />
          </button>
        </>
      )}

      <div className="absolute bottom-0 left-0 right-0 z-10 p-4 sm:p-5">
        <p className="mb-1 text-[10px] font-medium uppercase tracking-widest text-white/70">
          {currentSlide.statLabel}
        </p>

        <h3 className="mb-0.5 text-base font-bold leading-snug text-white sm:text-lg">
          {currentSlide.title}
        </h3>

        <p className="mb-2 text-xs text-white/70 sm:text-sm">
          {currentSlide.location}
        </p>

        <p className="text-xl font-extrabold leading-none text-[#FFFF00] sm:text-2xl">
          {currentSlide.statValue}
        </p>

        {hasMultipleSlides && (
          <div className="mt-3 flex items-center justify-center gap-1.5">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                id={`card-dot-${card.id}-${index}`}
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => setActiveSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  index === activeSlide ? "w-4 bg-white" : "w-1.5 bg-white/40"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
