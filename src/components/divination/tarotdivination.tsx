import { TarotCard } from "@/components/divination/tarotcard";
import { ScrollView, View } from "react-native";

interface TarotDivination {
  cards: string[];
  positions?: { [position: string]: string };
  divinationType?: string;
}

export const TarotDiv = ({
  cards,
  positions,
  divinationType,
}: TarotDivination) => {
  if (positions) {
    const positionCount = Object.keys(positions).length;
    if (positionCount <= 3) {
      return (
        <View className="bg-black w-full flex-row justify-center p-2 rounded-t-3xl">
          {Object.entries(positions).map(([position, cardName]) => (
            <View key={position} className="mx-3">
              <TarotCard name={cardName} position={position} />
            </View>
          ))}
        </View>
      );
    } else {
      return (
        <ScrollView
          className="bg-black w-full items-center p-2 rounded-t-3xl"
          horizontal={true}
        >
          {Object.entries(positions).map(([position, cardName]) => (
            <View key={position} className="mx-3">
              <TarotCard name={cardName} position={position} />
            </View>
          ))}
        </ScrollView>
      );
    }
  }

  if (cards.length <= 3) {
    return (
      <View className="bg-black w-full flex-row justify-center rounded-t-3xl">
        {cards.map((cardName, index) => (
          <View key={index} className="mx-3">
            <TarotCard name={cardName} />
          </View>
        ))}
      </View>
    );
  }

  return (
    <ScrollView
      className="bg-black w-full items-center rounded-t-3xl"
      horizontal={true}
    >
      {cards.map((cardName, index) => (
        <View key={index} className="mx-3">
          <TarotCard name={cardName} />
        </View>
      ))}
    </ScrollView>
  );
};

export default TarotDiv;
