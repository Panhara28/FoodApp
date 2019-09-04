import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const styles = StyleSheet.create({
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
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40
  },
  container_test: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 100
  },
  fruit: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    paddingTop: 20
  },
  paragraph: {
    textAlign: 'center',
    paddingHorizontal: 20,
    paddingTop: 10
  },
  mainContainer: {
    flex: 1,
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
              width: 250,
              height: 250,
              borderRadius: 250/2,
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
        <View>
          <View style={styles.container}>
            <Text style={ styles.header }>{ item.title }</Text>
            <Text style={ styles.paragraph } ellipsizeMode="middle">{ item.text }</Text>
          </View>
          <View style={styles.container_test}>
            <View style={
                {
                  backgroundColor: "#FE8787",
                  width: 200,
                  height: 300,
                  marginRight: 50,
                  marginLeft: 35,
                  borderRadius: 10,
                  alignItems: 'center',
                }
              }>        
              <Image style={{flex: 1, width: 150,height: 150,resizeMode: 'contain' }} source={ require('./assets/Group54.png') }  />
            </View>
            <View style={
                {
                  backgroundColor: "#1BBFD9",
                  width: 100,
                  height: 170,
                  marginTop: 130,
                  borderBottomLeftRadius: 10,
                  borderTopLeftRadius: 10
                }
              }>
              <Image style={{flex: 1, width: 80,height: 80,resizeMode: 'contain', left: 55 }} source={ require('./assets/Group53.png') }  />        
            </View>
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
        dotStyle={{ backgroundColor: 'rgba(0,0,0,0.2)', marginBottom: 50 }}
        activeDotStyle={{ backgroundColor: '#1bbfd9', marginBottom: 50 }}
        bottomButton
        buttonStyle={{ backgroundColor: "#1bbfd9" }}
        nextLabel="Get Started"
      />;
    }
  }
}
