import axios from 'axios';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native';
import { Picker } from '@react-native-community/picker'
import { Ufs } from '../util/Ufs'

// import SiglaEstados from './SiglaEstados';

const FormularioRua = ({ }) => {

    const [logradouro, setLogradouro] = useState("");
    const [localidade, setLocalidade] = useState("");
    // const [uf, setUf] = useState("");
    const [data, setData] = useState({});
    const [siglas] = useState(Ufs);
    const [sigla, setSigla] = useState("Selecione a UF")
    // console.log(siglas)
    // console.log(sigla)
    // const teste = siglas.map(estados => estados.sigla)

    // console.log(teste)
    // setSiglas(teste)
    // console.log(siglas)
    const getData = async (sigla, localidade, logradouro) => {
        // axios.get(`viacep.com.br/ws/${sigla}/${localidade}/${logradouro}/json/`)
        // axios.get(`viacep.com.br/ws/mg/formiga/elisa/json/`)
        axios.get(`https://viacep.com.br/ws/MG/FORMIGA/ELISA GOMES/json/`)
            .then(res => {
                const addr = res.data;
                setData(addr)
                console.log(data)
            })
            .catch((err) => {
                Alert.alert("ops, ocorreu um erro!" + err);
            });
    }
    return (
        <ScrollView>
        <View style={styles.container}>

            <View style={styles.input}>
                <Picker
                    style={styles.select}
                    onValueChange={(sigla) => setSigla(sigla)}
                    selectedValue={sigla}
                >
                    {
                        siglas.map(sigla => {
                            return <Picker.Item key={sigla} label={sigla.sigla} value={sigla.sigla} />
                        })
                    }
                </Picker>

            </View>

            <TextInput style={styles.input}
                value={localidade}
                autoCapitalize={'characters'}
                onChangeText={text => setLocalidade(text)}
                placeholder='Digite a localidade'
                options={{
                    maskType: 'BRL',
                }}

            />
            <TextInput />
            <TextInput style={styles.input}
                value={logradouro}
                type="name"
                autoCapitalize={'characters'}
                onChangeText={text => setLogradouro(text)}
                placeholder='Digite o logradouro'
                options={{
                    maskType: 'BRL',
                }}
            />
            <TextInput />

            <TouchableOpacity
                style={styles.button}
                onPress={() => { getData(sigla, localidade, logradouro) }}
            >
                <Text style={styles.textButton}>Buscar endereço</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => { setLocalidade(""), setLogradouro(""), setData([]), setSigla("Selecione a UF") }}
            >
                <Text style={styles.textButton}>Limpar formulário</Text>
            </TouchableOpacity>
            
            <View style={styles.resultado}>
                <Text style={styles.textResultado}>CEP: {data.cep}</Text>
                <Text style={styles.textResultado}>Logradouro: {data.logradouro}</Text>
                <Text style={styles.textResultado}>Complemento: {data.complemento}</Text>
                <Text style={styles.textResultado}>Bairro: {data.bairro}</Text>
                <Text style={styles.textResultado}>Localidade: {data.localidade}</Text>
                <Text style={styles.textResultado}>UF: {data.uf}</Text>
            </View>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#241c66'
    },
    input: {
        borderWidth: 1,
        borderColor: '#ffc400',
        paddingHorizontal: 10,
        textAlign: 'center',
        paddingVertical: 10,
        fontSize: 20,
        backgroundColor: '#ddd',
        marginBottom: 10,
        marginTop: 10,
    },
    select: {
        // textAlign: 'center',
        // paddingVertical: 10,
        paddingHorizontal: 85,
        // backgroundColor: '#ddd',
        // marginBottom: -7,
    },
    button: {
        backgroundColor: '#ffc400',
        paddingHorizontal: 28,
        paddingVertical: 15,
        borderColor: '#ddd',
        borderRadius: 5,
        marginBottom: 10
    },
    textButton: {
        color: '#575757',
        fontSize: 20
    },
    textResultado: {
        color: '#ddd',
        fontSize: 20,
        fontWeight: 'bold'
    },
    resultado: {
        borderWidth: 1,
        borderColor: '#ffc400',
        padding: 15,
        marginVertical: 40,
    }
})


export default FormularioRua;