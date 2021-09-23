import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import axios from 'axios';

const FormularioCep = () => {

    const [cep, setCep] = useState("");
    const [data, setData] = useState([]);

    const getData = async (cep, []) => {
        axios.get(`https://viacep.com.br/ws/${cep}/json/?callback=?`)
            .then(res =>{
                const addr = res.data;
                setData(addr)
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }

return (
    <View style={styles.container}>
        <TextInput style={styles.input}
            onChangeText={cep => { this.setCep({ cep }) }}
            value={cep}
            keyboardType='numeric'
            onChangeText={text => setCep(text)}
            placeholder='Digite o CEP'
        />
        <TouchableOpacity
            style={styles.button}
            onPress={() => { getData(cep, []) }}
        >

            <Text style={styles.textButton}>Buscar endereço</Text>
        </TouchableOpacity>
        <Text>{cep}</Text>
        <Text>{JSON.stringify(data)}</Text>
    </View>
)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffc800'
    },
    input: {
        borderWidth: 0.5,
        borderColor: '#2009f3',
        paddingHorizontal: 15,
        paddingVertical: 10,
        fontSize: 20,
        backgroundColor: '#ddd',
        marginBottom: 10
    },
    button: {
        backgroundColor: '#2009f3',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderColor: '#ddd',
        borderRadius: 5
    },
    textButton: {
        color: '#a4a4a5',
        fontSize: 20
    }
})

export default FormularioCep;