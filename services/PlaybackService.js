import { Event } from 'react-native-track-player'
import TrackPlayer from 'react-native-track-player'

export const PlaybackService = async function() {
    TrackPlayer.addEventListener(Event.RemotePlay, () => TrackPlayer.play())
    TrackPlayer.addEventListener(Event.RemotePause, () => TrackPlayer.pause())
}