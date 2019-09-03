import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const styles = StyleSheet.create({
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
  container: {
    paddingTop: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fruit: {
    width: 150,
    height: 150,
    resizeMode: 'contain'
  },
  header: {
    paddingTop: 50,
    fontSize: 28,
    fontWeight: "bold",
  },
  paragraph: {
    textAlign: 'center',
    paddingHorizontal: 20,
    paddingTop: 30
  },
  mainContainer: {
    alignItems: 'center'
  }
});

const slides = [
  {
    key: '1',
    title: 'Explore',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: require('./assets/Group49.png'),
    backgroundColor: '#1bbfd9',
  },
  {
    key: '2',
    title: 'Make',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: require('./assets/Group50.png'),
    backgroundColor: '#7ac787',
  },
  {
    key: '3',
    title: 'Share',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: require('./assets/Group51.png'),
    backgroundColor: '#dae99a',
  },
  {
    key: '4',
    title: 'Welcome To Nutro',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: require('./assets/Group51.png'),
    backgroundColor: '#dae99a',
  }
];

export default class App extends React.Component {
  state = {
    showRealApp: false
  }
  _renderItem = ({ item }) => {
    if (item.key !== '4') {
      return (
        <View style={styles.container}>
          <View style={
            {
              backgroundColor: item.backgroundColor,
              width: 270,
              height: 270,
              borderRadius: 270/2,
              alignItems: 'center',
              justifyContent: 'center',
            }
          }>
            <Image style={styles.fruit} source={item.image} />
          </View>
          <View style={styles.mainContainer}>
            <Text style={ styles.header }>{ item.title }</Text>
            <Text style={ styles.paragraph } ellipsizeMode="middle">{ item.text }</Text>
          </View>
        </View>
      );
    }else{
      return (
        <View style={styles.container}>
          <View style={styles.mainContainer}>
            <Text style={ styles.header }>{ item.title }</Text>
            <Text style={ styles.paragraph } ellipsizeMode="middle">{ item.text }</Text>
          </View>
          <View style={
            {
              backgroundColor: item.backgroundColor,
              width: 270,
              height: 270,
              borderRadius: 270/2,
              alignItems: 'center',
              justifyContent: 'center',
            }
          }>
            <Image style={styles.fruit} source={item.image} />
          </View>
        </View>
      )
    }

  }
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  }
  render() {
    if (this.state.showRealApp) {
      return(
        <View>
          <Text>Fuck You</Text>
        </View>
      );
    } else {
      return <AppIntroSlider
        renderItem={this._renderItem}
        slides={slides}
        onDone={this._onDone}
        dotStyle={{ backgroundColor: 'rgba(0,0,0,0.2)', marginBottom: 200 }}
        activeDotStyle={{ backgroundColor: '#1bbfd9', marginBottom: 200 }}
        bottomButton
        buttonStyle={{ backgroundColor: "#1bbfd9" }}
        nextLabel="Get Started"
      />;
    }
  }
}
