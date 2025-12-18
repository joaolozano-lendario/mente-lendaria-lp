import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface CinematicFadeProps {
  phrases: string[]
  onComplete: () => void
  highlightLast?: boolean
}

export function CinematicFade({ phrases, onComplete, highlightLast = true }: CinematicFadeProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (currentIndex < phrases.length) {
      const timer = setTimeout(() => {
        setCurrentIndex(prev => prev + 1)
      }, currentIndex === phrases.length - 1 ? 3000 : 2200)
      return () => clearTimeout(timer)
    } else {
      const timer = setTimeout(() => {
        setIsComplete(true)
        onComplete()
      }, 800)
      return () => clearTimeout(timer)
    }
  }, [currentIndex, phrases.length, onComplete])

  if (isComplete) return null

  const isLastPhrase = currentIndex === phrases.length - 1
  const isHighlighted = highlightLast && isLastPhrase

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black-pure flex items-center justify-center px-8"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <AnimatePresence mode="wait">
        {currentIndex < phrases.length && (
          <motion.p
            key={currentIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`text-center max-w-2xl ${
              isHighlighted
                ? 'text-2xl md:text-4xl font-bold text-white-pure'
                : 'text-xl md:text-2xl text-gray-400 font-light'
            }`}
          >
            {phrases[currentIndex]}
          </motion.p>
        )}
      </AnimatePresence>

      {/* Progress dots */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
        {phrases.map((_, i) => (
          <div
            key={i}
            className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
              i <= currentIndex ? 'bg-white-pure' : 'bg-gray-700'
            }`}
          />
        ))}
      </div>

      {/* Skip button */}
      <button
        onClick={() => {
          setIsComplete(true)
          onComplete()
        }}
        className="absolute bottom-12 right-8 text-sm text-gray-600 hover:text-gray-400 transition-colors"
      >
        Pular
      </button>
    </motion.div>
  )
}
