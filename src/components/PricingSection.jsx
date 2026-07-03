import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { pricingPlans } from '../data/siteData';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  }),
};

export const PricingSection = () => (
  <motion.section
    id="pricing"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-80px' }}
    className="section-space relative"
  >
    <div className="container-wrap">
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants} custom={-1} className="section-heading center">
          <span className="eyebrow">Servicios</span>
          <h2>Paquetes claros, sin letra chica.</h2>
          <p>Precios en MXN. Incluyen hosting y dominio el primer año.</p>
        </motion.div>

        <div className="pricing-grid">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.name}
              custom={i}
              variants={itemVariants}
              className={cn('pricing-card', plan.featured && 'pricing-card-featured')}
            >
              {plan.featured && <span className="pricing-badge">Recomendado</span>}

              <div className="pricing-header">
                <h3 className="pricing-name">{plan.name}</h3>
                <div className="pricing-price-wrap">
                  <span className="pricing-price">{plan.price}</span>
                  {plan.currency && <span className="pricing-currency">{plan.currency}</span>}
                </div>
                {plan.usd && <span className="pricing-usd">{plan.usd}</span>}
              </div>

              <p className="pricing-desc">{plan.desc}</p>

              <ul className="pricing-features">
                {plan.features.map((f) => (
                  <li key={f}>
                    <Check size={14} className="text-brand-green shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                className={cn(
                  'button-primary full mt-auto',
                  !plan.featured && 'button-secondary'
                )}
                onClick={() => {
                  const msg = encodeURIComponent(
                    `Hola Erubanel, me interesa el plan "${plan.name}". ${plan.price !== 'Cotizar' ? `Presupuesto: ${plan.price} ${plan.currency} (${plan.usd}).` : ''}Quisiera más información.`
                  );
                  window.open(`https://wa.me/527451357617?text=${msg}`, '_blank');
                }}
              >
                {plan.featured ? 'Empezar' : 'Cotizar'}
                <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </motion.section>
);
