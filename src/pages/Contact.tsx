import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const ITEMS = [
  { Icon: Phone, label: "Phone", value: "+91 7480036643" },
  { Icon: Mail, label: "Email", value: "hasre0127@gmail.com" },
  { Icon: MapPin, label: "Address", value: "Chiraiya, Bihar" },
];

export default function Contact() {
  useEffect(() => { document.title = "Contact — HASRE SUCCESS POINT"; }, []);
  const [form, setForm] = useState({ name: "", email: "", msg: "" });
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center max-w-xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold font-display">
          Get in <span className="gradient-text">Touch</span>
        </h1>
        <p className="mt-4 text-muted-foreground">
          Questions, feedback or partnership ideas? We'd love to hear from you.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-5">
        <div className="md:col-span-2 space-y-4">
          {ITEMS.map((it, i) => (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="glass rounded-2xl p-5 flex items-start gap-4"
            >
              <div className="h-11 w-11 shrink-0 rounded-xl gradient-bg text-primary-foreground grid place-items-center shadow-glow">
                <it.Icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{it.label}</div>
                <div className="font-semibold">{it.value}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.form
          onSubmit={(e) => {
            e.preventDefault();
            toast.success("Message sent!", { description: "We'll get back to you soon." });
            setForm({ name: "", email: "", msg: "" });
          }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:col-span-3 glass rounded-3xl p-6 sm:p-8 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              required
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-xl bg-background border border-input px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/40"
            />
            <input
              required
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-xl bg-background border border-input px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/40"
            />
          </div>
          <textarea
            required
            rows={5}
            placeholder="Your message..."
            value={form.msg}
            onChange={(e) => setForm({ ...form, msg: e.target.value })}
            className="w-full rounded-xl bg-background border border-input px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/40 resize-none"
          />
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full gradient-bg text-primary-foreground px-6 py-3 font-semibold shadow-glow hover:scale-105 transition-transform"
          >
            Send Message <Send className="h-4 w-4" />
          </button>
        </motion.form>
      </div>
    </div>
  );
}
