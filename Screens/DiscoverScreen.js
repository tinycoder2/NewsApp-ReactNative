import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native'
import React, { useContext } from 'react'
import { NewsContext } from '../API/Context';
import { categories, sources } from "../API/api2";
import Carousel from "react-native-snap-carousel";
import Search from '../components/Search';

const DiscoverScreen = () => {
    const windowWidth = Dimensions.get("window").width;
    const SLIDE_WIDTH = Math.round(windowWidth / 3.5);
    const { setCategory, setSource } = useContext(NewsContext);
    return (
        <View style={{ ...styles.discover, backgroundColor: "coral" }}>
            {/* seasrch */}
            <Search />

            {/* categories */}
            <Text style={{ ...styles.subtitle, color: "white" }}>Categories</Text>
            <Carousel
                layout={"default"}
                data={categories}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => setCategory(item.name)}
                            style={styles.category}
                        >
                            <Image source={{ uri: item.pic }} style={styles.categoryImage} />
                            <Text
                                style={{ ...styles.name, color: "white" }}
                            >
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                    );
                }}
                sliderWidth={windowWidth}
                itemWidth={SLIDE_WIDTH}
                activeSlideAlignment={"start"}
                inactiveSlideScale={1}
                inactiveSlideOpacity={1}
            />


            {/* sources */}
            <Text style={{ ...styles.subtitle, color: "white" }}>
                Sources
            </Text>
            <View style={styles.sources}>
                {sources.map((s) => (
                    <TouchableOpacity
                        onPress={() => setSource(s.id)}
                        key={s.id}
                        style={styles.sourceContainer}
                    >
                        <Image source={{ uri: s.pic }} style={styles.sourceImage} />
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
        height: 130,
        margin: 10,
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