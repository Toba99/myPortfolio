import ContactContent from "../components/contact/ContactContent";

export default function ContactPage() {
  return <ContactContent />;
}

export async function getStaticProps() {
  return {
    props: {
      title: "Contact",
      description: "Get in touch with Toba Martins about technology, products and opportunities.",
    },
  };
}
