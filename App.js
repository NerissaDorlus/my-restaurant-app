import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  ActivityIndicator,
  ImageBackground,
  ScrollView,
  Button,
} from "react-native";
import RestaurantCard from "./src/components/RestaurantCard";
import styles from "./src/styles";
const bgImage = {
  uri: "https://png.pngtree.com/background/20210709/original/pngtree-food-western-food-steak-tomato-picture-image_941801.jpg",
};

export default function App() {
  const [allRestaurants, setAllRestaurants] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "https://my-first-firestore-st.web.app/restaurants/"
        );
        const data = await response.json();
        setAllRestaurants(data);
      } catch (err) {
        console.error(err);
      }
    };

    getData();
  }, []);

  // useEffect(() => {
  //    fetch(
  //         "https://my-first-firestore-st.web.app/restaurants/"
  //       );
  //      .then(response => response.json())
  //      .then(setAllRestaurants)
  //      .catch(console.error)
  // }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        source={bgImage}
        style={styles.container}
      >
        <SafeAreaView style={styles.container}>
          <ScrollView>
            {!allRestaurants ? (
              <ActivityIndicator size="large" color="orange" />
            ) : (
              allRestaurants.map((singleRest) => (
                <RestaurantCard key={singleRest.id} singleRest={singleRest} />
              ))
            )}
          </ScrollView>
          <Button title="Tap here" color="#f194ff" />
          <Text style={{ color: "white", marginBottom: 20 }}>
            Hey there, look what I can do 👋🏾
          </Text>
        </SafeAreaView>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}
