import { FC, FunctionComponent } from "react";

// export const RandomFox = () => {
//   return <img />;
// };
//This is the most common way you will encounter an typescript component out there.
export const RandomFox = (): JSX.Element => {
  const urlApi = "https://randomfox.ca/images";
  const randomNumber = () => Math.floor(Math.random() * 123) + 1;

  return (
    <img
      className="rounded-lg"
      width={320}
      height={"auto"}
      src={`${urlApi}/${randomNumber()}.jpg`}
    />
  );
};
// export const RandomFox = (): FunctionComponent => {
//   return <img />;
// };
// export const RandomFox = (): FC => {
//   return <img />;
// };
