import { RandomFox } from "@/components/RandomFox";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const urlApi = "https://randomfox.ca/images";
const randomNumber = () => Math.floor(Math.random() * 123) + 1;

export default function Home() {
  return (
    <main>
      <h1 className="text-center underline font-bold text-3xl">Hello world</h1>
      <RandomFox api={`${urlApi}/${randomNumber()}.jpg`} />
    </main>
  );
}
