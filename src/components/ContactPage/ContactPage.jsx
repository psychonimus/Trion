import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  CheckCircle2,
  Building2,
  Send,
  Sparkles,
  ArrowRight,
  ChevronDown,
  Check,
  User,
  MessageSquare,
  ExternalLink,
  Clock,
  ShieldCheck,
  Headphones,
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
    await new Promise((resolve) => setTimeout(resolve, 1200));
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
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-primary relative selection:bg-[#f55d1b]/20 selection:text-[#f55d1b] pt-24 xs:pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-16 sm:pb-24">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-100 pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#000435 1px, transparent 1px), linear-gradient(90deg, #000435 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[340px] bg-gradient-to-b from-[#000435]/10 via-[#000435]/5 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1580px] mx-auto px-4 xs:px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
       

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#000435] leading-tight"
          >
            Connect with Our Engineering Desk
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="mt-3 sm:mt-4 text-xs xs:text-sm sm:text-base text-slate-700 font-sans leading-relaxed max-w-2xl mx-auto"
          >
            Direct communication channel for EPC partnerships, heavy crushing
            supply, road construction tenders, and civil infrastructure
            execution across India.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 mb-8 sm:mb-10">
          <div className="bg-white border border-slate-200/80 rounded-xl p-4 shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#000435]/5 border border-[#000435]/10 flex items-center justify-center text-[#f55d1b] shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-bold text-[#000435]">24-Hour RFP Response</h3>
              <p className="text-[11px] sm:text-xs text-slate-600 m-0">Fast technical review by project leads</p>
            </div>
          </div>
          <div className="bg-white border border-slate-200/80 rounded-xl p-4 shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#000435]/5 border border-[#000435]/10 flex items-center justify-center text-[#f55d1b] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-bold text-[#000435]">NDA & Privacy Protected</h3>
              <p className="text-[11px] sm:text-xs text-slate-600 m-0">Standard corporate data security</p>
            </div>
          </div>
          <div className="bg-white border border-slate-200/80 rounded-xl p-4 shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#000435]/5 border border-[#000435]/10 flex items-center justify-center text-[#f55d1b] shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-bold text-[#000435]">Pan-India Execution</h3>
              <p className="text-[11px] sm:text-xs text-slate-600 m-0">Mobilized across 10+ states</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-white border border-slate-200/90 rounded-2xl p-4 xs:p-6 sm:p-8 shadow-xl shadow-slate-200/50 h-full flex flex-col justify-between">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#000435] flex items-center justify-center text-[#f55d1b]">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-base sm:text-lg font-bold text-[#000435]">
                      Project RFP & Inquiry Form
                    </h2>
                    <p className="text-[11px] text-slate-500 font-sans m-0">Fill in details for immediate engineering review</p>
                  </div>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    className="py-10 px-4 text-center flex flex-col items-center flex-1 justify-center"
                  >
                    <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-4 shadow-sm">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>

                    <span className="inline-block px-3 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-[10.5px] uppercase tracking-wider mb-2 font-bold">
                      Transmission Confirmed
                    </span>

                    <h3 className="text-xl font-bold text-[#000435] mb-2">
                      Dhanyavaad, {watchAll.fullName}!
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 font-sans max-w-sm mb-6 leading-relaxed">
                      Your inquiry has been logged and forwarded to our project
                      directors in {watchAll.stateRegion}. We will review the
                      brief and connect within 24 hours.
                    </p>

                    <div className="w-full max-w-sm bg-slate-50 border border-slate-200 rounded-xl p-4 mb-6 text-left shadow-sm">
                      <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-2.5">
                        <span className="text-[10.5px] text-slate-600 font-mono font-bold">
                          TRACKING TICKET
                        </span>
                        <span className="text-xs text-[#f55d1b] font-mono font-extrabold">
                          {ticketId}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2.5 text-[11px] sm:text-xs">
                        <div>
                          <span className="text-slate-500 text-[10px] block font-semibold">
                            Company
                          </span>
                          <span className="text-slate-900 font-bold truncate block">
                            {watchAll.company}
                          </span>
                        </div>
                        <div>
                          <span className="text-slate-500 text-[10px] block font-semibold">
                            Contact
                          </span>
                          <span className="text-slate-900 font-bold block">
                            +91 {watchAll.phone}
                          </span>
                        </div>
                        <div>
                          <span className="text-slate-500 text-[10px] block font-semibold">
                            Region
                          </span>
                          <span className="text-slate-900 font-bold block">
                            {watchAll.stateRegion}
                          </span>
                        </div>
                        <div>
                          <span className="text-slate-500 text-[10px] block font-semibold">
                            Response ETA
                          </span>
                          <span className="text-emerald-700 font-bold block">
                            Within 24 Hours
                          </span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-xl bg-[#000435] hover:bg-[#f55d1b] text-white text-xs sm:text-sm font-bold font-primary transition-all shadow-md inline-flex items-center gap-2"
                    >
                      Submit Another Inquiry
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                ) : (
                  <form
                    key="form"
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-4 flex-1 flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                        <div>
                          <label className="block text-xs font-mono font-bold tracking-wider text-slate-800 uppercase mb-1.5">
                            Full Name <span className="text-[#f55d1b]">*</span>
                          </label>
                          <div className="relative">
                            <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                            <input
                              type="text"
                              placeholder="Rajesh Sharma"
                              {...register("fullName")}
                              className={`w-full pl-10 pr-3.5 py-2.5 bg-slate-50/90 border rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 font-sans focus:bg-white focus:outline-none transition-all ${
                                errors.fullName
                                  ? "border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-200"
                                  : "border-slate-300 focus:border-[#f55d1b] focus:ring-2 focus:ring-[#f55d1b]/20"
                              }`}
                            />
                          </div>
                          {errors.fullName && (
                            <p className="mt-1 text-xs text-rose-600 font-sans font-medium">
                              {errors.fullName.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-xs font-mono font-bold tracking-wider text-slate-800 uppercase mb-1.5">
                            Official Email{" "}
                            <span className="text-[#f55d1b]">*</span>
                          </label>
                          <div className="relative">
                            <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                            <input
                              type="email"
                              placeholder="rajesh@company.com"
                              {...register("email")}
                              className={`w-full pl-10 pr-3.5 py-2.5 bg-slate-50/90 border rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 font-sans focus:bg-white focus:outline-none transition-all ${
                                errors.email
                                  ? "border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-200"
                                  : "border-slate-300 focus:border-[#f55d1b] focus:ring-2 focus:ring-[#f55d1b]/20"
                              }`}
                            />
                          </div>
                          {errors.email && (
                            <p className="mt-1 text-xs text-rose-600 font-sans font-medium">
                              {errors.email.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                        <div>
                          <label className="block text-xs font-mono font-bold tracking-wider text-slate-800 uppercase mb-1.5">
                            Contact Number (+91){" "}
                            <span className="text-[#f55d1b]">*</span>
                          </label>
                          <div className="relative">
                            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-mono text-[#f55d1b] font-bold pointer-events-none">
                              +91
                            </span>
                            <input
                              type="tel"
                              placeholder="98765 43210"
                              {...register("phone")}
                              className={`w-full pl-12 pr-3.5 py-2.5 bg-slate-50/90 border rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 font-sans focus:bg-white focus:outline-none transition-all ${
                                errors.phone
                                  ? "border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-200"
                                  : "border-slate-300 focus:border-[#f55d1b] focus:ring-2 focus:ring-[#f55d1b]/20"
                              }`}
                            />
                          </div>
                          {errors.phone && (
                            <p className="mt-1 text-xs text-rose-600 font-sans font-medium">
                              {errors.phone.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-xs font-mono font-bold tracking-wider text-slate-800 uppercase mb-1.5">
                            Company / Authority{" "}
                            <span className="text-[#f55d1b]">*</span>
                          </label>
                          <div className="relative">
                            <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                            <input
                              type="text"
                              placeholder="Larsen & Mega Infra Ltd."
                              {...register("company")}
                              className={`w-full pl-10 pr-3.5 py-2.5 bg-slate-50/90 border rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 font-sans focus:bg-white focus:outline-none transition-all ${
                                errors.company
                                  ? "border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-200"
                                  : "border-slate-300 focus:border-[#f55d1b] focus:ring-2 focus:ring-[#f55d1b]/20"
                              }`}
                            />
                          </div>
                          {errors.company && (
                            <p className="mt-1 text-xs text-rose-600 font-sans font-medium">
                              {errors.company.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-mono font-bold tracking-wider text-slate-800 uppercase mb-1.5">
                          Project Location / State{" "}
                          <span className="text-[#f55d1b]">*</span>
                        </label>
                        <div className="relative">
                          <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <select
                            {...register("stateRegion")}
                            className="w-full pl-10 pr-9 py-2.5 bg-slate-50/90 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 font-sans focus:bg-white focus:outline-none focus:border-[#f55d1b] focus:ring-2 focus:ring-[#f55d1b]/20 transition-all appearance-none cursor-pointer"
                          >
                            {INDIAN_STATES.map((st) => (
                              <option
                                key={st}
                                value={st}
                                className="bg-white text-slate-900 py-1"
                              >
                                {st}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                        {errors.stateRegion && (
                          <p className="mt-1 text-xs text-rose-600 font-sans font-medium">
                            {errors.stateRegion.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <label className="block text-xs font-mono font-bold tracking-wider text-slate-800 uppercase">
                            Project Scope & Requirements{" "}
                            <span className="text-[#f55d1b]">*</span>
                          </label>
                          <span className="text-[11px] font-mono text-slate-500 font-semibold">
                            {watchAll.message?.length || 0} / 500 chars
                          </span>
                        </div>
                        <div className="relative">
                          <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
                          <textarea
                            rows={4}
                            placeholder="Provide details on project location, aggregate tonnage, civil construction scope, or tender timelines..."
                            {...register("message")}
                            className={`w-full pl-10 pr-3.5 py-2.5 bg-slate-50/90 border rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 font-sans focus:bg-white focus:outline-none transition-all resize-none ${
                              errors.message
                                ? "border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-200"
                                : "border-slate-300 focus:border-[#f55d1b] focus:ring-2 focus:ring-[#f55d1b]/20"
                            }`}
                          />
                        </div>
                        {errors.message && (
                          <p className="mt-1 text-xs text-rose-600 font-sans font-medium">
                            {errors.message.message}
                          </p>
                        )}
                      </div>

                      <div className="pt-1">
                        <label className="flex items-start gap-2.5 cursor-pointer group">
                          <div className="relative flex items-center justify-center mt-0.5">
                            <input
                              type="checkbox"
                              {...register("terms")}
                              className="sr-only peer"
                            />
                            <div className="w-4 h-4 rounded border border-slate-400 bg-slate-50 peer-checked:bg-[#000435] peer-checked:border-[#000435] transition-colors flex items-center justify-center" />
                            <Check className="w-3 h-3 text-white absolute opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none stroke-[3]" />
                          </div>
                          <span className="text-xs text-slate-600 font-sans group-hover:text-slate-900 transition-colors leading-snug">
                            I agree to share project specifications under standard
                            Indian engineering NDA and Trion corporate data
                            guidelines.
                          </span>
                        </label>
                        {errors.terms && (
                          <p className="mt-1 text-xs text-rose-600 font-sans font-medium">
                            {errors.terms.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="pt-3">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full relative group overflow-hidden rounded-xl bg-gradient-to-r from-[#000435] to-[#000435] hover:from-[#f55d1b] hover:to-[#f55d1b] text-white text-xs sm:text-sm font-bold uppercase tracking-wider font-primary py-3.5 transition-all duration-300 shadow-md shadow-slate-900/10 disabled:opacity-50"
                      >
                        <div className="flex items-center justify-center gap-2">
                          {isSubmitting ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              <span>Transmitting Inquiry...</span>
                            </>
                          ) : (
                            <>
                              <span>Send Project Message</span>
                              <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </>
                          )}
                        </div>
                      </button>
                    </div>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-xl shadow-slate-200/50 flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#000435] flex items-center justify-center text-[#f55d1b]">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h2 className="text-base sm:text-lg font-bold text-[#000435]">
                        Corporate Headquarters
                      </h2>
                      <p className="text-[11px] text-slate-500 font-sans m-0">Registered Office & Ops Control</p>
                    </div>
                  </div>

                  <a
                    href="https://www.google.com/maps/place/Rameshwar+Darshan,+Sangeetkar+N+Dutta+Marg,+opp.+3+Seema+Society,+Gharkul+Society,+Society,+Four+Bungalows,+Andheri+West,+Mumbai,+Maharashtra+400053/@19.1233894,72.8245323,621m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3be7c9e0881b31f3:0xfab8ff7a2117004b!8m2!3d19.1233843!4d72.8271072!16s%2Fg%2F11cpn5v9rx?entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-[#f55d1b]/10 text-[11px] font-mono font-bold text-[#000435] hover:text-[#f55d1b] transition-colors"
                  >
                    <span>Open in Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#f55d1b]" />
                  </a>
                </div>

                <div className="space-y-3.5 mb-5 text-xs sm:text-sm">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                    <MapPin className="w-4 h-4 text-[#f55d1b] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10.5px] font-mono uppercase text-slate-500 font-bold block mb-0.5">
                        Address
                      </span>
                      <p className="text-slate-800 font-semibold leading-relaxed m-0">
                        Rameshwar Darshan, Sangeetkar N Dutta Marg, Four Bungalows, Andheri West, Mumbai, Maharashtra 400053
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 xs:grid-cols-2 gap-3">
                    <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                      <Mail className="w-4 h-4 text-[#f55d1b] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[10px] font-mono uppercase text-slate-500 font-bold block mb-0.5">
                          Tenders & Queries
                        </span>
                        <a
                          href="mailto:contact@trioninfra.com"
                          className="text-slate-800 font-semibold hover:text-[#f55d1b] transition-colors break-all"
                        >
                          contact@trioninfra.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                      <Clock className="w-4 h-4 text-[#f55d1b] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[10px] font-mono uppercase text-slate-500 font-bold block mb-0.5">
                          Office Timings
                        </span>
                        <span className="text-slate-800 font-semibold block">
                          Mon – Sat: 9am – 7pm IST
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative w-full h-[260px] xs:h-[280px] sm:h-[300px] rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shadow-inner">
                <iframe
                  title="Trion Mumbai Location Map"
                  src="https://maps.google.com/maps?q=19.1233843,72.8271072&hl=en&z=16&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
