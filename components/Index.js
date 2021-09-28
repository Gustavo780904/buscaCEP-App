import React from 'react';
import { Text, View, TouchableOpacity, Button, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Index = ({ navigation }) => {
    return (
        <LinearGradient
            colors={['#32298b', '#fdc200']}
            style={styles.buttonContainer}
        >
            {/* <Text>teste</Text> */}
            <TouchableOpacity
                style={styles.button1}
                onPress={() => navigation.navigate('FormularioCep')}
            >
                <Text style={styles.textButton1}>Busca por CEP</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button2}
                color="#32298b"
                title="Busca por Endereço"
                // onPress={() => navigation.navigate('FormularioRua')}
                onPress={() => alert("Serviço em manutenção! Desculpe-nos pelo transtorno, estamos trabalhando para melhorar o serviço de busca de endereços.")}
            >
                <Text style={styles.textButton2}>Busca por Endereço</Text>
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
    button1:{
        backgroundColor: '#fdc200',
        margin: 40,
        fontWeight: 'bold',
        paddingVertical: 15,
        borderColor: '#ddd',
        borderRadius: 5,
        marginBottom: 50,
        marginTop: 50,
        width: 200,
    },
    button2:{
        backgroundColor: '#32298b',
        margin: 40,
        fontWeight: 'bold',
        paddingVertical: 15,
        borderColor: '#ddd',
        borderRadius: 5,
        marginBottom: 50,
        marginTop: 50,
        width: 200,
    },
 
    textButton1: {
        fontSize: 20,
        textAlign: 'center',
        color: '#535353',
    },
    textButton2: {
        fontSize: 20,
        textAlign: 'center',
        color: '#9e9e9e',
    }

})

export default Index;