import tarotData from "@/assets/tarot/tarot-images.json";
import { Image, Text, View } from "react-native";
import tarotImageLoader from "../../utils/tarotImageLoader";

interface Tarot {
  name: string;
  position?: string;
}

export const TarotCard = ({ name, position }: Tarot) => {
  const card = tarotData.cards.find((c) => c.name === name);

  if (!card) {
    return (
      <View>
        <Text>Card not found: {name}</Text>
      </View>
    );
  }

  const imageSource = tarotImageLoader[card.img];

  if (!imageSource) {
    return (
      <View>
        <Text>Image not found for: {card.name}</Text>
      </View>
    );
  }

  return (
    <View className="items-center justify-center">
      <Image
        className="max-h-32 max-w-16"
        source={imageSource}
        resizeMode="contain"
      />
      {position && (
        <Text className="bg-emerald-500 rounded-lg p-1">{position}</Text>
      )}
    </View>
  );
};

export default TarotCard;
