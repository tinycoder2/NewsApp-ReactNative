import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native'
import React, { useContext } from 'react'
import { NewsContext } from '../API/Context';
import { categories } from "../API/api";
import Search from '../components/Search';

const DiscoverScreen = () => {
    const windowWidth = Dimensions.get("window").width;
    const SLIDE_WIDTH = Math.round(windowWidth / 3.5);
    const { setCategory } = useContext(NewsContext);

    return (
        <View style={{ ...styles.discover, backgroundColor: "coral" }}>
            {/* seasrch */}
            <Search />

            {/* categories */}

            <Text style={{ ...styles.subtitle, color: "white" }}>
                Categories

            </Text>
            <View style={styles.sources}>
                {categories.map((c) => (
                    <TouchableOpacity
                        onPress={() => setCategory(c.name)}
                        key={c.name}
                        style={styles.category}
                    >
                        <Image source={{ uri: c.pic }} style={styles.categoryImage} />
                        <Text
                            style={{ ...styles.name, color: "white" }}
                        >
                            {c.name}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    discover: {
        padding: 10,
        alignItems: "center"
    },
    subtitle: {
        fontSize: 20,
        fontWeight: "bold",
        paddingBottom: 8,
        marginHorizontal: 5,
        borderBottomColor: "#007FFF",
        borderBottomWidth: 5,
        alignSelf: "flex-start",
        borderRadius: 10,
    },
    category: {
        height: 120,
        margin: 20,
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    categoryImage: {
        height: "60%",
        width: "100%",
        resizeMode: "contain",
    },
    name: {
        fontSize: 14,
        textTransform: "capitalize",
    },
    sources: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        paddingVertical: 15,
    },
    sourceContainer: {
        height: 150,
        width: "40%",
        borderRadius: 10,
        margin: 15,
        backgroundColor: "#cc313d",
    },
    sourceImage: {
        height: "100%",
        borderRadius: 10,
        resizeMode: "cover",
    },
})

export default DiscoverScreen

