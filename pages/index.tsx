import { RandomFox } from "@/components/RandomFox";
import { Inter } from "next/font/google";
import { useState } from "react";

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
  const [images, setImages] = useState<Array<ImageType>>([
    { id: generateUniqueId(), url: `${urlApi}/${randomNumber()}.jpg` },
    { id: generateUniqueId(), url: `${urlApi}/${randomNumber()}.jpg` },
    { id: generateUniqueId(), url: `${urlApi}/${randomNumber()}.jpg` },
    { id: generateUniqueId(), url: `${urlApi}/${randomNumber()}.jpg` },
  ]);

  return (
    <main>
      <h1 className="text-center underline font-bold text-3xl">Hello world</h1>
      {images.map((img, index) => (
        <div key={index} className="p-4">
          <RandomFox api={img.url} />
        </div>
      ))}
    </main>
  );
}
