import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Common/Breadcrumb";

const PrivateClassPage = () => {
  return (
    <>
      <Breadcrumb
        path={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "Private Class", href: "/services/private-class" },
        ]}
        pageName="Private Chess Class"
        description="Experience personalized, one-on-one chess training with expert coaches."
      />
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:space-x-12">
            {/* Image on the left for desktop and on top for mobile */}
            <div className="lg:w-1/2 lg:pr-12">
              <Image
                src="/images/services/page.jpg"
                alt="Private Chess Class"
                width={600}
                height={400}
                className="mb-8 rounded-lg object-cover lg:mb-0"
              />
            </div>
            {/* Content on the right for desktop */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-primary dark:text-white">
                Private Chess Class Overview
              </h2>
              <p className="mt-4 text-lg text-body-color dark:text-gray-300">
                Our private chess classes offer personalized one-on-one training
                tailored to your specific needs. Whether you want to focus on
                openings, endgames, or specific strategies, our expert coaches
                will design lessons that match your style and goals.
              </p>
              <p className="mt-4 text-lg text-body-color dark:text-gray-300">
                Enjoy the flexibility and attention that comes with private
                lessons, and accelerate your learning to achieve mastery in
                chess.
              </p>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-primary">Pricing</h3>
                <p className="mt-2 text-lg text-body-color dark:text-gray-300">
                  Choose your preferred plan:
                </p>
                <ul className="mt-4 list-disc pl-6">
                  <li className="text-lg text-body-color dark:text-gray-300">
                    Monthly: ₹1,499
                  </li>
                  <li className="text-lg text-body-color dark:text-gray-300">
                    Yearly: ₹14,999
                  </li>
                </ul>
                <Link href="/payment/private-class">
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

export default PrivateClassPage;
