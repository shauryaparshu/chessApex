import ChessTrainer from "./trainer";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ChessApex",
  // other metadata
};

const AboutPage = () => {
  const trainerData = {
    name: "John Doe",
    image:
      "https://cdn.shopify.com/s/files/1/0031/8878/5201/files/disadvantages-of-chess_1024x1024.jpg?v=1676969517",
    biography: {
      title: "Biography",
      content:
        "John Doe is an experienced chess trainer with over 20 years of experience...",
      details: [
        {
          subtitle: "Early Life",
          content: "John started playing chess at the age of 6...",
        },
        {
          subtitle: "Professional Career",
          content:
            "John has won multiple national and international tournaments...",
        },
      ],
    },
    achievements: {
      title: "Achievements",
      list: [
        "National Champion 2010",
        "International Grandmaster 2015",
        "Chess Olympiad Gold Medalist 2018",
      ],
    },
    programs: {
      title: "Training Programs",
      list: [
        {
          title: "Beginner's Course",
          description: "An introductory course for new chess players.",
        },
        {
          title: "Advanced Tactics",
          description: "A course focused on advanced strategies and tactics.",
        },
      ],
    },
  };

  return (
    <>
      <Breadcrumb
        path={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ]}
        pageName="About Page"
        description="Learn more about our expert chess trainer and the programs offered."
      />
      <ChessTrainer data={trainerData} />
    </>
  );
};

export default AboutPage;
