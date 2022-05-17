import { View, Text, Dimensions, StyleSheet } from 'react-native'
import React, { useState, useContext } from 'react'
import { NewsContext } from '../API/Context'
import Carousel from "react-native-snap-carousel";
import SingleNews from '../components/SingleNews';

const NewsScreen = () => {


    const filterByArticle = (obj) => {
        if (obj.item_type == "Article") {
            return true
        }
        return false;

    }

    const { news: { results }
    } = useContext(NewsContext);

    // console.log("res", results)

    const [activeIndex, setActiveIndex] = useState();
    const windowHeight = Dimensions.get("window").height;

    return (
        <View style={styles.carousel}>
            {
                results && (
                    <Carousel
                        layout={"stack"}
                        data={results.filter(filterByArticle).slice(0, 25)}
                        sliderHeight={300}
                        itemHeight={windowHeight}
                        vertical={true}
                        renderItem={({ item, index }) => (
                            <SingleNews item={item} index={index} />
                        )}
                        onSnapToItem={(index) => setActiveIndex(index)}
                    />
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    carousel: {
        flex: 1,
        transform: [{ scaleY: -1 }],
        backgroundColor: "black",
    },
});
export default NewsScreen

