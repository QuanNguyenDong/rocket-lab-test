import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const Item = ({ item }) => (
  <View style={styles.item}>
    <Text>Name: {item.name}</Text>
    <Text>Geolocation: {item.address?.geo?.lat}</Text>
    <Text>Geolocation: {item.address?.geo?.lng}</Text>
  </View>
);

export default function Home() {
  const [users, setUsers] = useState([]);

  const API_URL = "https://testvm1.rokt.io/api/jsonql";
  // should be env var
  const API_KEY = "c37861c7-7414-4a40-bbd8-3343662e4483";

  const getFakeUsers = async () => {
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": API_KEY,
        },
        body: JSON.stringify({
          fakeUsers: {},
        }),
      });

      if (!res.ok) {
        throw Error("Invalid Request");
      }

      const fakeUsers = await res.json();
      const arr = Array.from(fakeUsers["fakeUsers"]);

      // sort geo
      arr.sort((user1, user2) => {
        const lat1 = user1.address?.geo?.lat
        const lng1 = user1.address?.geo?.lng
        
        const lat2 = user2.address?.geo?.lat
        const lng2 = user2.address?.geo?.lng

        // euclidean distance
        const d1 = Math.sqrt((lat1 * lat1) + (lng1 * lng1))
        const d2 = Math.sqrt((lat2 * lat2) + (lng2 * lng2))

        return d1 - d2;
      })

      setUsers(arr);
    } catch (err) {
      console.log(err)
    }
  };

  useEffect(() => {
    getFakeUsers()
  }, []);

  return (
    <View>
      <FlatList
        data={users}
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
