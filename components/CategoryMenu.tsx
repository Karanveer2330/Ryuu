
import React from "react";
import CategoryItem from "./CategoryItem";
import Image from "next/image";
import { categoryMenuList } from "@/lib/utils";
import Heading from "./Heading";

const CategoryMenu = () => {
  return (
    <div className="py-10 bg-[rgb(128,0,32)]">
      <Heading title="Browse Categories" />
      <div className="max-w-screen-2xl mx-auto py-10 gap-x-5 px-16 max-md:px-12 gap-y-5 grid grid-cols-4 max-lg:grid-cols-4 max-md:grid-cols-2 max-[450px]:grid-cols-1">
        {categoryMenuList.map((item) => (
          <CategoryItem title={item.title} key={item.id} href={item.href}>
            <Image src={item.src} width={7080} height={1480} alt={item.title} />
          </CategoryItem>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;
