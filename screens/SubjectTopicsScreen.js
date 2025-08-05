import React, { useMemo } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { SUBJECTS } from '../data/subjects';

export default function SubjectTopicsScreen({ route, navigation }) {
    const { subjectId } = route.params || {};
    const subject = useMemo(() => SUBJECTS.find(s => s.id === subjectId), [subjectId]);

    React.useEffect(() => {
        navigation.setOptions({ title: subject ? subject.title : 'Темы' });
    }, [navigation, subject]);

    if (!subject) {
        return <View style={styles.center}><Text>Предмет не найден</Text></View>;
    }

    return (
        <FlatList
            style={{ backgroundColor: '#F6F7FB' }}
            contentContainerStyle={{ padding: 16 }}
            data={subject.topics}
            keyExtractor={(t) => t.id}
            ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
            renderItem={({ item }) => (
                <View style={styles.topicCard}>
                    <Text style={styles.topicText}>{item.title}</Text>
                </View>
            )}
        />
    );
}

const styles = StyleSheet.create({
    center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    topicCard: {
        backgroundColor: '#fff',
        borderRadius: 12,
        paddingVertical: 14,
        paddingHorizontal: 14,
        shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 8, shadowOffset: { width: 0, height: 3 },
        elevation: 2,
    },
    topicText: { fontSize: 16, fontWeight: '600', color: '#333' },
});
