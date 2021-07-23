import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'

const AddAClimb = (props) => {

    const [name, setName] = useState('')
    const [grade, setGrade] = useState('')
    const [description, setDescription] = useState('')
    const [stale, setStale] = useState(false)

    const climbsURL = 'http://localhost:5000/climbs'
    const reqBody = {name, grade, description}


    const formReset = () => {
        setName('')
        setGrade('')
        setDescription('')
    }

    const handleSubmit = (url, body, callback) => {
        const options = {
            'method': 'POST',
            'headers': {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(body)
        }
        fetch(url,options)
        .then(callback)
        .then(props.setStale(!stale))
    }

    return (
        <View style={styles.formContainer} >

            <Text style={styles.header}>Climb Form</Text>

            <TextInput
                style={styles.inputContainer}
                placeholder="Route name"
                value={name}
                onChangeText={text => setName(text)}
            />

            <TextInput
                style={styles.inputContainer}
                placeholder="Grade"
                value={grade}
                onChangeText={text => setGrade(text)}
            />

            <TextInput
                style={styles.inputContainer}
                placeholder="Description"
                value={description}
                onChangeText={text => setDescription(text)}
            />

            <View style={styles.buttonContainer}>
                <Button 
                title='Add This Climb'  
                style={styles.button} 
                onPress={() => handleSubmit(climbsURL, reqBody, formReset())}/>
            </View>

        </View>
    )
}

export default AddAClimb


const styles = StyleSheet.create({

    inputContainer: {
        borderWidth: 1,
        width: 300,
        height: 40,
        borderRadius: 40 / 2,
        marginTop: 10,
        padding: 10,
        margin: 5
    },
    formContainer: {
        height: 300,
        alignItems: 'center',
        flex: .5
    },
    buttonContainer: {
        backgroundColor: '#ADC698',
        borderWidth: 1,
        width: 300,
        height: 40,
        borderRadius: 40 / 2,
        marginTop: 10,
       
    },
    header: {
        color: 'black',
        fontSize: 50,
        fontWeight: 'bold',
    }
})