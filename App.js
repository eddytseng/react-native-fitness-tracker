import React, { Component } from 'react';
import { StyleSheet, View, Text, Platform, Dimensions } from 'react-native';
import AddEntry from './components/AddEntry';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

export default class App extends Component {
  render() {
    return (
        <Provider store={createStore(reducer)}>
          <View style={{ flex: 1 }}>
            <AddEntry />
          </View>
        </Provider>
    );
  }
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  text: {
    fontSize: 21,
    color: 'black'
  }
});

// Default for React Native stylesheet
// box-sizing: border-box;
// position: relative;
// align-items: stretch;
// flex-shrink: 0;
// align-content: flex-start;
// border: 0 solid black;
// margin: 0;
// padding: 0;
// min-width: 0;