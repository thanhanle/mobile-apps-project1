import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Alert
} from 'react-native';

// https://cryptic-shore-29745.herokuapp.com/

var request = new Request('https://cryptic-shore-29745.herokuapp.com/');

export default class App extends React.Component {


  	render() {

    	return (

      		<View style={styles.container}>
				<Button
					alignItems='center'
					justifyContent='center'
				  	outline="#841584"
					color="#841584"
		           	onPress={() => { 
		           		var num = 0;
		           		fetch(request)
		           			.then(response => {return response.json(); })
		           			.then(function(data) {
		           				num = data
                                Alert.alert('You tapped the button: ' + num);
		           			});
      						// .then(data => this.setState({ data }));
		           	}}
		           	title="Press Me">
		        </Button>
      		</View>

    	);
  	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
