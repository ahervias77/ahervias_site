import Header from '../ui/header';
import Footer from '../ui/footer';
import Image from 'next/image'

const aherviasFeatures = [
  {
    name: 'Next.js',
    description:
      'Modern open source React framework for server-side and client-side application rendering',
  },
  {
    name: 'Tailwind CSS',
    description: 'Open source CSS framework for rapid UI development',
  },
  {
    name: 'Vercel',
    description: 'Cloud platform for build/deployment of frontend applications',
  },
]

export default function Projects() {
  return (
    <div className="overflow-hidden bg-white min-h-screen dark:bg-slate-900 flex flex-col">
      <Header />
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 flex-grow">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-500">Projects</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100">ahervias.dev</p>
                <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
                  This site is built with Next.js and Tailwind CSS. It is built and deployed via Vercel. Check out the GitHub repo <a href="https://github.com/ahervias77/ahervias_site" className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-500 dark:hover:text-indigo-400">here</a>!
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none dark:text-gray-400">
                  {aherviasFeatures.map((feature) => (
                    <div key={feature.name} className="relative">
                      <dt className="inline font-semibold text-gray-900 dark:text-gray-100">
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <Image
              src="/code.jpg"
              width={2048}
              height={1365}
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 dark:ring-gray-600/10"
            />
          </div>
        </div>
      <Footer />
    </div>
  )
}
