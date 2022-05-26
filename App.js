import { StatusBar } from "expo-status-bar";
import Home from "./src/scenes/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import styles from "./src/styles";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/scenes/Home";

const bgImage = {
  uri: "https://png.pngtree.com/background/20210709/original/pngtree-food-western-food-steak-tomato-picture-image_941801.jpg",
};

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <ImageBackground
          resizeMode="cover"
          source={bgImage}
          style={styles.container}
        >
          <SafeAreaView style={styles.container}>
            <Stack.Navigator>
              <Stack.Screen name="Home" component={Home}></Stack.Screen>
            </Stack.Navigator>
            <Button title="Tap here" color="#f194ff" />
            <Text style={{ color: "white", marginBottom: 20 }}>
              Hey there, look what I can do 👋🏾
            </Text>
          </SafeAreaView>
          <StatusBar style="auto" />
        </ImageBackground>
      </View>
    </NavigationContainer>
  );
}
