import { useEffect, useRef, useState } from "react";

type Props = {
  api: string;
};

export const RandomFox = ({ api }: Props): JSX.Element => {
  const node = useRef<HTMLImageElement>(null);
  const greyRectangleSVG = `
  <svg xmlns="http://www.w3.org/2000/svg" width="320" height="320">
    <rect width="100%" height="100%" fill="#808080">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite" />
    </rect>
  </svg>
`;

  const base64Encoded = btoa(greyRectangleSVG);

  const [src, setSrc] = useState(`data:image/svg+xml;base64,${base64Encoded}`);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSrc(api);
        }
      });
    });

    if (node.current) {
      observer.observe(node.current);
    }

    return () => observer.disconnect();
  }, [api]);

  return (
    <img
      ref={node}
      className="rounded-lg"
      width={320}
      height={"auto"}
      src={src}
    />
  );
};
