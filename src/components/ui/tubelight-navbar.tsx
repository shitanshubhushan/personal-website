"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Book, FileText, HomeIcon, Lightbulb, Newspaper } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", url: "/", icon: HomeIcon },
  { name: "Resume", url: "/resume", icon: FileText },
  { name: "Projects", url: "/projects", icon: Lightbulb },
  { name: "Blog", url: "/blog", icon: Book },
  { name: "Research", url: "/research", icon: Newspaper },
];

interface NavBarProps {
  className?: string;
}

export function NavBar({ className }: NavBarProps) {
  const pathname = usePathname()
  const [isMobile, setIsMobile] = useState(false)

  // Find active tab based on current pathname
  const activeTab = navItems.find(item => {
    if (item.url === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(item.url)
  })?.name || navItems[0].name

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div
      className={cn(
        "sticky top-0 z-50 w-full flex justify-center py-4 bg-gradient-to-b from-background/80 to-background/0",
        className,
      )}
    >
      <div className="flex items-center gap-2 bg-background/5 border border-border/50 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              href={item.url}
              className={cn(
                "relative cursor-pointer text-sm font-medium px-4 py-2 rounded-full transition-colors",
                "text-foreground/60 hover:text-foreground",
                isActive && "bg-muted text-foreground",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                    <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
} 