import { Linkedin, Mail } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  linkedin?: string;
  email?: string;
}

const team: TeamMember[] = [
  {
    name: 'David Chen',
    role: 'Founder & Lead Software Architect',
    bio: 'With over 15 years of experience in enterprise software development, David specializes in building scalable systems for complex operational environments.',
    expertise: ['System Architecture', 'Full-Stack Development', 'HSE Solutions'],
  },
  {
    name: 'Rebecca Thompson',
    role: 'Head of Analytics',
    bio: 'Rebecca transforms operational data into actionable insights. Her work helps organizations make data-driven decisions with confidence.',
    expertise: ['Data Analytics', 'Business Intelligence', 'Performance Metrics'],
  },
  {
    name: 'Marcus Johnson',
    role: 'Compliance Systems Specialist',
    bio: 'Marcus brings deep expertise in regulatory compliance and governance, helping organizations navigate complex requirements with confidence.',
    expertise: ['Compliance Management', 'Risk Assessment', 'Audit Systems'],
  },
  {
    name: 'Sarah Patel',
    role: 'UX/UI Lead',
    bio: 'Sarah ensures every system we build is intuitive and user-friendly. Her designs make complex operations feel simple.',
    expertise: ['User Experience', 'Interface Design', 'Usability Testing'],
  },
];

export default function Team() {
  return (
    <section className="py-20 px-6 lg:px-8 bg-soft-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary dark:text-white mb-4">Our Team</h2>
            <p className="text-lg text-slate dark:text-gray-300 max-w-2xl mx-auto">
              Experienced professionals dedicated to solving your operational challenges
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {team.map((member, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="bg-white dark:bg-gray-900 p-8 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-accent bg-opacity-10 dark:bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-accent">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary dark:text-white">
                      {member.name}
                    </h3>
                    <p className="text-accent font-medium">{member.role}</p>
                  </div>
                </div>

                <p className="text-slate dark:text-gray-300 mb-4 leading-relaxed">
                  {member.bio}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-primary dark:text-white mb-2">
                    Areas of Expertise
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-accent bg-opacity-10 dark:bg-opacity-20 text-lime-900 dark:text-accent text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      className="text-slate dark:text-gray-400 hover:text-accent transition-colors"
                      aria-label={`${member.name} LinkedIn profile`}
                    >
                      <Linkedin size={20} />
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="text-slate dark:text-gray-400 hover:text-accent transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail size={20} />
                    </a>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
