import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import {ratioH, ratioW, secondsToTime} from "../../../utils/converter";
import {Slider} from "@react-native-assets/slider";
import TrackPlayer from "react-native-track-player";
import Fonts from "../../../constants/Fonts";
import {textSecondary} from "../../../constants/Colors";

const SongDuration = ({currentPosition, songDuration, theme, onSlide, style}) => {
    return (
        <View style={[
            styles.duration,
            style
        ]}>
            <Text style={styles.time(theme)}>{secondsToTime(currentPosition)}</Text>
            <Slider
                value={currentPosition/songDuration * 100}
                style={styles.slider}
                minimumValue={0}
                maximumValue={100}
                step={0}
                minimumTrackTintColor="#393939"
                maximumTrackTintColor="#CDD9E3"
                thumbTintColor="#393939"
                thumbSize={ratioW(16)}
                trackHeight={ratioH(6)}
                onValueChange={onSlide}
            />
            <Text style={styles.time(theme)}>{secondsToTime(songDuration)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    duration: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: ratioW(375),
        height: ratioH(48),
    },
    slider: {
        width: ratioW(207),
        height: ratioH(16),
        marginHorizontal: ratioW(8),
        marginVertical: ratioH(16),
    },
    time: (theme) => ({
        ...Fonts.regular,
        color: textSecondary(theme),
        fontSize: ratioH(12),
        marginHorizontal: ratioW(8),
        marginVertical: ratioH(16),
    })
})

export default SongDuration