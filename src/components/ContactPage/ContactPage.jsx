import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  MapPin,
  CheckCircle2,
  Building2,
  Send,
  Sparkles,
  ArrowRight,
  ChevronDown,
  Check,
  User,
  MessageSquare,
} from "lucide-react";

const schema = yup.object().shape({
  fullName: yup
    .string()
    .required("Full name is required")
    .min(3, "Name must be at least 3 characters"),
  email: yup
    .string()
    .required("Official email is required")
    .email("Please enter a valid email address"),
  phone: yup
    .string()
    .required("Contact number is required")
    .matches(
      /^(?:(?:\+|0{0,2})91(\s*[-]\s*)?|[0]?)?[6789]\d{9}$/,
      "Please enter a valid 10-digit Indian mobile number",
    ),
  company: yup.string().required("Organization or company name is required"),
  stateRegion: yup
    .string()
    .required("Please select target project state / region"),
  message: yup
    .string()
    .required("Project brief or tender details required")
    .min(20, "Please provide at least 20 characters of detail"),
  terms: yup
    .boolean()
    .oneOf([true], "You must agree to Trion's data privacy policy"),
});

const INDIAN_STATES = [
  "Maharashtra",
  "Gujarat",
  "Tamil Nadu",
  "Karnataka",
  "Delhi NCR",
  "Telangana",
  "Rajasthan",
  "Madhya Pradesh",
  "Uttar Pradesh",
  "Other States",
];

function CornerBracket({ position = "top-left" }) {
  const rotationClass =
    position === "top-right"
      ? "rotate-90"
      : position === "bottom-right"
        ? "rotate-180"
        : position === "bottom-left"
          ? "-rotate-90"
          : "";

  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none ${rotationClass}`}
    >
      <path
        d="M1 13V1H13"
        stroke="#FF6B00"
        strokeWidth="1.3"
        strokeLinecap="square"
      />
    </svg>
  );
}

export default function ContactPage() {
  const [ticketId, setTicketId] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      company: "",
      stateRegion: "Maharashtra",
      message: "",
      terms: false,
    },
    mode: "onTouched",
  });

  const watchAll = watch();

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1400));
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    const generatedTicket = `TRN-IN-${new Date().getFullYear()}-${randomCode}`;
    setTicketId(generatedTicket);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    reset();
    setIsSubmitted(false);
    setTicketId("");
  };

  return (
    <div className="min-h-screen bg-[#040813] text-white font-primary relative overflow-hidden selection:bg-[#ff6b00]/30 selection:text-white">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-[#ff6b00]/10 via-[#c47a25]/5 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute top-[40%] -left-[200px] w-[500px] h-[500px] bg-blue-600/5 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[10%] -right-[200px] w-[500px] h-[500px] bg-[#ff6b00]/5 blur-[160px] pointer-events-none" />

      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-24 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-[#ff6b00]/30 backdrop-blur-md mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#ff6b00] animate-pulse" />
            <span className="font-mono text-xs text-slate-300 uppercase tracking-widest">
              Pan-India Infrastructure & Tender Desk
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight font-primary"
          >
            Building India's <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-white via-slate-200 to-[#ff6b00] bg-clip-text text-transparent">
              Next-Gen Infrastructure
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 text-base sm:text-lg text-slate-400 font-sans leading-relaxed"
          >
            Connect with Trion’s engineering and project management divisions
            across Maharashtra, Gujarat, Tamil Nadu, and Delhi NCR for tender
            partnerships, crushing supply, and civil execution.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative bg-[#070d1e]/90 border border-white/10 rounded-2xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
            <div className="absolute top-3 left-3">
              <CornerBracket position="top-left" />
            </div>
            <div className="absolute top-3 right-3">
              <CornerBracket position="top-right" />
            </div>
            <div className="absolute bottom-3 left-3">
              <CornerBracket position="bottom-left" />
            </div>
            <div className="absolute bottom-3 right-3">
              <CornerBracket position="bottom-right" />
            </div>

            <div className="pb-6 mb-8 border-b border-white/10">
              <h2 className="text-xl sm:text-2xl font-bold text-white font-primary flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-[#ff6b00]" />
                Project RFP & Inquiry Form
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 font-sans mt-1">
                Direct submission to Trion Project Directors across Indian
                zones.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-12 px-4 text-center flex flex-col items-center"
                >
                  <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs mb-3">
                    INDIAN DISPATCH CONFIRMED
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-primary mb-3">
                    Dhanyavaad, {watchAll.fullName}!
                  </h3>

                  <p className="text-sm text-slate-300 font-sans max-w-md mb-6 leading-relaxed">
                    Your inquiry has been successfully transmitted to our
                    regional engineering office in {watchAll.stateRegion}. Our
                    team will review your specifications and connect shortly.
                  </p>

                  <div className="w-full max-w-md bg-[#040813] border border-white/10 rounded-xl p-5 mb-8 text-left">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
                      <span className="text-xs text-slate-400 font-mono">
                        TRACKING TICKET
                      </span>
                      <span className="text-xs text-[#ff6b00] font-mono font-bold">
                        {ticketId}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div>
                        <span className="text-slate-400 block mb-0.5">
                          Company
                        </span>
                        <span className="text-white font-medium">
                          {watchAll.company}
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-400 block mb-0.5">
                          Contact
                        </span>
                        <span className="text-white font-medium">
                          +91 {watchAll.phone}
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-400 block mb-0.5">
                          Project Region
                        </span>
                        <span className="text-white font-medium">
                          {watchAll.stateRegion}
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-400 block mb-0.5">
                          Expected Call
                        </span>
                        <span className="text-emerald-400 font-medium">
                          Within 24 Hours
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleReset}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#ff6b00] to-[#c47a25] text-white text-sm font-semibold font-primary hover:opacity-95 transition-opacity shadow-lg shadow-[#ff6b00]/20 inline-flex items-center gap-2"
                  >
                    Submit Another Inquiry
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              ) : (
                <form
                  key="form"
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono tracking-wider text-slate-300 uppercase mb-1.5">
                        Full Name <span className="text-[#ff6b00]">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="text"
                          placeholder="e.g. Rajesh Sharma"
                          {...register("fullName")}
                          className={`w-full pl-10 pr-4 py-2.5 bg-black/40 border rounded-xl text-sm text-white placeholder:text-slate-400 font-sans focus:outline-none transition-all ${
                            errors.fullName
                              ? "border-rose-500/70 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/40"
                              : "border-white/10 focus:border-[#ff6b00] focus:ring-1 focus:ring-[#ff6b00]/40"
                          }`}
                        />
                      </div>
                      {errors.fullName && (
                        <p className="mt-1 text-xs text-rose-400 font-sans">
                          {errors.fullName.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono tracking-wider text-slate-300 uppercase mb-1.5">
                        Official Email <span className="text-[#ff6b00]">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="email"
                          placeholder="rajesh@company.in"
                          {...register("email")}
                          className={`w-full pl-10 pr-4 py-2.5 bg-black/40 border rounded-xl text-sm text-white placeholder:text-slate-400 font-sans focus:outline-none transition-all ${
                            errors.email
                              ? "border-rose-500/70 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/40"
                              : "border-white/10 focus:border-[#ff6b00] focus:ring-1 focus:ring-[#ff6b00]/40"
                          }`}
                        />
                      </div>
                      {errors.email && (
                        <p className="mt-1 text-xs text-rose-400 font-sans">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono tracking-wider text-slate-300 uppercase mb-1.5">
                        Contact Number (+91){" "}
                        <span className="text-[#ff6b00]">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-mono text-[#ff6b00] font-semibold pointer-events-none">
                          +91
                        </span>
                        <input
                          type="tel"
                          placeholder="98765 43210"
                          {...register("phone")}
                          className={`w-full pl-12 pr-4 py-2.5 bg-black/40 border rounded-xl text-sm text-white placeholder:text-slate-400 font-sans focus:outline-none transition-all ${
                            errors.phone
                              ? "border-rose-500/70 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/40"
                              : "border-white/10 focus:border-[#ff6b00] focus:ring-1 focus:ring-[#ff6b00]/40"
                          }`}
                        />
                      </div>
                      {errors.phone && (
                        <p className="mt-1 text-xs text-rose-400 font-sans">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono tracking-wider text-slate-300 uppercase mb-1.5">
                        Company / Contractor / Authority{" "}
                        <span className="text-[#ff6b00]">*</span>
                      </label>
                      <div className="relative">
                        <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="text"
                          placeholder="e.g. Larsen & Mega Infra Ltd."
                          {...register("company")}
                          className={`w-full pl-10 pr-4 py-2.5 bg-black/40 border rounded-xl text-sm text-white placeholder:text-slate-400 font-sans focus:outline-none transition-all ${
                            errors.company
                              ? "border-rose-500/70 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/40"
                              : "border-white/10 focus:border-[#ff6b00] focus:ring-1 focus:ring-[#ff6b00]/40"
                          }`}
                        />
                      </div>
                      {errors.company && (
                        <p className="mt-1 text-xs text-rose-400 font-sans">
                          {errors.company.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono tracking-wider text-slate-300 uppercase mb-2">
                      Project Location / State{" "}
                      <span className="text-[#ff6b00]">*</span>
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <select
                        {...register("stateRegion")}
                        className="w-full pl-10 pr-8 py-2.5 bg-black/40 border border-white/10 rounded-xl text-sm text-white font-sans focus:outline-none focus:border-[#ff6b00] transition-all appearance-none cursor-pointer"
                      >
                        {INDIAN_STATES.map((st) => (
                          <option
                            key={st}
                            value={st}
                            className="bg-[#070d1e] text-white"
                          >
                            {st}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                    {errors.stateRegion && (
                      <p className="mt-1 text-xs text-rose-400 font-sans">
                        {errors.stateRegion.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="block text-xs font-mono tracking-wider text-slate-300 uppercase">
                        Project Scope / BOQ & Material Requirements{" "}
                        <span className="text-[#ff6b00]">*</span>
                      </label>
                      <span className="text-[11px] font-mono text-slate-400">
                        {watchAll.message?.length || 0} / 500 chars
                      </span>
                    </div>
                    <div className="relative">
                      <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                      <textarea
                        rows={4}
                        placeholder="Provide details on project location, estimated aggregate tonnage, civil construction scope, crushing requirements, or tender submission deadlines..."
                        {...register("message")}
                        className={`w-full pl-10 pr-4 py-3 bg-black/40 border rounded-xl text-sm text-white placeholder:text-slate-400 font-sans focus:outline-none transition-all resize-none ${
                          errors.message
                            ? "border-rose-500/70 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/40"
                            : "border-white/10 focus:border-[#ff6b00] focus:ring-1 focus:ring-[#ff6b00]/40"
                        }`}
                      />
                    </div>
                    {errors.message && (
                      <p className="mt-1 text-xs text-rose-400 font-sans">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <div className="pt-2">
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center mt-0.5">
                        <input
                          type="checkbox"
                          {...register("terms")}
                          className="sr-only peer"
                        />
                        <div className="w-4 h-4 rounded border border-white/30 bg-black/50 peer-checked:bg-[#ff6b00] peer-checked:border-[#ff6b00] transition-colors flex items-center justify-center" />
                        <Check className="w-3 h-3 text-white absolute opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none stroke-[3]" />
                      </div>
                      <span className="text-xs text-slate-400 font-sans group-hover:text-slate-300 transition-colors leading-relaxed">
                        I agree to share project specifications under standard
                        Indian engineering NDA and Trion corporate data
                        guidelines.
                      </span>
                    </label>
                    {errors.terms && (
                      <p className="mt-1 text-xs text-rose-400 font-sans">
                        {errors.terms.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full relative group overflow-hidden rounded-xl bg-gradient-to-r from-[#ff6b00] via-[#d67b1c] to-[#c47a25] p-[1px] font-primary font-semibold text-white shadow-xl shadow-[#ff6b00]/15 transition-all duration-300 hover:shadow-[#ff6b00]/30 disabled:opacity-50"
                  >
                    <div className="relative flex items-center justify-center gap-2.5 rounded-[11px] bg-[#040813]/40 px-6 py-3.5 backdrop-blur-sm transition-colors group-hover:bg-transparent">
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span className="text-sm font-semibold tracking-wide">
                            Sending Message...
                          </span>
                        </>
                      ) : (
                        <>
                          <span className="text-sm font-semibold tracking-wide">
                            Send Message
                          </span>
                          <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </div>
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
