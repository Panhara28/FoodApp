import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const styles = StyleSheet.create({
  slide:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },  
  image: {
    width: 320,
    height: 320,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 22,
    color: 'black',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 16,
  },
});

const slides = [
  {
    key: '1',
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    backgroundColor: '#59b2ab',
  },
  {
    key: '2',
    title: 'Title 2',
    text: 'Other cool stuff',
    backgroundColor: '#febe29',
  },
  {
    key: '3',
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    backgroundColor: '#22bcb5',
  }
];

export default class App extends React.Component {
  state = {
    showRealApp: false
  }
  _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  }
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  }
  render() {
    if (this.state.showRealApp) {
      return <App />;
    } else {
      return <AppIntroSlider 
        renderItem={this._renderItem} 
        slides={slides} 
        onDone={this._onDone}
        dotStyle={{ backgroundColor: 'rgba(0,0,0,0.2)' }}
        activeDotStyle={{ backgroundColor: 'rgba(102,153,255,0.2)' }}
      />;
    }
  }
}