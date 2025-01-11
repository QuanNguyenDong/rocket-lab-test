import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useGlobalContext } from "@/context/GlobalProvider";
import { useState } from "react";
import { router } from "expo-router";

export default function Signin() {
  const { setIsLogged } = useGlobalContext();
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onPress = () => {
    setLoading(true);
    try {
      setIsLogged(true);
      router.replace("home");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#22276c" }}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <View style={styles.title}>
            <Text style={styles.textTitle}>Sign In</Text>
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputText}>Email</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={onChangeEmail}
              autoComplete={false}
              autoCapitalize="none"
              placeholder="example@gmail.com"
            ></TextInput>
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputText}>Password</Text>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={onChangePassword}
              secureTextEntry={true}
              placeholder="********"
            ></TextInput>
          </View>
          <Pressable style={styles.button} onPress={onPress} disabled={loading}>
            {loading ? (
              <ActivityIndicator color={"#fff"} />
            ) : (
              <Text style={styles.buttonText}>Sign In</Text>
            )}
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  overlay: {
    minHeight: "100%",
    position: "relative",
  },
  container: {
    display: "flex",
    padding: 25,
    backgroundColor: "#FFFEED",
    position: "absolute",
    left: 0,
    right: 0,
    top: "20%",
    bottom: 0,
    borderRadius: 30,
  },
  title: {
    alignItems: "center",
    marginVertical: 20,
    marginBottom: 50,
    color: "black",
  },
  textTitle: {
    fontSize: 32,
    fontWeight: 700,
  },
  inputWrapper: {
    height: 70,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    paddingHorizontal: 23,
    paddingVertical: 12,
  },
  input: {
    marginVertical: 4,
    height: 25,
    color: "gray",
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 50,
    marginVertical: 50,
    borderRadius: 10,
    backgroundColor: "#22276c",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 600,
    color: "white",
  },
});
