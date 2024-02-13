import { View, StyleSheet } from "react-native";
import React from "react";
import Navbar from "../components/Navbar";
import BhaskaraCalculator from "../components/BhaskaraCalculator";

const Home = () => {
    return (
        <View style={styles.container}>
            <Navbar />
            <BhaskaraCalculator />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    title: {
        textAlign: 'center'
    }
});

export default Home;