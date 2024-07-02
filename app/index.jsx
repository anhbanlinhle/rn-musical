import { View, Text, StyleSheet } from "react-native"
import Icons from "../constants/Icons"

export default function Index() {
    return (
        <View
            style={styles.container}
        >
            <Text>Index</Text>
            <Icons.Heart width={120} height={40} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})