"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { Linkedin, MessageCircle, Twitter, Github } from "lucide-react";
import Link from "next/link";
import { GitHubContributions } from "@/components/github-contributions";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { projects } from "@/data/projects";
import profileImage from "@/assets/images/profile.jpg";
import Image from "next/image";
import { socialLinks } from "@/data/social-links";

const featuredProjects = projects
  .filter((project): project is (typeof projects)[0] => project.featured)
  .map(project => ({
    ...project,
    description: project.description[0]
  }));

interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
}

export default function HomePage() {
  const [posts, setPosts] = useState<MediumPost[]>([]);
  const [currentPostIndex, setCurrentPostIndex] = useState(0);
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

    // Auto-advance carousel every 5 seconds
    const interval = setInterval(() => {
      setCurrentPostIndex((prev) => (prev + 1) % (posts.length || 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [posts.length]);

  return (
    <AuroraBackground>
      <div className="flex flex-col md:flex-row w-full h-screen overflow-hidden">
        {/* Left Section - Profile */}
        <div className="w-full md:w-[20%] flex flex-col items-center justify-start p-4 md:p-6 border-r border-border/10 overflow-y-auto">
          <div className="relative w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden mb-4">
            <Image
              src={profileImage}
              alt="Shitanshu Bhushan"
              fill
              className="object-cover"
              priority
            />
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
              {/* GitHub Contributions */}
              <div className="bg-[#0d1117] rounded-lg p-4 relative z-10 shadow-lg border border-[#30363d]">
                <GitHubContributions />
              </div>

              {/* Featured Projects */}
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Featured Projects</h2>
                  <Link 
                    href="/projects"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    View all projects →
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {featuredProjects.map((project) => (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-background/50 border border-border/50 rounded-lg p-6 hover:shadow-lg transition-all"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-lg font-semibold">{project.title}</h3>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
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
              </div>

              {/* Blog Posts */}
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Blog Posts</h2>
                  <Link 
                    href="/blog"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    View all posts →
                  </Link>
                </div>
                <div className="relative">
                  {loading ? (
                    <div className="text-center py-8">Loading posts...</div>
                  ) : posts.length === 0 ? (
                    <div className="text-center py-8">No posts found</div>
                  ) : (
                    <div className="overflow-x-auto pb-4">
                      <div className="flex gap-4 w-max">
                        {posts.map((post, index) => (
                          <motion.a
                            key={post.link}
                            href={post.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="block w-[300px] bg-background/50 border border-border/50 rounded-lg p-6 hover:shadow-lg transition-all group"
                          >
                            <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                              {post.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {new Date(post.pubDate).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}
                            </p>
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
} 