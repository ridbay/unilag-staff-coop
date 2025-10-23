import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface CarouselImage {
  desktop: StaticImageData | string;
  mobile?: StaticImageData | string;
  text?: string;
}

interface CarouselProps {
  images: CarouselImage[];
  autoPlay?: boolean;
  interval?: number;
}

const ModernCarousel: React.FC<CarouselProps> = ({
  images,
  autoPlay = true,
  interval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const nextSlide = useCallback(() => {
    setDirection('right');
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setDirection('left');
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 'right' : 'left');
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!autoPlay) return;
    
    const timer = setTimeout(() => {
      nextSlide();
    }, interval);

    return () => clearTimeout(timer);
  }, [currentIndex, autoPlay, interval, nextSlide]);

  const slideVariants = {
    enter: (direction: string) => ({
      x: direction === 'right' ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: string) => ({
      x: direction === 'right' ? '-100%' : '100%',
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Desktop Image */}
          {/* Background Layer - Blurred and darkened */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <div className="relative w-full h-full">
              <Image
                src={images[currentIndex].desktop}
                alt=""
                fill
                className="object-cover"
                priority={currentIndex === 0}
                sizes="100vw"
                style={{
                  filter: 'blur(8px) brightness(0.7)',
                  transform: 'scale(1.05)',
                  width: '100%',
                  height: '100%'
                }}
              />
            </div>
          </div>
          
          {/* Foreground Layer - Full height image */}
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="relative w-full h-[85%] md:h-full">
              <Image
                src={images[currentIndex].desktop}
                alt=""
                fill
                className="object-contain"
                priority={currentIndex === 0}
                sizes="100vw"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  objectPosition: 'center'
                }}
              />
            </div>
          </div>
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            {images[currentIndex].text && (
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center px-4 drop-shadow-lg max-w-4xl mx-auto"
              >
                {images[currentIndex].text}
              </motion.p>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 z-10"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'w-8 bg-theme-color' : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ModernCarousel;
