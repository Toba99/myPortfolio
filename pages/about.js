import AboutContent from "../components/about/AboutContent";

export default function AboutPage() {
  return <AboutContent />;
}

export async function getStaticProps() {
  return {
    props: {
      title: "About",
      description:
        "About Toba Martins, Software Engineer, Technical Program Manager and Product Owner working across fintech, identity, AI and cloud.",
    },
  };
}
