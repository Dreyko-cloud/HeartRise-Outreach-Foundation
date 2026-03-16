import { HandHeart, DollarSign, Calendar, Users, ArrowRight } from 'lucide-react';

const POCHI_NUMBER = '+254 718 622 986';
const INSTAGRAM_URL = 'https://www.instagram.com/heartrise_outreach?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==';

const ways = [
  {
    icon: Users,
    title: 'Volunteer With Us',
    description: 'Join our team of dedicated volunteers making a real difference in communities.',
    action: 'Become a Volunteer',
    color: 'from-orange-500 to-amber-600',
    bgColor: 'bg-orange-500',
    href: '#contact',
    external: false,
  },
  {
    icon: DollarSign,
    title: 'Donate Today',
    description: 'Your financial support helps us provide essential resources to families in need.',
    action: 'Make a Donation',
    color: 'from-teal-600 to-cyan-600',
    bgColor: 'bg-teal-600',
    href: `https://wa.me/254718622986?text=Hi%20HeartRise%2C%20I%20would%20like%20to%20make%20a%20donation.%20Your%20Pochi%20la%20Biashara%20number%20is%20${encodeURIComponent(POCHI_NUMBER)}`,
    external: true,
  },
  {
    icon: HandHeart,
    title: 'Sponsor a Program',
    description: 'Support specific initiatives like food distribution, education, or health programs.',
    action: 'Sponsor Now',
    color: 'from-orange-600 to-red-500',
    bgColor: 'bg-orange-600',
    href: `https://wa.me/254718622986?text=Hi%20HeartRise%2C%20I%20would%20like%20to%20sponsor%20a%20program.%20Your%20Pochi%20la%20Biashara%20number%20is%20${encodeURIComponent(POCHI_NUMBER)}`,
    external: true,
  },
  {
    icon: Calendar,
    title: 'Join Our Events',
    description: 'Participate in community gatherings, fundraisers, and outreach activities.',
    action: 'View Events',
    color: 'from-teal-700 to-blue-600',
    bgColor: 'bg-teal-700',
    href: INSTAGRAM_URL,
    external: true,
  },
];

// Modal for donation/sponsor info
import { useState } from 'react';
import { X, Copy, Check } from 'lucide-react';

function DonationModal({ onClose }: { onClose: () => void }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(POCHI_NUMBER);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl p-8 max-w-sm w-full shadow-2xl relative" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
          <X size={20} />
        </button>
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <DollarSign size={32} className="text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Send Your Donation</h3>
          <p className="text-gray-600 mb-6">Use M-Pesa Pochi la Biashara to send your donation directly to us.</p>
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-4">
            <p className="text-sm text-gray-500 mb-1">Pochi la Biashara Number</p>
            <p className="text-2xl font-bold text-orange-600 tracking-wide">{POCHI_NUMBER}</p>
          </div>
          <button
            onClick={handleCopy}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-teal-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
          >
            {copied ? <Check size={18} /> : <Copy size={18} />}
            {copied ? 'Copied!' : 'Copy Number'}
          </button>
          <p className="text-xs text-gray-400 mt-4">Thank you for your generosity 🧡</p>
        </div>
      </div>
    </div>
  );
}

export default function HowToHelp() {
  const [showDonationModal, setShowDonationModal] = useState(false);
  const [modalType, setModalType] = useState<'donate' | 'sponsor'>('donate');

  const handleClick = (way: typeof ways[0]) => {
    if (way.title === 'Donate Today' || way.title === 'Sponsor a Program') {
      setModalType(way.title === 'Donate Today' ? 'donate' : 'sponsor');
      setShowDonationModal(true);
    } else if (way.title === 'Join Our Events') {
      window.open(way.href, '_blank', 'noopener noreferrer');
    } else if (way.href === '#contact') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {showDonationModal && <DonationModal onClose={() => setShowDonationModal(false)} />}

      <section id="help" className="py-16 md:py-24 bg-gradient-to-br from-white via-orange-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Get Involved</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
              How You Can{' '}
              <span className="bg-gradient-to-r from-orange-500 to-teal-600 bg-clip-text text-transparent">
                Make a Difference
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every action, big or small, creates ripples of positive change. Choose how you'd like to contribute.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ways.map((way, index) => {
              const Icon = way.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                >
                  <div className={`inline-flex w-14 h-14 rounded-xl bg-gradient-to-br ${way.color} items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={28} className="text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">{way.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{way.description}</p>

                  <button
                    onClick={() => handleClick(way)}
                    className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl ${way.bgColor} text-white font-semibold transition-all duration-300 hover:opacity-90 hover:shadow-md`}
                  >
                    <span>{way.action}</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              );
            })}
          </div>

          <div className="mt-16 bg-gradient-to-r from-orange-500 to-teal-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Every Heart Matters. Every Action Counts.
            </h3>
            <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Join us in creating a world where compassion flows freely and every person feels supported and valued.
            </p>
            <a
              href="#contact"
              onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center gap-2 bg-white text-orange-500 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              Get Started Today
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
