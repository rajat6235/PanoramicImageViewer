import Image from "next/image";
import Panoramic from "./panoramic";

export default function Home() {
  return (
    <div className="App w-full flex flex-col items-center font-mono">
      <div className="flex sm:flex-row flex-col sm:items-end items-center gap-x-6 sm:mt-3 mt-2"> 
      <img src={'/logo.png'} className="w-[40vw] sm:w-[15vw]"/>
    <h1 className="font-mono"> The 360° Vision Explorer</h1>
    </div>
    <Panoramic />
  </div>
  );
}
