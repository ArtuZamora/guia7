import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
export default function Home() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.flexBox}>
                <Image style={styles.img} source={require('../img/dog1.jpg')} />
                <Text style={styles.textInside}>Pastor de Bérgamo</Text>
            </View>
            <View style={styles.flexBox}>
                <Image style={styles.img} source={require('../img/dog2.jpg')} />
                <Text style={styles.textInside}>Schnoodle</Text>
            </View>
            <View style={styles.flexBox}>
                <Image style={styles.img} source={require('../img/dog3.jpg')} />
                <Text style={styles.textInside}>Galgo</Text>
            </View>
            <View style={styles.flexBox}>
                <Image style={styles.img} source={require('../img/dog4.jpg')} />
                <Text style={styles.textInside}>Retriever</Text>
            </View>
            <View style={styles.flexBox}>
                <Image style={styles.img} source={require('../img/dog5.jpg')} />
                <Text style={styles.textInside}>Elkhound</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 30
    },
    flexBox: {
        flex: 1,
        flexDirection: 'row',
        margin: 10
    },
    img: {
        height: 150,
        width: 150,
        marginBottom: 30
    },
    textInside: {
        justifyContent: 'center',
        alignContent: 'center',
        padding: 20
    }
});