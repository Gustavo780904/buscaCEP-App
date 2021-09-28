import React from 'react';
import { StyleSheet, View, Text, FlatList, TextInput } from "react-native";

const ResultadoCep = ({ route }) => {
    return (
        <View style={styles.container}>
            {/* <Text>CEP: {route.params.logradouro}</Text> */}

            <View style={styles.resultado}>
                <Text style={styles.textResultado}><Text style={styles.text}>CEP: </Text>{route.params.cep}</Text>
                <Text style={styles.textResultado}><Text style={styles.text}>Logradouro: </Text>{route.params.logradouro}</Text>
                <Text style={styles.textResultado}><Text style={styles.text}>Complemento: </Text>{route.params.complemento}</Text>
                <Text style={styles.textResultado}><Text style={styles.text}>Bairro: </Text>{route.params.bairro}</Text>
                <Text style={styles.textResultado}><Text style={styles.text}>Localidade: </Text>{route.params.localidade}</Text>
                <Text style={styles.textResultado}><Text style={styles.text}>UF: </Text>{route.params.uf}</Text>
            </View>
        </View>
    )


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffc400'
    },
    textResultado: {
        color: '#575757',
        fontSize: 20,
        fontWeight: 'bold'
    },
    resultado: {
        borderWidth: 1,
        borderColor: '#32298b',
        padding: 15,
        marginVertical: 40,
        backgroundColor: '#ddd'
    },
    text: {
        color: '#32298b'
    }
})
export default ResultadoCep;