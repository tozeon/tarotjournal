import Record from "@/components/record";
import { TarotRecord, tarotRecords } from "@/data/tarotRecords";
import { ScrollView } from "react-native";

const Chronicle = () => {
  return (
    <ScrollView className="flex-1 bg-purple-900 border-2 p-6 w-full md:w-5/12">
      {tarotRecords.map((record: TarotRecord) => (
        <Record
          key={record.id}
          id={record.id}
          date={record.date}
          inquiry={record.inquiry}
          divinationType={record.divinationType}
          divination={record.divination}
          revelation={record.revelation}
        />
      ))}
    </ScrollView>
  );
};

export default Chronicle;
