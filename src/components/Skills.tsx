import { Code, Database, GitBranch, Layers, Server, Smartphone } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      icon: Smartphone,
      color: 'cyan',
      skills: [
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 92 },
        { name: 'JavaScript', level: 90 },
        { name: 'React', level: 88 },
        { name: 'TypeScript', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
      ],
    },
    {
      category: 'Backend',
      icon: Server,
      color: 'blue',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express', level: 82 },
        { name: 'REST APIs', level: 88 },
        { name: 'GraphQL', level: 75 },
      ],
    },
    {
      category: 'Database',
      icon: Database,
      color: 'purple',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'Firebase', level: 78 },
      ],
    },
    {
      category: 'Tools & Others',
      icon: GitBranch,
      color: 'cyan',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'Docker', level: 70 },
        { name: 'AWS', level: 72 },
      ],
    },
  ];

  const techs = [
  { name: "HTML", link: "https://www.coursera.org/courses?query=html&languages=ko&utm_medium=sem&utm_source=gg&utm_campaign=b2c_apac_x_multi_ftcof_career-academy_cx_dr_bau_gg_pmax_pr_s4_en_m_hyb_25-08_desktop&campaignid=22908721878&adgroupid=&device=c&keyword=&matchtype=&network=x&devicemodel=&creativeid=&assetgroupid=6603346801&targetid=&extensionid=&placement=&gad_source=1&gad_campaignid=22908752121&gbraid=0AAAAADdKX6Z-litpvZdXMrNq2HHovajg6&gclid=Cj0KCQiAnJHMBhDAARIsABr7b8490dX-b1xhvsgiOm8U9Ze-IjqJ6bKNzzCs30qmmOJ9gA-m9rsZWQEaAqa2EALw_wcB" },
  { name: "CSS", link: "https://www.coursera.org/search?query=css&languages=ko&utm_medium=sem&utm_source=gg&utm_campaign=b2c_apac_x_multi_ftcof_career-academy_cx_dr_bau_gg_pmax_pr_s4_en_m_hyb_25-08_desktop&campaignid=22908721878&adgroupid=&device=c&keyword=&matchtype=&network=x&devicemodel=&creativeid=&assetgroupid=6603346801&targetid=&extensionid=&placement=&gad_source=1&gad_campaignid=22908752121&gbraid=0AAAAADdKX6Z-litpvZdXMrNq2HHovajg6&gclid=Cj0KCQiAnJHMBhDAARIsABr7b8490dX-b1xhvsgiOm8U9Ze-IjqJ6bKNzzCs30qmmOJ9gA-m9rsZWQEaAqa2EALw_wcB" },
  { name: "JavaScript", link: "https://www.sammi.ac/courses/javascript" },
  { name: "React", link: "https://www.sammi.ac/courses/react-js" },
  { name: "Node.js", link: "https://www.sammi.ac/courses/node-express" },
  { name: "MongoDB", link: "https://www.coursera.org/search?query=MongoDB&sortBy=BEST_MATCH" },
  { name: "Git", link: "https://www.coursera.org/search?query=git&sortBy=BEST_MATCH" },
  { name: "TypeScript", link: "https://www.sammi.ac/courses/typescript" },
  { name: "Tailwind", link: "https://www.coursera.org/search?query=Tailwind&sortBy=BEST_MATCH" },
  { name: "Express", link: "https://www.coursera.org/search?query=Express&sortBy=BEST_MATCH" },
  { name: "Vue JS", link: "https://www.sammi.ac/courses/vue-js" },
  { name: "Angular", link: "https://www.sammi.ac/courses/angular" },
];


  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; text: string; glow: string }> = {
      cyan: {
        bg: 'from-cyan-500 to-cyan-600',
        border: 'border-cyan-500/20',
        text: 'text-cyan-400',
        glow: 'shadow-cyan-500/20',
      },
      blue: {
        bg: 'from-blue-500 to-blue-600',
        border: 'border-blue-500/20',
        text: 'text-blue-400',
        glow: 'shadow-blue-500/20',
      },
      purple: {
        bg: 'from-purple-500 to-purple-600',
        border: 'border-purple-500/20',
        text: 'text-purple-400',
        glow: 'shadow-purple-500/20',
      },
    };
    return colors[color];
  };

  return (
    <section id="skills" className="py-24 px-6 bg-gray-900/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-semibold uppercase tracking-wider text-sm">
            Skills & Expertise
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">
            My{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Proficient in modern web technologies and frameworks, constantly expanding my skill set.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const colors = getColorClasses(category.color);
            return (
              <div
                key={categoryIndex}
                className={`p-6 bg-gray-900/50 border ${colors.border} rounded-xl hover:bg-gray-800/50 transition-all duration-300 hover:shadow-lg ${colors.glow}`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${colors.bg} rounded-lg flex items-center justify-center`}>
                    <category.icon className="text-white" size={24} />
                  </div>
                  <h3 className={`text-2xl font-semibold ${colors.text}`}>
                    {category.category}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className={`${colors.text} text-sm font-semibold`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${colors.bg} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech Icons Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8 text-gray-300">
            Technologies I Work With
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
        {techs.map((tech, index) => (
            <a
            key={index}
            href={tech.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-4 bg-gray-900/50 border border-gray-800 rounded-lg 
                        hover:border-cyan-500/50 hover:bg-gray-800/50 
                        transition-all duration-300 hover:-translate-y-1 
                        hover:shadow-lg hover:shadow-cyan-500/10 text-center"
            >
            <Code
                className="mx-auto mb-2 text-cyan-400 group-hover:scale-110 transition-transform"
                size={32}
            />
            <span className="text-sm text-gray-400 group-hover:text-cyan-400 transition-colors">
                {tech.name}
            </span>
            </a>
        ))}
        </div>

        </div>
      </div>
    </section>
  );
}
