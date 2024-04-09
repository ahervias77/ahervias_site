import Header from './ui/header';
import Footer from './ui/footer';

export default function HomePage() {
  return (
    <div className="bg-white min-h-screen dark:bg-slate-900 flex flex-col">
      <Header />
      <div className="relative isolate px-6 pt-14 lg:px-8 flex-grow">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
        </div>
        <div className="mx-auto max-w-2xl py-24 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 dark:text-gray-300 dark:ring-gray-100/10">
              DevOps &middot; Security &middot; Photography
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-gray-100">
              Bringing together technology and creativity
            </h1>
            <h2 className="mt-8 text-2xl font-bold leading-8 text-indigo-600 dark:text-indigo-500">
            My name is Austin Hervias
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            DevSecOps Engineer skilled in multiple areas including cloud technology, container orchestration, CI/CD, development, security, and compliance. Also involved with photography in my free time.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/resume"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Resume
              </a>
              <a
                href="/projects"
                className="rounded-md bg-violet-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Projects
              </a>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
