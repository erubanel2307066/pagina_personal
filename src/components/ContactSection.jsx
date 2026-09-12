import { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Github, Linkedin, Mail, MapPin, Send, Clock } from 'lucide-react';
import { Section } from './Section';
import { FORMSPREE_ENDPOINT } from '../data/siteData';

const LIMITS = { name: 100, email: 254, message: 2000 };
const COOLDOWN = 30;
const initialForm = { name: '', email: '', message: '' };

function sanitize(str) {
  return str.replace(/<[^>]*>/g, '').replace(/[&<>"']/g, '');
}

function validate(form) {
  const errors = {};
  const name = form.name.trim();
  const email = form.email.trim();
  const message = form.message.trim();

  if (!name) errors.name = 'El nombre es requerido';
  else if (name.length > LIMITS.name) errors.name = `Máximo ${LIMITS.name} caracteres`;

  if (!email) errors.email = 'El correo es requerido';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Correo inválido';
  else if (email.length > LIMITS.email) errors.email = `Máximo ${LIMITS.email} caracteres`;

  if (!message) errors.message = 'El mensaje es requerido';
  else if (message.length > LIMITS.message) errors.message = `Máximo ${LIMITS.message} caracteres`;

  return errors;
}

export const ContactSection = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState('');
  const [cooldown, setCooldown] = useState(0);
  const timerRef = useRef(null);

  const startCooldown = useCallback(() => {
    setCooldown(COOLDOWN);
    timerRef.current = setInterval(() => {
      setCooldown((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          timerRef.current = null;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const sanitized = sanitize(value);
    if (sanitized.length > LIMITS[name]) return;
    setForm((prev) => ({ ...prev, [name]: sanitized }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
    if (sendError) setSendError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (cooldown > 0 || sending) return;

    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSending(true);
    setSendError('');

    try {
      const formData = new FormData();
      formData.append('name', form.name.trim());
      formData.append('email', form.email.trim());
      formData.append('message', form.message.trim());
      formData.append('_subject', `Nuevo mensaje de ${form.name.trim()}`);

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (!response.ok) {
        throw new Error('Error al enviar el mensaje');
      }

      setSubmitted(true);
      startCooldown();
      setForm(initialForm);
      setTimeout(() => setSubmitted(false), 4000);
    } catch {
      setSendError('No se pudo enviar el mensaje. Intenta de nuevo o contacta directamente por email.');
    } finally {
      setSending(false);
    }
  };

  return (
    <Section id="contact">
      <div className="container-wrap">
        <div className="contact-layout">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="contact-copy"
          >
            <span className="eyebrow">Contacto</span>
            <h2>Convirtamos una buena idea en una experiencia lista para usarse.</h2>
            <p>
              Si necesitas una web, automatización, sistema interno o una estrategia digital más clara, podemos construirlo con una base sólida desde el primer paso.
            </p>

            <div className="contact-list">
              <a href="mailto:gace860403@gmail.com">
                <Mail size={18} />
                <span>gace860403@gmail.com</span>
              </a>
              <div>
                <MapPin size={18} />
                <span>Cruz Grande, Guerrero</span>
              </div>
            </div>

            <div className="social-list" aria-label="Redes sociales">
              <a href="https://github.com/erubanel2307066" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={19} /></a>
              <a href="https://linkedin.com/in/erubanel-gallo" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={19} /></a>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="contact-form"
            noValidate
          >
            <div className="form-grid">
              <label>
                <span>Nombre</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  maxLength={LIMITS.name}
                  className={errors.name ? 'input-error' : ''}
                  aria-invalid={!!errors.name}
                  autoComplete="name"
                />
                {errors.name && <span className="form-error">{errors.name}</span>}
              </label>
              <label>
                <span>Correo</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="tu@correo.com"
                  maxLength={LIMITS.email}
                  className={errors.email ? 'input-error' : ''}
                  aria-invalid={!!errors.email}
                  autoComplete="email"
                />
                {errors.email && <span className="form-error">{errors.email}</span>}
              </label>
            </div>
            <label>
              <span>Mensaje ({form.message.length}/{LIMITS.message})</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                placeholder="Cuéntame qué quieres construir..."
                maxLength={LIMITS.message}
                className={errors.message ? 'input-error' : ''}
                aria-invalid={!!errors.message}
              />
              {errors.message && <span className="form-error">{errors.message}</span>}
            </label>
            <button
              type="submit"
              className="button-primary full"
              disabled={cooldown > 0 || sending}
            >
              {cooldown > 0 ? (
                <>
                  <Clock size={18} />
                  Espera {cooldown}s
                </>
              ) : sending ? (
                <>
                  <Send size={18} className="animate-pulse" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send size={18} />
                  {submitted ? 'Mensaje enviado' : 'Enviar mensaje'}
                </>
              )}
            </button>
            {sendError && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="form-error-message"
              >
                {sendError}
              </motion.p>
            )}
            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="form-success"
              >
                <CheckCircle2 size={16} />
                Gracias por tu mensaje. Te responderé pronto.
              </motion.p>
            )}
            <p className="form-note">
              <CheckCircle2 size={16} />
              Respuesta directa para proyectos web, IA y automatización.
            </p>
          </motion.form>
        </div>
      </div>
    </Section>
  );
};
