import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ChessApex",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        path={[
          { name: "Home", href: "/" },
          { name: "Support", href: "/contact" },
        ]}
        pageName="Contact Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
