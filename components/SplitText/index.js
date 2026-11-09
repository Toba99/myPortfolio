import dynamic from "next/dynamic";

const SplitText = dynamic(() => import("./SplitText"), {
  ssr: false,
  loading: () => null,
});

export default SplitText;
