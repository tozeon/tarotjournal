import { ScrollView } from "react-native";
import Record from "./record";

interface TarotRecord {
  id: string;
  date: string;
  inquiry: string;
  divination?: string;
  revelation?: string;
}

const Chronicle = () => {
  // temp data
  const records: TarotRecord[] = [
    {
      id: "1",
      date: "Dec 1, 2000",
      inquiry: "What is my path?",
      divination: "The Fool - New beginnings",
      revelation: "Embrace the unknown",
    },
    {
      id: "2",
      date: "Dec 2, 2000",
      inquiry: "Should I take the job?",
      divination: "The Emperor - Structure and authority",
      revelation: "Leadership opportunities await",
    },
    {
      id: "3",
      date: "Dec 3, 2000",
      inquiry: "How to find love?",
      divination: "The Lovers - Harmony and choice",
      revelation: "Balance heart and mind",
    },
    {
      id: "4",
      date: "Dec 4, 2000",
      inquiry: "Career guidance",
      divination: "The Chariot - Determination",
      revelation: "Stay focused on goals",
    },
    {
      id: "5",
      date: "Dec 5, 2000",
      inquiry: "Health concerns",
      divination: "The Hermit - Inner wisdom",
      revelation: "Listen to your body",
    },
    {
      id: "6",
      date: "Dec 6, 2000",
      inquiry: "Financial decisions",
      divination: "The Pentacles - Material matters",
      revelation: "Build solid foundations",
    },
    {
      id: "7",
      date: "Dec 7, 2000",
      inquiry: "Relationship advice",
      divination: "The Cups - Emotions and connections",
      revelation: "Trust your feelings",
    },
    {
      id: "8",
      date: "Dec 8, 2000",
      inquiry: "Spiritual growth",
      divination: "The Star - Hope and inspiration",
      revelation: "Follow your dreams",
    },
  ];

  return (
    <ScrollView className="flex-1 bg-gray-200 border-2 p-6 w-full md:w-5/12">
      {records.map((record) => (
        <Record
          key={record.id}
          id={record.id}
          date={record.date}
          inquiry={record.inquiry}
          divination={record.divination}
          revelation={record.revelation}
        />
      ))}
    </ScrollView>
  );
};

export default Chronicle;
