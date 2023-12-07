import { RandomFox } from "@/components/RandomFox";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });
const urlApi = "https://randomfox.ca/images";
const randomNumber = () => Math.floor(Math.random() * 123) + 1;

export default function Home() {
  // can be string[]
  const [images, setImages] = useState<Array<string>>([
    `${urlApi}/${randomNumber()}.jpg`,
    `${urlApi}/${randomNumber()}.jpg`,
    `${urlApi}/${randomNumber()}.jpg`,
    `${urlApi}/${randomNumber()}.jpg`,
  ]);

  return (
    <main>
      <h1 className="text-center underline font-bold text-3xl">Hello world</h1>
      {images.map((img, index) => (
        <div key={index} className="p-4">
          <RandomFox api={img} />
        </div>
      ))}
    </main>
  );
}
