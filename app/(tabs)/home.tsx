import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native'

const Tab = createMaterialTopTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Request" component={Request} />
      <Tab.Screen name="Liked" component={Liked} />
    </Tab.Navigator>
  );
}

function HomeScreen(){
    return(
        <View style={styles.container}>
            <Text>
                Welcome to Home Screen!
            </Text>
        </View>
    )
}

function Request(){
    return(
        <View style={styles.container}>
            <Text>
                Request a product!
            </Text>
        </View>
    )
}

function Liked(){
    return(
        <View style={styles.container}>
            <Text>
                this is where you can see your liked products
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent: "center",
        alignItems:"center"
    }   
})