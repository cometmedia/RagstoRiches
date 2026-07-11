import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, CheckCircle2, Send, AlertCircle } from "lucide-react";

export default function ContactCTA() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    serviceNeeded: "Full Construction",
    stage: "Have my land, need a builder"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (stageValue: string) => {
    setFormData((prev) => ({ ...prev, stage: stageValue }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      setSubmitError("Please fill out all required fields.");
      return;
    }

    setSubmitError("");
    setIsSubmitting(true);

    // Simulate luxury pre-qualification CRM pipeline submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 1500);
  };

  // Stagger animation container
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 120, damping: 20 } 
    }
  };

  return (
    <section
      id="contact"
      className="bg-brand-cream py-24 md:py-36 border-b border-brand-line/40 overflow-hidden"
      style={{ fontFamily: '"PP Neue Montreal", sans-serif' }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12" style={isMobile ? { marginBottom: "-22px" } : undefined}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* Left Column (5 columns) - Info & Key Phone Action */}
          <motion.div 
            className="lg:col-span-5 flex flex-col justify-between"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="space-y-6">
              {/* Premium Top Indicator */}
              <motion.div variants={itemVariants} className="flex items-center gap-3" style={isMobile ? { marginTop: "-46px" } : undefined}>
                <img 
                  src="/images/logo.svg" 
                  alt="Rags to Riches Logo" 
                  className="h-5 w-5 object-contain"
                  referrerPolicy="no-referrer"
                />
                <span 
                  className="text-xs uppercase tracking-[0.14em] text-brand-grey font-medium"
                  style={{ fontFamily: '"PP Neue Montreal Medium", sans-serif' }}
                >
                  Get In Touch
                </span>
              </motion.div>

              {/* Title Section */}
              <motion.h2 
                variants={itemVariants}
                className="text-4xl sm:text-5xl md:text-[56px] font-medium tracking-tight text-brand-dark leading-[1.05]"
                style={isMobile ? {
                  fontFamily: '"PP Neue Montreal Medium", sans-serif',
                  letterSpacing: "-0.045em",
                  marginTop: "-7px",
                  marginBottom: "17px"
                } : {
                  fontFamily: '"PP Neue Montreal Medium", sans-serif',
                  letterSpacing: "-0.045em"
                }}
              >
                Schedule <span className="text-brand-grey font-light text-nowrap sm:text-wrap md:text-nowrap">A Site Visit</span>
              </motion.h2>
              
              {/* Context Description */}
              <motion.p 
                variants={itemVariants}
                className="text-[15px] md:text-base text-brand-grey leading-relaxed font-light"
                style={isMobile ? { letterSpacing: "-0.015em", marginBottom: "-19px" } : { letterSpacing: "-0.015em" }}
              >
                Meet with our engineering team directly on your raw plot or at one of our active showcase estates. Let's align on structural integrity, building phases, and premium finishes.
              </motion.p>

              {/* High-end list of benefits - Desktop Only */}
              {!isMobile && (
                <motion.ul variants={containerVariants} className="flex flex-col gap-5 pt-4">
                  {[
                    "Meet directly with our structural engineering and planning heads.",
                    "Understand our pre-construction site prep and concrete-casting protocols.",
                    "Acquire an initial transparent cost analysis per square foot of build."
                  ].map((text, idx) => (
                    <motion.li 
                      key={idx} 
                      variants={itemVariants} 
                      className="flex items-start gap-4 group"
                    >
                      <div className="flex-shrink-0 h-5 w-5 rounded-full border border-brand-line flex items-center justify-center bg-brand-offwhite mt-0.5 transition-colors duration-300 group-hover:border-brand-dark">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
                      </div>
                      <span 
                        className="text-[14px] md:text-[15px] font-light leading-relaxed text-brand-grey transition-colors duration-300 group-hover:text-brand-dark"
                        style={{ letterSpacing: "-0.01em" }}
                      >
                        {text}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </div>

            {/* Premium Phone CTA Element */}
            <motion.div 
              variants={itemVariants}
              className="mt-12 bg-brand-offwhite p-8 rounded-[32px] border border-brand-line/50 shadow-sm hover:shadow-md transition-all duration-500 group"
              style={{
                borderRadius: "2px",
                ...(isMobile ? {
                  paddingLeft: "32px",
                  paddingTop: "20px",
                  paddingBottom: "21px"
                } : {})
              }}
            >
              <p 
                className="text-[11px] font-medium tracking-[0.08em] text-brand-grey/80 uppercase mb-3"
                style={{ fontFamily: '"PP Neue Montreal Medium", sans-serif' }}
              >
                Direct Line for Active Plot Audits
              </p>
              <a
                id="phone-cta-link"
                href="tel:+15125550190"
                className="flex items-center gap-4 cursor-pointer"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-dark text-brand-gold transition-all duration-500 group-hover:bg-brand-gold group-hover:text-brand-dark group-hover:scale-105 group-hover:rotate-12">
                  <Phone className="h-5 w-5 fill-current" />
                </div>
                <div>
                  <p 
                    className="text-xl font-medium tracking-tight text-brand-dark transition-colors duration-300"
                    style={{ fontFamily: '"PP Neue Montreal Medium", sans-serif', letterSpacing: "-0.02em" }}
                  >
                    +1 (512) 555-0190
                  </p>
                  <p className="text-xs text-brand-grey/70 mt-0.5 font-light">
                    Call to schedule within 24 hours
                  </p>
                </div>
              </a>
            </motion.div>
          </motion.div>

          {/* Vertical Divider Column (1 Column) - Hidden on Mobile */}
          <div className="hidden lg:flex lg:col-span-1 justify-center">
            <div className="w-[1px] bg-brand-line/40 h-full relative">
              <motion.div 
                initial={{ top: 0 }}
                whileInView={{ top: "100%" }}
                viewport={{ once: false }}
                transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
                className="absolute left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-brand-gold" 
              />
            </div>
          </div>

          {/* Right Column (6 columns) - Pre-Qualification Form */}
          <motion.div 
            className="lg:col-span-6 bg-brand-offwhite p-8 md:p-12 border border-brand-line/40 rounded-[32px] shadow-sm hover:shadow-md transition-shadow duration-500 flex flex-col justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 100, damping: 18 }}
            style={{ borderRadius: "2px" }}
          >
            <div className="mb-8">
              <h3 
                className="text-2xl font-medium tracking-tight text-brand-dark uppercase"
                style={{ fontFamily: '"PP Neue Montreal Medium", sans-serif', letterSpacing: "-0.02em" }}
              >
                Connect
              </h3>
              <p className="text-xs text-brand-grey mt-1 font-light">
                Complete this brief pre-qualification form to help us understand your site.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {!submitSuccess ? (
                <motion.form
                  key="form-stage"
                  id="qualification-form"
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5"
                  exit={{ opacity: 0, y: -20 }}
                >
                  {/* Name row */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label 
                        htmlFor="firstName" 
                        className="text-[11px] font-medium text-brand-grey uppercase tracking-wide"
                        style={{ fontFamily: '"PP Neue Montreal Medium", sans-serif' }}
                      >
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full border border-brand-line bg-brand-cream/10 px-5 py-3.5 font-sans text-sm rounded-[16px] focus:outline-none focus:border-brand-dark focus:ring-1 focus:ring-brand-dark transition-all placeholder:text-brand-grey/45 text-brand-dark font-light"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label 
                        htmlFor="lastName" 
                        className="text-[11px] font-medium text-brand-grey uppercase tracking-wide"
                        style={{ fontFamily: '"PP Neue Montreal Medium", sans-serif' }}
                      >
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full border border-brand-line bg-brand-cream/10 px-5 py-3.5 font-sans text-sm rounded-[16px] focus:outline-none focus:border-brand-dark focus:ring-1 focus:ring-brand-dark transition-all placeholder:text-brand-grey/45 text-brand-dark font-light"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label 
                        htmlFor="email" 
                        className="text-[11px] font-medium text-brand-grey uppercase tracking-wide"
                        style={{ fontFamily: '"PP Neue Montreal Medium", sans-serif' }}
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full border border-brand-line bg-brand-cream/10 px-5 py-3.5 font-sans text-sm rounded-[16px] focus:outline-none focus:border-brand-dark focus:ring-1 focus:ring-brand-dark transition-all placeholder:text-brand-grey/45 text-brand-dark font-light"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label 
                        htmlFor="phone" 
                        className="text-[11px] font-medium text-brand-grey uppercase tracking-wide"
                        style={{ fontFamily: '"PP Neue Montreal Medium", sans-serif' }}
                      >
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full border border-brand-line bg-brand-cream/10 px-5 py-3.5 font-sans text-sm rounded-[16px] focus:outline-none focus:border-brand-dark focus:ring-1 focus:ring-brand-dark transition-all placeholder:text-brand-grey/45 text-brand-dark font-light"
                      />
                    </div>
                  </div>

                  {/* Custom dropdown: Service needed */}
                  <div className="flex flex-col gap-1.5">
                    <label 
                      htmlFor="serviceNeeded" 
                      className="text-[11px] font-medium text-brand-grey uppercase tracking-wide"
                      style={{ fontFamily: '"PP Neue Montreal Medium", sans-serif' }}
                    >
                      Which service do you need?
                    </label>
                    <div className="relative">
                      <select
                        id="serviceNeeded"
                        name="serviceNeeded"
                        value={formData.serviceNeeded}
                        onChange={handleInputChange}
                        className="w-full border border-brand-line bg-brand-cream/10 px-5 py-3.5 font-sans text-sm rounded-[16px] focus:outline-none focus:border-brand-dark focus:ring-1 focus:ring-brand-dark transition-all text-brand-dark cursor-pointer appearance-none font-light"
                      >
                        <option value="Pre-Construction">Pre-Construction (Planning, Approvals, Budgeting)</option>
                        <option value="Grey Structure">Grey Structure Construction (Foundation, Slabs, Walls)</option>
                        <option value="Finishing Services">Finishing Services (Electrical, Plumbing, Flooring)</option>
                        <option value="Full Construction">Full House Construction (Turnkey Handover)</option>
                        <option value="Not Sure Yet">Not Sure / Other</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-brand-grey/60">
                        <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Radio group: Where are you in process */}
                  <div className="flex flex-col gap-2.5 pt-1">
                    <label 
                      className="text-[11px] font-medium text-brand-grey uppercase tracking-wide"
                      style={{ fontFamily: '"PP Neue Montreal Medium", sans-serif' }}
                    >
                      Where are you in your building process?
                    </label>
                    <div className="flex flex-col gap-2.5 pl-1">
                      {[
                        "Just starting to plan",
                        "Have my land, need a builder",
                        "Structure built, need finishing",
                        "Looking for a full turnkey build",
                        "Other"
                      ].map((item) => (
                        <label key={item} className="flex items-center gap-3.5 cursor-pointer group">
                          <input
                            type="radio"
                            name="stage"
                            checked={formData.stage === item}
                            onChange={() => handleRadioChange(item)}
                            className="sr-only"
                          />
                          <div className={`h-5 w-5 rounded-full border flex items-center justify-center transition-all duration-350 ${
                            formData.stage === item
                              ? "border-brand-dark bg-brand-dark text-brand-gold"
                              : "border-brand-line bg-brand-cream/10 group-hover:border-brand-grey"
                          }`}>
                            {formData.stage === item && (
                              <div className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
                            )}
                          </div>
                          <span 
                            className="text-xs text-brand-grey group-hover:text-brand-dark transition-colors font-light"
                            style={{ letterSpacing: "-0.01em" }}
                          >
                            {item}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Error Notification */}
                  {submitError && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-red-600 bg-red-50 p-3.5 rounded-[12px] text-xs font-medium border border-red-100"
                    >
                      <AlertCircle className="h-4 w-4" />
                      <span>{submitError}</span>
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    id="submit-qualification-form-btn"
                    disabled={isSubmitting}
                    className="group mt-4 w-full flex items-center justify-center gap-2 bg-brand-dark text-brand-offwhite hover:bg-brand-gold hover:text-brand-dark py-4 font-sans text-xs font-semibold uppercase tracking-[0.16em] rounded-full transition-all duration-500 disabled:opacity-50 cursor-pointer"
                    style={{ fontFamily: '"PP Neue Montreal Medium", sans-serif' }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-brand-offwhite border-t-transparent group-hover:border-brand-dark" />
                        Analyzing Requirements...
                      </>
                    ) : (
                      <>
                        Submit Form <Send className="h-3.5 w-3.5 transition-transform duration-350 group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-stage"
                  initial={{ opacity: 0, scale: 0.96, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: -15 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center text-center py-10"
                >
                  <div className="h-16 w-16 bg-brand-gold/10 text-brand-dark rounded-full flex items-center justify-center mb-6 border border-brand-gold/20 shadow-sm">
                    <CheckCircle2 className="h-8 w-8 text-brand-gold fill-brand-dark" />
                  </div>
                  <h4 
                    className="text-xl font-medium text-brand-dark uppercase tracking-tight"
                    style={{ fontFamily: '"PP Neue Montreal Medium", sans-serif' }}
                  >
                    Requirements Received
                  </h4>
                  <p className="text-sm text-brand-grey mt-3 max-w-sm leading-relaxed font-light">
                    Thank you, {formData.firstName}. We have cataloged your <strong className="font-medium text-brand-dark">{formData.serviceNeeded}</strong> inquiry. A structural planner will review your details and contact you via phone within 2 business hours.
                  </p>
                  <button
                    id="reset-form-btn"
                    onClick={() => {
                      setFormData({
                        firstName: "",
                        lastName: "",
                        email: "",
                        phone: "",
                        serviceNeeded: "Full Construction",
                        stage: "Have my land, need a builder"
                      });
                      setSubmitSuccess(false);
                    }}
                    className="mt-8 text-xs text-brand-grey hover:text-brand-dark uppercase tracking-[0.12em] font-medium border-b border-brand-line hover:border-brand-dark pb-0.5 transition-all duration-300 cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
