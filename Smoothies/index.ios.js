/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var signIn = require('./app/components/signIn');
var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
NavigatorIOS
} = React;

var Smoothies = React.createClass({
  render: function() {
    return (
<NavigatorIOS
      initialRoute={{
        component: signIn,
        title: 'My View Title',
        passProps: { myProp: 'foo' },
      }}
    />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Smoothies', () => Smoothies);
