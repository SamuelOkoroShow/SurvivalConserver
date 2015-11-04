var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
NavigatorIOS
} = React;


var Walk =  React.createClass({
  render: function() {
    return(
    <View style={{flex:1}}>
        <Text style={{color:'#333333'}}>Hello World</Text>
        </View>
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
    flex:1,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }});

module.exports = Walk; 