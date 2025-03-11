import React from 'react'
import { Link } from 'react-router';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel"

function NAVBAR() {
  return (
    <div className='bg-white border-b shadow-sm p-4 ml-2 mr-2'>
      <Carousel >
        <CarouselContent className="-ml-4  ">
          {navtopics.map((topic, index) => (
            <Link to={`/${topic.name}`} key={index}>
              <CarouselItem className="md:basis-1/4 lg:basis-1/8 pl-4 hover:text-amber-600 hover:font-semibold">{topic.name}</CarouselItem>
            </Link>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

const navtopics = [
  { name: "FastBUYSELL" },
  { name: "NaturaLoop" },
  { name: "EcoHub" },
  { name: "HealthWellness" },
  { name: "TravelAdventure" },
  { name: "FoodDrink" },
  { name: "HomeGarden" },
  { name: "StyleFashion" },
  { name: "FamilyParenting" },
  { name: "EducationLearning" },
  { name: "Entertainment" },
  { name: "Technology" },
  { name: "Finance" },
  { name: "Community" },
  { name: "Other" }
];

export default NAVBAR