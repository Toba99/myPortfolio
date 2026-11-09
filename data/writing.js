export const articles = [
  {
    slug: "nothing-is-ever-really-free",
    title: "Nothing Is Ever Really Free, Is It? My Time Was Payment.",
    category: "Engineering",
    intro:
      "Building Group Therapy on free infrastructure taught me that egress, image delivery and my own time are part of the cost, even when the invoice is still zero.",
    date: "2026-10-29",
    readingTime: "12 min",
    href: "https://medium.com/@martinseweniyi/nothing-is-ever-really-free-is-it-my-time-was-payment-47adf8470f7a",
    featured: true,
  },
  {
    slug: "llms-beyond-chat",
    title: "LLMs Beyond Chat",
    category: "Talk",
    intro:
      "A Dev Hangout 1.0 talk on what large language models actually are for engineers: tokens, embeddings, RAG, agents and the skills that stay valuable when AI can write code.",
    date: "2025-12-01",
    readingTime: "30 min",
    href: "https://www.youtube.com/watch?v=1MWobf0omnw",
    featured: false,
    credit: "Speaker",
    linkLabel: "Watch on YouTube ↗",
  },
  {
    slug: "calculating-bcubed-metrics",
    title: "Calculating BCubed metrics for clustering tasks",
    category: "Machine Learning",
    intro:
      "A walkthrough of BCubed precision, recall and F-score for clustering evaluation, with a visual example and a Python package for computing the metrics. I co-authored and reviewed this piece.",
    date: "2024-09-05",
    readingTime: "6 min",
    href: "https://medium.com/open-ai/calculating-bcubed-metrics-for-clustering-tasks-687d0b853361",
    featured: false,
    credit: "Co-author",
  },
  {
    slug: "predicting-air-quality-lagos",
    title: "Predicting Air Quality in Lagos with Autoregressive Time Series Modeling",
    category: "Data Science",
    intro:
      "Using MongoDB, Pandas and an autoregressive model to forecast hourly PM2.5 levels from Victoria Island sensor data. I co-authored and reviewed this piece.",
    date: "2023-04-16",
    readingTime: "12 min",
    href: "https://medium.com/@obi.the.explorer/predicting-air-quality-in-lagos-with-autoregressive-time-series-modeling-5a8df622f51a",
    featured: false,
    credit: "Co-author",
  },
];

export function articleLinkLabel(article) {
  if (!article?.href || article.href === "#") return "Coming soon";
  return article.linkLabel || "Read on Medium ↗";
}
