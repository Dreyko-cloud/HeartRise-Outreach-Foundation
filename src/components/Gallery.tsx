import { useState } from 'react';
import { Instagram, Image, Video, ExternalLink } from 'lucide-react';

const mediaItems = [
  { type: 'image', label: 'Event Photo 1' },
  { type: 'image', label: 'Event Photo 2' },
  { type: 'video', label: 'Event Video 1' },
  { type: 'image', label: 'Event Photo 3' },
  { type: 'image', label: 'Event Photo 4' },
  { type: 'video', label: 'Event Video 2' },
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-orange-50 to-teal-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-dashed border-orange-200 flex flex-col items-center justify-center gap-3 h-48"
            >
              {item.type === 'image'
                ? <Image size={40} className="text-orange-300" />
                : <Video size={40} className="text-teal-400" />
              }
              <p className="text-sm font-medium text-gray-400">{item.label}</p>
              <p className="text-xs text-gray-400 px-4 text-center">
                Replace with your actual {item.type === 'image' ? 'photo' : 'video'}
              </p>
            </div>
          ))}
        </div>

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
