import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeworkScreen() {
    return (
        <View style={styles.box}>
            <Text style={styles.text}>Домашние задания (заглушка)</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    box: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F6F7FB' },
    text: { fontSize: 16, color: '#333' },
});
