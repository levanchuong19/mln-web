"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface HeroSectionProps {
  videoSrc?: string;
  videoSrcWebm?: string;
  youtubeVideoId?: string;
}

export function HeroSection({
  videoSrc,
  videoSrcWebm,
  youtubeVideoId,
}: HeroSectionProps = {}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.8, 
        type: "spring",
        stiffness: 100,
        damping: 15
      },
    },
  };

  // Tạo YouTube embed URL với autoplay, loop, và muted
  const getYouTubeEmbedUrl = (videoId: string) => {
    // Sử dụng nocookie domain để tránh cookie issues và cải thiện privacy
    // Thêm start=0 để bắt đầu từ đầu video
    return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&loop=1&mute=1&controls=0&playlist=${videoId}&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1&start=0&playsinline=1`;
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
      {/* Parallax Background Container */}
      <motion.div 
        className="absolute inset-0" 
        style={{ zIndex: 0 }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        {/* Fallback background - chỉ hiển thị khi không có video */}
        {!videoSrc && !youtubeVideoId && (
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg)] to-[var(--color-bg-secondary)]" />
        )}

        {/* Local Video File Background - ưu tiên video local */}
        {videoSrc && (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ zIndex: 1 }}
          >
            <source src={videoSrc} type="video/mp4" />
            <source src={videoSrc} type="video/webm" />
            {videoSrcWebm && <source src={videoSrcWebm} type="video/webm" />}
            Your browser does not support the video tag.
          </video>
        )}

        {/* YouTube Video Background - chỉ dùng nếu không có video local */}
        {!videoSrc && youtubeVideoId && mounted && (
          <>
            {/* Background đen để đảm bảo video hiển thị rõ */}
            <div
              className="absolute inset-0"
              style={{
                backgroundColor: "#000",
                zIndex: 0,
              }}
            />
            <div
              className="absolute inset-0 w-full h-full"
              style={{
                zIndex: 1,
                overflow: "hidden",
              }}
            >
              <iframe
                key={`yt-${youtubeVideoId}`}
                src={getYouTubeEmbedUrl(youtubeVideoId)}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: "100vw",
                  height: "56.25vw",
                  minHeight: "100vh",
                  minWidth: "177.77vh",
                  transform: "translate(-50%, -50%) scale(1.2)",
                  border: "none",
                  pointerEvents: "none",
                }}
                allow="autoplay; encrypted-media; gyroscope; picture-in-picture; accelerometer"
                allowFullScreen={false}
                frameBorder="0"
                title="YouTube background video"
              />
            </div>
          </>
        )}

        {/* Overlay gradient nhẹ - điều chỉnh opacity để video hiển thị rõ */}
        {(videoSrc || (youtubeVideoId && mounted)) && (
          <motion.div
            className="absolute inset-0"
            style={{
              zIndex: 2,
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.05) 50%, rgba(0,0,0,0.25) 100%)",
              pointerEvents: "none",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
        )}
      </motion.div>

      <motion.div
        className="relative z-10 text-center max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <motion.span 
              className="bg-gradient-to-r from-[var(--color-accent)] via-[var(--color-accent-light)] to-[var(--color-warmth)] bg-clip-text text-transparent text-gradient-animated"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              Kinh Tế Chính Trị
            </motion.span>
            <br />
            <motion.span 
              className="text-[var(--color-text)]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Mác - Lê Nin
            </motion.span>
          </h1>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-[var(--color-text-muted)] mb-8 leading-relaxed"
        >
          Khám phá hành trình kinh tế Việt Nam từ khủng hoảng đến thịnh vượng,
          qua góc nhìn triết học Mác - Lê Nin
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            className="px-8 py-3 bg-[var(--color-accent)] text-white rounded-lg font-semibold hover:bg-[var(--color-accent-light)] transition-all relative overflow-hidden group"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
          >
            <span className="relative z-10">Bắt Đầu</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[var(--color-accent-light)] to-[var(--color-accent)] opacity-0 group-hover:opacity-100"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.5 }}
            />
          </motion.button>
          <motion.button
            className="px-8 py-3 border border-[var(--color-accent)] text-[var(--color-accent)] rounded-lg font-semibold hover:bg-[var(--color-accent)]/10 transition-all underline-animated"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
          >
            Tìm Hiểu Thêm
          </motion.button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16 grid grid-cols-3 gap-4 md:gap-8"
        >
          {[
            { label: "Thời kỳ", value: "40 năm" },
            { label: "GDP tăng", value: "30x" },
            { label: "Dân số", value: "98M" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center glass-light rounded-lg p-4 backdrop-blur-sm"
              whileHover={{ y: -8, scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.8 + index * 0.1,
                type: "spring",
                stiffness: 200
              }}
            >
              <motion.div 
                className="text-2xl md:text-3xl font-bold text-[var(--color-accent)] mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  delay: 1 + index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm md:text-base text-[var(--color-text-dimmed)]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
