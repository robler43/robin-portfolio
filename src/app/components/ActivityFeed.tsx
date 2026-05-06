import { CheckCircle2, Clock, AlertCircle, ChevronDown } from 'lucide-react';

export function ActivityFeed() {
  const activities = [
    {
      id: 1,
      type: 'Work Experience',
      title: 'Senior Developer at TechCorp',
      status: 'minted',
      timestamp: '2 hours ago',
      xp: '+2,500 XP'
    },
    {
      id: 2,
      type: 'Hackathon',
      title: 'ETHGlobal NYC 2024',
      status: 'minted',
      timestamp: '5 hours ago',
      xp: '+1,500 XP'
    },
    {
      id: 3,
      type: 'Event',
      title: 'Devcon Southeast Asia',
      status: 'minted',
      timestamp: '1 day ago',
      xp: '+500 XP'
    },
    {
      id: 4,
      type: 'Work Experience',
      title: 'Lead Engineer at StartupXYZ',
      status: 'pending',
      timestamp: '2 days ago',
      xp: '+3,000 XP'
    },
    {
      id: 5,
      type: 'Hackathon',
      title: 'Solana Breakpoint Hackathon',
      status: 'minted',
      timestamp: '3 days ago',
      xp: '+1,200 XP'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'minted':
        return <CheckCircle2 className="w-5 h-5 text-green-400" />;
      case 'pending':
        return <Clock className="w-5 h-5 text-yellow-400" />;
      case 'rejected':
        return <AlertCircle className="w-5 h-5 text-red-400" />;
      default:
        return null;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'minted':
        return 'Minted';
      case 'pending':
        return 'Pending Approval';
      case 'rejected':
        return 'Rejected';
      default:
        return status;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'minted':
        return 'text-green-400';
      case 'pending':
        return 'text-yellow-400';
      case 'rejected':
        return 'text-red-400';
      default:
        return 'text-purple-400';
    }
  };

  return (
    <section className="h-full flex flex-col">
      <h3 className="text-white mb-4">Recent Activity</h3>
      
      <div className="bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.8),0_0_1px_rgba(0,0,0,0.9)] flex-1 flex flex-col">
        <div className="divide-y divide-zinc-800 overflow-y-auto flex-1">
          {activities.map((activity) => (
            <div 
              key={activity.id}
              className="p-4 hover:bg-zinc-900 transition-colors cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  {getStatusIcon(activity.status)}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-1">
                    <div className="flex-1 min-w-0">
                      <p className="text-white truncate">{activity.title}</p>
                      <p className="text-zinc-500">{activity.type}</p>
                    </div>
                    <span className="text-zinc-300 whitespace-nowrap">{activity.xp}</span>
                  </div>
                  
                  <div className="flex items-center gap-3 mt-2">
                    <span className={`${getStatusColor(activity.status)}`}>
                      {getStatusText(activity.status)}
                    </span>
                    <span className="text-zinc-700">•</span>
                    <span className="text-zinc-600">{activity.timestamp}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Shadow overlay and Expand button */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-4">
          <button className="pointer-events-auto bg-zinc-900 border border-zinc-700 hover:border-[rgb(37,208,171)] text-zinc-300 hover:text-white rounded-lg px-6 py-2 flex items-center gap-2 transition-all shadow-[0_4px_16px_rgba(0,0,0,0.6)]">
            <span>Expand All Activity</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}