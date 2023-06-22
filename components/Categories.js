import React from "react";
import { View, Text, ScrollView } from "react-native";
import CategoryCard from "./CategoryCard";

export default function Categories() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
      
    >
      <CategoryCard imgUrl={"https://links.papareact.com/gn7"} title='Testing1'  />
      <CategoryCard imgUrl={"https://links.papareact.com/gn7"} title='Testing1'  />
      <CategoryCard imgUrl={"https://links.papareact.com/gn7"} title='Testing2'  />
      <CategoryCard imgUrl={"https://links.papareact.com/gn7"} title='Testing2'  />
      <CategoryCard imgUrl={"https://links.papareact.com/gn7"} title='Testing3' />
      <CategoryCard imgUrl={"https://links.papareact.com/gn7"} title='Testing3' />
     
    </ScrollView>
  );
}
