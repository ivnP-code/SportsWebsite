import { Hero } from "../components/Hero";
import { FeaturedProducts } from "../components/FeaturedProducts";
import { Categories } from "../components/Categories";
import * as React from "react";

export function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <Categories />
    </>
  );
}
