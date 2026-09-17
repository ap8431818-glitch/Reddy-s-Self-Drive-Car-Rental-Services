import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const reviews = [
  {
    text: "Om sai Tours& Travel is good service Safe and secure to with people.",
    author: "Google Reviewer"
  },
  {
    text: "Driver is very polite, and the cab is very hygienic.",
    author: "Google Reviewer"
  },
  {
    text: "Very nice car service and driver is very good.",
    author: "Niraj Sahu"
  }
];

export function Testimonials() {
  return (
    <section id="reviews" className="py-24 md:py-32 bg-brand-light relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <div className="flex justify-center items-center gap-1 text-brand-accent mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-current" />
            ))}
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-primary mb-6">Loved By Our Travellers</h2>
          <div className="inline-flex items-center justify-center gap-4 bg-white px-6 py-3 rounded-full border border-brand-primary/10 shadow-sm">
            <span className="font-serif text-2xl font-bold text-brand-primary">4.9</span>
            <div className="w-px h-6 bg-brand-primary/20" />
            <span className="font-medium text-brand-text">275 Google Reviews</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-brand-primary/5 text-left"
            >
              <div className="flex gap-1 text-brand-accent mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-lg text-brand-text/90 italic mb-6 font-serif">"{review.text}"</p>
              <p className="text-sm font-medium text-brand-primary/60">— {review.author}</p>
            </motion.div>
          ))}
        </div>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          href="https://maps.google.com/?q=Om+Sai+Tours+And+Travels+Pune" // Placeholder link
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex px-8 py-3 bg-brand-primary text-white font-medium rounded-full hover:bg-brand-dark transition-colors"
        >
          View All Google Reviews
        </motion.a>
      </div>
    </section>
  );
}
