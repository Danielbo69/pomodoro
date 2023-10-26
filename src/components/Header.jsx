import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const options = ["Working", "Short Break", "Long Break"];

const Header = ({ currentTime, setCurrentTime, setTime, isActive }) => {
  function handlePress(index) {
    const newTime = index == 0 ? 25 : index === 1 ? 5 : 15;
    setCurrentTime(index);
    setTime(newTime * 60);
  }
  return (
    <View style={styles.container}>
      {options.map((title, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handlePress(index)}
          style={[styles.button, currentTime !== index && {borderColor: 'transparent'}]}
          disabled={isActive ? true : false}
        >
          <Text style={{fontWeight: 'bold', color: '#333333', fontSize: 17}}>{title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  button: {
    width: "33%",
    padding: 5,
    borderWidth: 2,
    borderRadius: 10,
    alignItems: "center",
    borderColor: '#fff',
    marginVertical: 10
  },
});
