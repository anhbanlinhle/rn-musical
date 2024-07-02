import React from 'react'
import {View, StyleSheet, Image} from 'react-native'
import {ratioH} from "../../../utils/converter"
import Images from "../../../constants/Images"

const Logo = () => {
    return (
        <View style={styles.foreground}>
            <Image
                style={styles.logo}
                source={Images.Onboard2}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    foreground: {
        width: ratioH(304),
        height: ratioH(438),
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: ratioH(314),
        height: ratioH(342),
    },
})

export default Logo