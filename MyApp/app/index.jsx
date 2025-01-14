import { useGlobalContext } from "@/context/GlobalProvider";
import { Redirect } from "expo-router";

export default function Index() {
  const { isLogged } = useGlobalContext();

  return isLogged ? <Redirect href="/home" /> : <Redirect href="/sign-in" />;
}
