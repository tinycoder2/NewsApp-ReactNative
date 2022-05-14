import { View, Text, TextInput, StyleSheet, TouchableOpacity, Modal } from 'react-native'
import React, { useContext, useState } from 'react'
import { NewsContext } from '../API/Context';
import SingleNews from './SingleNews';
import { Entypo } from "@expo/vector-icons";

const Search = () => {
    const { news: { results }
    } = useContext(NewsContext);

    const [searchResults, setSearchResults] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [currentNews, setCurrentNews] = useState();

    const handleSearch = (text) => {
        if (!text) {
            setSearchResults([]);
            return;
        }
        setSearchResults(results.filter((query) => query.title.toLowerCase().includes(text)));
    };

    const handleModal = (n) => {
        setModalVisible(true);
        setCurrentNews(n);
    };

    return (
        <View style={{ width: "100%", position: "relative" }}>
            <TextInput
                style={{
                    ...styles.search,
                    backgroundColor: "rgba(153, 255, 221, 0.63)",
                    color: "#194d33",
                }}
                onChangeText={(text) => handleSearch(text)}
                placeholder="Search for news"
                placeholderTextColor={"#194d33"}
            />
            <View style={styles.searchResults}>
                {searchResults.map((n) => (
                    <TouchableOpacity
                        key={n.title}
                        activeOpacity={0.7}
                        onPress={() => handleModal(n)}
                    >
                        <Text
                            style={{
                                ...styles.singleResult,
                                backgroundColor: "rgb(153, 255, 221)",
                                color: "#194d33",
                            }}
                        >
                            {n.title}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <TouchableOpacity
                    onPress={() => setModalVisible(!modalVisible)}
                    style={{
                        position: "absolute",
                        zIndex: 1,
                        right: 0,
                        margin: 20,
                    }}
                >
                    <Entypo name="circle-with-cross" size={30} color="white" />
                </TouchableOpacity>
                <View style={{ height: "100%", transform: [{ scaleY: -1 }] }}>
                    <SingleNews item={currentNews} />
                </View>
            </Modal>


        </View>
    )
}

export default Search;

const styles = StyleSheet.create({
    search: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        fontSize: 15,
        marginBottom: 15,
        borderStyle: "dotted",
        borderColor: "white",
        borderRadius: 100,
        borderWidth: 2,

    },
    searchResults: {
        position: "absolute",
        zIndex: 1,
        top: 50,
    },
    singleResult: {
        borderRadius: 100,
        padding: 10,
        margin: 0.5,
        shadowColor: "black",
        elevation: 5,

    },
});