import { Flame, Award, Wallet2 } from 'lucide-react';

interface StatsGridProps {
  onXPClick?: () => void;
}

export function StatsGrid({ onXPClick }: StatsGridProps) {
  const stats = [
    {
      title: 'Total XP',
      value: '8,200',
      icon: Award,
      clickable: true,
      breakdown: [
        { label: 'Work XP', value: '5,400' },
        { label: 'Hackathon XP', value: '2,100' },
        { label: 'Event XP', value: '700' },
      ]
    },
    {
      title: 'Active Streak',
      value: '12 weeks',
      icon: Flame,
      subtitle: 'Keep it going!'
    },
    {
      title: 'Asset Count',
      value: '24',
      icon: Wallet2,
      subtitle: 'Verified SBTs'
    }
  ];

  return (
    <section className="h-full flex flex-col">
      <h3 className="text-white mb-3">Core Stats</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 flex-1">
        {stats.map((stat) => {
          const Icon = stat.icon;
          const isClickable = stat.title === 'Total XP';
          return (
            <div 
              key={stat.title}
              onClick={isClickable ? onXPClick : undefined}
              className={`bg-zinc-950 border border-zinc-800 rounded-xl p-4 hover:border-zinc-700 transition-colors shadow-[0_8px_32px_rgba(0,0,0,0.8),0_0_1px_rgba(0,0,0,0.9)] ${isClickable ? 'cursor-pointer hover:border-[rgb(37,208,171)] hover:shadow-[0_0_20px_rgba(37,208,171,0.3)]' : ''}`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <p className="text-zinc-500 mb-1">{stat.title}</p>
                  <p className={`text-white ${isClickable ? 'group-hover:text-[rgb(37,208,171)] transition-colors' : ''}`}>
                    {stat.value}
                  </p>
                  {stat.subtitle && (
                    <p className="text-zinc-600 mt-1 text-sm">{stat.subtitle}</p>
                  )}
                </div>
                <div className="bg-zinc-900 border border-zinc-800 p-2 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                  <Icon className="w-5 h-5 text-white" />
                </div>
              </div>
              
              {stat.breakdown && (
                <div className="space-y-2 pt-3 border-t border-zinc-800">
                  {stat.breakdown.map((item) => (
                    <div key={item.label} className="flex justify-between items-center">
                      <span className="text-zinc-600 text-sm">{item.label}</span>
                      <span className="text-zinc-400 text-sm">{item.value}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}