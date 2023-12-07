type Props = {
  api: string;
};

export const RandomFox = ({ api }: Props): JSX.Element => {
  return <img className="rounded-lg" width={320} height={"auto"} src={api} />;
};
