import React, { Component } from "react";
import { View, Text, AsyncStorage, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import { withNavigation } from "react-navigation";

class ClientHomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Client Home Screen</Text>
        <Icon
          type="font-awesome"
          onPress={async () => {
            await AsyncStorage.clear();
            this.props.navigation.navigate("AuthLoading");
            // console.log('logout')
          }}
          name="ban"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
export default withNavigation(ClientHomeScreen);
