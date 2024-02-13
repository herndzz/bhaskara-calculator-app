import { StyleSheet, View, Text } from "react-native";
import React from "react";

const Navbar = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>
                Bhaskara Calculator
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#20b2aa',
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: 50,
        top: 0,
        paddingLeft: 10
    },
    title: {
        fontWeight: 700,
        color: '#fff'
    }
});

export default Navbar;