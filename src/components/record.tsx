import { Text, View } from "react-native";

interface RecordProps {
  id: string;
  date: string;
  inquiry?: string;
  divination?: string;
  revelation: string;
}

const Record = ({ date, inquiry, divination, revelation }: RecordProps) => {
  return (
    <View className="border-hairline border-red p-2 mb-2">
      <View>
        <Text className="text-gray-500 flex gap-1 w-fit border-2 border-dashed">
          <Text>{date}</Text>
        </Text>
      </View>
      <View className="items-center justify-center border-blue-950 border-2 border-dotted p-2">
        {inquiry && (
          <View>
            <Text className="text-xl font-semibold">{inquiry}</Text>
          </View>
        )}

        {divination && (
          <View>
            <Text>{divination}</Text>
          </View>
        )}
        <View>
          <Text>{revelation}</Text>
        </View>
      </View>
    </View>
  );
};

export default Record;
