import Image from "next/image";

const ChessTrainer = ({ data }) => {
  const { name, image, biography, achievements, programs } = data;

  return (
    <section className="section mt-1">
      <div className="container mx-auto p-4">
        {image && (
          <div className="mx-auto mb-8 w-full lg:w-2/3 xl:w-1/2">
            {" "}
            {/* Adjusted for desktop */}
            <Image
              src={image}
              layout="responsive"
              width={1298}
              height={616}
              alt={`Image of chess trainer ${name}`}
              className="rounded-lg object-cover shadow-lg"
              priority={true}
            />
          </div>
        )}
        <h1 className="mt-12 text-left text-3xl font-bold dark:text-white lg:text-4xl">
          {name}
        </h1>

        <div className="content mt-8 flex flex-col text-left lg:flex-row lg:space-x-8">
          <div className="mb-16 lg:mb-0 lg:w-1/2">
            <div className="rounded-lg bg-gray-50 p-6 shadow-lg transition-transform hover:-translate-y-1 dark:bg-zinc-800">
              <h2 className="mb-6 text-xl font-bold dark:text-white lg:text-2xl">
                {biography.title}
              </h2>
              <p className="text-lg leading-relaxed dark:text-gray-300">
                {biography.content}
              </p>
              {biography.details.map((detail, index) => (
                <div key={index} className="mt-8">
                  <h3 className="mb-2 text-lg font-semibold dark:text-gray-200 lg:text-xl">
                    {detail.subtitle}
                  </h3>
                  <p className="text-base dark:text-gray-300 lg:text-lg">
                    {detail.content}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="rounded-lg bg-gray-50 p-6 shadow-lg transition-transform hover:-translate-y-1 dark:bg-zinc-800">
              <h2 className="mb-6 text-xl font-bold dark:text-white lg:text-2xl">
                {achievements.title}
              </h2>
              <ul className="list-inside list-disc space-y-4">
                {achievements.list.map((item, index) => (
                  <li key={index} className="text-lg dark:text-gray-300">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="mb-6 text-xl font-bold dark:text-white lg:text-2xl">
            {programs.title}
          </h2>
          <ul className="space-y-6">
            {programs.list.map((program, index) => (
              <li
                key={index}
                className="transform rounded-lg bg-white p-6 shadow-lg transition-transform hover:-translate-y-1 dark:bg-zinc-800"
              >
                <h3 className="mb-2 text-lg font-semibold dark:text-gray-200 lg:text-xl">
                  {program.title}
                </h3>
                <p className="text-base dark:text-gray-300 lg:text-lg">
                  {program.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ChessTrainer;
