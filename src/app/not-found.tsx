import Header from './ui/header';
import Footer from './ui/footer';

export default function NotFound() {
  return (
    <div className="bg-white min-h-screen dark:bg-slate-900 flex flex-col">
      <Header />
        <div className="grid place-items-center px-6 py-24 sm:py-32 lg:px-8 flex-grow">
          <div className="text-center">
            <p className="text-base font-semibold text-indigo-600 dark:text-indigo-500">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-gray-100">Page not found</h1>
            <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-300">How did you find me?</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Go home
              </a>
            </div>
          </div>
        </div>
      <Footer />
    </div>
  )
}
  