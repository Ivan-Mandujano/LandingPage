import { Carousel } from "@material-tailwind/react";
import pez from '#/pez1.jpg';

export default function Peces() {
  return (
    <Carousel className="rounded-xl">
      <img
        src={pez.src}
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src={pez.src}
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src={pez.src}
        alt="image 3"
        className="h-full w-full object-cover"
      />
      <img
        src={pez.src}
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src={pez.src}
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src={pez.src}
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}