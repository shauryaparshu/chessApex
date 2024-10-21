import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Common/Breadcrumb";

const GroupClassPage = () => {
  return (
    <>
      <Breadcrumb
        path={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "Group Class", href: "/services/group-class" },
        ]}
        pageName="Group Chess Class"
        description="Enhance your chess skills in a collaborative group environment with fellow learners."
      />
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:space-x-12">
            {/* Image on the left for desktop and on top for mobile */}
            <div className="lg:w-1/2 lg:pr-12">
              <Image
                src="/images/services/group_classes.jpg"
                alt="Group Chess Class"
                width={600}
                height={400}
                className="mb-8 rounded-lg object-cover lg:mb-0"
              />
            </div>
            {/* Content on the right for desktop */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-primary dark:text-white">
                Group Chess Class Overview
              </h2>
              <p className="mt-4 text-lg text-body-color dark:text-gray-300">
                Join our group chess classes to learn and play with others who
                share your passion. These classes are designed to promote
                friendly competition, teamwork, and critical thinking. Whether
                you are a beginner or an experienced player, our expert trainers
                will guide you to improve your game.
              </p>
              <p className="mt-4 text-lg text-body-color dark:text-gray-300">
                Group classes provide an engaging and social learning experience
                where you can enhance your strategies and tactics through
                interactions with peers.
              </p>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-primary">Pricing</h3>
                <p className="mt-2 text-lg text-body-color dark:text-gray-300">
                  Choose your preferred plan:
                </p>
                <ul className="mt-4 list-disc pl-6">
                  <li className="text-lg text-body-color dark:text-gray-300">
                    Monthly: ₹999
                  </li>
                  <li className="text-lg text-body-color dark:text-gray-300">
                    Yearly: ₹9,999
                  </li>
                </ul>
                <Link href="/payment/group-class">
                  <span className="mt-6 inline-block rounded-full bg-primary px-8 py-3 text-white transition hover:bg-opacity-90">
                    Proceed to Payment
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GroupClassPage;
