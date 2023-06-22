import React from "react";
import { View, Text, ScrollView } from "react-native";
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from "./RestaurantCard";
const FeaturedRows = ({ title, description, id }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color={"#00CCBB"} />
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
       

        className="pt-4"
      >
        {/* ResturantCards... */}
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="213 main st"
          short_description="This is a Test"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRows;
