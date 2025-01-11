import { Stack } from "expo-router";
import { GlobalProvider } from "@/context/GlobalProvider";

export default function RootLayout() {
  return (
    <GlobalProvider>
      <Stack>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="index" />
      </Stack>
    </GlobalProvider>
  );
}
