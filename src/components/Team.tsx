import { Linkedin, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: 'Hamza Saleh',
    role: 'Chairman',
    quote: 'Sometimes Allah allows hardship not to weaken us, but to position us where we can heal others. HeartRise was born from that understanding.',
    initials: 'HS',
    color: 'from-orange-500 to-cyan-600',
  },
  {
    name: 'Zulekha Omar',
    role: 'Chairlady',
    quote: 'What may feel like a small effort to us could be a moment of happiness someone remembers forever.',
    initials: 'ZO',
    color: 'from-teal-600 to-teal-700',
  },
  {
    name: 'Abdikhalil Adow',
    role: 'Treasurer',
    quote: 'HeartRise Outreach truly embodies the prophetic teaching that says "The best of people are those who are beneficial to others" through their tireless service to the vulnerable and the voiceless in our communities.',
    initials: 'AA',
    color: 'from-orange-600 to-amber-600',
  },
  {
    name: '-',
    role: 'Secretary',
    quote: '...',
    initials: '-',
    color: 'from-orange-500 to-red-500',
  },
  {
    name: 'Fateemah Abdul',
    role: 'Media Lead',
    quote: 'The Prophet (S.A.W) himself was an orphan. How could we not show up for them.',
    initials: 'FA',
    color: 'from-teal-600 to-blue-600',
  },
  {
    name: 'Abdikani Adan',
    role: 'Organiser',
    quote: 'Indeed, Allah loves those who do good.',
    initials: 'AA',
    color: 'from-orange-600 to-orange-700',
  },
];

export default function Team() {
  return (
    <section id="team" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-orange-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Our Team</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Meet the Hearts Behind{' '}
            <span className="bg-gradient-to-r from-orange-500 to-teal-600 bg-clip-text text-transparent">
              the Mission
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dedicated individuals united by a shared vision of compassion, support, and community uplift.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {member.initials}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-sm font-medium text-orange-500 mt-1">{member.role}</p>
                </div>

                <p className="text-sm text-gray-600 italic leading-relaxed">
                  "{member.quote}"
                </p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
