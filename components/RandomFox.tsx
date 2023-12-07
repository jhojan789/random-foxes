export const RandomFox = (props: { api: string }): JSX.Element => {
  return (
    <img className="rounded-lg" width={320} height={"auto"} src={props.api} />
  );
};
