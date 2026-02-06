import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application with payment integration, user authentication, and admin dashboard. Built with React, Node.js, and MongoDB.',
      image: 'https://images.unsplash.com/photo-1677469684112-5dfb3aa4d3df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ258ZW58MXx8fHwxNzY3NjgwOTAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: 'https://www.coursera.org/articles/ecommerce-platforms?utm_medium=sem&utm_source=gg&utm_campaign=b2c_apac_x_multi_ftcof_career-academy_cx_dr_bau_gg_pmax_pr_s4_en_m_hyb_25-08_desktop&campaignid=22908721878&adgroupid=&device=c&keyword=&matchtype=&network=x&devicemodel=&creativeid=&assetgroupid=6603346801&targetid=&extensionid=&placement=&gad_source=1&gad_campaignid=22908752121&gbraid=0AAAAADdKX6Z-litpvZdXMrNq2HHovajg6&gclid=Cj0KCQiAnJHMBhDAARIsABr7b856j01ynj4Wqqt5TDryikEtWn8Q-3FKfycZVrzEPOP3i6k1yJ3RDhQaAouyEALw_wcB',
      githubUrl: 'https://github.com',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY3NjcxMjUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
      liveUrl: 'https://empmonitor.com/blog/task-management-tools-best-features/?utm_source=GoogleAds&utm_medium=search_ads&utm_campaign=EMP_BrandBidding_Sumit_WW&utm_term=&gad_source=1&gad_campaignid=23050752607&gbraid=0AAAABBiER-KtZxiClgwFsMxoPN9wb4pk-&gclid=Cj0KCQiAnJHMBhDAARIsABr7b85mo8rZXaQPepmsM_l_TZtWd8zVEXY3ZZzkdagsjCICwiDy06RUnjsaAiQXEALw_wcB',
      githubUrl: 'https://github.com',
    },
    {
      title: 'Analytics Dashboard',
      description: 'A comprehensive analytics dashboard with interactive charts, data visualization, and real-time metrics tracking for business insights.',
      image: 'https://images.unsplash.com/photo-1659018966825-43297e655ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2Nzc2MDYwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
      liveUrl: 'https://www.datacamp.com/courses/building-dashboards-with-dash-and-plotly?utm_cid=22816457649&utm_aid=184279705873&utm_campaign=250722_1-ps-other~dsa-gen~all-p2_2-b2c_3-emea_4-prc_5-na_6-na_7-le_8-pdsh-go_9-nb-e_10-na_11-na&utm_loc=1028523-&utm_mtd=-c&utm_kw=&utm_source=google&utm_medium=paid_search&utm_content=ps-other~emea-en~dsa~generic~courses-python&gad_source=1&gad_campaignid=22816457649&gbraid=0AAAAADQ9WsHJp_VCbXyZtA_9PR5AlJiYW&gclid=Cj0KCQiAnJHMBhDAARIsABr7b87ZoMDqZV8eY42BSjiyrYJmL7b_nYCUqj08CIJAxPf1tKQzRFnQIzsaAi4JEALw_wcB',
      githubUrl: 'https://github.com',
    },
    {
      title: 'Social Media Platform',
      description: 'A modern social networking platform with user profiles, post sharing, comments, likes, and real-time notifications.',
      image: 'https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBkYXJrfGVufDF8fHx8MTc2Nzc2MDYwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React', 'GraphQL', 'MongoDB', 'Socket.io'],
      liveUrl: 'https://www.peepso.com/peepso-for-online-communities/ref/308/?/ref/308/&gad_source=1&gad_campaignid=20904151116&gbraid=0AAAAAC7Qzb8Zzl9RP5cP_2NLFYrKORN0M&gclid=Cj0KCQiAnJHMBhDAARIsABr7b84AZxFrpAOeRW3SZiS8qSG9yT6iynNvi8oBA7KIWC1uywkD1CVN_rIaArigEALw_wcB',
      githubUrl: 'https://github.com',
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-semibold uppercase tracking-wider text-sm">
            Portfolio
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Featured{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and creativity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                {/* Quick Actions */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-900/90 border border-gray-700 rounded-lg text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all"
                  >
                    <ExternalLink size={18} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-900/90 border border-gray-700 rounded-lg text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-semibold text-gray-100 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white text-center hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg font-semibold text-gray-300 text-center hover:bg-gray-700 hover:border-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-800 border border-gray-700 rounded-lg font-semibold text-gray-300 hover:bg-gray-700 hover:border-cyan-500/50 transition-all duration-300"
          >
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
