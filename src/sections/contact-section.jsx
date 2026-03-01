// ENIGMA – Contact Section
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Mail, MapPin, Send, Cpu, CheckCircle2 } from "lucide-react";

export default function ContactSection() {
    const [status, setStatus] = useState("idle");
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        type: "general",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (error) setError(""); // Clear error when user starts typing
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic Validation
        if (!formData.name.trim() || !formData.message.trim()) {
            setError("Please fill in all required fields.");
            return;
        }

        setStatus("sending");

        // Construct mailto Link
        const recipient = "macqadithyan@gmail.com";
        const subject = encodeURIComponent("Message from Website");
        const bodyContent = `Name: ${formData.name}\nType: ${formData.type}\n\nMessage:\n${formData.message}`;
        const body = encodeURIComponent(bodyContent);

        const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;

        // Open user's default mail client
        setTimeout(() => {
            window.location.href = mailtoLink;
            setStatus("success");
            setFormData({ name: "", type: "general", message: "" });

            // Reset status after a few seconds
            setTimeout(() => setStatus("idle"), 5000);
        }, 800);
    };

    return (
        <motion.section className="py-24 md:py-32 px-6" id="contact"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 40 }}
        >
            <div className="max-w-7xl mx-auto relative group">
                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 relative z-10">
                    {/* Left Card – Info */}
                    <motion.div
                        className="glass p-8 md:p-12 lg:p-16 rounded-[48px] border border-white shadow-md flex flex-col justify-between"
                        initial={{ x: -30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="space-y-10">
                            <div className="space-y-6">
                                <motion.span
                                    className="inline-block px-5 py-2 rounded-full bg-logo-purple/10 text-logo-purple text-[10px] font-black uppercase tracking-[0.2em]"
                                >
                                    Get in Touch
                                </motion.span>
                                <h2 className="text-4xl md:text-5xl font-black leading-[1.1] text-[#1A1A1B] tracking-tight">
                                    Let's build the <span className="text-logo-pink">future</span> together.
                                </h2>
                                <p className="text-gray-500 text-lg leading-relaxed max-w-md font-medium">
                                    Whether you're interested in joining, partnering, or just learning more, we're here to connect.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <motion.div className="flex items-center gap-6 group/link cursor-pointer"
                                    initial={{ x: -20, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                    whileHover="hover"
                                >
                                    <motion.div
                                        className="size-16 rounded-[24px] bg-white shadow-sm border border-gray-100 flex items-center justify-center text-logo-purple"
                                        variants={{
                                            hover: { scale: 1.05, backgroundColor: "#F5F3FF", borderColor: "#DDD6FE" }
                                        }}
                                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                    >
                                        <Mail size={28} />
                                    </motion.div>
                                    <div>
                                        <p className="text-[10px] text-gray-400 uppercase font-black tracking-[0.2em] mb-1">Email Us</p>
                                        <motion.a
                                            href="mailto:contact@enigma-cse.org"
                                            className="text-[#1A1A1B] text-xl font-black tracking-tight"
                                            variants={{
                                                hover: { color: "var(--color-logo-purple)" }
                                            }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            contact@enigma-cse.org
                                        </motion.a>
                                    </div>
                                </motion.div>

                                <motion.div className="flex items-center gap-6 group/link cursor-pointer"
                                    initial={{ x: -20, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    whileHover="hover"
                                >
                                    <motion.div
                                        className="size-16 rounded-[24px] bg-white shadow-sm border border-gray-100 flex items-center justify-center text-logo-pink"
                                        variants={{
                                            hover: { scale: 1.05, backgroundColor: "var(--color-logo-pink-50)", borderColor: "var(--color-logo-pink-200)" }
                                        }}
                                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                    >
                                        <Cpu size={28} />
                                    </motion.div>
                                    <div>
                                        <p className="text-[10px] text-gray-400 uppercase font-black tracking-[0.2em] mb-1">Technical Support</p>
                                        <motion.a
                                            href="mailto:tech@enigma-cse.org"
                                            className="text-[#1A1A1B] text-xl font-black tracking-tight"
                                            variants={{
                                                hover: { color: "var(--color-logo-pink)" }
                                            }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            tech@enigma-cse.org
                                        </motion.a>
                                    </div>
                                </motion.div>

                                <motion.div className="flex items-center gap-6 group/link cursor-pointer"
                                    initial={{ x: -20, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                    whileHover="hover"
                                >
                                    <motion.div
                                        className="size-16 rounded-[24px] bg-white shadow-sm border border-gray-100 flex items-center justify-center text-logo-red"
                                        variants={{
                                            hover: { scale: 1.05, backgroundColor: "var(--color-logo-red-50)", borderColor: "var(--color-logo-red-200)" }
                                        }}
                                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                    >
                                        <MapPin size={28} />
                                    </motion.div>
                                    <div>
                                        <p className="text-[10px] text-gray-400 uppercase font-black tracking-[0.2em] mb-1">Locate Us</p>
                                        <motion.p
                                            className="text-[#1A1A1B] text-xl font-black tracking-tight"
                                            variants={{
                                                hover: { color: "var(--color-logo-red)" }
                                            }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            Computer Science Block, NCERC
                                        </motion.p>
                                    </div>
                                </motion.div>
                            </div>


                        </div>
                    </motion.div>

                    {/* Right Card – Form */}
                    <motion.div
                        className="glass p-8 md:p-12 lg:p-16 rounded-[48px] border border-white shadow-md"
                        initial={{ x: 30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                            <div className="space-y-3">
                                <label htmlFor="name" className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-2">Full Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    className={`w-full bg-white/60 border ${error && !formData.name ? 'border-red-300 ring-4 ring-red-500/10' : 'border-white'} rounded-[24px] p-5 focus:outline-none focus:ring-4 focus:ring-logo-purple/10 focus:border-logo-purple/30 transition-all font-bold text-[#1A1A1B] placeholder-gray-300 shadow-sm`}
                                />
                            </div>

                            <div className="space-y-3 relative">
                                <label htmlFor="type" className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-2">Inquiry Type</label>
                                <div className="relative group/select">
                                    <select
                                        id="type"
                                        name="type"
                                        value={formData.type}
                                        onChange={handleChange}
                                        className="w-full bg-white/60 border border-white rounded-[24px] p-5 focus:outline-none focus:ring-4 focus:ring-logo-purple/10 focus:border-logo-purple/30 transition-all font-bold text-[#1A1A1B] appearance-none cursor-pointer pr-12 shadow-sm"
                                    >
                                        <option value="general">General Inquiry</option>
                                        <option value="technical">Technical Suggestion</option>
                                        <option value="collaboration">Collaboration</option>
                                    </select>
                                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 group-focus-within/select:text-logo-purple transition-colors">
                                        <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label htmlFor="message" className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-2">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your project or query..."
                                    rows={5}
                                    className={`w-full bg-white/60 border ${error && !formData.message ? 'border-red-300 ring-4 ring-red-500/10' : 'border-white'} rounded-[24px] p-5 focus:outline-none focus:ring-4 focus:ring-logo-purple/10 focus:border-logo-purple/30 transition-all font-bold text-[#1A1A1B] placeholder-gray-300 resize-none shadow-sm`}
                                />
                            </div>

                            {/* Error / Feedback */}
                            <AnimatePresence mode="wait">
                                {error && (
                                    <motion.p
                                        className="text-red-500 text-[10px] font-black uppercase tracking-widest px-4 flex items-center gap-2"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        <span className="size-1.5 rounded-full bg-red-500 animate-pulse" />
                                        {error}
                                    </motion.p>
                                )}
                            </AnimatePresence>

                            <AnimatePresence mode="wait">
                                {status === "success" ? (
                                    <motion.div
                                        key="success"
                                        className="flex items-center gap-4 bg-emerald-50 text-emerald-600 p-6 rounded-[24px] border border-emerald-100 font-black text-xs uppercase tracking-widest shadow-xl shadow-emerald-500/10"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                    >
                                        <CheckCircle2 size={24} />
                                        Email client opened successfully
                                    </motion.div>
                                ) : (
                                    <motion.button
                                        key="button"
                                        type="submit"
                                        aria-label="Send message via email"
                                        disabled={status === "sending"}
                                        className={`group flex items-center justify-center gap-4 w-full py-6 rounded-[28px] text-white font-black text-xs uppercase tracking-[0.2em] transition-all mt-4 active:scale-95 shadow-lg ${status === "sending" ? "bg-gray-400 cursor-not-allowed" : "bg-linear-to-r from-logo-purple via-logo-pink to-logo-red hover:opacity-90 hover:shadow-xl hover:shadow-logo-purple/30"}`}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        {status === "sending" ? "Opening Mail App..." : "Send Message"}
                                        <Send size={18} className={`group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform ${status === "sending" ? "animate-pulse" : ""}`} />
                                    </motion.button>
                                )}
                            </AnimatePresence>
                        </form>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}
