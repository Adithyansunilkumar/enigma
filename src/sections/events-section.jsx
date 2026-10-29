// ENIGMA – Events & Workshops Section
import SectionTitle from "../components/section-title";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { XIcon, ChevronLeft, ChevronRight, Calendar, ArrowRight, Share2, MapPin, Clock, User, Users, Award } from "lucide-react";
import MagneticButton from "../components/animations/MagneticButton";
import { useIsMobile } from "../hooks/useIsMobile";

const categories = ["All", "Workshops", "Peer Learning", "Industrial Visits", "Special Events"];

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
      date: "August 11, 2025",
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
      date: "September 15, 2025",
      location: "Aryabhatta Seminar Hall-510",
      images: ["/assets/events/e-football/e-football.jpg"],
      description:
         "The ultimate digital football showdown! Part of ENIGMA's efforts to blend technology with sportsmanship in a high-energy gaming environment.",
   },
   {
      title: "WEB DEVELOPMENT",
      category: "Workshop",
      upcoming: false,
      date: "January 22, 2026",
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
   },
   {
      title: "FROM PROMPT TO WORKFLOW",
      subtitle: "Building AI-Powered Automation",
      category: "Workshop",
      upcoming: false,
      date: "August 11, 2026",
      location: "Aryabhatta Seminar Hall, NCERC",
      speaker: "Mr. Mohamed Jabir (Assistant Professor, Majlis College)",
      audience: "S5 CSE Students",
      coordinators: "Faculty: Savitha C S, Shinu Jacob | Student: Jishnu T P, K S Sreeniranjan",
      images: ["/assets/events/prompt-to-workflow/from-prompt-to-workflow.jpeg"],
      description:
         "A comprehensive technical workshop on 'Building AI-Powered Automation' presented by Mr. Mohamed Jabir, Assistant Professor at Majlis College. Designed specifically for S5 CSE students, the session guided participants through transforming simple prompts into robust autonomous workflows and AI-driven automation pipelines.",
   },
   {
      title: "PASS THE TORCH",
      subtitle: "Senior's Wisdom for Junior's Journey",
      category: "Peer Learning",
      upcoming: false,
      date: "August 11, 2026",
      time: "01:30 PM - 04:00 PM",
      location: "Aryabhatta Seminar Hall, NCERC",
      speaker: "Shravya Binesh, Rasitha C R, K S Sreeniranjan, Nithin Narayanan M B, Shika K P",
      audience: "Second-Year B.Tech CSE Students",
      coordinators: "Faculty: Ms. Pradheeba P | Student: Mr. Aji Krishna S",
      images: ["/assets/events/pass-the-torch/pass-the-torch.jpeg"],
      description:
         "An empowering peer mentoring session themed 'Senior's Wisdom for Junior's Journey' and 'Experience Shared Today, Success Tomorrow!'. Senior students shared actionable advice on academic success strategies, technical skill roadmaps, internship/placement preparation, and campus life balance, culminating in an interactive open Q&A.",
   },
   {
      title: "HACK THE MATRIX",
      subtitle: "Decode the System. Master the Defense",
      category: "Workshop",
      upcoming: false,
      date: "September 05, 2026",
      location: "NETLAB, Aryabhatta Block, NCERC",
      speaker: "Ms. Rakhi S & Mr. Abhiram A (Cybersecurity Analysts, Synerfo Solutions)",
      audience: "S5 CSE Students",
      coordinators: "Faculty: Ms. Sameema I | Student: K S Sreeniranjan, Midhun Krishna",
      images: ["/assets/events/hack-the-matrix/hack-the-matrix.jpeg"],
      description:
         "A high-impact technical workshop themed 'Decode the System. Master the Defense.' Led by industry cybersecurity analysts Ms. Rakhi S and Mr. Abhiram A from Synerfo Solutions, S5 CSE students gained hands-on training in vulnerability identification, modern defensive strategies, and ethical cybersecurity practices.",
   },
   {
      title: "CODEBRIDGE: GITHUB JUMPSTART",
      subtitle: "A Peer Learning Session",
      category: "Peer Learning",
      upcoming: false,
      date: "September 28, 2026",
      time: "01:00 PM - 03:00 PM",
      location: "Room No. 332 & 333, NCERC",
      speaker: "Adithyan S & Abhijith R Nair (S5 CSE A)",
      audience: "S3 CSE Students",
      coordinators: "Faculty: Ms. Aasha V C | Student: Abhinand Nandakumar",
      images: ["/assets/events/codebridge-github-jumpstart/codebridge-github-jumpstart.jpeg"],
      description:
         "A hands-on peer learning initiative organized under CODEBRIDGE to equip S3 CSE students with core version control skills. Facilitated by peer mentors Adithyan S and Abhijith R Nair, the session covered Git fundamentals, GitHub repository collaboration, branch workflows, and VS Code integration.",
   }
];

// Sort events: upcoming first, then descending by date (most recent first)
const sortedItems = [...items].sort((a, b) => {
   if (a.upcoming && !b.upcoming) return -1;
   if (!a.upcoming && b.upcoming) return 1;
   return new Date(b.date) - new Date(a.date);
});

export default function EventsSection() {
   const isMobile = useIsMobile();
   const [selectedEvent, setSelectedEvent] = useState(null);
   const [currentImageIndex, setCurrentImageIndex] = useState(0);
   const [activeCategory, setActiveCategory] = useState("All");
   const [showAll, setShowAll] = useState(false);

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
         text: `Check out ${selectedEvent.title} (${selectedEvent.category}) at NCERC!`,
         url: window.location.href,
      };

      try {
         if (navigator.share) {
            await navigator.share(shareData);
         } else {
            await navigator.clipboard.writeText(window.location.href);
            alert("Event link copied to clipboard!");
         }
      } catch (err) {
         console.error("Error sharing:", err);
      }
   };

   const filteredItems = sortedItems.filter((item) => {
      if (activeCategory === "All") return true;
      if (activeCategory === "Workshops") return item.category === "Workshop";
      if (activeCategory === "Peer Learning") return item.category === "Peer Learning";
      if (activeCategory === "Industrial Visits") return item.category === "Industrial Visit";
      if (activeCategory === "Special Events") {
         return item.category === "Special Event" || item.category === "Competition" || item.category === "Gaming";
      }
      return true;
   });

   const visibleItems = showAll ? filteredItems : filteredItems.slice(0, isMobile ? 3 : 6);

   return (
      <section className="py-24 md:py-32 flex flex-col items-center bg-[#FDFDFF]/50" id="events">
         <SectionTitle
            title="Our Events & Workshops"
            description="Experience a blend of technical mastery, creative innovation, and collaborative peer learning."
         />

         {/* Category Filter Tabs */}
         <div className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-6 max-w-4xl">
            {categories.map((category) => {
               const isSelected = activeCategory === category;
               return (
                  <button
                     key={category}
                     onClick={() => {
                        setActiveCategory(category);
                        setShowAll(false);
                     }}
                     className={`px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                        isSelected
                           ? "bg-linear-to-r from-logo-purple to-logo-pink text-white shadow-lg shadow-logo-purple/20 scale-105"
                           : "bg-white text-gray-500 hover:text-gray-900 border border-gray-100 hover:border-gray-200 shadow-xs"
                     }`}
                  >
                     {category}
                  </button>
               );
            })}
         </div>

         {/* Event Cards Grid */}
         <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 w-full max-w-7xl px-6">
            <AnimatePresence mode="popLayout">
               {visibleItems.map((event, index) => (
                  <EventCard
                     key={event.title + index}
                     event={event}
                     index={index}
                     onOpen={() => openModal(event)}
                  />
               ))}
            </AnimatePresence>
         </div>

         {/* View All / Collapse Button */}
         {filteredItems.length > (isMobile ? 3 : 6) && (
            <motion.div
               className="mt-20"
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.3 }}
            >
               <MagneticButton>
                  <motion.button
                     onClick={() => setShowAll(!showAll)}
                     className="group/view-all flex items-center gap-4 px-12 py-6 rounded-3xl bg-white border border-gray-100 shadow-sm text-[#1A1A1B] font-black text-xs uppercase tracking-[0.2em] transition-all hover:border-logo-pink/30 hover:shadow-xl hover:shadow-logo-pink/10 active:scale-95 cursor-pointer"
                  >
                     <span className="relative z-10 flex items-center gap-3">
                        {showAll ? (
                           <>
                              Collapse All <ArrowRight size={18} className="-rotate-90 group-hover/view-all:-translate-y-0.5 transition-transform" />
                           </>
                        ) : (
                           <>
                              View All {activeCategory === "All" ? "Workshops & Events" : activeCategory} ({filteredItems.length}) <ArrowRight size={18} className="group-hover/view-all:translate-x-1.5 transition-transform text-logo-pink" />
                           </>
                        )}
                     </span>
                  </motion.button>
               </MagneticButton>
            </motion.div>
         )}

         {/* Detail Modal */}
         <AnimatePresence>
            {selectedEvent && (
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-[100] bg-white flex flex-col lg:flex-row overflow-hidden"
                  data-lenis-prevent
               >
                  {/* Close Button */}
                  <button
                     onClick={closeModal}
                     className="absolute right-6 top-6 sm:right-10 sm:top-10 z-[120] size-12 sm:size-14 rounded-full bg-white shadow-xl flex items-center justify-center text-[#1A1A1B] hover:bg-gray-50 transition-all active:scale-95 border border-gray-100 cursor-pointer"
                     aria-label="Close modal"
                  >
                     <XIcon size={24} />
                  </button>

                  {/* Left: Image Showcase with ambient blur */}
                  <div className="relative w-full lg:w-1/2 h-[45vh] lg:h-full bg-slate-950 overflow-hidden flex items-center justify-center">
                     {/* Blurred ambient background */}
                     <img
                        src={selectedEvent.images[currentImageIndex]}
                        alt=""
                        aria-hidden="true"
                        className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-110 pointer-events-none"
                     />

                     <AnimatePresence mode="wait">
                        <motion.img
                           key={currentImageIndex}
                           src={selectedEvent.images[currentImageIndex]}
                           initial={{ opacity: 0, scale: 0.98 }}
                           animate={{ opacity: 1, scale: 1 }}
                           exit={{ opacity: 0, scale: 0.98 }}
                           transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                           className="relative z-10 max-w-full max-h-full object-contain p-4 sm:p-6 drop-shadow-2xl"
                           alt={selectedEvent.title}
                        />
                     </AnimatePresence>

                     {/* Image Navigation */}
                     {selectedEvent.images.length > 1 && (
                        <>
                           <button
                              onClick={prevImage}
                              className="absolute left-6 top-1/2 -translate-y-1/2 z-20 size-14 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white flex items-center justify-center hover:bg-black/60 transition-all cursor-pointer"
                           >
                              <ChevronLeft size={32} />
                           </button>
                           <button
                              onClick={nextImage}
                              className="absolute right-6 top-1/2 -translate-y-1/2 z-20 size-14 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white flex items-center justify-center hover:bg-black/60 transition-all cursor-pointer"
                           >
                              <ChevronRight size={32} />
                           </button>
                        </>
                     )}

                     {/* Dots Indicator */}
                     {selectedEvent.images.length > 1 && (
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                           {selectedEvent.images.map((_, idx) => (
                              <button
                                 key={idx}
                                 onClick={() => setCurrentImageIndex(idx)}
                                 className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                                    idx === currentImageIndex ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/70"
                                 }`}
                              />
                           ))}
                        </div>
                     )}
                  </div>

                  {/* Right: Content Area */}
                  <div className="w-full lg:w-1/2 h-[55vh] lg:h-full bg-white flex flex-col p-8 sm:p-12 lg:p-12 overflow-y-auto custom-scrollbar" data-lenis-prevent>
                     <div className="max-w-2xl mx-auto w-full flex flex-col h-full">
                        <div className="mb-4 flex flex-wrap gap-3">
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
                           <div>
                              <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-[#1A1A1B] leading-[1.1] tracking-tight uppercase">
                                 {selectedEvent.title.split(' ').slice(0, -1).join(' ')}
                                 <span className="text-logo-pink block mt-1">
                                    {selectedEvent.title.split(' ').pop()}
                                 </span>
                              </h2>
                              {selectedEvent.subtitle && (
                                 <p className="text-xs sm:text-sm font-bold text-gray-400 tracking-wider uppercase mt-2">
                                    {selectedEvent.subtitle}
                                 </p>
                              )}
                           </div>

                           <div className="space-y-3 pt-2">
                              <div className="flex items-center gap-3 text-gray-600 font-bold text-sm">
                                 <Calendar size={16} className="text-logo-pink shrink-0" />
                                 <span>{selectedEvent.date}</span>
                              </div>
                              {selectedEvent.time && (
                                 <div className="flex items-center gap-3 text-gray-600 font-bold text-sm">
                                    <Clock size={16} className="text-logo-pink shrink-0" />
                                    <span>{selectedEvent.time}</span>
                                 </div>
                              )}
                              <div className="flex items-center gap-3 text-gray-600 font-bold text-sm">
                                 <MapPin size={16} className="text-logo-pink shrink-0" />
                                 <span>{selectedEvent.location || "NCERC Campus"}</span>
                              </div>
                              {selectedEvent.speaker && (
                                 <div className="flex items-start gap-3 text-gray-600 font-bold text-sm">
                                    <User size={16} className="text-logo-pink shrink-0 mt-0.5" />
                                    <div>
                                       <span className="text-[10px] uppercase tracking-wider text-gray-400 block font-black">Resource Person / Speaker</span>
                                       <span>{selectedEvent.speaker}</span>
                                    </div>
                                 </div>
                              )}
                              {selectedEvent.audience && (
                                 <div className="flex items-start gap-3 text-gray-600 font-bold text-sm">
                                    <Users size={16} className="text-logo-pink shrink-0 mt-0.5" />
                                    <div>
                                       <span className="text-[10px] uppercase tracking-wider text-gray-400 block font-black">Target Audience</span>
                                       <span>{selectedEvent.audience}</span>
                                    </div>
                                 </div>
                              )}
                              {selectedEvent.coordinators && (
                                 <div className="flex items-start gap-3 text-gray-600 font-bold text-sm">
                                    <Award size={16} className="text-logo-pink shrink-0 mt-0.5" />
                                    <div>
                                       <span className="text-[10px] uppercase tracking-wider text-gray-400 block font-black">Coordinators</span>
                                       <span className="text-xs sm:text-sm font-semibold text-gray-600">{selectedEvent.coordinators}</span>
                                    </div>
                                 </div>
                              )}
                           </div>
                        </div>

                        <div className="space-y-6 flex-1">
                           <div className="flex flex-col gap-3">
                              <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">About The Session</h4>
                              <p className="text-gray-600 leading-relaxed text-sm font-medium">
                                 {selectedEvent.description}
                              </p>
                           </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
                           <div className="flex items-center gap-3">
                              <div className="size-10 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center p-1.5 shadow-xs shrink-0">
                                 <img
                                    src="/assets/enigma-logo-cropped.jpg"
                                    alt="ENIGMA"
                                    className="h-full w-auto object-contain"
                                 />
                              </div>
                              <div className="flex flex-col">
                                 <span className="text-[11px] font-black text-[#1A1A1B] uppercase tracking-wider">
                                    Organized by ENIGMA
                                 </span>
                                 <span className="text-[10px] font-semibold text-gray-400">
                                    Dept. of CSE • NCERC
                                 </span>
                              </div>
                           </div>
                           <button
                              onClick={handleShare}
                              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-logo-purple/5 text-logo-purple font-black uppercase text-[10px] tracking-widest hover:bg-logo-purple/10 transition-all cursor-pointer"
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

function EventCard({ event, index, onOpen }) {
   const [isHovered, setIsHovered] = useState(false);
   const [currentIdx, setCurrentIdx] = useState(0);

   useEffect(() => {
      let interval;
      if (isHovered && event.images.length > 1) {
         interval = setInterval(() => {
            setCurrentIdx((prev) => (prev + 1) % event.images.length);
         }, 1500);
      } else {
         setCurrentIdx(0);
      }
      return () => clearInterval(interval);
   }, [isHovered, event.images.length]);

   return (
      <motion.div
         onClick={onOpen}
         role="button"
         tabIndex={0}
         onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
               e.preventDefault();
               onOpen();
            }
         }}
         className="group relative flex flex-col rounded-[40px] bg-white border border-gray-100 shadow-sm overflow-hidden cursor-pointer"
         initial={{ y: 30, opacity: 0, scale: 0.95 }}
         whileInView={{ y: 0, opacity: 1, scale: 1 }}
         viewport={{ once: true, margin: "-50px" }}
         exit={{ y: 20, opacity: 0, scale: 0.95 }}
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
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
         <div className="relative h-64 sm:h-72 overflow-hidden bg-gray-100">
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/40 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <AnimatePresence initial={false}>
               <motion.img
                  key={currentIdx}
                  src={event.images[currentIdx]}
                  alt={event.title}
                  loading="lazy"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
               />
            </AnimatePresence>

            {/* Pagination dots for cards with multiple images */}
            {event.images.length > 1 && isHovered && (
               <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-1.5 px-4">
                  {event.images.map((_, i) => (
                     <button
                        key={i}
                        type="button"
                        onClick={(e) => {
                           e.stopPropagation();
                           setCurrentIdx(i);
                        }}
                        className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${i === currentIdx ? "w-4 bg-white" : "w-1 bg-white/40"}`}
                        aria-label={`Slide ${i + 1}`}
                     />
                  ))}
               </div>
            )}
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

            <h3 className="text-2xl font-black text-[#1A1A1B] leading-tight mb-2 group-hover:text-logo-purple transition-colors tracking-tight">
               {event.title}
            </h3>

            {event.subtitle && (
               <p className="text-xs font-semibold text-logo-pink uppercase tracking-wider mb-4 line-clamp-1">
                  {event.subtitle}
               </p>
            )}

            <div className="flex items-center gap-2 text-gray-400 text-xs font-bold mb-4 uppercase tracking-widest">
               <Calendar size={14} className="text-logo-pink" />
               <span>{event.date}</span>
            </div>

            <p className="text-gray-500 text-sm sm:text-base leading-relaxed line-clamp-2 mb-8 font-medium">
               {event.description}
            </p>

            <div className="mt-auto">
               <MagneticButton>
                  <motion.div
                     className="group/btn flex items-center justify-center gap-3 w-full py-5 rounded-[24px] bg-gray-50 text-[#1A1A1B] font-black text-[10px] uppercase tracking-widest border border-gray-100 group-hover:bg-[#F5F3FF] group-hover:border-[#DDD6FE] group-hover:text-[#9c52f1] group-hover:shadow-[0_10px_25px_-5px_rgba(156,82,241,0.2)] active:scale-95 transition-all duration-300"
                  >
                     Explore Event
                     <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                  </motion.div>
               </MagneticButton>
            </div>
         </div>
      </motion.div>
   );
}
