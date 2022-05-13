import React, { useState } from 'react';
import { View, Text, useWindowDimensions } from 'react-native';
import { SceneMap, TabView } from 'react-native-tab-view';
import DiscoverScreen from '../Screens/DiscoverScreen';
import NewsScreen from '../Screens/NewsScreen';
const InshortTabs = () => {
    const layout = useWindowDimensions();
    const [index, setIndex] = useState(1);
    const [routes] = React.useState([
        { key: 'first', title: 'Discover' },
        { key: 'second', title: 'News' },
    ]);
    const renderScene = SceneMap({
        first: DiscoverScreen,
        second: NewsScreen,
    });
    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
        />
    )
}

export default InshortTabs