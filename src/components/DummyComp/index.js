import React from 'react';
import { Text, View } from 'react-native';
import { Fonts, Images, Colors } from '../../config';



const DummyComp = ({ }) => {
    return (
        <View style={{ paddingVertical: 10, justifyContent: "center", alignItems: "center", }}>
            <Text style={{ fontSize: 18 }}>Body With Scroll</Text>
        </View>
    );
}
export default DummyComp