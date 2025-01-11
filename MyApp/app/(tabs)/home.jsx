import { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

const Item = ({ item }) => (
  <View style={styles.item}>
    <Text>Title: {item.title}</Text>
    <Text>Desc: {item.description}</Text>
    <Text>Ingredients: {item.ingredients.join(", ")}</Text>
    <View>
      <Image style={{ width: 300, height: 300 }} source={{ uri: item.image }} />
    </View>
  </View>
);

export default function Home() {
  const [coffee, setCoffee] = useState([]);

  const getCoffee = async () => {
    try {
      const res = await fetch("https://api.sampleapis.com/coffee/hot");
      const json = await res.json();
      setCoffee(json);
    } catch (err) {}
  };

  useEffect(() => {
    getCoffee();
  }, [coffee]);

  return (
    <View>
      <FlatList
        data={coffee}
        style={{ height: "100%" }}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});
