import Header from '../ui/header';
import Footer from '../ui/footer';

const experience = [
  {
    name: 'ForceMetrics',
    position: 'DevSecOps Engineer',
    years: '2021 - Present',
    description:
      'Joined early-stage GovTech services startup as employee #8 to set up, maintain, and scale company’s cloud infrastructure. Build, manage, and maintain CJIS-compliant distributed computing infrastructure and data pipelines in AWS GovCloud from the ground up.',
  },
  {
    name: 'Ro',
    position: 'Security Engineer',
    years: '2019 - 2021',
    description:
      'Joined extremely fast growing telehealth startup as employee #175 on a brand new security team. Collaborated with engineering and product teams to secure new features and internal tools in HIPAA cloud environment. Developed internal security tools with custom Python scripting to aid security operations and monitoring.',
  },
]

const education = [
  {
    name: 'SUNY Polytechnic Institute',
    location: 'Utica, NY',
    degree: 'BS Network and Computer Security',
    years: '2018 - 2019',
    description:
      'Relevant coursework includes Information Assurance, Network Design. Activities includes team winning CNY Hackathon Spring 2018, Network and Computer Security Club Member. Performed cloud security risk analysis of Amazon Web Services for senior project.',
  },
  {
    name: 'Rockland Community College',
    location: 'Suffern, NY',
    degree: 'AA Math and Science',
    years: '2015 - 2017',
    description:
      'Relevant coursework includes Networking, Computer Forensics, Unix/Linux. Activities includes National Cyber League, Phi Theta Kappa Honor Society, Early Admission Student.',
  },
]

const technicalSkills = [
  {
    name: 'Container Orchestration',
  },
  {
    name: 'CI/CD',
  },
  {
    name: 'Python (Django & Flask) Development',
  },
  {
    name: 'Network/Endpoint Security',
  },
  {
    name: 'Vulnerability and Risk Assessment',
  },
  {
    name: 'Compliance Reviews & Implementation',
  },
]

const languages = [
  {
    name: 'Python',
  },
  {
    name: 'Shell Scripting',
  },
  {
    name: 'HTML/CSS/JS',
  },
]

export default function Resume() {
  return (
    <div className="bg-white min-h-screen dark:bg-slate-900 flex flex-col">
      <Header />
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 flex-grow">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-500">Resume</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100">
              Experience
            </p>
            <div className="mx-auto mt-12 max-w-2xl lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-1 lg:gap-y-16">
                {experience.map((feature) => (
                  <div key={feature.name} className="relative">
                    <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-gray-100">
                      {feature.name}
                      <div className="font-medium text-gray-600 dark:text-gray-400">
                        <h2>{feature.position}</h2>
                        <h2>{feature.years}</h2>
                      </div>
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-700 dark:text-gray-300">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <p className="mt-16 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100">
              Education
            </p>
            <div className="mx-auto mt-12 max-w-2xl lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-1 lg:gap-y-16">
                {education.map((feature) => (
                  <div key={feature.name} className="relative">
                    <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-gray-100">
                      {feature.name}
                      <div className="font-medium text-gray-600 dark:text-gray-400">
                        <h2>{feature.location}</h2>
                        <h2>{feature.degree}</h2>
                        <h2>{feature.years}</h2>
                      </div>
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-700 dark:text-gray-300">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <p className="mt-16 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100">
              Technical Skills
            </p>
            <div className="mx-auto mt-12 max-w-2xl lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-2 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
                {technicalSkills.map((feature) => (
                  <div key={feature.name} className="relative">
                    <dt className="text-base font-semibold leading-7 text-gray-700 dark:text-gray-300">
                      {feature.name}
                    </dt>
                  </div>
                ))}
              </dl>
            </div>
            <p className="mt-16 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100">
              Languages
            </p>
            <div className="mx-auto mt-12 max-w-2xl lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-2 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
                {languages.map((feature) => (
                  <div key={feature.name} className="relative">
                    <dt className="text-base font-semibold leading-7 text-gray-700 dark:text-gray-300">
                      {feature.name}
                    </dt>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      <Footer />
    </div>
  )
}
