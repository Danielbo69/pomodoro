import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import Header from "./src/components/Header";
import Timer from "./src/components/Timer";
import Button from "./src/components/Button";

export default function App() {
  const [isWorking, setIsWorking] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState("WORKING" | "SHORT" | "LONG");
  const colors = ["#F7DC6F", "#A2D9CE", "#D7BDE2"];

  return (
    <View style={[styles.container, { backgroundColor: colors[currentTime] }]}>
      <Text style={{ fontWeight: "bold", fontSize: 30, color: "#333333", textAlign: "center", padding: 10 }}>
        Pomodoro
      </Text>
      <Header
        currentTime={currentTime}
        setCurrentTime={setCurrentTime}
        setTime={setTime}
        isActive={isActive}
      />
      <Timer time={time} />
      <Button
        isActive={isActive}
        setIsActive={setIsActive}
        time={time}
        setTime={setTime}
        isWorking={isWorking}
        setIsWorking={setIsWorking}
      />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 15,
  },
});
