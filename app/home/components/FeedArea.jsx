import React from 'react'
import {View, StyleSheet, ScrollView, Text} from 'react-native'

const FeedArea = () => {
    const renderPopularSection = () => {
        return (
            <ScrollView
                horizontal={true}
                style={styles.popularSection}
            >
                <Text style={styles.popularTitle}>Popular</Text>
            </ScrollView>
        )
    }

    const renderTopAlbumSection = () => {
        return (
            <ScrollView
                horizontal={true}
                style={styles.topAlbumSection}
            >
                <Text style={styles.topAlbumTitle}>Top Albums</Text>
            </ScrollView>
        )
    }

    return (
        <ScrollView style={styles.feedArea}>
            {renderPopularSection()}
            {renderTopAlbumSection()}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
})

export default FeedArea