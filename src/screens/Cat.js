import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
export default function Contact() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.flexBox}>
                <Image style={styles.img} source={require('../img/cat1.webp')} />
                <Text style={styles.textInside}>Abisinio</Text>
            </View>
            <View style={styles.flexBox}>
                <Image style={styles.img} source={require('../img/cat2.webp')} />
                <Text style={styles.textInside}>Americano de pelo duro</Text>
            </View>
            <View style={styles.flexBox}>
                <Image style={styles.img} source={require('../img/cat3.webp')} />
                <Text style={styles.textInside}>Asiático</Text>
            </View>
            <View style={styles.flexBox}>
                <Image style={styles.img} source={require('../img/cat4.webp')} />
                <Text style={styles.textInside}>Azul Ruso</Text>
            </View>
            <View style={styles.flexBox}>
                <Image style={styles.img} source={require('../img/cat5.webp')} />
                <Text style={styles.textInside}>Balinés</Text>
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