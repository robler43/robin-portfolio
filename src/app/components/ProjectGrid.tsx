import * as React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Unlock, Target, Zap, Code, Palette, Brain, BarChart, Link, Shield, Cpu } from 'lucide-react';
import nounstackPreview from '../../imports/nounstack_preview-DZ4MmUgR.png';
import googleMapsPreview from 'figma:asset/d3306234a04198b56cf0fcc0fe9a6c8ea6d1a190.png';
import logxPreview from 'figma:asset/2d869394b4143d950fada507bdec4b721c536c09.png';
import feedbackDashboard from 'figma:asset/712fb096b6081914e5ae7c08e4fdee1f2f087816.png';
import pizzaRedesign from 'figma:asset/f4a6469119a5b3ab7e9fd8aa72bdd2f99628cf1b.png';
import passportXyzPreview from 'figma:asset/0b4278c278606d9edb1cefcf77d4eac0f228fb16.png';
import estesPreview from '../../assets/estes-preview.png';

const projects = [
  {
    id: 0,
    code: 'PROJECT_00',
    title: 'ESTES',
    hackathonWinner: true,
    description: 'Pre-install auditor and runtime redaction wrapper that prevents credential leaks and tool-output poisoning in AI agent ecosystems.',
    attributes: [
      { name: 'AI Agent Supply Chain Security', icon: Shield, stat: 'WIS +22' },
      { name: 'Python AST / Regex / Entropy Analysis', icon: Brain, stat: 'INT +21' },
      { name: 'FastAPI Runtime Redaction', icon: Zap, stat: 'DEX +19' },
      { name: 'Compliance & Audit Logging', icon: Code, stat: 'CHA +16' }
    ],
    imageUrl: estesPreview,
    status: 'COMPLETED',
    link: 'https://www.verylowcortisol.vip'
  },
  {
    id: 1,
    code: 'PROJECT_01',
    title: 'NOUNSTACK',
    hackathonWinner: true,
    description: 'Reimagined DAO governance UX — a social-first interface replacing fragmented dashboards with a unified feed for auctions, voting & treasury.',
    attributes: [
      { name: 'Governance UX Design', icon: Palette, stat: 'CHA +22' },
      { name: 'React / Tailwind CSS', icon: Code, stat: 'DEX +20' },
      { name: 'DAO Smart Contracts', icon: Shield, stat: 'INT +19' },
      { name: 'Mobile-First Design', icon: Target, stat: 'WIS +18' }
    ],
    imageUrl: nounstackPreview,
    status: 'COMPLETED',
    link: 'https://devfolio.co/projects/nounstack-f579'
  },
  {
    id: 2,
    code: 'PROJECT_02',
    title: 'PASSPORT.XYZ',
    description: 'Architected a full-stack Web3 application designed to replace traditional resumes with verifiable on-chain history.',
    attributes: [
      { name: 'Full Stack Architecture', icon: Cpu, stat: 'INT +22' },
      { name: 'Smart Contracts (Rust)', icon: Shield, stat: 'STR +20' },
      { name: 'Frontend Integration', icon: Code, stat: 'DEX +18' },
      { name: 'Blockchain Protocol', icon: Link, stat: 'WIS +19' }
    ],
    imageUrl: passportXyzPreview,
    status: 'COMPLETED',
    link: 'https://devpost.com/software/soulchain-passport?ref_content=user-portfolio&ref_feature=in_progress'
  },
  {
    id: 3,
    code: 'PROJECT_03',
    title: 'GOOGLE_MAPS_API_OPTIMIZER',
    description: 'Algorithm-driven route optimization system',
    attributes: [
      { name: 'Algorithm Optimization', icon: Zap, stat: 'INT +15' },
      { name: 'Frontend', icon: Code, stat: 'DEX +12' },
      { name: 'Backend', icon: Target, stat: 'STR +10' },
      { name: 'Web Application', icon: Palette, stat: 'CHA +8' }
    ],
    imageUrl: googleMapsPreview,
    status: 'COMPLETED',
    link: 'https://github.com/robler43/Travel-Route-Optimizer-Google-Maps-API-Python'
  },
  {
    id: 4,
    code: 'PROJECT_04',
    title: 'LOGX+_AI_LOG_ANALYZER',
    hackathonWinner: true,
    description: 'AI-powered log analysis with RAG & blockchain verification',
    attributes: [
      { name: 'AI/Machine Learning', icon: Brain, stat: 'INT +20' },
      { name: 'Frontend Development', icon: Code, stat: 'DEX +16' },
      { name: 'Blockchain Integration', icon: Link, stat: 'STR +14' },
      { name: 'Data Visualization', icon: BarChart, stat: 'CHA +15' }
    ],
    imageUrl: logxPreview,
    status: 'COMPLETED',
    link: 'https://devpost.com/software/logx'
  },
  {
    id: 5,
    code: 'PROJECT_05',
    title: 'FEEDBACK_DASHBOARD_SYS',
    description: 'Integrated feedback collection & analytics platform',
    attributes: [
      { name: 'UX Design', icon: Palette, stat: 'CHA +18' },
      { name: 'Conception', icon: Target, stat: 'INT +14' },
      { name: 'Research', icon: Zap, stat: 'WIS +16' },
      { name: 'Graphic Design', icon: Code, stat: 'CHA +12' }
    ],
    imageUrl: feedbackDashboard,
    status: 'COMPLETED',
    link: 'https://drive.google.com/file/d/12TTerfGzOKLuknqy9BPeeilE-n7qNJcg/view'
  },
  {
    id: 6,
    code: 'PROJECT_06',
    title: 'REDESIGN_PIZZA_RESTAURANT',
    description: 'Complete UX overhaul of ordering system',
    attributes: [
      { name: 'UX Design', icon: Palette, stat: 'CHA +20' },
      { name: 'Conception', icon: Target, stat: 'INT +15' },
      { name: 'Research', icon: Zap, stat: 'WIS +13' },
      { name: 'Graphic Design', icon: Code, stat: 'CHA +11' }
    ],
    imageUrl: pizzaRedesign,
    status: 'COMPLETED',
    link: 'https://drive.google.com/file/d/1GP36vRUFCR8Ykdj4CYUVpGI5qrLf6UQ9/view'
  }
];

export function ProjectGrid() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16 max-w-7xl">
      {/* Quest Log Header */}
      <div className="mb-8 md:mb-12">
        <div className="flex items-center gap-3 mb-2">
          <Unlock className="w-5 h-5 md:w-6 md:h-6 text-[rgb(37,208,171)]" />
          <h2 className="text-white font-mono text-xl md:text-2xl">QUEST_LOG.SYS</h2>
        </div>
        <div className="text-zinc-500 font-mono text-xs md:text-sm">
          {'>'} Displaying completed missions and unlocked achievements...
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {projects.map((project) => {
          const Component = project.link ? 'a' : 'div';
          const linkProps = project.link ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' } : {};
          const isInProgress = project.status === 'IN_PROGRESS';
          
          return (
            <Component
              key={project.id}
              {...linkProps}
              className={`bg-zinc-950 border-2 transition-all duration-300 relative overflow-hidden ${
                isInProgress 
                  ? 'border-zinc-800 opacity-60 cursor-default' 
                  : 'group border-zinc-800 hover:border-[rgb(37,208,171)] cursor-pointer'
              }`}
            >
              {/* Hackathon winner corner ribbon */}
              {'hackathonWinner' in project && project.hackathonWinner && (
                <div
                  className="absolute top-0 left-0 z-[25] pointer-events-none w-32 h-32 overflow-hidden"
                  aria-label="Hackathon winner"
                >
                  <div
                    className="absolute -left-10 top-9 w-[11.5rem] -rotate-45 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 text-yellow-950 text-center py-1.5 px-8 text-[10px] font-mono font-bold tracking-[0.35em] shadow-[0_2px_8px_rgba(0,0,0,0.4)] border border-yellow-600/70"
                  >
                    WINNER
                  </div>
                </div>
              )}

              {/* Corner Brackets - only show on hover for completed projects */}
              {!isInProgress && (
                <>
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[rgb(37,208,171)] opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[rgb(37,208,171)] opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[rgb(37,208,171)] opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[rgb(37,208,171)] opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                </>
              )}
              
              {/* Status Badge */}
              <div className={`absolute top-4 right-4 z-20 bg-zinc-950/90 border px-2 py-1 flex items-center gap-2 ${
                isInProgress ? 'border-zinc-600' : 'border-[rgb(37,208,171)]'
              }`}>
                <div className={`w-2 h-2 rounded-full animate-pulse ${
                  isInProgress ? 'bg-zinc-600' : 'bg-[rgb(37,208,171)]'
                }`} />
                <span className={`text-xs font-mono ${
                  isInProgress ? 'text-zinc-600' : 'text-[rgb(37,208,171)]'
                }`}>{project.status}</span>
              </div>

              {/* Project Image */}
              <div className={`aspect-video bg-zinc-900 relative overflow-hidden border-b-2 ${
                isInProgress 
                  ? 'border-zinc-800' 
                  : 'border-zinc-800 group-hover:border-[rgb(37,208,171)] transition-colors'
              }`}>
                <ImageWithFallback
                  src={project.imageUrl}
                  alt={project.title}
                  className={`w-full h-full object-cover glitch-effect ${
                    isInProgress ? 'opacity-60' : 'opacity-60 group-hover:opacity-80 transition-opacity'
                  }`}
                />
              </div>

              {/* Project Info */}
              <div className="p-6">
                {/* Title */}
                <div className="mb-1">
                  <span className="text-zinc-600 text-xs font-mono">// {project.code}:</span>
                </div>
                <h3 className="text-white font-mono text-sm mb-2 glitch-effect">
                  {project.title}
                </h3>
                <p className="text-zinc-500 text-xs font-mono mb-4">{project.description}</p>
                
                {/* Attributes/Stats */}
                <div className="space-y-2 pt-4 border-t border-zinc-800">
                  <div className="text-zinc-600 text-xs font-mono mb-3">
                    {'<SKILL_TREE>'}
                  </div>
                  {project.attributes.map((attr, index) => {
                    const Icon = attr.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-center justify-between text-xs font-mono group/attr"
                      >
                        <div className="flex items-center gap-2">
                          <Icon className={`w-3 h-3 ${
                            isInProgress ? 'text-zinc-600' : 'text-[rgb(37,208,171)]'
                          }`} />
                          <span className="text-zinc-400 group-hover/attr:text-white transition-colors">
                            {attr.name}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                  <div className="text-zinc-600 text-xs font-mono mt-3">
                    {'</SKILL_TREE>'}
                  </div>
                </div>
              </div>

              {/* Hover Scan Line - only for completed projects */}
              {!isInProgress && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                  <div 
                    className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-[rgb(37,208,171)] to-transparent"
                    style={{
                      animation: 'scan 2s linear infinite',
                      top: '50%'
                    }}
                  />
                </div>
              )}
            </Component>
          );
        })}
      </div>
    </section>
  );
}