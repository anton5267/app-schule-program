import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://i.pravatar.cc/200' }}
                style={{ width: 96, height: 96, borderRadius: 48, marginBottom: 12 }}
            />
            <Text style={styles.name}>Имя Фамилия</Text>
            <Text style={styles.note}>Ученик • 10 класс</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F6F7FB' },
    name: { fontSize: 18, fontWeight: '700' },
    note: { color: '#666', marginTop: 4 },
});
