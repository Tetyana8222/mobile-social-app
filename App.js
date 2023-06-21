import { View, Text } from "react-native";
import { styles } from "./styles";
//підключаємо шрифти
//хук для завантаження шрифтів в проект
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
    1: require("./assets/fonts/Roboto/1.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.defaultFont}>Lesson 2</Text>
      <Text style={styles.myFont}>Lesson 2</Text>
    </View>
  );
}
