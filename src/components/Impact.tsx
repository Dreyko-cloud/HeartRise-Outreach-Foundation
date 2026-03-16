import { useEffect, useState } from 'react';
import { TrendingUp, Users, Heart, DollarSign } from 'lucide-react';

const stats = [
  {
    icon: Users,
    end: 100,
    suffix: '+',
    label: 'Lives Touched',
    description: 'Families and individuals supported',
    color: 'from-orange-500 to-amber-600',
  },
  {
    icon: Heart,
    end: 1250,
    suffix: '+',
    label: 'Acts of Kindness',
    description: 'Moments of compassion shared',
    color: 'from-teal-600 to-cyan-600',
  },
  {
    icon: DollarSign,
    end: 150000,
    suffix: '+',
    label: 'Shillings Contributed',
    description: 'Resources distributed to communities',
    color: 'from-orange-600 to-red-500',
  },
  {
    icon: TrendingUp,
    end: 25,
    suffix: '+',
    label: 'Active Volunteers',
    description: 'Dedicated hearts serving together',
    color: 'from-teal-700 to-blue-600',
  },
];

function CountUpNumber({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <>{count.toLocaleString()}</>;
}

export default function Impact() {
  return (
    <section id="impact" className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(250,90,40,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(14,124,123,0.15),transparent_50%)]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">Our Impact</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Creating Waves of{' '}
            <span className="bg-gradient-to-r from-orange-400 to-teal-400 bg-clip-text text-transparent">
              Positive Change
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Every contribution, every volunteer hour, every act of kindness creates a lasting impact in our community.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className={`inline-flex w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={28} className="text-white" />
                </div>

                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <CountUpNumber end={stat.end} />
                  <span className="text-orange-400">{stat.suffix}</span>
                </div>

                <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
                <p className="text-sm text-gray-400">{stat.description}</p>

                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-500/10 to-teal-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10 max-w-3xl">
            <p className="text-xl md:text-2xl font-medium text-gray-200 leading-relaxed">
              "Together, we're not just changing lives, we're building a legacy of compassion,
              unity, and hope that will inspire generations to come."
            </p>
            <p className="text-orange-400 font-semibold mt-4">— HeartRise Outreach Team</p>
          </div>
        </div>
      </div>
    </section>
  );
}
