import React, { useEffect, useState } from 'react'
import { Button, FlatList, StyleSheet, Text, View } from 'react-native'

export const PageProduct = () => {

    interface User {
        userId: number,
        id: number,
        title: string,
        completed: boolean
    }


    const [user, setUser] = useState<User>()

    const [defectPage, setDefectPage] = useState(1)

    const getData = async (id: number): Promise<User> => {
        const respose = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        const data = await respose.json()
        return data
    }

    useEffect(() => {
        getData(defectPage).then((resp) => setUser(resp))
    }, [defectPage])

    const handleNextPage = () => {
        if (user?.id === 200) return
        setDefectPage(defectPage + 1)
    }

    const handlePrevPage = () => {
        if (defectPage === 1) return
        setDefectPage(defectPage - 1)
    }



    return (
        <View style={styles.container}>
            <Text style={styles.header}>PageProduct</Text>
            <View>
                <Text>{user?.id}</Text>
                <Text>{user?.title}</Text>
            </View>
            <Button title='Nex' onPress={handleNextPage}></Button>
            <Button title='Prev' onPress={handlePrevPage}></Button>
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
