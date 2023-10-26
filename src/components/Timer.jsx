import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Timer = ({ time }) => {
  const formattedTime = `${Math.floor(time / 60)
    .toString()
    .padStart(2, "0")}:${(time % 60).toString().padStart(2, "0")}`;

  return (
    <View style={styles.container}>
      <View >
        <Text style={styles.time}>{formattedTime}</Text>
      </View>
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    borderRadius: 15,
    backgroundColor: "#f2f2f2",
    padding: 15,
    flex: 0.3,
    marginBottom: 20
  },
  time: {
    fontWeight: "bold",
    fontSize: 80,
    textAlign: "center",
    color: "#333333",
  },
});
