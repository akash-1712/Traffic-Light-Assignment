import { useEffect, useState } from "react";

function Traffic() {
  const [light, setLight] = useState("red");
  useEffect(() => {
    const interval = setTimeout(() => {
      if (light === "red") {
        setLight("green");
      } else if (light === "green") {
        setLight("yellow");
      } else if (light === "yellow") {
        setLight("red");
      }
    }, 2000);

    return () => clearTimeout(interval);
  });
  return (
    <div className=" mx-auto bg-black flex flex-col gap-2 w-16 p-3 rounded-lg ">
      <div
        className={`${
          light === "red" ? "bg-red-300" : " bg-gray-300"
        } w-10 h-10 rounded-full`}
      ></div>
      <div
        className={`${
          light === "yellow" ? "bg-yellow-300" : "bg-gray-300"
        } w-10 h-10 rounded-full`}
      ></div>
      <div
        className={`${
          light === "green" ? "bg-green-300" : "bg-gray-300"
        } w-10 h-10 rounded-full`}
      ></div>
    </div>
  );
}

export default Traffic;
