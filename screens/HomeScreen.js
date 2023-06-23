import React, { Component, useLayoutEffect, useState, useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  UserIcon,
  ChevronDownIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRows from "../components/FeaturedRows";
import sanityClient from "../Sanity";

export function HomeScreen() {
  const navigation = useNavigation();
  const [featuredCategory, setFeaturedCategory] = useState();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'featured' ] {
  ...,
  resturant[]=>{
    ...,
    dishes[]=>{
    }
  }
}`
      )
      .then((data) => {
        setFeaturedCategory(data);
      });
  }, []);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-white py-4 ">
      {/* header */}
      <View className="flex-row  items-center mx-2 space-x-2 ">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-7 w-7 bg-gray-300 p-5 rounded-full mt-7"
        />
        <View className="mt-5 flex-1">
          <Text className="font-bold text-gray-400">Deliver Now!</Text>
          <Text className="font-bold text-lg">
            Current Location <ChevronDownIcon size={20} color={"#00CCBB"} />
          </Text>
        </View>

        <UserIcon size={35} color={"#00CCBB"} />
      </View>

      {/* Search bar */}
      <View className="flex-row items-center space-x-2 pt-3 mx-2">
        <View className="flex-row space-x-2 bg-gray-200 p-3 flex-1 rounded">
          <MagnifyingGlassIcon color={"gray"} size={30} />
          <TextInput
            placeholder="Resturants and cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon color={"#00CCBB"} />
      </View>
      <ScrollView
        className="bg-gray-100 mt-3"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        {/* Categries */}
        <Categories />
        {/* Featured row 1 */}
        <FeaturedRows
          title="featured"
          description="Paid placements from our partnerns"
          id={1}
        />
        <FeaturedRows
          title="Testy Discount"
          description="Paid placements from our partnerns"
          id={2}
        />
        <FeaturedRows
          title="Offers Near You"
          description="Paid placements from our partnerns"
          id={3}
        />
        {/* Featured row 2 */}
        {/* Featured row 3 */}
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
