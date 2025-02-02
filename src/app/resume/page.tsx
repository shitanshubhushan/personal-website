"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { motion } from "framer-motion";
import { Github, Linkedin, MessageCircle, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import profileImage from "@/assets/images/profile.jpg";

import { socialLinks } from "@/data/social-links";

export default function ResumePage() {
  return (
    <AuroraBackground>
      <div className="flex flex-col md:flex-row w-full h-screen overflow-hidden">
        {/* Left Section - Profile */}
        <div className="w-full md:w-[20%] flex flex-col items-center justify-start p-4 md:p-6 border-r border-border/10 overflow-y-auto">
          <Link href="/" className="flex flex-col items-center group">
          <div className="relative w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden mb-4 transition-transform group-hover:scale-105">
              <Image
                src={profileImage}
                alt="Shitanshu Bhushan"
                fill
                className="object-cover"
                priority
              />
            </div>
            <h1 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
              Shitanshu Bhushan
            </h1>
          </Link>
          <p className="text-sm text-muted-foreground text-center mb-6">
            Graduate Student at University of Michigan, Ann Arbor | Ex Accenture | Contributor at towardsdatascience
          </p>
          <div className="flex flex-col gap-3 w-full">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:bg-muted/50 p-2 rounded-lg transition-colors w-full"
                >
                  <Icon className="w-4 h-4" />
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">{link.name}</span>
                    <span className="text-xs text-muted-foreground">{link.description}</span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Right Section - Content */}
        <div className="w-full md:w-[80%] h-screen flex flex-col">
          <NavBar />
          <div className="flex-1 overflow-y-auto p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg"
            >
              <iframe
                src="https://drive.google.com/file/d/1VT-Qpz63EXlxe3ObXlMmDxUCjD07rdO4/preview"
                allow="autoplay"
                className="w-full h-full border-0"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
} 