// ENIGMA – Events & Workshops Section
import SectionTitle from "../components/section-title";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { XIcon, ChevronLeft, ChevronRight, Calendar, ArrowRight, Share2, MapPin, Clock, User } from "lucide-react";
import MagneticButton from "../components/animations/MagneticButton";
import { useIsMobile } from "../hooks/useIsMobile";

export default function EventsSection() {
   const isMobile = useIsMobile();
   const [selectedEvent, setSelectedEvent] = useState(null);
   const [currentImageIndex, setCurrentImageIndex] = useState(0);

   const items = [
      {
         title: "ASSOCIATION INAUGURATION",
         category: "Special Event",
         date: "August 8, 2025",
         location: "Main Auditorium, Campus North",
         upcoming: false,
         images: [
            "/assets/events/inauguration/inauguration-1.jpg",
            "/assets/events/inauguration/inauguration-2.jpg",
            "/assets/events/inauguration/inauguration-3.jpg",
            "/assets/events/inauguration/inauguration-4.jpg",
         ],
         description:
            "The grand inauguration of ENIGMA, the CSE Students Association of NCERC, marks the start of our activities, featuring guest lectures, our annual roadmap, and a vision for innovation.",
      },
      {
         title: "LOGO DESIGNING COMPETITION",
         category: "Competition",
         date: "October 02, 2025",
         upcoming: false,
         images: ["/assets/events/logo-designing/logo-designing.jpg"],
         description:
            "A creative challenge to design a unique logo that represents ENIGMA's values of innovation and excellence. Open to all students to showcase their artistic and digital branding skills.",
      },
      {
         title: "HARDWARE WORKSHOP",
         category: "Workshop",
         upcoming: false,
         date: "August 5, 2025",
         location: "Aryabhatta Seminar Hall-510",
         images: [
            "/assets/events/hardware-workshop/hardware-workshop-1.jpg",
            "/assets/events/hardware-workshop/hardware-workshop-2.jpg",
            "/assets/events/hardware-workshop/hardware-workshop-3.jpg",
            "/assets/events/hardware-workshop/hardware-workshop-4.jpg",
            "/assets/events/hardware-workshop/hardware-workshop-5.jpg",
         ],
         description:
            "A hands-on workshop to explore the basics of computer hardware with expert guidance. Includes dismantling and reassembling systems to understand component functionality.",
      },
      {
         title: "COMPUTER NETWORKS",
         category: "Workshop",
         upcoming: false,
         date: "August 11 2025",
         location: "Advanced Computing Lab 226",
         images: [
            "/assets/events/computer-networks/computer-networks-1.jpg",
            "/assets/events/computer-networks/computer-networks-2.jpg"
         ],
         description:
            "A 2-Day Workshop on Computer Networks: LAN Implementation. Dive into local area networks, gain hands-on experience in configuring and troubleshooting devices.",
      },
      {
         title: "E-FOOTBALL TOURNAMENT",
         category: "Gaming",
         upcoming: false,
         date: "September 15 2025",
         location: "Aryabhatta Seminar Hall-510",
         images: ["/assets/events/e-football/e-football.jpg"],
         description:
            "The ultimate digital football showdown! Part of ENIGMA's efforts to blend technology with sportsmanship in a high-energy gaming environment.",
      },
      {
         title: "WEB DEVELOPMENT",
         category: "Workshop",
         upcoming: false,
         date: "January 22 2026",
         location: "Advanced Computing Lab 226",
         images: [
            "/assets/events/web-dev/web-dev-1.jpg",
            "/assets/events/web-dev/web-dev-2.jpg",
            "/assets/events/web-dev/web-dev-3.jpg",
            "/assets/events/web-dev/web-dev-4.jpg"
         ],
         description:
            "An intensive workshop on building and hosting your first website, covering HTML, CSS, and modern hosting solutions.",
      },
      {
         title: "INDUSTRIAL VISIT: BRIDGEON",
         category: "Industrial Visit",
         upcoming: false,
         date: "February 19, 2026",
         location: "Bridgeon, Kochi",
         images: [
            "/assets/industrial-visits/bridgeon/bridgeon-1.jpg",
            "/assets/industrial-visits/bridgeon/bridgeon-2.jpg"
         ],
         description:
            "A visit to Bridgeon to understand the industry workflows and the latest trends in software development and placement training.",
      },
      {
         title: "INDUSTRIAL VISIT: KINFRA",
         category: "Industrial Visit",
         upcoming: false,
         date: "February 14, 2026",
         location: "Kinfra Techno Industrial Park, Kakkanchery, Malappuram",
         images: ["/assets/industrial-visits/kinfra/kinfra.jpg"],
         description:
            "Exploring the infrastructure and technological ecosystem at Kinfra Techno Industrial Park to bridge the gap between academia and industry.",
      },
      {
         title: "GENERAL PTA-MEETING & AWARENESS SESSION",
         category: "Special Event",
         upcoming: false,
         date: "February 07, 2026",
         time: "11:00 AM",
         location: "Aryabhatta Seminar Hall, NCERC",
         speaker: "Shri. Arumughan V (ASI of Police)",
         images: ["/assets/events/pta-awareness-session/pta-awareness-session.jpg"],
         description:
            "A comprehensive PTA meeting and awareness session for parents of CSE and AI&ML (S4, S6, S8) students. The session features a special talk on 'Perception on Anti-Drugs and Anti-Ragging' by Shri. Arumughan V, Janamaithri Asst. District Nodal Officer, Palakkad.",
      }
   ];

   const sortedItems = [...items].sort((a, b) => new Date(a.date) - new Date(b.date));

   const openModal = (event) => {
      setSelectedEvent(event);
      setCurrentImageIndex(0);
      document.body.style.overflow = "hidden";
      window.lenis?.stop();
   };

   const closeModal = () => {
      setSelectedEvent(null);
      document.body.style.overflow = "auto";
      window.lenis?.start();
   };

   const nextImage = (e) => {
      e.stopPropagation();
      if (selectedEvent && selectedEvent.images.length > 0) {
         setCurrentImageIndex(
            (prev) => (prev + 1) % selectedEvent.images.length,
         );
      }
   };

   const prevImage = (e) => {
      e.stopPropagation();
      if (selectedEvent && selectedEvent.images.length > 0) {
         setCurrentImageIndex(
            (prev) =>
               (prev - 1 + selectedEvent.images.length) %
               selectedEvent.images.length,
         );
      }
   };

   const handleShare = async (e) => {
      e.stopPropagation();
      if (!selectedEvent) return;

      const shareData = {
         title: `ENIGMA - ${selectedEvent.title}`,
         text: `Check out this event: ${selectedEvent.title} - ${selectedEvent.category} at NCERC!`,
         url: window.location.href,
      };

      try {
         if (navigator.share) {
            await navigator.share(shareData);
         } else {
            // Fallback: Copy to clipboard
            await navigator.clipboard.writeText(window.location.href);
            alert("Event link copied to clipboard!");
         }
      } catch (err) {
         console.error("Error sharing:", err);
      }
   };

   const [showAll, setShowAll] = useState(false);
   const visibleItems = showAll ? sortedItems : sortedItems.slice(0, isMobile ? 3 : 6);

   return (
      <section className="py-24 md:py-32 flex flex-col items-center bg-[#FDFDFF]/50" id="events">
         <SectionTitle
            title="Our Events & Workshops"
            description="Experience a blend of technical mastery, creative innovation, and competitive spirit."
         />

         <div className="mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 w-full max-w-7xl px-6">
            <AnimatePresence mode="popLayout">
               {visibleItems.map((event, index) => (
                  <motion.div
                     key={event.title + index}
                     className="group relative flex flex-col rounded-[40px] bg-white border border-gray-100 shadow-sm overflow-hidden will-change-transform"
                     initial={{ y: 30, opacity: 0, scale: 0.95 }}
                     whileInView={{ y: 0, opacity: 1, scale: 1 }}
                     viewport={{ once: true, margin: "-50px" }}
                     exit={{ y: 20, opacity: 0, scale: 0.95 }}
                     whileHover="hover"
                     variants={{
                        hover: {
                           y: -10,
                           boxShadow: "0 40px 80px -20px rgba(156, 82, 241, 0.15)"
                        }
                     }}
                     transition={{
                        delay: (index % 3) * 0.1,
                        duration: 0.5,
                        ease: "easeOut"
                     }}
                  >
                     {/* Image Container */}
                     <div className="relative h-64 sm:h-72 overflow-hidden">
                        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/40 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <motion.img
                           src={event.images[0]}
                           alt={event.title}
                           loading="lazy"
                           className="w-full h-full object-cover"
                           variants={{
                              hover: { scale: 1.1 }
                           }}
                           transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        />
                     </div>

                     {/* Content */}
                     <div className="p-8 sm:p-10 flex flex-col flex-1 relative z-20">
                        <div className="flex flex-wrap items-center gap-3 mb-6">
                           <span className="px-3 py-1 rounded-full bg-logo-purple/10 text-logo-purple text-[10px] font-black uppercase tracking-widest border border-logo-purple/10">
                              {event.category}
                           </span>
                           {event.upcoming && (
                              <span className="px-4 py-1 rounded-full bg-logo-pink/10 text-logo-pink text-[10px] font-black uppercase tracking-widest border border-logo-pink/10 flex items-center gap-2">
                                 <span className="size-1.5 rounded-full bg-logo-pink animate-pulse" />
                                 Upcoming
                              </span>
                           )}
                        </div>

                        <h3 className="text-2xl font-black text-[#1A1A1B] leading-tight mb-4 group-hover:text-logo-purple transition-colors tracking-tight">
                           {event.title}
                        </h3>

                        <div className="flex items-center gap-2 text-gray-400 text-xs font-bold mb-6 uppercase tracking-widest">
                           <Calendar size={14} className="text-logo-pink" />
                           <span>{event.date}</span>
                        </div>

                        <p className="text-gray-500 text-sm sm:text-base leading-relaxed line-clamp-2 mb-8 font-medium">
                           {event.description}
                        </p>

                        <div className="mt-auto">
                           <MagneticButton>
                              <motion.button
                                 onClick={() => openModal(event)}
                                 className="group/btn flex items-center justify-center gap-3 w-full py-5 rounded-[24px] bg-gray-50 text-[#1A1A1B] font-black text-[10px] uppercase tracking-widest border border-gray-100 active:scale-95"
                                 whileHover="hover"
                                 variants={{
                                    hover: {
                                       backgroundColor: "#F5F3FF",
                                       borderColor: "#DDD6FE",
                                       color: "#9c52f1",
                                       boxShadow: "0 10px 25px -5px rgba(156, 82, 241, 0.2)"
                                    }
                                 }}
                                 transition={{ type: "spring", stiffness: 400, damping: 25 }}
                              >
                                 Explore Event
                                 <motion.div
                                    variants={{
                                       hover: { x: 5 }
                                    }}
                                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                 >
                                    <ArrowRight size={16} />
                                 </motion.div>
                              </motion.button>
                           </MagneticButton>
                        </div>
                     </div>
                  </motion.div>
               ))}
            </AnimatePresence>
         </div>

         {sortedItems.length > (isMobile ? 3 : 6) && (
            <motion.div
               className="mt-20"
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.5 }}
            >
               <button
                  onClick={() => setShowAll(!showAll)}
                  className="flex items-center gap-3 px-10 py-5 rounded-full glass font-black text-xs uppercase tracking-widest text-[#1A1A1B] hover:bg-[#1A1A1B] hover:text-white transition-all active:scale-95 shadow-lg"
               >
                  {showAll ? (
                     <>
                        Show Less <ArrowRight size={16} className="-rotate-90 transition-transform" />
                     </>
                  ) : (
                     <>
                        View All Events <ArrowRight size={16} className="transition-transform" />
                     </>
                  )}
               </button>
            </motion.div>
         )}

         {/* Modern Detail Modal - White Background */}
         <AnimatePresence>
            {selectedEvent && (
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-[100] bg-white flex flex-col lg:flex-row overflow-hidden"
                  data-lenis-prevent
               >
                  {/* Close Button - Always visible top right */}
                  <button
                     onClick={closeModal}
                     className="absolute right-6 top-6 sm:right-10 sm:top-10 z-[120] size-12 sm:size-14 rounded-full bg-white shadow-xl flex items-center justify-center text-[#1A1A1B] hover:bg-gray-50 transition-all active:scale-95 border border-gray-100"
                  >
                     <XIcon size={24} />
                  </button>

                  {/* Left: Image Showcase (Full height on large screens) */}
                  <div className="relative w-full lg:w-1/2 h-[45vh] lg:h-full bg-gray-100 overflow-hidden">
                     <AnimatePresence mode="wait">
                        <motion.img
                           key={currentImageIndex}
                           src={selectedEvent.images[currentImageIndex]}
                           initial={{ opacity: 0, scale: 1.05 }}
                           animate={{ opacity: 1, scale: 1 }}
                           exit={{ opacity: 0, scale: 0.95 }}
                           transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                           className="w-full h-full object-cover"
                           alt={selectedEvent.title}
                        />
                     </AnimatePresence>

                     {/* Image Navigation */}
                     {selectedEvent.images.length > 1 && (
                        <>
                           <button
                              onClick={prevImage}
                              className="absolute left-6 top-1/2 -translate-y-1/2 z-20 size-14 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-white flex items-center justify-center hover:bg-black/40 transition-all"
                           >
                              <ChevronLeft size={32} />
                           </button>
                           <button
                              onClick={nextImage}
                              className="absolute right-6 top-1/2 -translate-y-1/2 z-20 size-14 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-white flex items-center justify-center hover:bg-black/40 transition-all"
                           >
                              <ChevronRight size={32} />
                           </button>
                        </>
                     )}

                     {/* Dots Indicator */}
                     <div className="absolute bottom-10 left-10 z-20 flex gap-2">
                        {selectedEvent.images.map((_, idx) => (
                           <button
                              key={idx}
                              onClick={() => setCurrentImageIndex(idx)}
                              className={`h-1 rounded-full transition-all duration-500 ${idx === currentImageIndex ? "w-8 bg-white" : "w-2 bg-white/30 hover:bg-white/50"}`}
                           />
                        ))}
                     </div>
                  </div>

                  {/* Right: Content Area */}
                  <div className="w-full lg:w-1/2 h-[55vh] lg:h-full bg-white flex flex-col p-8 sm:p-12 lg:p-12 overflow-y-auto custom-scrollbar" data-lenis-prevent>
                     <div className="max-w-2xl mx-auto w-full flex flex-col h-full">
                        <div className="mb-6 flex flex-wrap gap-3">
                           <span className="px-5 py-2 rounded-full bg-logo-purple/10 text-logo-purple text-[10px] font-black uppercase tracking-[0.2em]">
                              {selectedEvent.category}
                           </span>
                           {selectedEvent.upcoming && (
                              <span className="px-5 py-2 rounded-full bg-logo-pink/10 text-logo-pink text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2">
                                 <span className="size-2 rounded-full bg-logo-pink animate-pulse" />
                                 Upcoming Event
                              </span>
                           )}
                        </div>

                        <div className="space-y-4 mb-8">
                           <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-[#1A1A1B] leading-[1.1] tracking-tight uppercase">
                              {selectedEvent.title.split(' ').slice(0, -1).join(' ')}
                              <span className="text-logo-pink block mt-1">
                                 {selectedEvent.title.split(' ').pop()}
                              </span>
                           </h2>

                           <div className="space-y-2 pt-1">
                              <div className="flex items-center gap-3 text-gray-500 font-bold text-sm">
                                 <Calendar size={16} className="text-logo-pink" />
                                 <span>{selectedEvent.date}</span>
                              </div>
                              {selectedEvent.time && (
                                 <div className="flex items-center gap-3 text-gray-500 font-bold text-sm">
                                    <Clock size={16} className="text-logo-pink" />
                                    <span>{selectedEvent.time}</span>
                                 </div>
                              )}
                              <div className="flex items-center gap-3 text-gray-500 font-bold text-sm">
                                 <MapPin size={16} className="text-logo-pink" />
                                 <span>{selectedEvent.location || "NCERC Campus"}</span>
                              </div>
                              {selectedEvent.speaker && (
                                 <div className="flex items-center gap-3 text-gray-500 font-bold text-sm">
                                    <User size={16} className="text-logo-pink" />
                                    <span>{selectedEvent.speaker}</span>
                                 </div>
                              )}
                           </div>
                        </div>

                        <div className="space-y-6 flex-1">
                           <div className="flex flex-col gap-3">
                              <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Context & Vision</h4>
                              <p className="text-gray-600 leading-relaxed text-sm font-medium">
                                 {selectedEvent.description}
                              </p>
                           </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                           <div className="flex items-center gap-4">
                              <div className="flex -space-x-3">
                                 {[1, 2, 3, 4].map(i => (
                                    <div key={i} className={`size-8 rounded-full border-2 border-white bg-linear-to-br ${i % 2 === 0 ? 'from-logo-purple to-logo-pink' : 'from-logo-pink to-logo-red'}`} />
                                 ))}
                              </div>
                              <p className="text-[10px] text-gray-400 font-bold italic">Join 40+ others planning to attend</p>
                           </div>
                           <button
                              onClick={handleShare}
                              className="flex items-center gap-2 text-logo-purple font-black uppercase text-[10px] tracking-widest hover:translate-x-1 transition-transform"
                           >
                              Share Event <Share2 size={14} />
                           </button>
                        </div>
                     </div>
                  </div>
               </motion.div>
            )}
         </AnimatePresence>
      </section>
   );
}
