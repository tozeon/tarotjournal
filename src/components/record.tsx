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
    <View className="p-2 mb-2 ">
      <View>
        <Text className="text-gray-400 flex gap-1 w-fit">
          <Text>{date}</Text>
        </Text>
      </View>
      <View className="items-center justify-center p-2">
        {inquiry && (
          <View>
            <Text className="text-xl font-semibold text-gray-300 text-left">
              {inquiry}
            </Text>
          </View>
        )}

        <View className="w-full">
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
