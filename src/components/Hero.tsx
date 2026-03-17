import { Heart, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-teal-50 pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(250,90,40,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(14,124,123,0.1),transparent_50%)]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div className="text-center lg:text-left space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium">
              <Heart size={16} className="fill-current" />
              <span>Youth-Led Non-Profit</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              HeartRise Outreach
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2 md:mt-4 bg-gradient-to-r from-orange-500 to-teal-600 bg-clip-text text-transparent">
                Hands that give, hearts that heal.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
              Helping communities in need through compassion, support, and shared humanity.
              We ease burdens, meet essential needs, and build supportive spaces rooted in kindness and unity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a
                href="#help"
                className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-full hover:bg-orange-600 transition-all font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Users size={20} />
                Join Our Cause
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-teal-700 text-white px-8 py-4 rounded-full hover:bg-teal-800 transition-all font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Heart size={20} />
                Make a Donation
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-500">100+</div>
                <div className="text-sm text-gray-600 mt-1">Lives Touched</div>
              </div>
              <div className="text-center border-x border-gray-200">
                <div className="text-3xl md:text-4xl font-bold text-teal-700">25+</div>
                <div className="text-sm text-gray-600 mt-1">Volunteers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-500">5+</div>
                <div className="text-sm text-gray-600 mt-1">Programs</div>
              </div>
            </div>
          </div>

          {/* Right: Hero photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/IMG-20241112-WA0015.jpg"
                alt="HeartRise Outreach community"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}