import { Text, View, StyleSheet, ScrollView, useWindowDimensions } from "react-native";

export default function Index() {
  const numList = [2, 6, 3, 18, 9, 26, 14];
  const nlen = numList.length;
  const {height, width} = useWindowDimensions();
  const squareWidth = width / nlen - 10;
  
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.row}>
        {numList.map((num, index) => (
            <View key={index} style={[styles.square, {width: squareWidth, height: squareWidth}]}>
              <Text style={styles.squareText}>{num}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    paddingHorizontal: 5,
    alignItems: 'center',
  },
  square: {
    backgroundColor: "#555",
    marginRight: 5,
    marginLeft: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  squareText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});