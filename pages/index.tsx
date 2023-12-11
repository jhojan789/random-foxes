import { LazyImage } from "@/components/RandomFox";
import { useState, type MouseEventHandler } from "react";

import _ from "lodash";

const urlApi = "https://randomfox.ca/images";

// const randomNumber = () => Math.floor(Math.random() * 123) + 1;
const randomNumber = () => _.random(1, 123);
type ImageType = {
  id: string;
  url: string;
};
function generateUniqueId() {
  // Use the current timestamp as the basis for the unique ID
  const timestamp = new Date().getTime();

  // Generate a random number (in this case, a 4-digit number)
  const random = Math.floor(Math.random() * 10000);

  // Combine timestamp and random number to create the unique ID
  const uniqueId = `${timestamp}${random}`;

  return uniqueId;
}
export default function Home() {
  // can be string[]
  const [images, setImages] = useState<Array<IFoxImageItem>>([]);

  const addFox: MouseEventHandler<HTMLButtonElement> = (event) => {
    const newFox: IFoxImageItem = {
      id: generateUniqueId(),
      url: `${urlApi}/${randomNumber()}.jpg`,
    };

    setImages([...images, newFox]);
  };

  const printMessage = () => {
    console.log("Clicked");
  };

  return (
    <main>
      <h1 className="text-center underline font-bold text-3xl">Hello world</h1>
      <button onClick={addFox}>Add fox</button>
      {images.map(({ id, url }) => (
        <div key={id} className="p-4">
          <LazyImage
            src={url}
            onClick={printMessage}
            title="Random fox"
            className="rounded-lg"
            width={320}
            height={"auto"}
            onLazyLoad={() => console.log("Loaded")}
          />
        </div>
      ))}
    </main>
  );
}
