import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SUBJECTS } from '../data/subjects';

export default function SubjectsListScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <FlatList
                data={SUBJECTS}
                keyExtractor={(i) => i.id}
                contentContainerStyle={{ padding: 16 }}
                ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.card}
                        activeOpacity={0.8}
                        onPress={() => navigation.navigate('SubjectTopics', { subjectId: item.id })}
                    >
                        <View style={[styles.iconBox, { backgroundColor: item.color }]}>
                            <Ionicons name={item.icon} size={24} color="#fff" />
                        </View>
                        <Text style={styles.title}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F6F7FB' },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 14,
        paddingVertical: 16,
        paddingHorizontal: 14,
        shadowColor: '#000', shadowOpacity: 0.06, shadowRadius: 10, shadowOffset: { width: 0, height: 4 },
        elevation: 2,
    },
    iconBox: {
        width: 48, height: 48, borderRadius: 12, alignItems: 'center', justifyContent: 'center', marginRight: 12,
    },
    title: { fontSize: 18, fontWeight: '700', color: '#222' },
});
