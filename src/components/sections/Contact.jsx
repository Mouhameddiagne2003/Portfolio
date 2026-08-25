import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  FaPaperPlane, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaMapMarkerAlt, 
  FaGithub, 
  FaLinkedin, 
  FaCheck, 
  FaCopy 
} from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";
import emailjs from '@emailjs/browser';
import { personalInfo } from '../../data.jsx';

export default function Contact() {
  const { t } = useTranslation();
  const formRef = useRef();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        'service_portfolio', 
        'template_vbjhmi3', 
        formRef.current, 
        { publicKey: '5HvOJ9VqQ-hm3g5lG' }
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          formRef.current?.reset();
          setTimeout(() => setSuccess(false), 6000);
        },
        (err) => {
          console.error('EmailJS Error:', err);
          setLoading(false);
          setError(true);
        }
      );
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-slate-500 dark:text-zinc-500 mb-2">
            // Me Joindre
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-zinc-100 tracking-tight">
            {t("contact.title")}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 max-w-2xl mt-3">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Social Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900/70 border border-slate-200 dark:border-zinc-800 backdrop-blur-sm shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-zinc-100">
                {t("contact.getInTouch")}
              </h3>

              {/* Direct Info List */}
              <div className="space-y-4 text-sm">
                
                {/* Email Item with copy */}
                <div className="flex items-start justify-between gap-3 p-3 rounded-xl bg-slate-50 dark:bg-zinc-950/50 border border-slate-200 dark:border-zinc-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 shadow-sm border border-slate-200 dark:border-transparent">
                      <FaEnvelope className="text-sm" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[11px] font-mono text-slate-500 dark:text-zinc-500">{t("contact.emailLabel")}</span>
                      <a href={`mailto:${personalInfo.email}`} className="font-medium text-xs sm:text-sm text-slate-800 dark:text-zinc-200 hover:underline truncate">
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-white dark:bg-zinc-900 hover:bg-slate-100 dark:hover:bg-zinc-800 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200 transition-colors border border-slate-200 dark:border-transparent shadow-sm"
                    title="Copier l'email"
                  >
                    {copied ? <FaCheck className="text-emerald-500 text-xs" /> : <FaCopy className="text-xs" />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-zinc-950/50 border border-slate-200 dark:border-zinc-800">
                  <div className="p-2 rounded-lg bg-white dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 shadow-sm border border-slate-200 dark:border-transparent">
                    <FaPhoneAlt className="text-sm" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-mono text-slate-500 dark:text-zinc-500">{t("contact.phone")}</span>
                    <a href={`tel:${personalInfo.phone}`} className="font-medium text-xs sm:text-sm text-slate-800 dark:text-zinc-200 hover:underline">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-zinc-950/50 border border-slate-200 dark:border-zinc-800">
                  <div className="p-2 rounded-lg bg-white dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 shadow-sm border border-slate-200 dark:border-transparent">
                    <FaMapMarkerAlt className="text-sm" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-mono text-slate-500 dark:text-zinc-500">{t("contact.address")}</span>
                    <span className="font-medium text-xs sm:text-sm text-slate-800 dark:text-zinc-200">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>

              </div>

              {/* Social Profiles */}
              <div className="pt-4 border-t border-slate-200 dark:border-zinc-800">
                <span className="text-xs font-mono text-slate-500 dark:text-zinc-500 block mb-3">Réseaux Professionnels:</span>
                <div className="flex items-center gap-2.5">
                  <a
                    href={personalInfo.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 dark:bg-zinc-950/60 border border-slate-200 dark:border-zinc-800 text-xs font-mono text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-zinc-600 transition-all shadow-sm"
                  >
                    <FaGithub /> GitHub
                  </a>
                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 dark:bg-zinc-950/60 border border-slate-200 dark:border-zinc-800 text-xs font-mono text-slate-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-slate-400 dark:hover:border-zinc-600 transition-all shadow-sm"
                  >
                    <FaLinkedin /> LinkedIn
                  </a>
                  <a
                    href={personalInfo.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 dark:bg-zinc-950/60 border border-slate-200 dark:border-zinc-800 text-xs font-mono text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-zinc-600 transition-all shadow-sm"
                  >
                    <FaSquareXTwitter /> X
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900/70 border border-slate-200 dark:border-zinc-800 backdrop-blur-sm shadow-sm">
              <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-600 dark:text-zinc-400 mb-1.5">
                      {t("contact.name")} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Mouhamed..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-zinc-950/60 border border-slate-200 dark:border-zinc-800 text-sm text-slate-900 dark:text-zinc-100 placeholder:text-slate-400 dark:placeholder:text-zinc-600 focus:outline-none focus:border-slate-400 dark:focus:border-zinc-500 transition-colors"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-600 dark:text-zinc-400 mb-1.5">
                      {t("contact.email")} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="nom@exemple.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-zinc-950/60 border border-slate-200 dark:border-zinc-800 text-sm text-slate-900 dark:text-zinc-100 placeholder:text-slate-400 dark:placeholder:text-zinc-600 focus:outline-none focus:border-slate-400 dark:focus:border-zinc-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label className="block text-xs font-mono font-medium text-slate-600 dark:text-zinc-400 mb-1.5">
                    {t("contact.subject")} *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="Opportunité de poste / Collaboration..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-zinc-950/60 border border-slate-200 dark:border-zinc-800 text-sm text-slate-900 dark:text-zinc-100 placeholder:text-slate-400 dark:placeholder:text-zinc-600 focus:outline-none focus:border-slate-400 dark:focus:border-zinc-500 transition-colors"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-xs font-mono font-medium text-slate-600 dark:text-zinc-400 mb-1.5">
                    {t("contact.message")} *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Bonjour Mouhamed..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-zinc-950/60 border border-slate-200 dark:border-zinc-800 text-sm text-slate-900 dark:text-zinc-100 placeholder:text-slate-400 dark:placeholder:text-zinc-600 focus:outline-none focus:border-slate-400 dark:focus:border-zinc-500 transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-slate-900 text-white dark:bg-zinc-100 dark:text-zinc-950 font-mono text-xs font-bold hover:bg-slate-800 dark:hover:bg-white disabled:opacity-50 transition-all shadow-md"
                >
                  {loading ? (
                    <span>{t("contact.sending")}</span>
                  ) : (
                    <>
                      <span>{t("contact.send")}</span>
                      <FaPaperPlane className="text-xs" />
                    </>
                  )}
                </button>

                {/* Feedback Alerts */}
                {success && (
                  <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-mono text-center">
                    {t("contact.success")}
                  </div>
                )}
                {error && (
                  <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 text-xs font-mono text-center">
                    {t("contact.error")}
                  </div>
                )}

              </form>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
