import React from "react";
import { View, ImageBackground, Text, TextInput } from "react-native";

import PhotoBG from "../../assets/images/PhotoBG.jpg";
import { styles } from "../../styles";

const RegistrationScreen = () => {
  // const [login, setLogin] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <ImageBackground
        source={PhotoBG}
        style={styles.imagebg}
        resizeMode="cover"
      >
        <View style={styles.registerContainer}>
          <Text>
            <Text style={styles.text}>Реєстрація</Text>
          </Text>

          <View>
            <TextInput placeholder="Логін"></TextInput>
            <TextInput placeholder="Адреса електронної пошти"></TextInput>
            <TextInput placeholder="Пароль"></TextInput>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default RegistrationScreen;
