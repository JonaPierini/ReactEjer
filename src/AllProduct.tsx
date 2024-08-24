import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

export const AllProduct = () => {

    interface User {
        userId: number,
        id: number,
        title: string,
        completed: boolean
    }


    const [user, setUser] = useState<User[]>()

    const getData = async (): Promise<User[]> => {
        const respose = await fetch('https://jsonplaceholder.typicode.com/todos/')
        const data = await respose.json()
        return data
    }

    useEffect(() => {
        getData().then((resp) => setUser(resp))
    }, [])


    return (
        <View style={styles.container}>
            <Text style={styles.header}>AllProduct</Text>
            <FlatList
                data={user}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Text style={styles.itemText}>{item.id}. {item.title}</Text>
                    </View>
                )}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10
    },
    listContainer: {
        paddingBottom: 10 // Add padding to the bottom of the list
    },
    itemContainer: {
        backgroundColor: 'tomato',
        padding: 15,
        marginVertical: 5,
        borderRadius: 5,
        height: 100
    },
    itemText: {
        color: 'white',
        fontSize: 16
    }
});
