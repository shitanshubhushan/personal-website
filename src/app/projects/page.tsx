"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { motion } from "framer-motion";
import { Github, Linkedin, MessageCircle, Twitter } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/shitanshubhushan",
    icon: Github,
    description: "View my projects",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/shitanshu273",
    icon: Linkedin,
    description: "Connect with me",
  },
  {
    name: "Medium",
    url: "https://medium.com/@shitanshu273",
    icon: MessageCircle,
    description: "Read my blogs",
  },
  {
    name: "X",
    url: "https://x.com/shitanshu273",
    icon: Twitter,
    description: "Follow me",
  },
];

interface Project {
  title: string;
  date: string;
  description: string[];
  github?: string;
  tags: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "LMAOCaT: Low-rank Mamba and gated Attention Optimization",
    date: "Oct 2024 - Dec 2024",
    description: [
      "Recreated LoLCATs and developed a hybrid attention framework integrating Gated Linear Attention and Mamba blocks into Llama 3.2 1B, achieving O(n) inference scaling while maintaining 34.5% accuracy on HellaSwag",
      "Implemented attention transfer and Low-Rank Adaptation (LoRA) for efficient fine-tuning, demonstrating superior performance of hybrid configurations over linear-only substitutions"
    ],
    github: "https://github.com/shitanshubhushan/Linearizing-Llama-3.2-1B/tree/main",
    tags: ["Machine Learning", "NLP", "PyTorch"],
    featured: true
  },
  {
    title: "DSA Cognitive Tutor for Binary Trees",
    date: "Sep 2024 - Dec 2024",
    description: [
      "Engineered a Flask-based intelligent tutoring system for data structures, implementing cognitive models derived from CTA to deliver adaptive learning paths and personalized feedback using GPT.",
      "Designed question generation system spanning multiple knowledge types, with dynamic difficulty adjustment based on Bloom's taxonomy proficiency tracking and spaced repetition algorithms.",
      "Built interactive visualizations and code analysis tools for tree traversal concepts, achieving significant improvements with 4/5 users reaching 100% post-test scores."
    ],
    github: "https://github.com/DdIiVvYyAaMm/DSA-Tutor-App",
    tags: ["Flask", "Python", "GPT", "Data Structures"],
    featured: true
  },
  {
    title: "Offline Reinforcement Learning for Autonomous Driving",
    date: "Feb 2024 - May 2024",
    description: [
      "Reinforcement learning project to use soft-actor critic conservative Q-learning implementation to clone human driving behavior and predict vehicle trajectories in complex roundabout scenarios.",
      "Leveraged the INTERACTION dataset to preprocess real-world driving data into {State, Action, Reward, Next State} tuples for training reinforcement learning agents. Developed a custom reward function that combines positional, velocity, and collision metrics to simulate human-like driving behavior."
    ],
    tags: ["Reinforcement Learning", "Python", "Autonomous Driving"],
    featured: false
  },
  {
    title: "Multilabel chest X-ray classification using PCA+FCN and EfficientNeXtV2",
    date: "Oct 2023 - Dec 2023",
    description: [
      "Proposed two machine learning methods to classify chest X-rays for pneumonia detection to help doctors make quicker judgement. Dataset used was ChestX-ray14, comprising of 112,120 chest X-rays.",
      "Introduced a new deep-learning efficientNet architecture called EfficientNeXtV2 - a hybrid of EfficientNet and EfficientNetV2 with a Gaussian error linear unit (GELU) as an activation function. For training, we used SGD with momentum as our optimizer and as we had an imbalanced data ratio, we used Focal loss. The model was implemented using PyTorch."
    ],
    tags: ["Deep Learning", "PyTorch", "Computer Vision", "Healthcare"],
    featured: false
  }
];

export default function ProjectsPage() {
  const router = useRouter();

  return (
    <AuroraBackground>
      <div className="flex flex-col md:flex-row w-full h-screen overflow-hidden">
        {/* Left Section - Profile */}
        <div className="w-full md:w-[20%] flex flex-col items-center justify-start p-4 md:p-6 border-r border-border/10 overflow-y-auto">
          <Link href="/" className="flex flex-col items-center group">
            <div className="relative w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden mb-4 transition-transform group-hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500" />
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
              className="max-w-6xl mx-auto"
            >
              <h1 className="text-3xl font-bold mb-8">Projects</h1>
              <div className="grid grid-cols-1 gap-6">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-background/50 border border-border/50 rounded-lg p-6 hover:shadow-lg transition-all"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h2 className="text-xl font-semibold mb-1">{project.title}</h2>
                        <p className="text-sm text-muted-foreground">{project.date}</p>
                      </div>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                    <ul className="list-disc list-inside space-y-2 mb-4">
                      {project.description.map((point, i) => (
                        <li key={i} className="text-sm text-muted-foreground">
                          {point}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
} 