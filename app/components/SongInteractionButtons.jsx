import React from 'react'
import {View, StyleSheet, TouchableOpacity} from 'react-native'
import TrackPlayer, {State} from "react-native-track-player";
import {ratioH, ratioW} from "../../utils/converter";
import Icons from "../../constants/Icons";

const SongInteractionButtons = ({buttonColor, isPlaying, clickPrevious, clickPlay, clickNext, style}) => {
    return (
        <View style={[
            styles.interactionButton,
            style
        ]}>
            <TouchableOpacity
                onPress={clickPrevious}
                hitSlop={
                    {
                        top: ratioH(40),
                        left: ratioH(80),
                        bottom: ratioH(40),
                        right: 0
                    }
                }
            >
                <Icons.Previous/>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.playButton(buttonColor)}
                onPress={clickPlay}
            >
                {isPlaying ? <Icons.Pause/> : <Icons.Play/>}
            </TouchableOpacity>
            <TouchableOpacity
                onPress={clickNext}
                hitSlop={
                    {
                        top: ratioH(40),
                        left: 0,
                        bottom: ratioH(40),
                        right: ratioH(80)
                    }
                }
            >
                <Icons.Next/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    interactionButton: {
        marginTop: ratioH(24),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: ratioW(375),
        height: ratioH(80),
    },
    playButton: (buttonColor) => ({
        width: ratioW(80),
        height: ratioW(80),
        borderRadius: ratioW(80),
        backgroundColor: buttonColor,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: ratioW(24),
    })
})

export default SongInteractionButtons