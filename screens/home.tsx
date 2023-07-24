import * as React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import ProminentAppBar from "../components/TopAppBar";

const Separator = () => <View style={styles.separator} />;

//const Tab = createBottomTabNavigator();

export default function HomeScreen({navigation} : any) {
  return (
    <React.Fragment>
      <View style={{ flex: 1, justifyContent: "center", display: "flex" }}>
        <View
          style={{
            display: "flex",
            rowGap: 30,
            paddingHorizontal: 20,
          }}
        >
          <TouchableOpacity onPress={() => {navigation.navigate("President")}}>
            <View style={styles.button}>
              <Text style={styles.title}>SRC</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {navigation.navigate("President")}}>
            <View style={styles.buttonhall}>
              <Text style={styles.title}>Hall</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {navigation.navigate("President")}}>
            <View style={styles.buttonDep}>
              <Text style={styles.title}>Department</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    padding: 0,
  },
  button: {
    height: 100,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "#A7FFEB",
  },
  buttonhall: {
    height: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderRadius: 15,
    backgroundColor: "#B9F6CA",
  },
  buttonDep: {
    height: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderRadius: 15,
    backgroundColor: "#CCFF90",
  },
  title: {
    fontSize: 30,
  },
  separator: {
    marginVertical: 30,
    borderBottomColor: "#737373",
  },
});
