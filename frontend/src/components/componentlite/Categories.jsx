import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const Categories = () => {
  const Category = [
    "Software Development",
    "Web Development",

    "Mobile Development",

    "DevOps Engineering",

    "QA / Testing",

    "UI/UX Design",

    "Data Analytics",

    "Cybersecurity",

    "IT Support System Admin",

    "Database Administration",

    "Artificial Intelligence",

    "Blockchain Development",
  ];
  return (
    <div>
      <Carousel className=" w-full max-w-xl mx-auto my-10">
        <CarouselPrevious />
        <CarouselContent>
          {Category.map((category, index) => (
            <CarouselItem
              key={index}
              className=" md-basis-1/2 lg:basis-1/3 p-4"
            >
              <button className="bg-gray-400 ml-5 rounded gap-4 p-2 whitespace-nowrap">
                {category}
              </button>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Categories;
