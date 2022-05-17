import { View, Text, StyleSheet, Dimensions, Image, ImageBackground, TouchableOpacity, Linking } from 'react-native'
import React from 'react'

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const SingleNews = ({ item, index }) => {
    return (
        <View style={{
            height: windowHeight,
            width: windowWidth,
            transform: [{ scaleY: -1 }],
        }}>
            <Image
                source={{ uri: item.multimedia[0].url }}
                style={{ height: "45%", resizeMode: "cover", width: windowWidth }}
            />
            <View
                style={{
                    ...styles.description,
                    backgroundColor: "#194d33",
                }}
            >
                <Text style={{ ...styles.title, color: "white" }}>
                    {item.title}
                </Text>
                <Text
                    style={{ ...styles.content, color: "white" }}
                >
                    {item.abstract}
                </Text>
                <Text style={{ color: "white" }}>
                    Short by
                    <Text style={{ fontWeight: "bold", paddingBottom: 20 }}>
                        {" "}
                        {item.byline ?? "unknown"}
                    </Text>
                </Text>
            </View>
            <ImageBackground
                blurRadius={30}
                style={styles.footer}
                source={{ uri: item.multimedia[0].url }}
            >
                <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
                    <Text style={{ fontSize: 17, fontWeight: "bold", color: "white" }}>
                        Read More
                    </Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    description: {
        padding: 15,
        paddingBottom: 0,
        flex: 1,
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        paddingBottom: 10
    },
    content: { fontSize: 18, paddingBottom: 10 },
    footer: {
        height: 100,
        width: windowWidth,
        position: "absolute",
        bottom: 0,
        backgroundColor: "#194d33",
        justifyContent: "center",
        paddingHorizontal: 20,
    },
});

export default SingleNews;
