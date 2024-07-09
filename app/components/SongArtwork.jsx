import React from 'react'
import {View, StyleSheet, Image} from 'react-native'
import Animated, {useAnimatedStyle} from "react-native-reanimated"
import Images from "../../constants/Images"
import {ratioH, ratioW} from "../../utils/converter"

const SongArtwork = ({mainSize, spinningSize, imageSize, color, img, sv, style}) => {
    const spin1 = useAnimatedStyle(() => ({
        transform: [{ rotate: `${sv.value * 360}deg` }],
    }))
    const spin2 = useAnimatedStyle(() => ({
        transform: [{ rotate: `${sv.value * -360}deg` }],
    }))
    return (
        <View style={[
            styles.imageWrapper(mainSize),
            style
        ]}>
            <Animated.View
                style={[
                    styles.progressWrapper,
                    spin1
                ]}
            >
                <Image
                    source={Images.Progress}
                    style={styles.progress(color, spinningSize)}
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
                    style={styles.artwork(imageSize)}
                />
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    imageWrapper: (mainSize) => ({
        justifyContent: 'center',
        alignItems: 'center',
        width: ratioW(mainSize),
        height: ratioW(mainSize),
    }),
    progressWrapper: {
        position: 'absolute',
    },
    progress: (color, spinningSize) => ({
        width: ratioW(spinningSize),
        height: ratioW(spinningSize),
        tintColor: color,
    }),
    artworkWrapper: {
        position: 'absolute'
    },
    artwork: (imageSize) => ({
        width: ratioW(imageSize),
        height: ratioW(imageSize),
        borderRadius: ratioW(imageSize),
    }),
})

export default SongArtwork