import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  registerContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    height: 549,
    marginTop: "auto",
    alignItems: "center",
  },
  imagebg: {
    flex: 1,
    justifyContent: "center",
  },

  text: {
    color: "#212121",
    fontSize: 30,
    lineHeight: 84,
    fontWeight: "medium",
    textAlign: "center",
  },
  input: {
    width: 343,
    height: 50,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    padding: 16,
    marginBottom: 16,
  },
  avatarContainer: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    position: "relative",
    top: -60,
    marginBottom: -32,
    // marginLeft: "auto",
    // marginRight: "auto",
  },
  // defaultFont: {
  //   fontSize: 20,
  // },
  // myFont: {
  //   fontFamily: "1",
  //   fontSize: 20,
  // },
});
