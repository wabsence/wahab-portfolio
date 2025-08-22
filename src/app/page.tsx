"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Mail, ExternalLink, Cloud, ShieldHalf, Boxes, Cpu, BadgeCheck, Download, Linkedin, Menu, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { fadeInUp, staggerContainer } from "@/lib/utils";

// WhatsApp Icon Component (SVG)
const WhatsAppIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63"/>
  </svg>
);

// Profile Data
const PROFILE = {
  name: "Wahab Mustapha Aremu",
  title: "Senior DevOps Engineer | Cloud & DevSecOps",
  tagline: "I design, secure, and automate cloud-native platforms at scale.",
  email: "wahabfactorial@gmail.com",
  linkedin: "https://www.linkedin.com/in/mustapha-wahab-7a1585151",
  github: "https://github.com/wabsence",
  credly: "https://www.credly.com/users/wahab-mustapha",
  whatsapp: "https://wa.me/2348123456789", // Replace with your actual WhatsApp number
  phone: "+234 812 345 6789" // Replace with your actual phone number
};

const CERTIFICATIONS = [
  {
    name: "KCNA: Kubernetes and Cloud Native Associate",
    issuer: "The Linux Foundation",
    issued: "May 17, 2025",
    link: "https://www.credly.com/badges/4c0150bb-f079-4aeb-a70d-5b52abfb857f",
    image: "/images/certs/KCNA.png"
  },
  {
    name: "CKA: Certified Kubernetes Administrator", 
    issuer: "The Linux Foundation",
    issued: "January 10, 2025",
    link: "https://www.credly.com/badges/03049cc2-8927-454f-ada9-2e3006cfa75f",
    image: "/images/certs/CKA.png"
  },
  {
    name: "HashiCorp Certified: Terraform Associate (003)",
    issuer: "HashiCorp", 
    issued: "August 16, 2024",
    link: "https://www.credly.com/badges/c0206704-3928-49b9-a85d-a739c46bec9e",
    image: "/images/certs/terraform.png"
  },
  {
    name: "Linux Essentials Certificate",
    issuer: "Linux Professional Institute",
    issued: "September 06, 2024", 
    link: "https://www.credly.com/badges/d2999739-404e-4cb6-9eb1-f2331d12d462",
    image: "/images/certs/LE.png"
  }
];

const PROJECTS = [
  {
    title: "kampusreport-k8s",
    description: "Kubernetes deployment of KampusReport, a cloud-native academic research management platform for streamlined submission, assessment, and collaboration.",
    github: "https://github.com/wabsence/kampusreport-k8s.git",
    image: "/images/projects/kampusreport-k8s.png",
    technologies: ["Kubernetes", "Helm", "EKS", "GitHub Actions"],
  },
  {
    title: "aws-devops-qr-code",
    description: "QR code generator deployment with Next.js frontend and FastAPI backend using modern DevOps tooling.",
    github: "https://github.com/wabsence/aws-devops-qr-code-.git", 
    image: "/images/projects/aws-devops-qr-code.png",
    technologies: ["AWS", "FastAPI", "Next.js", "Docker", "Terraform"],
  },
  {
    title: "Netflix-DevSecOps-Project",
    description: "Netflix clone on AWS with CI/CD, security, monitoring, and GitOps end-to-end.",
    github: "https://github.com/wabsence/Netflix-DevSecOps-Project.git",
    image: "/images/projects/netflix-devsecops.png", 
    technologies: ["AWS", "ArgoCD", "Grafana", "Prometheus", "WAF"],
  },
  {
    title: "devops-project-01-static-website",
    description: "A modern, responsive portfolio website built with AWS cloud services and deployed using Infrastructure as Code (Terraform) and CI/CD pipelines.",
    github: "https://github.com/wabsence/Netflix-DevSecOps-Project.git",
    image: "/images/projects/netflix-devsecops.png", 
    technologies: ["AWS (S3, CloudFront, Route 53, ACM)", "IaC (Terraform)", "CI/CD (GitHub Actions)", "Version Control (Git & GitHub)"],
  },
  {
    title: "microservices-python-app",
    description: "A Python-based microservices application on Amazon EKS (Elastic Kubernetes Service).",
    github: "https://github.com/wabsence/Netflix-DevSecOps-Project.git",
    image: "/images/projects/netflix-devsecops.png", 
    technologies: ["Frameworks (Python, JWT (JSON Web Tokens))", "Infrastructure (AWS, Amazon EKS, Kubernetes, kubectl )", "Database (MongoDB, PostgreSQL)", "Message Queuing (RabbitMQ)", "Package Management (Helm & Helm charts)", "Version Control (Git & GitHub)", "Notifications (Gmail integration, 2FA))"],
  },
];

const SKILLS = [
  { name: "DevSecOps & Cloud Security", icon: ShieldHalf },
  { name: "Infrastructure as Code (Terraform)", icon: Cpu },
  { name: "Kubernetes & GitOps", icon: Boxes },
  { name: "CI/CD with GitHub Actions", icon: Github },
];

// Floating Social Media Icons Component
const FloatingSocialIcons = () => (
  <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 flex flex-col gap-4">
    <motion.a
      href={PROFILE.linkedin}
      target="_blank"
      rel="noreferrer"
      className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      title="Connect on LinkedIn"
    >
      <Linkedin className="w-6 h-6" />
    </motion.a>
    
    <motion.a
      href={PROFILE.whatsapp}
      target="_blank"
      rel="noreferrer"
      className="w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.7, duration: 0.5 }}
      title="Chat on WhatsApp"
    >
      <WhatsAppIcon className="w-6 h-6" />
    </motion.a>
  </div>
);

// Components
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ['About', 'Certifications', 'Projects', 'Contact'];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <motion.a 
          href="#home" 
          className="text-xl font-bold"
          {...fadeInUp}
        >
          {PROFILE.name.split(' ').slice(0, 2).join(' ')}
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
          <div className="flex items-center gap-2">
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PROFILE.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-green-600 hover:bg-green-50 rounded-full transition-colors"
              title="WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4" />
            </a>
          </div>
          <Button variant="outline" size="sm" asChild>
            <a href="/assets/resume.pdf" download className="inline-flex items-center gap-2">
              <Download className="w-4 h-4" />
              Resume
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg hover:bg-secondary/80 transition-colors"
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/95 backdrop-blur-sm border-t overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="block text-sm hover:text-primary transition-colors py-2"
                >
                  {item}
                </motion.a>
              ))}
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="flex items-center gap-4 pt-4 border-t"
              >
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={PROFILE.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 text-green-600 hover:bg-green-50 rounded-full transition-colors"
                  title="WhatsApp"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                </a>
                <Button variant="outline" size="sm" asChild className="ml-auto">
                  <a href="/assets/resume.pdf" download className="inline-flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Resume
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const HeroSection = () => (
  <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20">
    <div className="container mx-auto px-4 text-center">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="max-w-4xl mx-auto"
      >
        <motion.h1 
          variants={fadeInUp}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          {PROFILE.title}
        </motion.h1>
        <motion.p 
          variants={fadeInUp}
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
        >
          {PROFILE.tagline}
        </motion.p>
        <motion.div 
          variants={fadeInUp}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button size="lg" asChild>
            <a href="#projects">
              <Boxes className="w-5 h-5 mr-2" />
              View Projects
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href={PROFILE.github} target="_blank" rel="noreferrer">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href={PROFILE.credly} target="_blank" rel="noreferrer">
              <BadgeCheck className="w-5 h-5 mr-2" />
              Credly
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const AboutSection = () => (
  <section id="about" className="py-20 bg-secondary/10">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <div className="flex items-center gap-3 mb-12">
          <Cloud className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold">About Me</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary overflow-hidden shadow-xl">
              <img 
                src="/images/profile.jpg" 
                alt="Wahab Mustapha Aremu"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const sibling = e.currentTarget.nextElementSibling as HTMLElement;
                  if (sibling) {
                    sibling.style.display = 'flex';
                  }
                }}
              />
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center text-muted-foreground" style={{display: 'none'}}>
                Add Profile Image
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 space-y-6"
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              I&apos;m <strong className="text-foreground">{PROFILE.name}</strong>, a DevOps engineer with 6+ years of experience delivering
              secure, scalable, and observable platforms on AWS. I build with modern cloud-native patterns and enjoy turning complex requirements into
              reliable, automated delivery systems.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {SKILLS.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-background/50"
                >
                  <skill.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

const CertificationsSection = () => (
  <section id="certifications" className="py-20">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-3 mb-12">
          <BadgeCheck className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold">Certifications</h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="w-16 h-16 mx-auto bg-primary/10 rounded-lg flex items-center justify-center">
                      <BadgeCheck className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-center space-y-2">
                      <h3 className="font-semibold text-sm leading-tight">{cert.name}</h3>
                      <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                      <p className="text-xs text-muted-foreground">{cert.issued}</p>
                    </div>
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <a href={cert.link} target="_blank" rel="noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Certificate
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8"
        >
          <Button variant="outline" asChild>
            <a href={PROFILE.credly} target="_blank" rel="noreferrer">
              View All Certifications on Credly
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const ProjectsSection = () => (
  <section id="projects" className="py-20 bg-secondary/10">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-3 mb-12">
          <Boxes className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold">Featured Projects</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary/5 to-secondary/20 flex items-center justify-center">
                  <Boxes className="w-12 h-12 text-primary/30" />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button variant="outline" className="w-full" asChild>
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View on GitHub
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

const ContactSection = () => (
  <section id="contact" className="py-20">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center"
      >
        <div className="flex items-center justify-center gap-3 mb-8">
          <Mail className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold">Get In Touch</h2>
        </div>
        
        <p className="text-lg text-muted-foreground mb-8">
          Want to collaborate or discuss an opportunity? Let&apos;s connect and build something amazing together.
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
          <Button size="lg" asChild>
            <a href={`mailto:${PROFILE.email}`}>
              <Mail className="w-5 h-5 mr-2" />
              Email Me
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href={PROFILE.whatsapp} target="_blank" rel="noreferrer">
              <WhatsAppIcon className="w-5 h-5 mr-2" />
              WhatsApp
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href={PROFILE.github} target="_blank" rel="noreferrer">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-8 border-t bg-secondary/5">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            Built with Next.js, Tailwind CSS, and deployed on Netlify
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-blue-600 transition-colors"
            title="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={PROFILE.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-green-600 transition-colors"
            title="WhatsApp"
          >
            <WhatsAppIcon className="w-5 h-5" />
          </a>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            title="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            className="text-muted-foreground hover:text-primary transition-colors"
            title="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <FloatingSocialIcons />
      <HeroSection />
      <AboutSection />
      <CertificationsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}