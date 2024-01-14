"use client";

import { classFusion } from "@/helpers";
import { Carousel } from "@mantine/carousel";

const Showcase = () => {
  return (
    <Carousel withIndicators height={"100vh"} loop>
      <Carousel.Slide>
        <div className="w-full h-full bg-red-500" />
      </Carousel.Slide>
      <Carousel.Slide>
        <div className="w-full h-full bg-green-500" />
      </Carousel.Slide>
      <Carousel.Slide>
        <div className="w-full h-full bg-blue-500" />
      </Carousel.Slide>
      <Carousel.Slide>
        <div
          className={classFusion("w-full h-full bg-purple-500", {
            "bg-orange-500": true,
          })}
        />
      </Carousel.Slide>
    </Carousel>
  );
};

export default Showcase;
