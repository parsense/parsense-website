"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform, AnimatePresence, useMotionValueEvent } from "framer-motion";
import {
  Brain,
  CloudSun,
  Scan,
  UserCog,
  Video,
  ChevronRight,
  X as XIcon,
  Wind,
  Zap,
  TrendingUp,
  Handshake,

  ArrowDown,
  ArrowUp,
  Menu,
  Globe,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import SectionWrapper from "@/components/section-wrapper";
import HeroBackground from "@/components/svg/hero-background";
import AppMockup from "@/components/svg/app-mockup";
import LanguageToggle from "@/components/language-toggle";
import { useRef, useState } from "react";

/* ────────────────────────────────────────────
   Animation variants
   ──────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i: number = 0) => ({
    opacity: 1,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

/* ────────────────────────────────────────────
   Store button component
   ──────────────────────────────────────────── */
function StoreButton({
  store,
  comingSoon,
}: {
  store: "apple" | "google";
  comingSoon: string;
}) {
  const isApple = store === "apple";
  return (
    <div className="relative group cursor-pointer">
      <Image
        src={isApple ? "/images/apple-appstore.webp" : "/images/google-play.webp"}
        alt={isApple ? "Download on the App Store" : "Get it on Google Play"}
        width={180}
        height={53}
        className="rounded-md transition-opacity group-hover:opacity-90"
      />
      <Badge className="absolute -top-2.5 -right-2 bg-emerald text-white text-[10px] px-2 py-0.5 shadow-lg shadow-emerald/20">
        {comingSoon}
      </Badge>
    </div>
  );
}

/* ════════════════════════════════════════════
   MAIN PAGE
   ════════════════════════════════════════════ */
export default function HomePage() {
  const nav = useTranslations("Nav");
  const hero = useTranslations("Hero");
  const problem = useTranslations("Problem");
  const features = useTranslations("Features");
  const howItWorks = useTranslations("HowItWorks");
  const investors = useTranslations("Investors");
  const testimonials = useTranslations("Testimonials");
  const stats = useTranslations("Stats");
  const faq = useTranslations("FAQ");
  const cta = useTranslations("CTA");
  const footer = useTranslations("Footer");
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress, scrollY } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Use the global scrollY to determine when to show the "Back to Top" button
  const { scrollY: globalScrollY } = useScroll();
  useMotionValueEvent(globalScrollY, "change", (latest) => {
    if (latest > 600) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  });

  const navLinks = [
    { label: nav("features"), href: "#features" },
    { label: nav("howItWorks"), href: "#how-it-works" },
    { label: nav("technology"), href: "#technology" },
    { label: nav("investors"), href: "#investors" },
  ];

  const featureCards = [
    {
      icon: Brain,
      title: features("agentic.title"),
      desc: features("agentic.description"),
      accent: "emerald" as const,
      span: "md:col-span-2" as const,
      image: "/images/bento-agentic.webp",
      imageClass: "h-48 sm:h-56",
    },
    {
      icon: CloudSun,
      title: features("environmental.title"),
      desc: features("environmental.description"),
      accent: "blue" as const,
      span: "" as const,
    },
    {
      icon: Scan,
      title: features("turf.title"),
      desc: features("turf.description"),
      accent: "emerald" as const,
      span: "" as const,
    },
    {
      icon: UserCog,
      title: features("profile.title"),
      desc: features("profile.description"),
      accent: "blue" as const,
      span: "" as const,
    },
    {
      icon: Video,
      title: features("swing.title"),
      desc: features("swing.description"),
      accent: "emerald" as const,
      span: "md:col-span-2" as const,
      image: "/images/bento-swing.webp",
      imageClass: "aspect-video",
    },
  ];

  const oldWayItems = [
    problem("oldWay1"),
    problem("oldWay2"),
    problem("oldWay3"),
    problem("oldWay4"),
    problem("oldWay5"),
  ];

  const newWayItems = [
    problem("newWay1"),
    problem("newWay2"),
    problem("newWay3"),
    problem("newWay4"),
    problem("newWay5"),
  ];

  return (
    <>
      {/* ═══════════════ HEADER / NAV ═══════════════ */}
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5"
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Image
            src="/images/parsense-logo.webp"
            alt="ParSense"
            width={150}
            height={40}
            priority
            className="h-8.75 w-auto cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <LanguageToggle />
            <Button
              size="sm"
              className="bg-emerald hover:bg-emerald/90 text-white rounded-full px-5 shadow-lg shadow-emerald/20"
              onClick={() =>
                document
                  .getElementById("cta")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {nav("earlyAccess")}
              <ChevronRight className="ml-1 h-3.5 w-3.5" />
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-white/80 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <XIcon className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/5 bg-[#0B1120]/95 backdrop-blur-xl"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm text-white/70 py-2.5 px-3 rounded-lg hover:bg-white/5 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Separator className="my-2 bg-white/5" />
              <div className="flex items-center justify-between px-3 py-2">
                <LanguageToggle />
                <Button
                  size="sm"
                  className="bg-emerald hover:bg-emerald/90 text-white rounded-full px-5"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    document
                      .getElementById("cta")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {nav("earlyAccess")}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </motion.header>

      <main className="overflow-hidden">
        {/* ═══════════════ HERO ═══════════════ */}
        <div ref={heroRef} className="relative">
          <motion.section
            style={{ opacity: heroOpacity, scale: heroScale }}
            className="relative flex min-h-dvh items-center justify-center pt-16"
          >
            <HeroBackground />

            {/* Radial gradient overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(16,185,129,0.12),transparent)]" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                {/* Left — Copy */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={stagger}
                  className="text-center lg:text-left"
                >
                  <motion.div variants={fadeUp} custom={0}>
                    <Badge
                      variant="outline"
                      className="mb-6 border-emerald/30 text-emerald bg-emerald/5 px-3 py-1"
                    >
                      <Zap className="mr-1.5 h-3 w-3" />
                      {footer("tagline")}
                    </Badge>
                  </motion.div>

                  <motion.h1
                    variants={fadeUp}
                    custom={1}
                    className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
                  >
                    <span className="text-white">ParSense:</span>{" "}
                    <span className="gradient-text">{hero("title")}</span>
                  </motion.h1>

                  <motion.p
                    variants={fadeUp}
                    custom={2}
                    className="mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg lg:max-w-none"
                  >
                    {hero("subtitle")}
                  </motion.p>

                  <motion.div
                    variants={fadeUp}
                    custom={3}
                    className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
                  >
                    <StoreButton
                      store="apple"
                      comingSoon={hero("comingSoon")}
                    />
                    <StoreButton
                      store="google"
                      comingSoon={hero("comingSoon")}
                    />
                  </motion.div>

                  <motion.div
                    variants={fadeUp}
                    custom={4}
                    className="mt-8 flex items-center justify-center gap-6 lg:justify-start"
                  >
                    <div className="flex items-center gap-2 text-xs text-white/40">
                      <Globe className="h-3.5 w-3.5" />
                      <span>{hero("tech1")}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-white/40">
                      <Brain className="h-3.5 w-3.5" />
                      <span>{hero("tech2")}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-white/40">
                      <Video className="h-3.5 w-3.5" />
                      <span>{hero("tech3")}</span>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Right — App Mockup */}
                <motion.div
                  initial={{ opacity: 0, x: 60, rotateY: -10 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                  className="relative flex justify-center lg:justify-end"
                >
                  {/* Glow behind phone */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-100 rounded-full bg-emerald/10 blur-[100px]" />
                  <div className="absolute top-1/2 left-1/2 -translate-y-1/2 size-75 rounded-full bg-blue/5 blur-[80px] translate-x-8" />
                  <AppMockup className="relative z-10 w-64 sm:w-72 lg:w-80 drop-shadow-2xl" />
                </motion.div>
              </div>

              {/* Scroll indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
              >
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowDown className="h-4 w-4 text-white/30" />
                </motion.div>
              </motion.div>
            </div>
          </motion.section>
        </div>

        {/* ═══════════════ STATS ═══════════════ */}
        <section className="relative border-y border-white/5 bg-white/2 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
              {[
                { value: stats("stat1Value"), label: stats("stat1Label") },
                { value: stats("stat2Value"), label: stats("stat2Label") },
                { value: stats("stat3Value"), label: stats("stat3Label") },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex flex-col items-center justify-center py-4 md:py-0"
                >
                  <div className="text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/50 uppercase tracking-wider text-center">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ PROBLEM & SOLUTION ═══════════════ */}
        <SectionWrapper id="technology" className="relative py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="text-center mb-16"
            >
              <motion.div variants={fadeUp}>
                <Badge
                  variant="outline"
                  className="mb-4 border-white/10 text-white/60 bg-white/5"
                >
                  {problem("sectionTag")}
                </Badge>
              </motion.div>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
              {/* Old Way */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
                custom={0}
              >
                <Card className="relative h-full border-white/5 bg-white/2 overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-br from-red-500/5 to-transparent" />
                  <CardHeader className="relative">
                    <Badge
                      variant="outline"
                      className="w-fit mb-2 border-red-500/20 text-red-400 bg-red-500/5"
                    >
                      {problem("oldWaySubtitle")}
                    </Badge>
                    <CardTitle className="text-xl text-white">
                      {problem("oldWayTitle")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative">
                    <ul className="space-y-3">
                      {oldWayItems.map((item, i) => (
                        <motion.li
                          key={i}
                          variants={fadeIn}
                          custom={i}
                          className="flex items-start gap-3 text-white/50"
                        >
                          <XIcon className="mt-0.5 h-4 w-4 shrink-0 text-red-400/60" />
                          <span className="text-sm">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              {/* New Way */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
                custom={1}
              >
                <Card className="relative h-full border-emerald/10 bg-white/2 overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-br from-emerald/5 to-blue/5" />
                  <CardHeader className="relative">
                    <Badge
                      variant="outline"
                      className="w-fit mb-2 border-emerald/20 text-emerald bg-emerald/5"
                    >
                      {problem("newWaySubtitle")}
                    </Badge>
                    <CardTitle className="text-xl text-white">
                      {problem("newWayTitle")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative">
                    <ul className="space-y-3">
                      {newWayItems.map((item, i) => (
                        <motion.li
                          key={i}
                          variants={fadeIn}
                          custom={i}
                          className="flex items-start gap-3 text-white/70"
                        >
                          <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-emerald" />
                          <span className="text-sm">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </SectionWrapper>

        {/* ═══════════════ CORE FEATURES ═══════════════ */}
        <SectionWrapper id="features" className="relative py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="text-center mb-16"
            >
              <motion.div variants={fadeUp}>
                <Badge
                  variant="outline"
                  className="mb-4 border-emerald/20 text-emerald bg-emerald/5"
                >
                  {features("sectionTag")}
                </Badge>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
              >
                {features("title")}
              </motion.h2>
              <motion.p
                variants={fadeUp}
                custom={2}
                className="mx-auto mt-4 max-w-2xl text-white/50 sm:text-lg"
              >
                {features("subtitle")}
              </motion.p>
            </motion.div>

            {/* Bento Grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
              className="grid gap-4 md:grid-cols-3"
            >
              {featureCards.map((card, i) => {
                const Icon = card.icon;
                const isEmerald = card.accent === "emerald";
                return (
                  <motion.div
                    key={i}
                    variants={scaleIn}
                    className={`group ${card.span}`}
                  >
                    <Card className="relative h-full border-white/5 bg-white/2 overflow-hidden transition-all duration-300 hover:border-white/10 hover:bg-white/4 flex flex-col">
                      {/* Hover glow */}
                      <div
                        className={`absolute -top-24 -right-24 h-48 w-48 rounded-full transition-opacity duration-500 opacity-0 group-hover:opacity-100 blur-[80px] ${
                          isEmerald ? "bg-emerald/10" : "bg-blue/10"
                        }`}
                      />
                      <CardHeader className="relative z-10">
                        <div
                          className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg ${
                            isEmerald
                              ? "bg-emerald/10 text-emerald"
                              : "bg-blue/10 text-blue"
                          }`}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                        <CardTitle className="text-lg text-white">
                          {card.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="relative z-10 flex-1">
                        <CardDescription className="text-white/50 text-sm leading-relaxed">
                          {card.desc}
                        </CardDescription>
                      </CardContent>
                      {card.image && (
                        <div className={`relative w-full mt-auto overflow-hidden border-t border-white/5 ${card.imageClass || "h-48 sm:h-56"}`}>
                          <div className="absolute inset-0 bg-linear-to-t from-[#0B1120] to-transparent z-10 opacity-80" />
                          <Image
                            src={card.image}
                            alt={card.title}
                            fill
                            className="object-cover object-center opacity-80 transition-opacity duration-500 group-hover:opacity-100"
                          />
                        </div>
                      )}
                    </Card>
                  </motion.div>
                );
              })}

              {/* Vertical Image */}
              <motion.div
                variants={scaleIn}
                className="relative hidden md:block md:col-start-3 md:row-start-2 md:row-span-2 overflow-hidden rounded-xl border border-white/5 bg-white/2 group min-h-100 lg:min-h-100"
              >
                <div className="absolute inset-0 bg-linear-to-t from-[#0B1120] to-transparent z-10 opacity-80" />
                <Image
                  src="/images/bento-vertical.webp"
                  alt="ParSense AI Analysis"
                  fill
                  className="object-cover object-top opacity-80 transition-opacity duration-500 group-hover:opacity-100"
                />
              </motion.div>
            </motion.div>
          </div>
        </SectionWrapper>

        {/* ═══════════════ HOW IT WORKS ═══════════════ */}
        <SectionWrapper id="how-it-works" className="relative py-24 sm:py-32">
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-emerald/2 to-transparent" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="text-center mb-16"
            >
              <motion.div variants={fadeUp}>
                <Badge
                  variant="outline"
                  className="mb-4 border-blue/20 text-blue bg-blue/5"
                >
                  {howItWorks("sectionTag")}
                </Badge>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
              >
                {howItWorks("title")}
              </motion.h2>
            </motion.div>

            {/* Steps */}
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  num: "01",
                  icon: Wind,
                  title: howItWorks("step1Title"),
                  desc: howItWorks("step1Desc"),
                  color: "emerald",
                },
                {
                  num: "02",
                  icon: Brain,
                  title: howItWorks("step2Title"),
                  desc: howItWorks("step2Desc"),
                  color: "blue",
                },
                {
                  num: "03",
                  icon: Zap,
                  title: howItWorks("step3Title"),
                  desc: howItWorks("step3Desc"),
                  color: "emerald",
                },
              ].map((step, i) => {
                const StepIcon = step.icon;
                const isEmerald = step.color === "emerald";
                return (
                  <motion.div
                    key={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={fadeUp}
                    custom={i}
                    className="relative"
                  >
                    {/* Connector line (desktop) */}
                    {i < 2 && (
                      <div className="hidden md:block absolute top-12 -right-4 w-8 border-t border-dashed border-white/10" />
                    )}
                    <Card className="relative h-full border-white/5 bg-white/2 text-center overflow-hidden">
                      <CardHeader className="relative items-center">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-white/20 font-mono mb-2">
                          {step.num}
                        </span>
                        <div
                          className={`mb-3 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${
                            isEmerald
                              ? "bg-emerald/10 text-emerald"
                              : "bg-blue/10 text-blue"
                          }`}
                        >
                          <StepIcon className="h-6 w-6" />
                        </div>
                        <CardTitle className="text-lg text-white">
                          {step.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="relative">
                        <CardDescription className="text-white/50 text-sm leading-relaxed">
                          {step.desc}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Swing Analysis Visual */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={scaleIn}
              className="mt-20 flex justify-center"
            >
              <div className="relative w-full max-w-4xl">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-75 rounded-full bg-blue/5 blur-[100px]" />
                <Image
                  src="/images/swing-biomechanics.webp"
                  alt="ParSense Swing Biomechanics Analysis"
                  width={1408}
                  height={768}
                  className="relative z-10 w-full rounded-2xl border border-white/10 shadow-2xl shadow-blue/10"
                />
              </div>
            </motion.div>
          </div>
        </SectionWrapper>

        {/* ═══════════════ TESTIMONIALS ═══════════════ */}
        <SectionWrapper id="testimonials" className="relative py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="text-center mb-16"
            >
              <motion.div variants={fadeUp}>
                <Badge
                  variant="outline"
                  className="mb-4 border-emerald/20 text-emerald bg-emerald/5"
                >
                  {testimonials("sectionTag")}
                </Badge>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
              >
                {testimonials("title")}
              </motion.h2>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  quote: testimonials("t1Quote"),
                  author: testimonials("t1Author"),
                  role: testimonials("t1Role"),
                },
                {
                  quote: testimonials("t2Quote"),
                  author: testimonials("t2Author"),
                  role: testimonials("t2Role"),
                },
                {
                  quote: testimonials("t3Quote"),
                  author: testimonials("t3Author"),
                  role: testimonials("t3Role"),
                },
              ].map((t, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={fadeUp}
                  custom={i}
                >
                  <Card className="h-full border-white/5 bg-white/2 p-6 flex flex-col justify-between transition-all duration-300 hover:border-white/10 hover:bg-white/4">
                    <div className="mb-6">
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, j) => (
                          <svg
                            key={j}
                            className="w-4 h-4 text-emerald"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-white/70 italic text-sm leading-relaxed">
                        {t.quote}
                      </p>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">
                        {t.author}
                      </p>
                      <p className="text-white/40 text-xs">{t.role}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* ═══════════════ INVESTORS ═══════════════ */}
        <SectionWrapper id="investors" className="relative py-24 sm:py-32">
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-blue/2 to-transparent" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="text-center mb-16"
            >
              <motion.div variants={fadeUp}>
                <Badge
                  variant="outline"
                  className="mb-4 border-gold/20 text-gold bg-gold/5"
                >
                  {investors("sectionTag")}
                </Badge>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
              >
                {investors("title")}
              </motion.h2>
              <motion.p
                variants={fadeUp}
                custom={2}
                className="mx-auto mt-4 max-w-3xl text-white/50 sm:text-lg"
              >
                {investors("subtitle")}
              </motion.p>
            </motion.div>

            {/* Investor Metric Cards */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
              className="grid gap-6 md:grid-cols-3"
            >
              {[
                {
                  icon: Brain,
                  title: investors("metric1Title"),
                  desc: investors("metric1Desc"),
                  gradient: "from-emerald/10 to-blue/10",
                  iconBg: "bg-emerald/10 text-emerald",
                },
                {
                  icon: TrendingUp,
                  title: investors("metric2Title"),
                  desc: investors("metric2Desc"),
                  gradient: "from-blue/10 to-emerald/10",
                  iconBg: "bg-blue/10 text-blue",
                },
                {
                  icon: Handshake,
                  title: investors("metric3Title"),
                  desc: investors("metric3Desc"),
                  gradient: "from-gold/10 to-emerald/10",
                  iconBg: "bg-gold/10 text-gold",
                },
              ].map((metric, i) => {
                const MetricIcon = metric.icon;
                return (
                  <motion.div key={i} variants={scaleIn}>
                    <Card className="group relative h-full border-white/5 bg-white/2 overflow-hidden transition-all duration-300 hover:border-white/10 hover:bg-white/4">
                      <div
                        className={`absolute inset-0 bg-linear-to-br ${metric.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      />
                      <CardHeader className="relative text-center items-center">
                        <div
                          className={`mb-3 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${metric.iconBg}`}
                        >
                          <MetricIcon className="h-6 w-6" />
                        </div>
                        <CardTitle className="text-xl text-white">
                          {metric.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="relative text-center">
                        <CardDescription className="text-white/50 text-sm leading-relaxed">
                          {metric.desc}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </SectionWrapper>

        {/* ═══════════════ FAQ ═══════════════ */}
        <SectionWrapper id="faq" className="relative py-24 sm:py-32">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="text-center mb-16"
            >
              <motion.div variants={fadeUp}>
                <Badge
                  variant="outline"
                  className="mb-4 border-white/10 text-white/60 bg-white/5"
                >
                  {faq("sectionTag")}
                </Badge>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="text-3xl font-bold text-white sm:text-4xl"
              >
                {faq("title")}
              </motion.h2>
            </motion.div>

            <div className="space-y-4">
              {[
                { q: faq("q1"), a: faq("a1") },
                { q: faq("q2"), a: faq("a2") },
                { q: faq("q3"), a: faq("a3") },
                { q: faq("q4"), a: faq("a4") },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={fadeUp}
                  custom={i}
                >
                  <Card className="border-white/5 bg-white/2 p-6">
                    <h3 className="text-lg font-medium text-white mb-2">
                      {item.q}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {item.a}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* ═══════════════ CTA ═══════════════ */}
        <SectionWrapper id="cta" className="relative py-24 sm:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(16,185,129,0.08),transparent)]" />
          <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
            >
              <motion.h2
                variants={fadeUp}
                className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
              >
                {cta("title")}
              </motion.h2>
              <motion.p
                variants={fadeUp}
                custom={1}
                className="mx-auto mt-4 max-w-xl text-white/50 sm:text-lg"
              >
                {cta("subtitle")}
              </motion.p>

              <motion.div
                variants={fadeUp}
                custom={2}
                className="mt-10 max-w-md mx-auto"
              >
                <form
                  className="flex flex-col sm:flex-row gap-3"
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert(cta("success"));
                  }}
                >
                  <input
                    type="email"
                    required
                    placeholder={cta("placeholder")}
                    className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-emerald focus:outline-none focus:ring-1 focus:ring-emerald transition-colors"
                  />
                  <Button
                    type="submit"
                    className="bg-emerald hover:bg-emerald/90 text-white rounded-xl px-8 py-6 h-auto font-medium shadow-lg shadow-emerald/20"
                  >
                    {cta("button")}
                  </Button>
                </form>
              </motion.div>

              <motion.div
                variants={fadeUp}
                custom={3}
                className="mt-12 flex flex-wrap items-center justify-center gap-4"
              >
                <StoreButton
                  store="apple"
                  comingSoon={cta("comingSoon")}
                />
                <StoreButton
                  store="google"
                  comingSoon={cta("comingSoon")}
                />
              </motion.div>
            </motion.div>
          </div>
        </SectionWrapper>
      </main>

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer className="border-t border-white/5 bg-[#0B1120]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
            <div className="flex flex-col items-center gap-2 md:items-start">
              <Image
                src="/images/parsense-logo.webp"
                alt="ParSense"
                width={150}
                height={40}
                className="h-8 w-auto cursor-pointer"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              />
              <p className="text-xs text-white/30">{footer("tagline")}</p>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-xs text-white/40 transition-colors hover:text-white/70"
              >
                {footer("privacy")}
              </a>
              <a
                href="#"
                className="text-xs text-white/40 transition-colors hover:text-white/70"
              >
                {footer("terms")}
              </a>
              <a
                href="mailto:investors@parsense.app"
                className="text-xs text-emerald/70 transition-colors hover:text-emerald"
              >
                {footer("investorContact")}
              </a>
            </div>
          </div>
          <Separator className="my-8 bg-white/5" />
          <p className="text-center text-xs text-white/30">
            {footer("copyright")}
          </p>
        </div>
      </footer>

      {/* ═══════════════ BACK TO TOP ═══════════════ */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[#0B1120]/80 backdrop-blur-md border border-emerald/30 text-emerald shadow-lg shadow-emerald/20 transition-all hover:bg-emerald/10 hover:border-emerald/50"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
