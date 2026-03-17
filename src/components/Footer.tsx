import { Heart, Mail, Phone, MapPin, Instagram } from 'lucide-react';

// X (Twitter) SVG icon
function XIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.264 5.636L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}

// TikTok SVG icon
function TikTokIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
    </svg>
  );
}

export default function Footer() {
  const quickLinks = [
    { name: 'Our Mission', href: '#mission' },
    { name: 'Meet the Team', href: '#team' },
    { name: 'Impact Stories', href: '#gallery' },
    { name: 'Our Impact', href: '#impact' },
  ];

  const getInvolved = [
    { name: 'Volunteer', href: '#help' },
    { name: 'Donate', href: '#contact' },
    { name: 'Events', href: '#events' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const handleComingSoon = (platform: string) => {
    alert(`We are working on opening an account on ${platform}. Stay tuned! 🧡`);
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                <img src="/heartrise-logo.png.jpeg" alt="HeartRise Outreach logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-bold">HeartRise Outreach</h3>
                <p className="text-sm text-gray-400">Driven by love, powered by purpose</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              A community-centered foundation dedicated to easing burdens, spreading love,
              and uplifting underserved lives through support, kindness, and unity.
            </p>
            <div className="flex gap-3">
              {/* Instagram — live */}
              <a
                href="https://www.instagram.com/heartrise_outreach?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors"
                title="Instagram"
              >
                <Instagram size={18} />
              </a>
              {/* TikTok — coming soon */}
              <button
                onClick={() => handleComingSoon('TikTok')}
                className="w-10 h-10 bg-white/10 hover:bg-pink-500 rounded-lg flex items-center justify-center transition-colors cursor-pointer"
                title="TikTok — Coming Soon"
              >
                <TikTokIcon size={18} />
              </button>
              {/* X — coming soon */}
              <button
                onClick={() => handleComingSoon('X')}
                className="w-10 h-10 bg-white/10 hover:bg-gray-500 rounded-lg flex items-center justify-center transition-colors cursor-pointer"
                title="X — Coming Soon"
              >
                <XIcon size={18} />
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-orange-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full group-hover:w-2 group-hover:h-2 transition-all"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Get Involved</h4>
            <ul className="space-y-3">
              {getInvolved.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-teal-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-teal-500 rounded-full group-hover:w-2 group-hover:h-2 transition-all"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300">
                <Mail size={18} className="text-orange-400 flex-shrink-0 mt-0.5" />
                <a href="mailto:heartriseoutreach@gmail.com" className="hover:text-orange-400 transition-colors">
                  heartriseoutreach@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <Phone size={18} className="text-teal-400 flex-shrink-0 mt-0.5" />
                <a href="tel:+254796132196" className="hover:text-teal-400 transition-colors">
                  +254 796 132 196<br />
                  +254 113 466 531
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <MapPin size={18} className="text-orange-400 flex-shrink-0 mt-0.5" />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} HeartRise Outreach. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-400">Made with</span>
              <Heart size={16} className="text-orange-500 fill-orange-500 animate-pulse" />
              <span className="text-gray-400">for our community</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
