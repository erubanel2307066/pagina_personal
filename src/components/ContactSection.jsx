import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Github, Linkedin, Mail, MapPin, Send } from 'lucide-react';
import { Section } from './Section';

const initialForm = { name: '', email: '', message: '' };
const initialErrors = {};

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = 'El nombre es requerido';
  if (!form.email.trim()) errors.email = 'El correo es requerido';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Correo inválido';
  if (!form.message.trim()) errors.message = 'El mensaje es requerido';
  return errors;
}

export const ContactSection = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState(initialErrors);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
    setForm(initialForm);
    setTimeout(() => setSubmitted(false), 4000);
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
              <a href="#" aria-label="LinkedIn"><Linkedin size={19} /></a>
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
                  className={errors.name ? 'input-error' : ''}
                  aria-invalid={!!errors.name}
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
                  className={errors.email ? 'input-error' : ''}
                  aria-invalid={!!errors.email}
                />
                {errors.email && <span className="form-error">{errors.email}</span>}
              </label>
            </div>
            <label>
              <span>Mensaje</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                placeholder="Cuéntame qué quieres construir..."
                className={errors.message ? 'input-error' : ''}
                aria-invalid={!!errors.message}
              />
              {errors.message && <span className="form-error">{errors.message}</span>}
            </label>
            <button type="submit" className="button-primary full">
              <Send size={18} />
              {submitted ? 'Mensaje enviado' : 'Enviar mensaje'}
            </button>
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
