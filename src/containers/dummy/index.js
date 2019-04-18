
import React, { Component } from 'react';
import {
    View,
    StatusBar,
    ScrollView,
    Text,
} from 'react-native';
import { Fonts, Images, Colors } from '../../config';
import { DummyComp } from '../../components';

class Dummy extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    static navigationOptions = {
        header: null
    }



    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(newProps) {

    }



    render() {

        return (
            // screen
            <View style={{ flex: 1, backgroundColor: "white" }}>

                <StatusBar barStyle="light-content" backgroundColor={"black"} />

                {/* header */}
                <View style={{ paddingVertical: 20, justifyContent: "center", alignItems: "center", backgroundColor: "brown" }}>
                    <Text style={{ fontSize: 25, color: "white" }}>Header</Text>
                </View>

                {/* Body with scroll */}
                <View style={{ flex: 1 }}>
                    <ScrollView showsVerticalScrollIndicator={false} style={{}} keyboardShouldPersistTaps="handled" keyboardDismissMode="interactive">

                        <DummyComp />
                        <DummyComp />
                        <DummyComp />
                        <DummyComp />
                        <DummyComp />
                        <DummyComp />
                        <DummyComp />
                        <DummyComp />
                        <DummyComp />
                        <DummyComp />
                        <DummyComp />
                        <DummyComp />
                        <DummyComp />
                        <DummyComp />

                    </ScrollView>
                </View>

                {/* footer or bottom tabs */}
                <View style={{ paddingVertical: 20, justifyContent: "center", alignItems: "center", backgroundColor: "brown" }}>
                    <Text style={{ fontSize: 25, color: "white" }}>Footer</Text>
                </View>
            </View>
        )
    }
}

export default Dummy

// const mapStateToProps = (state) => {
//     return {
//     }
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Dummy);