import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

export default function Account(){
    return(
        <View style={styles.container}>
            <Text>Logout</Text>
            <Link href={"/"}>Go to Sign Up/login page</Link>
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