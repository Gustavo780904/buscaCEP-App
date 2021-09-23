import React from 'react';
import { Text, View, TouchableOpacity, Button, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Index = ({ navigation }) => {
    return (
        <LinearGradient
            colors={['#1100fd', '#fdc200']}
            style={styles.buttonContainer}
        >
            {/* <Text>teste</Text> */}
            <TouchableOpacity>
                <Button
                style = {styles.button}
                    color="#fdc200"
                    title="Busca por CEP"
                    onPress={() => navigation.navigate('FormularioCep')}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Button

                    color="#1100fd"
                    title="Busca por Endereço"
                    onPress={() => navigation.navigate('FormularioRua')}
                />
            </TouchableOpacity>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({

    buttonContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
    },
    button:{
        margin:40,
        color: 'black',
        paddingVertical: 'auto'
    }

})

export default Index;