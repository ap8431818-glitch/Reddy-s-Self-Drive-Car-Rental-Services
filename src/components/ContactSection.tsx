import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from 'lucide-react';

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app, send the form data to the server here
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-brand-light relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-brand-primary/5 border border-brand-primary/10 relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmit}
                  className="relative z-10"
                >
                  <h2 className="text-3xl md:text-4xl font-serif text-brand-primary mb-2">Planning Your Next Journey?</h2>
                  <p className="text-brand-text/70 mb-8">Fill out the form below and we'll get back to you to discuss your travel requirements.</p>

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-brand-primary">Name</label>
                        <input required type="text" className="w-full px-4 py-3 rounded-xl bg-brand-light border border-transparent focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all" placeholder="Your full name" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-brand-primary">Phone Number</label>
                        <input required type="tel" className="w-full px-4 py-3 rounded-xl bg-brand-light border border-transparent focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all" placeholder="Your phone number" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-brand-primary">Email (Optional)</label>
                        <input type="email" className="w-full px-4 py-3 rounded-xl bg-brand-light border border-transparent focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all" placeholder="Your email address" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-brand-primary">Service Required</label>
                        <select className="w-full px-4 py-3 rounded-xl bg-brand-light border border-transparent focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all text-brand-text">
                          <option>Self Drive Car Rental</option>
                          <option>Outstation Trip</option>
                          <option>Airport Transfer</option>
                          <option>Custom Tour Package</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-brand-primary">Pickup Location</label>
                        <input required type="text" className="w-full px-4 py-3 rounded-xl bg-brand-light border border-transparent focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all" placeholder="City or specific address" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-brand-primary">Destination</label>
                        <input required type="text" className="w-full px-4 py-3 rounded-xl bg-brand-light border border-transparent focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all" placeholder="Where do you want to go?" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-brand-primary">Travel Date</label>
                        <input type="date" className="w-full px-4 py-3 rounded-xl bg-brand-light border border-transparent focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-brand-primary">Return Date</label>
                        <input type="date" className="w-full px-4 py-3 rounded-xl bg-brand-light border border-transparent focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-brand-primary">Travellers</label>
                        <input type="number" min="1" className="w-full px-4 py-3 rounded-xl bg-brand-light border border-transparent focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all" placeholder="Count" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-brand-primary">Message / Special Requirements</label>
                      <textarea rows={3} className="w-full px-4 py-3 rounded-xl bg-brand-light border border-transparent focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all resize-none" placeholder="Any specific requirements..."></textarea>
                    </div>

                    <button type="submit" className="w-full py-4 bg-brand-primary text-white font-semibold rounded-xl hover:bg-brand-dark transition-colors active:scale-[0.98]">
                      Request Travel Assistance
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center justify-center text-center py-12 relative z-10 h-full min-h-[400px]"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-3xl font-serif text-brand-primary mb-4">Thank you.</h3>
                  <p className="text-brand-text/80 text-lg">Reddy’s Self Drive Car Rental Services will contact you shortly to confirm your requirements.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-brand-primary mb-8">Get In Touch</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-brand-primary/5 shrink-0">
                  <MapPin className="w-5 h-5 text-brand-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-serif text-brand-primary mb-1">Reddy’s Self Drive Car Rental Services</h4>
                  <p className="text-brand-text/80 mb-2">Building Name, Ananta Nagar, Shree Maa Gayatri Kripa, near Laxmi Chowk Road, Phase 1, Rajiv Gandhi Infotech Park,<br/>Hinjawadi, Pune, Maharashtra 411057</p><p className="text-brand-text/80"><span className="font-medium text-brand-primary">Branch:</span><br/>Bhumkar Das Gugre Road, Shree Ram Colony, Pimpri Chinchwad 411057, Maharashtra, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-brand-primary/5 shrink-0">
                  <Phone className="w-5 h-5 text-brand-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-serif text-brand-primary mb-1">Call Us</h4>
                  <a href="tel:8380001886" className="text-brand-text/80 hover:text-brand-primary transition-colors text-xl font-medium tracking-wide">+91 83800 01886</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-brand-primary/5 shrink-0">
                  <Clock className="w-5 h-5 text-brand-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-serif text-brand-primary mb-1">Business Hours</h4>
                  <p className="text-brand-text/80">Available 24/7 for bookings and assistance</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mb-8">
              <a href="https://share.google/TmNcbH0MKzzSgo14w" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white border border-brand-primary text-brand-primary font-medium rounded-full hover:bg-brand-primary hover:text-white transition-colors text-center w-full">
                Get Directions
              </a>
              <a href="https://wa.me/918380001886" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-[#25D366] text-white font-medium rounded-full hover:bg-[#20bd5a] transition-colors text-center w-full">
                WhatsApp
              </a>
            </div>

            <div className="w-full h-64 rounded-2xl overflow-hidden shadow-sm border border-brand-primary/5">
              <iframe
                src="https://maps.google.com/maps?q=Building%20Name,%20Ananta%20Nagar,%20Shree%20Maa%20Gayatri%20Kripa,%20near%20Laxmi%20Chowk%20Road,%20Phase%201,%20Rajiv%20Gandhi%20Infotech%20Park,%20Hinjawadi,%20Pune,%20Maharashtra%20411057&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location Map"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
