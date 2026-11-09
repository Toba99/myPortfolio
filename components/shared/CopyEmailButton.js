import { useState } from "react";
import { site } from "../../data/site";
import Button from "./Button";

export default function CopyEmailButton({
  variant = "pill",
  className,
  label = "Copy email",
  copiedLabel = "Copied!",
}) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(site.email);
      } else {
        const input = document.createElement("textarea");
        input.value = site.email;
        input.setAttribute("readonly", "");
        input.style.position = "absolute";
        input.style.left = "-9999px";
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        document.body.removeChild(input);
      }
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <Button type="button" variant={variant} className={className} onClick={onCopy}>
      {copied ? copiedLabel : label}
    </Button>
  );
}
