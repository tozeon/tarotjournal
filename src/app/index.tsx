import Chronicle from "@/components/chronicle";
import { View } from "react-native";

export default function Index() {
  return (
    <View className={styles.container}>
      <Chronicle />
    </View>
  );
}

const styles = {
  container: `flex-1 items-center justify-center bg-gray-100`,
};
