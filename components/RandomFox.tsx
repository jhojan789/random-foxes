import { LegacyRef, useRef } from "react";

type Props = {
  api: string;
};

export const RandomFox = ({ api }: Props): JSX.Element => {
  const node = useRef<HTMLImageElement>(null);

  return (
    <img
      ref={node}
      className="rounded-lg"
      width={320}
      height={"auto"}
      src={api}
    />
  );
};
