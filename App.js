import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Platform,
  Dimensions,
  StatusBar
} from "react-native";
import AddEntry from "./components/AddEntry";
import History from "./components/History";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import {
  createBottomTabNavigator,
  StackNavigator,
  DrawerNavigator
} from "react-navigation";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { white, purple } from "./utils/colors";
import { Constants } from 'expo';

function UdaciStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "stretch",
    justifyContent: "center"
  },
  text: {
    fontSize: 21,
    color: "black"
  }
});

const Tabs = createBottomTabNavigator(
  {
    History: {
      screen: History,
      navigationOptions: {
        tabBarLabel: "History",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-bookmarks" size={30} color={tintColor} />
        )
      }
    },
    AddEntry: {
      screen: AddEntry,
      navigationOptions: {
        tabBarLabel: "Add Entry",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="plus-square" size={30} color={tintColor} />
        )
      }
    }
  },
  {
    navigationOptions: {
      header: null
    }
  },
  {
    tabBarOptions: {
      activeTintColor: Platform.OS === "ios" ? purple : white,
      style: {
        height: 56,
        backgroundColor: Platform.OS === "ios" ? white : purple,
        shadowColor: "rgba(0,0,0,0.24)",
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  }
);

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
			    <UdaciStatusBar backgroundColor={purple} barStyle='light-content' />
          <Tabs />
        </View>
      </Provider>
    );
  }
}