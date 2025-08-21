"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, Mail, ExternalLink, Cloud, ShieldHalf, Boxes, Cpu, BadgeCheck, Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { fadeInUp, staggerContainer } from "@/lib/utils";

// Profile Data
const PROFILE = {
  name: "Wahab Mustapha Aremu",
  title: "Senior DevOps Engineer | Cloud & DevSecOps",
  tagline: "I design, secure, and automate cloud-native platforms at scale.",
  email: "wahabfactorial@gmail.com",
  linkedin: "https://www.linkedin.com/in/mustapha-wahab-7a1585151",
  github: "https://github.com/wabsence",
  credly: "https://www.credly.com/users/wahab-mustapha",
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
];

const SKILLS = [
  { name: "DevSecOps & Cloud Security", icon: ShieldHalf },
  { name: "Infrastructure as Code (Terraform)", icon: Cpu },
  { name: "Kubernetes & GitOps", icon: Boxes },
  { name: "CI/CD with GitHub Actions", icon: Github },
];

// Components
const Navigation = () => (
  <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
    <div className="container mx-auto px-4 py-3 flex items-center justify-between">
      <motion.a 
        href="#home" 
        className="text-xl font-bold"
        {...fadeInUp}
      >
        {PROFILE.name.split(' ')[0]}
      </motion.a>
      <div className="hidden md:flex items-center space-x-6">
        {['About', 'Certifications', 'Projects', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-sm hover:text-primary transition-colors"
          >
            {item}
          </a>
        ))}
        <Button variant="outline" size="sm" asChild>
          <a href="/assets/resume.pdf" download className="inline-flex items-center gap-2">
            <Download className="w-4 h-4" />
            Resume
          </a>
        </Button>
      </div>
    </div>
  </nav>
);

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
              <BadgeCheck className="w-5 h-5 mr-2" />
              Linkedin
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
                  e.currentTarget.nextElementSibling.style.display = 'flex';
                }}
              />
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center text-muted-foreground">
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
              I'm <strong className="text-foreground">{PROFILE.name}</strong>, a DevOps engineer with 6+ years of experience delivering
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
          Want to collaborate or discuss an opportunity? Let's connect and build something amazing together.
        </p>
        
        <div className="grid sm:grid-cols-2 gap-4 max-w-md mx-auto">
          <Button size="lg" asChild>
            <a href={`mailto:${PROFILE.email}`}>
              <Mail className="w-5 h-5 mr-2" />
              Email Me
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
    <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
      <p>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
      <p className="mt-1">Built with Next.js, Tailwind CSS, and deployed on Netlify</p>
    </div>
  </footer>
);

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <CertificationsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
