import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch('https://formspree.io/f/mqezgvja', {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      });

      if (res.ok) {
        setSuccess(true);
        form.reset();
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">

          {/* LEFT CONTENT */}
          <div>
            <span className="text-brand font-bold uppercase tracking-widest text-sm">
              Contact
            </span>

            <h2 className="text-5xl font-bold mt-4 mb-8 tracking-tight">
              Let's build something <br /> amazing together.
            </h2>

            <p className="text-lg text-slate-500 mb-12 leading-relaxed">
              Whether you have a question or want to start a project, my inbox is always open.
              Let's create something functional and beautiful.
            </p>

            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-white/5 flex items-center justify-center text-brand">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Email</p>
                  <a href="mailto:rubanarr5@gmail.com" className="text-xl font-bold hover:text-brand">
                    rubanarr5@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-white/5 flex items-center justify-center text-brand">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Phone</p>
                  <a href="tel:+918056769508" className="text-xl font-bold hover:text-brand">
                    +91 8056769508
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-white/5 flex items-center justify-center text-brand">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Location</p>
                  <p className="text-xl font-bold">Trichy, Tamil Nadu, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-10 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5"
          >
            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  className="w-full px-6 py-4 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-brand outline-none"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="w-full px-6 py-4 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-brand outline-none"
                />
              </div>

              <input
                type="tel"
                name="phone"
                placeholder="+91 XXXXX XXXXX"
                className="w-full px-6 py-4 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-brand outline-none"
              />

              <select
                name="project"
                required
                className="w-full px-6 py-4 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-brand outline-none"
              >
                <option>Website Development</option>
                <option>Web Application</option>
                <option>Mobile App</option>
                <option>Digital Marketing</option>
                <option>Graphic Design</option>
              </select>

              <textarea
                rows={4}
                name="message"
                placeholder="Tell me about your project..."
                required
                className="w-full px-6 py-4 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-brand outline-none resize-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full py-5 bg-brand text-white rounded-xl font-bold flex items-center justify-center gap-3 shadow-xl hover:opacity-90 transition-all"
              >
                <Send size={18} />
                {loading ? 'Sending…' : 'Send Message'}
              </button>

              {success && (
                <p className="text-green-600 font-bold text-center mt-4">
                  ✅ Message sent successfully!
                </p>
              )}

              {error && (
                <p className="text-red-600 font-bold text-center mt-4">
                  ❌ Something went wrong. Please try again.
                </p>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
