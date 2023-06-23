import React from "react";
import {
  StatusBar,
  View,
  ImageBackground,
  Text,
  TextInput,
  Image,
  Pressable,
  Button,
} from "react-native";

import PhotoBG from "../../assets/images/PhotoBG.jpg";
import addCross from "../../assets/images/add.png";
import { styles } from "../../styles";

const RegistrationScreen = () => {
  // const [login, setLogin] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground
        source={PhotoBG}
        style={styles.imagebg}
        resizeMode="cover"
      >
        <View style={styles.registerContainer}>
          <View style={styles.avatarContainer}>
            <View style={styles.pictureContainer}></View>
            <Image style={styles.addCross} source={addCross} />
          </View>

          <Text style={styles.text}>Реєстрація</Text>

          <View>
            <View>
              <TextInput placeholder="Логін" style={styles.input}></TextInput>
            </View>
            <View>
              <TextInput
                placeholder="Адреса електронної пошти"
                style={styles.input}
              ></TextInput>
            </View>
            <View>
              <TextInput placeholder="Пароль" style={styles.input}></TextInput>
              <Pressable style={styles.pressableShowPassword}>
                <Text style={styles.showPasswordText}>Показати</Text>
              </Pressable>
            </View>
            <Pressable style={styles.registerButton}>
              <Text style={styles.buttonText}>Зареєструватися</Text>
            </Pressable>
            <Pressable style={styles.linkWrap}>
              <Text style={styles.linkText}>Вже є акаунт? Увійти</Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default RegistrationScreen;
