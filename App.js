import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image } from "react-native";
import { Text, BottomNavigation, Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";
const PlaceholderImage = require("./assets/images/background-image.png");
const Tab = createBottomTabNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "tomato",
    secondary: "yellow",
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={PlaceholderImage} style={styles.image} />
        </View>
        <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
    Press me
  </Button>
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
