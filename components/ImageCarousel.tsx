"use client"

import { useEffect, useMemo, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

type ImageCarouselProps = {
  images: string[]
  alt: string
  intervalMs?: number
}

export function ImageCarousel({ images, alt, intervalMs = 3000 }: ImageCarouselProps) {
  const [index, setIndex] = useState(0)
  const safeImages = useMemo(() => images.filter(Boolean), [images])

  useEffect(() => {
    if (safeImages.length <= 1) return
    const id = setInterval(() => setIndex((i) => (i + 1) % safeImages.length), intervalMs)
    return () => clearInterval(id)
  }, [safeImages, intervalMs])

  const goPrev = () => setIndex((i) => (i - 1 + safeImages.length) % safeImages.length)
  const goNext = () => setIndex((i) => (i + 1) % safeImages.length)

  if (safeImages.length === 0) return null

  return (
    <div className="relative w-full overflow-hidden rounded-xl shadow-md bg-background">
      <div className="relative aspect-video">
        {safeImages.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${i === index ? "opacity-100" : "opacity-0"}`}
            loading={i === 0 ? "eager" : "lazy"}
          />
        ))}
        {/* Arrows */}
        {safeImages.length > 1 && (
          <>
            <button
              aria-label="Previous image"
              onClick={goPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              aria-label="Next image"
              onClick={goNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
        {/* Dots */}
        {safeImages.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {safeImages.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2.5 w-2.5 rounded-full transition ${i === index ? "bg-white" : "bg-white/50 hover:bg-white/80"}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}



