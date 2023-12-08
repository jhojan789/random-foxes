import { RandomFox } from "@/components/RandomFox";
import { log } from "console";
import { Inter } from "next/font/google";
import { MouseEventHandler, useState } from "react";

const inter = Inter({ subsets: ["latin"] });
const urlApi = "https://randomfox.ca/images";
const randomNumber = () => Math.floor(Math.random() * 123) + 1;

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
  const [images, setImages] = useState<Array<ImageType>>([]);

  const addFox: MouseEventHandler<HTMLButtonElement> = (event) => {
    const newFox: ImageType = {
      id: generateUniqueId(),
      url: `${urlApi}/${randomNumber()}.jpg`,
    };

    setImages([...images, newFox]);
  };
  return (
    <main>
      <h1 className="text-center underline font-bold text-3xl">Hello world</h1>
      <button onClick={addFox}>Add fox</button>
      {images.map((img, index) => (
        <div key={index} className="p-4">
          <RandomFox api={img.url} />
        </div>
      ))}
    </main>
  );
}
