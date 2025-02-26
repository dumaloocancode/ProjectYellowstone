import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router"
import { StyleSheet } from "react-native";

export default function(){

    return(
        <View style={styles.CredContainer}>
            <Text style={{color:"black"}}>Login</Text>
            <Text style={{color:"black"}}>Sign-up</Text>
            <Link href={"/home"} style={{color:"black"}}>
                Go to home!
            </Link>
        </View>
        
    )
}

export const styles = StyleSheet.create({
    CredContainer : {
        flex : 1,
        justifyContent: "center",
        alignItems : "center"
    }
})