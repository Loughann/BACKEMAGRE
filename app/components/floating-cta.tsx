"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [seconds, setSeconds] = useState(59)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        // Show after scrolling down a bit
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          // Optionally reset or stop the timer if it reaches 0
          // For now, let's reset it to 59 to keep the urgency
          return 59
        }
        return prevSeconds - 1
      })
    }, 1000) // Update every 1 second

    return () => clearInterval(timer) // Clean up the interval on component unmount
  }, [])

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 z-50 bg-[#E53935] p-4 shadow-lg text-center md:hidden" // Visible only on mobile for now
      initial={{ y: 100, opacity: 0 }}
      animate={isVisible ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <a href="https://pay.kirvano.com/7a9c258e-463d-4876-9433-3b9ec84e3d18" target="_blank" rel="noopener noreferrer">
        <Button className="bg-white text-[#E53935] font-bold text-lg py-4 rounded-full w-full animate-pulse-custom hover:bg-gray-100">
          MUDAR DE VIDA POR R$7,90 AGORA!
        </Button>
      </a>
      <p className="text-white text-xs mt-1">Você possui apenas {seconds} segundos!</p>
    </motion.div>
  )
}
