import { Calendar, MapPin, Clock, Users, ArrowRight } from 'lucide-react';

const events = [
  {
    title: 'Community Food Distribution',
    date: 'Every Saturday',
    time: '10:00 AM - 2:00 PM',
    location: 'Central Community Center',
    attendees: '100+ families',
    type: 'Weekly Program',
    color: 'from-orange-500 to-amber-600',
  },
  {
    title: 'Youth Mentorship Workshop',
    date: 'March 15, 2024',
    time: '3:00 PM - 6:00 PM',
    location: 'HeartRise Education Hub',
    attendees: '50+ youth',
    type: 'Educational',
    color: 'from-teal-600 to-cyan-600',
  },
  {
    title: 'Health & Wellness Camp',
    date: 'March 22, 2024',
    time: '9:00 AM - 4:00 PM',
    location: 'Riverside Community Park',
    attendees: '200+ people',
    type: 'Health Initiative',
    color: 'from-orange-600 to-red-500',
  },
];

export default function Events() {
  return (
    <section id="events" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Events & Programs</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Join Us in{' '}
            <span className="bg-gradient-to-r from-orange-500 to-teal-600 bg-clip-text text-transparent">
              Action
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Be part of our upcoming community events and outreach programs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {events.map((event, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className={`h-2 bg-gradient-to-r ${event.color}`}></div>

              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full mb-4">
                  {event.type}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">{event.title}</h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Calendar size={18} className="text-orange-500 flex-shrink-0" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Clock size={18} className="text-teal-600 flex-shrink-0" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin size={18} className="text-orange-500 flex-shrink-0" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Users size={18} className="text-teal-600 flex-shrink-0" />
                    <span className="text-sm">{event.attendees}</span>
                  </div>
                </div>

                <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-orange-500 to-teal-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all group-hover:scale-105">
                  Register Now
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-teal-50 rounded-2xl p-8 md:p-10 border border-orange-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Stay Updated on Our Events
              </h3>
              <p className="text-gray-600">
                Subscribe to receive notifications about upcoming programs and opportunities.
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent min-w-[280px]"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-orange-500 to-teal-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
