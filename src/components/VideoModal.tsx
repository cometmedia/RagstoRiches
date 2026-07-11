import { motion, AnimatePresence } from "motion/react";
import { X, Play, Shield, Volume2, Info } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoModal({ isOpen, onClose }: VideoModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="video-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-brand-dark/95 p-4 md:p-8 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            id="video-modal-container"
            initial={{ scale: 0.95, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 20, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl overflow-hidden rounded-xl bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header / Bar */}
            <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between bg-gradient-to-b from-black/80 to-transparent p-4 text-white">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-[#FFDD00] p-1 text-brand-dark">
                  <Play className="h-4 w-4 fill-current" />
                </div>
                <div>
                  <h3 className="font-sans text-sm font-medium tracking-tight">Rags to Riches Builders</h3>
                  <p className="font-mono text-[10px] tracking-wider text-white/60">CINEMATIC PROJECT WALKTHROUGH — 4K</p>
                </div>
              </div>
              <button
                id="close-video-modal-btn"
                onClick={onClose}
                className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20 hover:text-[#FFDD00] transition-all"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Video Container */}
            <div className="aspect-video w-full bg-brand-dark">
              {/* Simulated cinematic drone video walkthrough */}
              <iframe
                id="walkthrough-iframe"
                className="h-full w-full"
                src="https://www.youtube.com/embed/n3WrcbNqYIs?autoplay=1&mute=1&loop=1&playlist=n3WrcbNqYIs&controls=1&showinfo=0&rel=0"
                title="Rags to Riches Builders Walkthrough"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                referrerPolicy="no-referrer"
              ></iframe>
            </div>

            {/* Footer Status Bar */}
            <div className="flex flex-col gap-3 border-t border-white/10 bg-brand-dark p-4 text-white md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-[#FFDD00]" />
                <span className="font-sans text-xs font-medium text-brand-cream/90">
                  Every estate we build receives certified structural engineering oversight.
                </span>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono text-white/50">
                <span className="flex items-center gap-1">
                  <Volume2 className="h-3 w-3" /> Audio Enabled
                </span>
                <span className="flex items-center gap-1">
                  <Info className="h-3 w-3" /> Drone Reel
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
