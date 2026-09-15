import Header from './ui/header';
import Footer from './ui/footer';
import Image from 'next/image'

import { recentEvents } from './data/racing';

const podium: Record<string, boolean> = { '1st': true, '2nd': true, '3rd': true }

export default function HomePage() {
  const recent = recentEvents(3)

  return (
    <div className="bg-white min-h-screen dark:bg-slate-900 flex flex-col">
      <Header />
      <div className="relative isolate px-6 pt-14 lg:px-8 flex-grow">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
        </div>
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:py-28">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 dark:text-gray-300 dark:ring-gray-100/10">
              Racing &middot; Technology &middot; Photography
            </div>
          </div>
          <div className="mb-8 relative w-full aspect-[21/9] overflow-hidden rounded-2xl shadow-lg ring-1 ring-gray-900/10 dark:ring-gray-100/10">
            <Image
              src="/images/autocross.jpg"
              alt="Austin Hervias competing at the 2026 SCCA Solo National Championships"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>
          <div className="text-center">
            <h1 className="bg-gradient-to-r from-blue-700 via-violet-700 to-fuchsia-700 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl dark:from-blue-400 dark:via-violet-400 dark:to-fuchsia-400">
              Austin Hervias
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Autocross racer. DevSecOps Engineer skilled in multiple areas including cloud technology, container orchestration, CI/CD, development, security, and compliance. Occasionally find myself behind a camera lens.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/racing"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Racing
              </a>
              <a
                href="https://unsplash.com/@ahervias77"
                rel="noreferrer"
                target="_blank"
                className="rounded-md bg-violet-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Photos
              </a>

            </div>
          </div>
          <div className="mt-16 sm:mt-20">
            <div className="flex items-baseline justify-between gap-x-4">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900 dark:text-gray-100">
                Latest results
              </h3>
              <a
                href="/racing"
                className="text-sm font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-500 dark:hover:text-indigo-400"
              >
                All results <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
            <ul className="mt-4 divide-y divide-gray-900/10 border-t border-gray-900/10 dark:divide-gray-100/10 dark:border-gray-100/10">
              {recent.map((event) => (
                <li key={`${event.date}-${event.eventName}`} className="flex items-center justify-between gap-x-4 py-4">
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                      {event.videoUrl ? (
                        <a
                          href={event.videoUrl}
                          className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-500 dark:hover:text-indigo-400"
                        >
                          {event.eventName}
                        </a>
                      ) : (
                        event.eventName
                      )}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400">
                      {event.date} &middot; {event.class}
                      <span className="hidden sm:inline"> &middot; {event.car}</span>
                    </p>
                  </div>
                  <span
                    className={
                      podium[event.position]
                        ? 'shrink-0 rounded-md bg-indigo-50 px-2 py-1 text-sm font-semibold text-indigo-700 ring-1 ring-inset ring-indigo-600/20 dark:bg-indigo-500/10 dark:text-indigo-400 dark:ring-indigo-500/30'
                        : 'shrink-0 rounded-md bg-gray-50 px-2 py-1 text-sm font-semibold text-gray-600 ring-1 ring-inset ring-gray-500/20 dark:bg-gray-100/5 dark:text-gray-400 dark:ring-gray-100/10'
                    }
                  >
                    {event.position}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
