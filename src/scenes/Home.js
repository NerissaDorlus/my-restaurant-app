import { NavigationHelpersContext } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ScrollView, ActivityIndicator, TouchableOpacity } from "react-native";
import RestaurantCard from "../components/RestaurantCard";

export default function Home({ navigation }) {
  const [allRestaurants, setAllRestaurants] = useState();

  useEffect(() => {
    fetch("https://my-first-firestore-st.web.app/restaurants/")
      .then((res) => res.json())
      .then(setAllRestaurants)
      .catch(console.error);
  }, []);

  return (
    <ScrollView>
      {!allRestaurants ? (
        <ActivityIndicator size="large" color="orange" />
      ) : (
        allRestaurants.map((singleRest) => (
          <TouchableOpacity key={singleRest.id}>
            <RestaurantCard
              onPress={() => navigation.navigat("Details")}
              singleRest={singleRest}
            />
          </TouchableOpacity>
        ))
      )}
    </ScrollView>
  );
}
