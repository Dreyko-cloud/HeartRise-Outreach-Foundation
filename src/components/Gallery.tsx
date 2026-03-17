import { useState } from 'react';
import { Instagram, ExternalLink, Play } from 'lucide-react';

const mediaItems = [
  { type: 'image', src: '/images/IMG_1447.JPG', label: 'Community Outreach' },
  { type: 'image', src: '/images/IMG_1452.JPG', label: 'Community Outreach' },
  { type: 'image', src: '/images/IMG_1453.JPG', label: 'Community Outreach' },
  { type: 'image', src: '/images/IMG_1461.JPG', label: 'Community Outreach' },
  { type: 'image', src: '/images/IMG_1465.JPG', label: 'Community Outreach' },
  { type: 'image', src: '/images/IMG_1513.JPG', label: 'Community Outreach' },
  { type: 'image', src: '/images/IMG-20241112-WA0015.jpg', label: 'Outreach Day' },
  { type: 'image', src: '/images/IMG-20241112-WA0016.jpg', label: 'Outreach Day' },
  { type: 'image', src: '/images/IMG-20251123-WA0020.jpg', label: 'Community Event' },
  { type: 'image', src: '/images/IMG-20251123-WA0021.jpg', label: 'Community Event' },
  { type: 'image', src: '/images/IMG-20251123-WA0022.jpg', label: 'Community Event' },
  { type: 'image', src: '/images/IMG-20251123-WA0025.jpg', label: 'Community Event' },
  { type: 'image', src: '/images/IMG-20251123-WA0096.jpg', label: 'Community Event' },
  { type: 'video', src: '/videos/VID-20251123-WA0133.mp4', label: 'Event Highlight' },
  { type: 'video', src: '/videos/VID-20251123-WA0101.mp4', label: 'Event Highlight' },
  { type: 'video', src: '/videos/VID-20251123-WA0105.mp4', label: 'Event Highlight' },
  { type: 'video', src: '/videos/VID-20251123-WA0122.mp4', label: 'Event Highlight' },
  { type: 'video', src: '/videos/VID-20251123-WA0146.mp4', label: 'Event Highlight' },
  { type: 'video', src: '/videos/VID-20251123-WA0147.mp4', label: 'Event Highlight' },
  { type: 'video', src: '/videos/VID-20251123-WA0148.mp4', label: 'Event Highlight' },
  { type: 'video', src: '/videos/VID-20251123-WA0150.mp4', label: 'Event Highlight' },
];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<'all' | 'photos' | 'videos'>('all');

  const filtered = activeTab === 'all'
    ? mediaItems
    : mediaItems.filter(i => (activeTab === 'photos' ? i.type === 'image' : i.type === 'video'));

  return (
    <section id="gallery" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Our Events</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Moments That{' '}
            <span className="bg-gradient-to-r from-orange-500 to-teal-600 bg-clip-text text-transparent">
              Matter
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Photos and videos from our community events, outreach programs, and impact moments.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex justify-center gap-3 mb-10">
          {(['all', 'photos', 'videos'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-semibold capitalize transition-all ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-orange-500 to-teal-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Media grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gray-100 aspect-video"
            >
              {item.type === 'image' ? (
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <video
                  src={item.src}
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                />
              )}

              {/* Label overlay on images */}
              {item.type === 'image' && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-semibold">{item.label}</p>
                </div>
              )}

              {/* Play icon hint for videos */}
              {item.type === 'video' && (
                <div className="absolute top-3 right-3 bg-black/40 rounded-full p-2 pointer-events-none">
                  <Play size={16} className="text-white fill-white" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-4">Follow us on Instagram for live updates from our events</p>
          <a
            href="https://www.instagram.com/heartrise_outreach?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all"
          >
            <Instagram size={20} />
            @heartrise_outreach
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}