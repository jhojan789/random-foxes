import { ImgHTMLAttributes, useEffect, useRef, useState } from "react";

type LazyImageProps = {
  src: string;
};

type ImageNative = ImgHTMLAttributes<HTMLImageElement>;

type Props = LazyImageProps & ImageNative;

export const LazyImage = ({ src, ...imgProps }: Props): JSX.Element => {
  const node = useRef<HTMLImageElement>(null);
  const greyRectangleSVG = `
  <svg xmlns="http://www.w3.org/2000/svg" width="320" height="320">
    <rect width="100%" height="100%" fill="#808080">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite" />
    </rect>
  </svg>
`;

  const base64Encoded = btoa(greyRectangleSVG);

  const [currentSrc, setCurrentSrc] = useState(
    `data:image/svg+xml;base64,${base64Encoded}`
  );

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSrc(src);
        }
      });
    });

    if (node.current) {
      observer.observe(node.current);
    }

    return () => observer.disconnect();
  }, [currentSrc]);

  return <img ref={node} src={src} {...imgProps} />;
};
