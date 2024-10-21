import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Why Choose ChessApex?"
          paragraph="At ChessApex, we unlock your potential through chess with expert trainers, personalized lessons, and a comprehensive curriculum for all skill levels."
          center
          mb="80px"
        />
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-2.jpg"
                alt="about image"
                fill
                className="rounded-lg drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-2.jpg"
                alt="about image"
                fill
                className="hidden rounded-lg drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Expert Coaching
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color dark:text-gray-400 sm:text-lg sm:leading-relaxed">
                  Learn from internationally recognized chess masters with years
                  of experience.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Personalized Learning Paths
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color dark:text-gray-400 sm:text-lg sm:leading-relaxed">
                  Tailored lessons based on individual skill levels to
                  accelerate progress.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Interactive Live Sessions
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color dark:text-gray-400 sm:text-lg sm:leading-relaxed">
                  Engage in dynamic and real-time training sessions that enhance
                  learning and retention
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
