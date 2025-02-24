"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { motion } from "framer-motion";
import { Github, Linkedin, MessageCircle, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import profileImage from "@/assets/images/profile.jpg";

import { socialLinks } from "@/data/social-links";

const researchWork = [
  {
    title: "Research Assistant - LAUNCH Lab",
    institution: "University of Michigan",
    date: "Dec 2024 - Present",
    description: [
      "Working as a research assistant at the LAUNCH Lab, University of Michigan.",
    ],
    tags: ["Research", "Academia"]
  }
];

export default function ResearchPage() {
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
          <p className="text-sm text-muted-foreground text-center mb-2">
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
            <div className="max-w-4xl space-y-12">
              {/* Research Experience */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Research Experience</h2>
                
                {/* LAUNCH Lab Position */}
                <div className="mb-8">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-semibold">Research Assistant - LAUNCH Lab</h3>
                      <p className="text-muted-foreground">University of Michigan</p>
                    </div>
                    <p className="text-sm text-muted-foreground">Dec 2024 - Present</p>
                  </div>
                  
                  <ul className="list-disc list-inside space-y-2 mt-4 text-sm">
                    <li className="text-muted-foreground">
                      Worked with <span className="font-medium text-foreground">Yunxiang Zhang</span> to 
                      develop a benchmark for evaluating LLM agents on machine learning research tasks.
                    </li>
                    <li className="text-muted-foreground">
                      Refactored existing codebases to enable the seamless addition of new challenges 
                      within the benchmark, ensuring modularity and maintainability.
                    </li>
                    <li className="text-muted-foreground">
                      Conducting analysis of agent traces to identify common failure modes and 
                      performance bottlenecks, providing insights for improving agent robustness.
                    </li>
                  </ul>
                </div>
                
                {/* ... any existing research positions ... */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
} 