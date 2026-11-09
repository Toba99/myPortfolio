import { getProject, projects } from "../../data/projects";
import CaseStudy from "../../components/projects/CaseStudy";

export default function ProjectCaseStudyPage({ project }) {
  if (!project) return null;
  return <CaseStudy project={project} />;
}

export async function getStaticPaths() {
  return {
    paths: projects.map((project) => ({ params: { slug: project.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const project = getProject(params.slug);

  if (!project) {
    return { notFound: true };
  }

  return {
    props: {
      project,
      title: project.title,
      description: project.summary,
    },
  };
}
