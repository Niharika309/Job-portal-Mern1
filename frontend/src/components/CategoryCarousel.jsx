import React from "react";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";

const category = [
  "Frontend Developer",
  "Backend Developer", 
  "Data Science",
  "Graphic Designer",
  "FullStack Developer",
];

export const CategoryCarousel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = (query) => {
    console.log('Category clicked:', query);
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  console.log('CategoryCarousel rendering with categories:', category);

  // Fallback version for testing
  const SimpleCategoryList = () => (
    <div className="w-full max-w-4xl mx-auto my-20">
      <h2 className="text-center text-2xl font-bold mb-8">Browse by Category</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {category.map((cat, index) => (
          <Button 
            key={index}
            onClick={() => searchJobHandler(cat)}
            variant="outline" 
            className="rounded-full hover:bg-[#6A38C2] hover:text-white transition-colors"
          >
            {cat}
          </Button>
        ))}
      </div>
    </div>
  );

  // Try carousel first, fallback to simple list if there are issues
  try {
    return (
      <div className="w-full max-w-4xl mx-auto my-20">
        <h2 className="text-center text-2xl font-bold mb-8">Browse by Category</h2>
        <Carousel className="w-full max-w-xl mx-auto">
          <CarouselContent className="-ml-2 md:-ml-4">
            {category.map((cat, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Button 
                    onClick={() => searchJobHandler(cat)}
                    variant="outline" 
                    className="w-full rounded-full hover:bg-[#6A38C2] hover:text-white transition-colors"
                  >
                    {cat}
                  </Button>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    );
  } catch (error) {
    console.error('Carousel error:', error);
    return <SimpleCategoryList />;
  }
};
export default CategoryCarousel;
