import Routes from "./src/routes";
// import {
//   useFonts,
//   Outfit_400Regular,
//   Outfit_500Medium,
//   Outfit_600SemiBold,
//   Outfit_700Bold,
//   Outfit_900Black,
// } from "@expo-google-fonts/outfit";
// import Loading from "./src/components/Loading";
import { SafeAreaView } from "react-native";

export default function App() {

  // const [fontsLoaded] = useFonts({
  //   Outfit_400Regular,
  //   Outfit_500Medium,
  //   Outfit_600SemiBold,
  //   Outfit_700Bold,
  //   Outfit_900Black,
  // });

  // if (!fontsLoaded) return <Loading />;
  return (
    <SafeAreaView className="flex-1">
        <Routes />
    </SafeAreaView>
  );
}