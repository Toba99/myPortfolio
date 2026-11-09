import WritingList from "../components/writing/WritingList";

export default function WritingPage() {
  return <WritingList />;
}

export async function getStaticProps() {
  return {
    props: {
      title: "Writing",
      description:
        "Writing by Toba Martins on engineering decisions, product thinking, AI and technology.",
    },
  };
}
