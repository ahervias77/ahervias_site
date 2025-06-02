import Header from '../ui/header';
import Footer from '../ui/footer';
import Image from 'next/image'

const experience = [
  {
    name: 'Autocross',
    years: '2025 - Present',
    description:
      'Currently racing in regional autocross events with SCCA and PCA in a 2022 (ND2) Mazda MX-5 Miata.',
    image: '/images/autocross.jpg',
    imageAlt: 'Photo Credit: Chris McCain',
  },
  {
    name: 'Karting',
    years: '2013 - 2016',
    description:
      'Raced in club and regional level events in TaG Junior and TaG Senior classes. 2016 OVRP Club Series Champion in TaG Senior class.',
    image: '/images/karting.jpg',
    imageAlt: 'Gearup Challenge The F Series at PIRC',
  },
]

const results = [
  {
    name: 'Autocross - 2025',
    events: [
      {
        eventName: 'HouSCCA Autocross #2',
        date: '2/2/2025',
        class: 'Novice (AST)',
        car: '2022 Mazda MX-5 Miata',
        position: '3rd',
        videoUrl: 'https://www.youtube.com/watch?v=hry47WFV9AQ'
      },
      {
        eventName: 'HouSCCA Autocross #3',
        date: '3/2/2025',
        class: 'Novice (AST)',
        car: '2022 Mazda MX-5 Miata',
        position: '1st',
        videoUrl: 'https://www.youtube.com/watch?v=kxVOioCiLNE'
      },
      {
        eventName: 'Lone Star Region PCA Autocross #2',
        date: '3/22/2025',
        class: 'X4',
        car: '2022 Mazda MX-5 Miata',
        position: '2nd',
        videoUrl: 'https://www.youtube.com/watch?v=2Y-mf6yoAZY'
      },
      {
        eventName: 'Lone Star Region PCA Autocross #3',
        date: '3/23/2025',
        class: 'X4',
        car: '2022 Mazda MX-5 Miata',
        position: '1st',
        videoUrl: 'https://www.youtube.com/watch?v=waUcMD30224'
      },
      {
        eventName: 'HouSCCA Autocross #4',
        date: '4/6/2025',
        class: 'AST',
        car: '2022 Mazda MX-5 Miata',
        position: '1st',
        videoUrl: 'https://www.youtube.com/watch?v=R0wc0wEF9xQ'
      },
      {
        eventName: 'Lone Star Region PCA Autocross #4',
        date: '4/20/2025',
        class: 'X4',
        car: '2022 Mazda MX-5 Miata',
        position: '2nd',
        videoUrl: 'https://www.youtube.com/watch?v=6uG11P8Ih-A'
      },
      {
        eventName: 'HouSCCA Autocross #5',
        date: '5/4/2025',
        class: 'AST',
        car: '2022 Mazda MX-5 Miata',
        position: '1st',
        videoUrl: 'https://www.youtube.com/watch?v=6cryaQY6gWY'
      },
      {
        eventName: 'HouSCCA Autocross #6',
        date: '6/1/2025',
        class: 'AST',
        car: '2022 Mazda MX-5 Miata',
        position: '1st',
        videoUrl: 'https://www.youtube.com/watch?v=DyulJyr7ha8'
      },
    ]
  },
]

export default function Racing() {
  return (
    <div className="bg-white min-h-screen dark:bg-slate-900 flex flex-col">
      <Header />
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 flex-grow">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-500">Racing</h2>
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
                        <h2>{feature.years}</h2>
                      </div>
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-700 dark:text-gray-300">{feature.description}</dd>
                    {feature.image && (
                        <div className="mt-4 relative w-full aspect-[16/9]">
                        <Image
                          src={feature.image}
                          alt={feature.imageAlt || ''}
                          fill
                          className="object-cover rounded-lg"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        </div>
                    )}
                  </div>
                ))}
              </dl>
            </div>
            <p className="mt-16 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100">
              Results
            </p>
            <div className="mx-auto mt-12 max-w-2xl lg:max-w-4xl">
              {results.map((season) => (
                <div key={season.name} className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">{season.name}</h3>
                  <table className="w-full divide-y divide-gray-300 dark:divide-gray-700">
                    <thead>
                      <tr>
                        <th className="px-2 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">Event</th>
                        <th className="px-2 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">Date</th>
                        <th className="px-2 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">Class</th>
                        <th className="hidden md:table-cell px-2 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">Car</th>
                        <th className="px-2 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">Position</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                      {season.events.map((event, eventIdx) => (
                        <tr key={event.eventName} className={eventIdx % 2 === 0 ? 'bg-white dark:bg-slate-900' : 'bg-gray-50 dark:bg-slate-800'}>
                          <td className="px-2 py-3 text-sm text-gray-700 dark:text-gray-300">
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
                          </td>
                          <td className="px-2 py-3 text-sm text-gray-700 dark:text-gray-300">{event.date}</td>
                          <td className="px-2 py-3 text-sm text-gray-700 dark:text-gray-300">{event.class}</td>
                          <td className="hidden md:table-cell px-2 py-3 text-sm text-gray-700 dark:text-gray-300">{event.car}</td>
                          <td className="px-2 py-3 text-sm text-gray-700 dark:text-gray-300">{event.position}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          </div>
        </div>
      <Footer />
    </div>
  )
}
