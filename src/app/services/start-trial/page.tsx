import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Common/Breadcrumb";

const TrialClassPage = () => {
  return (
    <>
      {/* Updated Breadcrumb */}
      <Breadcrumb
        path={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "Start Trial", href: "/services/start-trial" },
        ]}
        pageName="Trial Class"
        description="Get a taste of chess with our introductory trial class. Perfect for beginners who want to learn the basics."
      />
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:space-x-12">
            {/* Image on the left for desktop and on top for mobile */}
            <div className="lg:w-1/2 lg:pr-12">
              <Image
                src="/images/services/trail_classes.jpg"
                alt="Trial Chess Class"
                width={600}
                height={400}
                className="mb-8 rounded-lg object-cover lg:mb-0"
              />
            </div>
            {/* Content on the right for desktop */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-primary dark:text-white">
                Trial Class Overview
              </h2>
              <p className="mt-4 text-lg text-body-color dark:text-gray-300">
                Our trial class is designed to introduce you to the world of
                chess. You&apos;ll learn basic moves, strategies, and get to
                know how to think like a chess player. It&apos;s a fun and
                interactive session with an expert trainer guiding you every
                step of the way.
              </p>
              <p className="mt-4 text-lg text-body-color dark:text-gray-300">
                After completing this class, you will have a strong foundation
                to start playing chess with confidence. If you want to learn
                more, we offer both group and private lessons to help you
                improve further.
              </p>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-primary">
                  Book Your Class
                </h3>
                <p className="mt-2 text-lg text-body-color dark:text-gray-300">
                  Please choose the class type you would like to book:
                </p>
                <div className="mt-4 flex space-x-4">
                  <Link href="/services/group-class">
                    <span className="inline-block rounded-full bg-primary px-8 py-3 text-white transition hover:bg-opacity-90">
                      Group Class
                    </span>
                  </Link>
                  <Link href="/services/private-class">
                    <span className="inline-block rounded-full bg-primary px-8 py-3 text-white transition hover:bg-opacity-90">
                      Private Class
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrialClassPage;
