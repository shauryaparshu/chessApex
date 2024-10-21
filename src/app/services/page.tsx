import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Common/Breadcrumb";

const ServicesPage = () => {
  const servicesData = [
    {
      title: "Trial Class",
      description:
        "Explore the basics of chess in our free trial class, perfect for newcomers. Learn essential moves and strategies in an interactive session. This class is designed to spark your passion for chess and prepare you for competitive play. An expert trainer will guide you step by step.",
      image: "/images/services/A young student sitt.jpg",
      link: "/services/start-trial",
    },
    {
      title: "Group Chess Class",
      description:
        "Join a community of learners to enhance your skills in group chess classes. Enjoy friendly competition while improving your strategy and teamwork. Suitable for all levels, these sessions focus on critical thinking and tactical play. Have fun while sharpening your chess game.",
      image: "/images/services/Group.jpg",
      link: "/services/group-class",
    },
    {
      title: "The Private Chess Class",
      description:
        "Take your chess to the next level with private, one-on-one lessons. These tailored sessions offer personalized guidance from an expert. Ideal for serious learners seeking in-depth feedback and a customized approach. Achieve your goals faster with focused mentorship.",
      image: "/images/services/A oneonone chess les (1).jpg",
      link: "/services/private-class",
    },
  ];

  return (
    <>
      <Breadcrumb
        pageName="Our Services"
        path={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
        ]}
        description="Explore our range of chess training programs designed to enhance your skills, no matter your level of expertise."
      />
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container mx-auto px-4">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className={`mb-16 flex flex-col items-center lg:flex-row ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="lg:w-1/2">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                  priority
                />
              </div>
              <div className="lg:w-1/2 lg:px-12">
                <h2 className="mt-6 text-2xl font-bold text-primary dark:text-white lg:text-3xl">
                  {service.title}
                </h2>
                <p className="mt-4 text-lg text-body-color dark:text-gray-300">
                  {service.description}
                </p>
                <Link href={service.link} legacyBehavior>
                  <a className="mt-6 inline-block rounded-full bg-primary px-8 py-3 text-white transition hover:bg-opacity-90">
                    Start
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
