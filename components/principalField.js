import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, TextInput, Image, ScrollView } from 'react-native';
import * as Speech from 'expo-speech'

import PhonicSound from './phonicSound';
import db from '../localdb.json'

export default class PrincipalField extends React.Component {
    constructor() {
        super();
        this.state = {
            text: '',
            word: null,
            wordEnglish: [],
            wordPortuguese: []
        }
    }

    speech = (language) => {
        Speech.speak(language)
    }
    render() {
        if (this.state.word === this.state.text) {
            return (
                <View>
                    <TouchableOpacity style={styles.buttonEnglish}
                        onPress={() => this.speech(this.state.wordEnglish)}>
                        <Text style={styles.textEnglish}>{this.state.wordEnglish}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonPortuguese}
                        onPress={() => this.speech(this.state.wordPortuguese)}>
                        <Text style={styles.textPortuguese}>{this.state.wordPortuguese}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonBack}
                        onPress={() => {
                            this.setState({ word: null })
                        }}>
                        <Text style={styles.textBack}>BACK</Text>
                    </TouchableOpacity>
                </View>
            )
        } else {
            return (
                <ScrollView>
                    <View>
                        <Image source={require('../assets/speech_image.png')} style={styles.image} />
                        <TextInput
                            onChangeText={text => { this.setState({ text: text }) }}
                            value={this.state.text}
                            style={styles.textInput}
                            placeholder={'Search'}
                            placeholderTextColor='black'
                        />

                        <TouchableOpacity style={styles.buttonSearch}
                            onPress={() => {
                                var word = this.state.text.toLowerCase().trim();
                                db[word] ?
                                    (this.setState({ wordEnglish: db[word].wordEnglish }),
                                        this.setState({ wordPortuguese: db[word].wordPortuguese }),
                                        this.setState({ word: this.state.text })) :
                                    Alert.alert("World Speech couldn't find this word, try another one!");
                            }}>
                            <Text style={styles.textButton}>SEARCH</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            )
        }
    }
}

const styles = StyleSheet.create({
    textInput: {
        width: '80%',
        height: 40,
        borderWidth: 4,
        borderRadius: 40,
        borderColor: '#00BFFF',
        textAlign: 'center',
        color: 'black',
        alignSelf: 'center',
        position: 'relative',
        top: 200
    },
    buttonSearch: {
        width: '50%',
        height: 55,
        alignSelf: 'center',
        padding: 10,
        margin: 10,
        backgroundColor: '#00BFFF',
        borderWidth: 4,
        borderRadius: 20,
        borderColor: 'black',
        alignItems: 'center',
        position: 'relative',
        top: 230
    },
    textButton: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    buttonEnglish: {
        alignItems: 'center',
        backgroundColor: 'red',
        borderWidth: 4,
        borderRadius: 20,
        borderColor: 'blue',
        width: 150,
        height: 55,
        alignSelf: 'center',
        marginTop: 20
    },
    textEnglish: {
        color: 'blue',
        fontSize: 20,
        fontWeight: 'bold'
    },
    buttonPortuguese: {
        alignItems: 'center',
        backgroundColor: 'yellow',
        borderWidth: 4,
        borderRadius: 20,
        borderColor: 'green',
        width: 150,
        height: 55,
        alignSelf: 'center',
        marginTop: 20
    },
    textPortuguese: {
        color: 'green',
        fontSize: 20,
        fontWeight: 'bold'
    },
    buttonBack: {
        alignItems: 'center',
        backgroundColor: '#00BFFF',
        borderWidth: 4,
        borderRadius: 20,
        borderColor: 'black',
        width: 150,
        height: 55,
        alignSelf: 'center',
        marginLeft: 100,
        position: 'relative',
        top: 100
    },
    textBack: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    },
    image: {
        width: 150,
        height: 150,
        position: 'relative',
        top: 100,
        alignSelf: 'center',
        borderWidth: 4,
        borderColor: 'black',
        borderRadius: 10
    }
})