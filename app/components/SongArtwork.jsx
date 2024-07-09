import React from 'react'
import {View, StyleSheet, Image} from 'react-native'
import Animated, {useAnimatedStyle} from "react-native-reanimated"
import Images from "../../constants/Images"
import {ratioH, ratioW} from "../../utils/converter"

const SongArtwork = ({color, img, sv}) => {
    const spin1 = useAnimatedStyle(() => ({
        transform: [{ rotate: `${sv.value * 360}deg` }],
    }))
    const spin2 = useAnimatedStyle(() => ({
        transform: [{ rotate: `${sv.value * -360}deg` }],
    }))
    return (
        <View style={styles.imageWrapper}>
            <Animated.View
                style={[
                    styles.progressWrapper,
                    spin1
                ]}
            >
                <Image
                    source={Images.Progress}
                    style={styles.progress(color)}
                />
            </Animated.View>
            <Animated.View
                style={[
                    styles.artworkWrapper,
                    spin2
                ]}
            >
                <Image
                    source={{uri: img}}
                    style={styles.artwork}
                />
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    imageWrapper: {
        marginTop: ratioH(24),
        justifyContent: 'center',
        alignItems: 'center',
        width: ratioW(260),
        height: ratioW(260),
    },
    progressWrapper: {
        position: 'absolute',
    },
    progress: (color) => ({
        width: ratioW(256),
        height: ratioW(256),
        tintColor: color,
    }),
    artworkWrapper: {
        position: 'absolute'
    },
    artwork: {
        width: ratioW(199),
        height: ratioW(199),
        borderRadius: ratioW(199),
    },
})

export default SongArtwork