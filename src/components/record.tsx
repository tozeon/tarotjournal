import { TarotDiv } from "@/components/divination/tarotdivination";
import { Text, View } from "react-native";

interface RecordProps {
  id: string;
  date: string;
  inquiry?: string;
  divinationType: string;
  divination: {
    cards: string[];
    positions?: { [position: string]: string };
  };
  revelation?: string;
  tags?: string[];
}

const Record = ({
  id,
  date,
  inquiry,
  divinationType,
  divination,
  revelation,
}: RecordProps) => {
  return (
    <View className="p-2 mb-2">
      <View className="items-center justify-center p-2">
        <View className="flex flex-row justify-between w-full mb-2">
          <Text className="flex-1 text-gray-700 flex gap-1">{date}</Text>
          {inquiry && (
            <Text className="text-center text-xl font-bold text-purple-900">
              {inquiry}
            </Text>
          )}
          <View className="flex-1"></View>
        </View>

        <View className="w-11/12">
          <TarotDiv
            divinationType={divinationType}
            cards={divination.cards}
            positions={divination.positions}
          />

          {revelation && (
            <View className="p-4 bg-sky-700 w-full rounded-b-3xl">
              <Text className="text-left">{revelation}</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default Record;
