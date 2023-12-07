import { RandomFox } from "@/components/RandomFox";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <h1 className="text-center underline font-bold text-3xl">Hello world</h1>
      <RandomFox />
    </main>
  );
}
