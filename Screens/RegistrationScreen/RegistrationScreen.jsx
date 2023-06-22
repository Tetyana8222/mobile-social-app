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
          <View style={styles.avatarContainer}>
            <View style={styles.pictureContainer}></View>
            {/* <View>+</View> */}
          </View>

          <Text style={styles.text}>Реєстрація</Text>

          <View>
            <TextInput placeholder="Логін" style={styles.input}></TextInput>
            <TextInput
              placeholder="Адреса електронної пошти"
              style={styles.input}
            ></TextInput>
            <TextInput placeholder="Пароль" style={styles.input}></TextInput>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default RegistrationScreen;
