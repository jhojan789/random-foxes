import { ImgHTMLAttributes, useEffect, useRef, useState } from "react";

type LazyImageProps = {
  src: string;
  onLazyLoad?: (img: HTMLImageElement) => void;
};

type ImageNative = ImgHTMLAttributes<HTMLImageElement>;

type Props = LazyImageProps & ImageNative;

export const LazyImage = ({
  src,
  onLazyLoad,
  ...imgProps
}: Props): JSX.Element => {
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
          // setCurrentSrc(src);
          loadImage();
        }
      });
    });

    if (node.current) {
      observer.observe(node.current);
    }

    return () => observer.disconnect();
  }, [currentSrc]);

  // Function to load the actual image
  const loadImage = () => {
    const image = new Image();
    image.src = src;

    image.onload = () => {
      setCurrentSrc(src);
      if (onLazyLoad) {
        onLazyLoad(image);
      }
    };

    image.onerror = () => {
      console.error(`Error loading image: ${src}`);
    };
  };

  return <img ref={node} src={src} {...imgProps} />;
};
