"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { Linkedin, MessageCircle, Twitter, Github } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });

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

interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<MediumPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@shitanshu273`
        );
        const data = await response.json();
        setPosts(data.items || []);
      } catch (error) {
        console.error("Error fetching Medium posts:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return (
    <AuroraBackground>
      <div className="flex flex-col md:flex-row w-full h-screen">
        {/* Left Section - Profile */}
        <div className="w-full md:w-[20%] flex flex-col items-center justify-start p-4 md:p-6 border-r border-border/10">
          <div className="relative w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden mb-4">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500" />
          </div>
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <h1 className="text-xl md:text-2xl font-bold mb-2">Shitanshu Bhushan</h1>
          </Link>
          <p className="text-sm text-muted-foreground text-center mb-6">
            Graduate Student at University of Michigan, Ann Arbor | Ex Accenture | Contributor at towardsdatascience
          </p>
          <div className="flex flex-col gap-3 w-full">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
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
                </Link>
              );
            })}
          </div>
        </div>

        {/* Right Section - Content */}
        <div className="w-full md:w-[80%] relative">
          <NavBar />
          <div className="h-[calc(100vh-5rem)] overflow-y-auto px-4 py-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-7xl mx-auto"
            >
              <h1 className={`text-2xl font-bold mb-6 ${playfair.className}`}>Latest Blog Posts</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {loading ? (
                  <div className="col-span-full text-center py-20">Loading posts...</div>
                ) : posts.length === 0 ? (
                  <div className="col-span-full text-center py-20">No posts found</div>
                ) : (
                  posts.map((post, index) => (
                    <motion.a
                      key={post.link}
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group p-6 bg-background/50 border border-border/50 rounded-lg hover:shadow-lg transition-all h-[180px] flex flex-col relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <h2 className={`text-lg font-semibold mb-2 group-hover:text-primary transition-colors ${playfair.className}`}>
                        {post.title}
                      </h2>
                      <p className="text-xs text-muted-foreground mt-auto">
                        {new Date(post.pubDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </motion.a>
                  ))
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
} 