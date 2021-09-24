import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList, Keyboard, ActivityIndicator, Alert } from 'react-native';
import axios from 'axios';
import { TextInputMask } from 'react-native-masked-text';

const FormularioCep = ({ navigation }) => {

    const [cep, setCep] = useState("");
    const [data, setData] = useState({});

    const getData = async (cep) => {
        // axios.get(`https://viacep.com.br/ws/${cep}/json/?callback=?`)
        axios.get(`https://viacep.com.br/ws/38440122/json/`)
            .then(res => {
                const addr = res.data;
                // const teste = addr.filter())
                console.log(addr)
                setData(addr)
                // navigation.navigate('ResultadoCep', data);
            })
            .catch((err) => {
                Alert.alert = ("ops! ocorreu um erro" + err);
            });
    }
    console.log(data)
    // useEffect(() => {
    //     }

    return (
        <View style={styles.container}>
            <TextInputMask style={styles.input}
                onChangeText={cep => { this.setCep({ cep }) }}
                value={cep}
                // value={'38440122'}
                type="zip-code"
                keyboardType='numeric'
                onChangeText={text => setCep(text)}
                placeholder='Digite o CEP'
                options={{
                    maskType: 'BRL',

                }}
            />
            <TouchableOpacity
                style={styles.button}
                // onPress={() => { getData(cep)}}
                onPress={() => { getData(cep) }}
            // useEffect???
            >
                <Text style={styles.textButton}>Buscar endereço</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => { setCep(""), setData([]) }}
            >
                <Text style={styles.textButton}>Limpar formulário</Text>
            </TouchableOpacity>
             <View style={styles.resultado}>
               <Text style={styles.textResultado}>CEP: {data.cep}</Text>
               <Text style={styles.textResultado}>Logradouro: {data.logradouro}</Text>
               <Text style={styles.textResultado}>Complemento: {data.complemento}</Text>
               <Text style={styles.textResultado}>Localidade: {data.localidade}</Text>
               <Text style={styles.textResultado}>Bairro: {data.bairro}</Text>
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
    input: {
        borderWidth: 1,
        borderColor: '#241c66',
        paddingHorizontal: 10,
        textAlign: 'center',
        paddingVertical: 10,
        fontSize: 20,
        backgroundColor: '#ddd',
        marginBottom: 10
    },
    button: {
        backgroundColor: '#32298b',
        paddingHorizontal: 28,
        paddingVertical: 15,
        borderColor: '#ddd',
        borderRadius: 5,
        marginBottom: 10
    },
    textButton: {
        color: '#ddd',
        fontSize: 20
    },
    textResultado:{
        color: '#575757',
        fontSize: 20,
        fontWeight: 'bold' 
    },
    resultado: {
        borderWidth: 1,
        borderColor: '#32298b',
        padding: 15,
        marginVertical: 40,
    }
})

export default FormularioCep;