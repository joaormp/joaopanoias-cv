"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Moon, Sun, Briefcase, GraduationCap, Award, Code, Globe, Mail, Linkedin, Github, Download } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function CVPage() {
  const [darkMode, setDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState("summary")

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark")
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["summary", "experience", "skills", "education", "certifications", "languages"]
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 z-10 transition-colors duration-300">
          <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
            <h1 className="text-2xl font-bold">João Panoias</h1>
            <nav className="hidden md:flex space-x-4">
              {["Summary", "Experience", "Skills", "Education", "Certifications", "Languages"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.toLowerCase()
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                >
                  {item}
                </a>
              ))}
            </nav>
            <Button onClick={toggleDarkMode} variant="ghost" size="icon" className="rounded-full">
              {darkMode ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
            </Button>
          </div>
        </header>

        <main className="max-w-6xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <section id="summary" className="mb-16">
              <h2 className="text-4xl font-bold mb-4">DevOps Engineer</h2>
              <p className="text-xl mb-6">
                Experienced DevOps Engineer with a strong background in IT system administration. Skilled in
                infrastructure automation, monitoring systems development, and supporting critical manufacturing
                systems.
              </p>
              <div className="flex flex-wrap gap-4 mb-6 ">
                <Button asChild variant="outline">
                  <a href="mailto:joaopanoias@gmail.com">
                    <Mail className="mr-2 h-4 w-4" /> Contact Me
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href="https://www.linkedin.com/in/joaopanoias/">
                    <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href="https://github.com/joaormp">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </a>
                </Button>
                  <Button
                      variant="outline"
                      onClick={() => {
                          const link = document.createElement('a');
                          link.href = '/CV-JP-2025-IN.pdf';
                          link.download = 'CV-Joao-Panoias-2025.pdf'; // This will be the name of the downloaded file
                          document.body.appendChild(link);
                          link.click();
                          document.body.removeChild(link);
                      }}
                  >
                      <Download className="mr-2 h-4 w-4" /> Download CV
                  </Button>
              </div>
            </section>
          </motion.div>

          <Section id="experience" icon={<Briefcase />} title="Work Experience">
            <Timeline>
              <TimelineItem
                title="DevOps Engineer"
                company="Webasto Portugal"
                date="February 2019 - Present"
                description={[
                  "Lead infrastructure automation initiatives using Infrastructure as Code (IaC)",
                  "Develop and implement monitoring solutions using Nagios and Zabbix",
                  "Architect and manage global Windows Server Update Services (WSUS) infrastructure",
                  "Support and enhance Manufacturing Execution Systems (MES) across 34 global sites",
                ]}
              />
              <TimelineItem
                title="IT System Administrator"
                company="MEGASA - SN Seixal - Siderurgia Nacional, S.A."
                date="June 2008 - January 2019"
                description={[
                  "Managed Microsoft Windows Server, Active Directory, and Exchange",
                  "Administered VMware Infrastructure and Oracle VM",
                  "Implemented and managed monitoring systems using ZABBIX",
                  "Supported various industrial software and internal applications",
                ]}
              />
              <TimelineItem
                title="IT Technician"
                company="JRE - Gestão de Sistemas Informáticos, Lda."
                date="January 2005 - June 2008"
                description={[
                  "Provided support for multiple types of software and operating systems",
                  "Maintained and replaced server and workstation equipment",
                  "Supported diverse client needs across various IT areas",
                ]}
              />
            </Timeline>
          </Section>

          <Section id="skills" icon={<Code />} title="Skills">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SkillCategory
                title="DevOps & Cloud"
                skills={[
                  { name: "Azure DevOps", level: 90 },
                  { name: "Infrastructure as Code", level: 85 },
                  { name: "Containerization", level: 80 },
                ]}
              />
              <SkillCategory
                title="Systems & Networking"
                skills={[
                  { name: "Windows Server", level: 95 },
                  { name: "VMware", level: 90 },
                  { name: "Active Directory", level: 85 },
                  { name: "Networking", level: 80 },
                ]}
              />
              <SkillCategory
                title="Monitoring & Security"
                skills={[
                  { name: "Nagios", level: 85 },
                  { name: "Zabbix", level: 90 },
                  { name: "WSUS", level: 85 },
                  { name: "Cybersecurity", level: 75 },
                ]}
              />
              <SkillCategory
                title="Databases"
                skills={[
                  { name: "Oracle", level: 80 },
                  { name: "MySQL", level: 85 },
                  { name: "PostgreSQL", level: 75 },
                  { name: "SQL Server", level: 80 },
                ]}
              />
              <SkillCategory
                title="Programming"
                skills={[
                  { name: "PowerShell", level: 90 },
                  { name: "Python", level: 75 },
                  { name: ".NET", level: 70 },
                  { name: "PHP", level: 65 },
                ]}
              />
              <SkillCategory
                title="Other"
                skills={[
                  { name: "MES", level: 85 },
                  { name: "Business Intelligence", level: 75 },
                  { name: "Lean Management", level: 70 },
                ]}
              />
            </div>
          </Section>

          <Section id="education" icon={<GraduationCap />} title="Education">
            <Card className="mb-6">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold">IT Specialist Technician</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Escola Superior de Tecnologia de Setúbal | October 2014 - November 2015
                </p>
                <p className="mt-2">EQF level 5 certification in IT systems and network management</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold">Computer Technician and Management</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Fundação Escola Profissional de Setúbal | October 1998 - October 2001
                </p>
                <p className="mt-2">EQF level 4 certification in computer systems and management</p>
              </CardContent>
            </Card>
          </Section>

          <Section id="certifications" icon={<Award />} title="Certifications">
            <div className="flex flex-wrap gap-4">
              <CertificationBadge name="Microsoft 365 Certified: Fundamentals" />
              <CertificationBadge name="Microsoft Certified: Azure Fundamentals" />
              <CertificationBadge name="Business Intelligence Developer & Consultant" />
            </div>
          </Section>

          <Section id="languages" icon={<Globe />} title="Languages">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <LanguageCard language="Portuguese" level="Native" progress={100} />
              <LanguageCard language="English" level="Proficient (C1-C2)" progress={90} />
              <LanguageCard language="Spanish" level="Basic (A2-B1)" progress={40} />
            </div>
          </Section>
        </main>

        <footer className="bg-gray-200 dark:bg-gray-800 text-center p-4">
          <p>&copy; 2025 João Panoias. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

function Section({
  id,
  icon,
  title,
  children,
}: { id: string; icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <h2 className="text-3xl font-semibold mb-6 flex items-center">
        <span className="mr-2">{icon}</span>
        {title}
      </h2>
      {children}
    </motion.section>
  )
}

function Timeline({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />
      {children}
    </div>
  )
}

function TimelineItem({
  title,
  company,
  date,
  description,
}: { title: string; company: string; date: string; description: string[] }) {
  return (
    <div className="mb-8 ml-12">
      <div className="absolute left-4 w-3 h-3 bg-blue-600 rounded-full mt-1.5 -translate-x-1.5" />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        {company} | {date}
      </p>
      <ul className="mt-2 list-disc list-inside">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

function SkillCategory({ title, skills }: { title: string; skills: { name: string; level: number }[] }) {
  return (
    <Card>
      <CardContent className="pt-6">
        <h4 className="font-semibold mb-4">{title}</h4>
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function CertificationBadge({ name }: { name: string }) {
  return (
    <Badge variant="secondary" className="text-lg py-2 px-4">
      {name}
    </Badge>
  )
}

function LanguageCard({ language, level, progress }: { language: string; level: string; progress: number }) {
  return (
    <Card>
      <CardContent className="pt-6">
        <h4 className="font-semibold">{language}</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{level}</p>
        <Progress value={progress} className="h-2" />
      </CardContent>
    </Card>
  )
}

