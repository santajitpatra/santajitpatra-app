const servicesPerformance = [
  {
    percentage: 75,
    service: "Data Entry & Management",
  },
  {
    percentage: 47,
    service: "Research & Market Analysis",
  },
  {
    percentage: 66,
    service: "Customer Service & Lead Generation",
  },
  {
    percentage: 34,
    service: "Marketing & Search Engine Optimization",
  },
];

const Performance = () => {
  return (
    <section className="py-10 leading-6 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto text-center">
          <h2 className="mb-3 pb-2 text-white text-4xl font-semibold md:text-7xl">
            <span className="font-light">Have a look </span>Around!
          </h2>
          <p className="mb-3 font-light text-lg text-slate-400">
            And you will find everything you need to build a great business.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:mt-16 lg:grid-cols-4">
          {servicesPerformance.map((item) => {
            return (
              <div
                key={item.percentage}
                className="relative overflow-hidden border-t-4 border-r-4 border-violet-500 bg-gradient-to-r from-cyan-600 to-cyan-400 shadow rounded-3xl"
              >
                <div className="px-6 py-10 md:px-2">
                  <div className="flex items-center">
                    <h3 className="relative ml-2 inline-block text-4xl text-white font-bold leading-none">
                      {item.percentage}%
                    </h3>
                    <span className="ml-3 text-white text-base font-medium capitalize">
                      {item.service}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Performance;
