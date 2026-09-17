export function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-brand-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
            <h3 className="font-serif text-2xl tracking-widest text-white mb-1">REDDY’S SELF DRIVE CAR RENTAL SERVICES</h3>
            <p className="text-white/50 text-sm mb-4 font-sans">रेड्डी'स सेल्फ ड्राइव कार रेंटल सर्विस</p>
            <p className="text-brand-accent-light text-xs tracking-widest uppercase mb-6">Premium Car Leasing Service</p>
            <p className="text-white/70 max-w-sm text-balance">
              Enjoy Your Ride with Our Cars 🚗 • The Best Cars Available At Affordable Prices • We Provide Cars for Self drive •
            </p>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="font-serif text-lg text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Tours', 'Fleet', 'Reviews', 'Contact'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-white/60 hover:text-brand-accent transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-4">
            <h4 className="font-serif text-lg text-white mb-6">Contact</h4>
            <address className="not-italic text-sm text-white/60 space-y-3">
              <p>Building Name, Ananta Nagar, Shree Maa Gayatri Kripa, near Laxmi Chowk Road, Phase 1, Rajiv Gandhi Infotech Park,<br/>Hinjawadi, Pune, Maharashtra 411057</p><p className="pt-2"><strong>Branch:</strong><br/>Bhumkar Das Gugre Road, Shree Ram Colony, Pimpri Chinchwad 411057, Maharashtra, India</p>
              <p>
                <a href="tel:8380001886" className="hover:text-brand-accent transition-colors">
                  +91 83800 01886
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>Copyright © {Math.max(year, 2026)} Reddy’s Self Drive Car Rental Services. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
