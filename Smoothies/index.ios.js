/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var walk = require('./app/components/walk');
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
<NavigatorIOS style={styles.container}
        navigationBarHidden={true}
       initialRoute={{
        component: walk,
        title: 'Smoothies',
       
      }}
       
    />

    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    flex:1,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }});

AppRegistry.registerComponent('Smoothies', () => Smoothies);
