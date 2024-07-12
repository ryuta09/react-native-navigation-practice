import { Text, View, StyleSheet } from "react-native";

function SubTitle({children}) {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
}

export default SubTitle;

const styles = StyleSheet.create({
  subTitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subTitleContainer: {
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
    padding: 6,
    marginVertical: 4,
    marginHorizontal: 12,
  },
})