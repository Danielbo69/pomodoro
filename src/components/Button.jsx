import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Audio } from "expo-av";
import { useEffect } from "react";

const Button = ({ isActive, setIsActive, time, setTime, isWorking, setIsWorking }) => {
  useEffect(() => {
    let interval = null;
    if (isActive) {
      // Start interval
      interval = setInterval(() => {
        setTime(time - 1);
      }, 1000);
    } else {
      //clear interval
      clearInterval(interval);
    }

    if(time === 0) {
        setIsActive(false);
        setIsWorking((prev) => !prev);
        setTime(isWorking ? 300 : 1500);
    }
     return () => clearInterval(interval);
  }, [isActive, time]);

  function hanldeStartStop() {
    playSound();
    setIsActive(!isActive);
  }

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/audio/mouse-click-117076.mp3")
    );
    await sound.playAsync();
  }

  return (
    <TouchableOpacity style={styles.button} onPress={hanldeStartStop}>
      <Text style={styles.text}>{isActive ? "STOP" : "START"}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  button: {
    backgroundColor: "#333333",
    padding: 15,
    alignItems: "center",
    borderRadius: 15,
  },
});
