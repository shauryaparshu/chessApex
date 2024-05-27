import Image from "next/image";

const ChessTrainer = ({ data }) => {
  const { name, image, biography, achievements, programs } = data;

  return (
    <section className="section mt-16">
      <div className="container mx-auto p-4">
        {image && (
          <div className="mb-8">
            <Image
              src={image}
              width={1298}
              height={616}
              alt={name}
              className="rounded-lg object-cover shadow-lg"
              priority={true}
            />
          </div>
        )}
        <h1 className="mt-12 text-left text-4xl font-bold dark:text-white lg:text-5xl">
          {name}
        </h1>

        <div className="content mt-8 text-left lg:flex lg:space-x-8">
          <div className="mb-16 lg:mb-0 lg:w-1/2">
            <div className="rounded-lg bg-gray-50 p-6 shadow-md dark:bg-gray-800">
              <h2 className="mb-6 text-2xl font-bold dark:text-white lg:text-3xl">
                {biography.title}
              </h2>
              <p className="text-lg leading-relaxed dark:text-gray-300">
                {biography.content}
              </p>
              {biography.details.map((detail, index) => (
                <div key={index} className="mt-8">
                  <h3 className="mb-2 text-xl font-semibold dark:text-gray-200">
                    {detail.subtitle}
                  </h3>
                  <p className="text-lg dark:text-gray-300">{detail.content}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="rounded-lg bg-gray-50 p-6 shadow-md dark:bg-gray-800">
              <h2 className="mb-6 text-2xl font-bold dark:text-white lg:text-3xl">
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
          <h2 className="mb-6 text-2xl font-bold dark:text-white lg:text-3xl">
            {programs.title}
          </h2>
          <ul className="space-y-6">
            {programs.list.map((program, index) => (
              <li
                key={index}
                className="transform rounded-lg bg-white p-6 shadow-lg transition-transform hover:-translate-y-1 dark:bg-gray-800"
              >
                <h3 className="mb-2 text-xl font-semibold dark:text-gray-200">
                  {program.title}
                </h3>
                <p className="text-lg dark:text-gray-300">
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
