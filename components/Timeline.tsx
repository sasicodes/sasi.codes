import clsx from 'clsx'
import { TIMELINE } from 'helpers/constants'

const Timeline = () => {
  return (
    <>
      <h3 className="mb-10 text-2xl font-semibold tracking-tight text-gray-700 dark:text-gray-200 md:text-4xl">
        Timeline
      </h3>
      <section className="text-gray-600">
        <div className="px-2 md:px-3 lg:px-0 lg:pl-4">
          {TIMELINE.map((item, index) => {
            return (
              <div key={index} className="relative flex pb-5 mx-auto">
                <div className="absolute inset-0 flex items-center justify-center w-1.5 h-full mt-5">
                  <div className="h-full w-0.5 bg-gray-300 dark:bg-gray-700 pointer-events-none"></div>
                </div>
                <div
                  className={`${
                    index === 0
                      ? 'ring-indigo-400'
                      : 'ring-gray-50 dark:ring-gray-900'
                  } flex-shrink-0 w-1.5 h-1.5 ring ring-offset-4 rounded-full sm:mt-4 mt-5 inline-flex
                  dark:ring-offset-gray-900 ring-offset-gray-100 items-center justify-center bg-indigo-500 relative`}
                ></div>
                <div className="flex flex-col items-start flex-grow pl-3 md:pl-6 sm:items-center sm:flex-row">
                  <div className="flex-grow w-full mt-0 sm:pl-4">
                    <a href={item.link} target="_blank" rel="noreferrer">
                      <h1
                        className={clsx(
                          'mt-1 ml-2 text-xl inline-block border-orange-300 font-semibold md:ml-0 dark:text-gray-100',
                          item.link ? 'border-b' : ''
                        )}
                      >
                        {item.title}
                      </h1>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {item.description}
                      </p>
                    </a>
                    <div className="flex flex-row items-center mt-2">
                      <small className="ml-2 leading-none md:ml-0 dark:text-gray-100">
                        {item.time}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Timeline
