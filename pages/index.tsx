import { LazyImage } from "@/components/RandomFox";
import { useState, type MouseEventHandler } from "react";

import _, { add } from "lodash";
import { ButtonAdd } from "@/components/ButtonAdd";

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

    // window.plausible("add_fox", { props: { name: "foxy" } });
  };

  // const printMessage = () => {
  //   console.log("Clicked");
  // };

  return (
    <div>
      <main>
        <h1 className="text-center font-bold text-3xl pt-3 pb-4 tex">
          Enjoy the beauty of foxes
        </h1>
        {/* <button onClick={addFox}>Add fox</button> */}

        <ButtonAdd
          classContainer="flex justify-center"
          className="bg-amber-500 rounded-lg px-3 py-2 m-2 text-white hover:shadow-md bg-gradient-to-r from-orange-400 to-yellow-500 hover:from-green-700 hover:to-green-400 "
          onClick={addFox}
        >
          Add Fox
        </ButtonAdd>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lgx:grid-cols-4">
          {images.map(({ id, url }) => (
            <div key={id} className="flex justify-center p-4">
              <LazyImage
                src={url}
                // onClick={printMessage}
                title="Random fox"
                className="rounded-lg border-2 border-gray-600 shadow-lg object-cover"
                width={320}
                height={"auto"}

                // onLazyLoad={() => console.log("Loaded")}
              />
            </div>
          ))}
        </div>
      </main>
      {/* <script
        defer
        data-domain="yourdomain.com"
        src="https://plausible.io/js/script.js"
      ></script> */}
    </div>
  );
}
