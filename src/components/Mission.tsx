import { Heart, Users, HandHeart, Sparkles } from 'lucide-react';

export default function Mission() {
  return (
    <section id="mission" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Visual — replace the inner <img> comment with your own photo */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Main photo area */}
              <div className="rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-teal-500 to-teal-700 aspect-square flex items-center justify-center">
                {/*
                  TO ADD YOUR OWN PHOTO here, replace this div with:
                  <img src="/your-mission-photo.jpg" alt="Our mission" className="w-full h-full object-cover" />
                */}
                <div className="text-center text-white p-8">
                  <HandHeart size={72} className="mx-auto mb-4 opacity-80" />
                  <p className="font-bold text-xl">Add a mission photo here</p>
                  <p className="text-white/70 text-sm mt-1">Replace with an &lt;img&gt; tag</p>
                </div>
              </div>

              {/* Floating stat: top-right */}
              <div className="absolute -top-5 -right-5 bg-white rounded-2xl shadow-xl p-5 text-center">
                <p className="text-3xl font-bold text-orange-500">100+</p>
                <p className="text-xs text-gray-500 mt-1">Lives Touched</p>
              </div>

              {/* Floating stat: bottom-left */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl p-5 text-center">
                <p className="text-3xl font-bold text-teal-600">25+</p>
                <p className="text-xs text-gray-500 mt-1">Volunteers</p>
              </div>

              {/* Decorative circles */}
              <div className="absolute -z-10 -bottom-8 -right-8 w-32 h-32 bg-orange-100 rounded-full opacity-60"></div>
              <div className="absolute -z-10 -top-8 -left-8 w-20 h-20 bg-teal-100 rounded-full opacity-60"></div>
            </div>
          </div>

          {/* Right: Text */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="inline-block">
              <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Our Mission</span>
              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-teal-600 mt-2 rounded-full"></div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Building Bridges of{' '}
              <span className="bg-gradient-to-r from-orange-500 to-teal-600 bg-clip-text text-transparent">
                Hope & Unity
              </span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              HeartRise Outreach exists to lend a helping hand to all walks of life.
              We aim to ease burdens, meet essential needs, and build supportive spaces
              rooted in kindness and unity.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Our vision is to create a world where kindness and support empower individuals and
              communities, fostering unity & alleviating life's burdens for people of all backgrounds.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                  <Heart size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Compassionate Care</h3>
                  <p className="text-sm text-gray-600">Meeting needs with empathy and dignity</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-teal-50 rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 bg-teal-700 rounded-lg flex items-center justify-center">
                  <Users size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Community Unity</h3>
                  <p className="text-sm text-gray-600">Building supportive networks together</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                  <HandHeart size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Essential Support</h3>
                  <p className="text-sm text-gray-600">Providing resources that matter most</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-teal-50 rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 bg-teal-700 rounded-lg flex items-center justify-center">
                  <Sparkles size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Lasting Impact</h3>
                  <p className="text-sm text-gray-600">Creating meaningful change that endures</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
