"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Tìm Hiểu", href: "#timhieu" },
    { label: "Phân Tích", href: "#phantich" },
    { label: "Dữ Liệu", href: "#dulieu" },
    { label: "Thách Thức", href: "#thachthuc" },
    { label: "Câu Hỏi", href: "#cauhoi" },
    { label: "Góc Nhìn", href: "#goicnhinh" },
    { label: "Trắc Nghiệm", href: "#quiz" },
    { label: "Chatbot", href: "/chatbot" },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith("/")) {
      window.location.href = href;
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--color-primary)]/80 backdrop-blur-md border-b border-[var(--color-border)] glass"
          : "bg-transparent"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] bg-clip-text text-transparent cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Kinh Tế Chính Trị
          </motion.div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors cursor-pointer underline-animated relative"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 0.1 * index, 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          <button
            className="md:hidden flex items-center justify-center w-10 h-10 text-[var(--color-accent)]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ 
                duration: 0.3,
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
              className="md:hidden overflow-hidden glass-light rounded-lg mt-2"
            >
              <motion.div 
                className="py-4 space-y-3 border-t border-[var(--color-border)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    className="block px-4 py-2 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:bg-[var(--color-surface)]/50 rounded-lg transition-colors cursor-pointer"
                    whileHover={{ x: 8, scale: 1.02 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: 0.1 + index * 0.05,
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
