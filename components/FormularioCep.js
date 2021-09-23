import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList, Keyboard } from 'react-native';
import axios from 'axios';
import { TextInputMask } from 'react-native-masked-text';

const FormularioCep = ({ navigation }) => {

    const [cep, setCep] = useState("");
    const [data, setData] = useState({});

    const getData = async (cep) => {
        axios.get(`https://viacep.com.br/ws/${cep}/json/?callback=?`)
            .then(res => {
                const addr = res.data;
                console.log(res)
                setData(addr)
            })
            .catch((err) => {
                Alert("ops! ocorreu um erro" + err);
            });
    }

    useEffect(() => {
        if(Object.keys(data).length != 0){
            navigation.navigate('ResultadoCep', data );
        }
      });

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
            onPress={() => { getData(cep)}}
            // useEffect???
            >
                <Text style={styles.textButton}>Buscar endereço</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => { setCep(""), setData([])}}
            >
                <Text style={styles.textButton}>Limpar formulário</Text>
            </TouchableOpacity>
            {/* <Text>{cep}</Text> */}
            <Text>{data}</Text>
            {/* <FlatList
          data={data}
          numColumns={1}
          keyExtractor={({index}) => index}
          renderItem={({item}) => (
              <TextInput
              placeholder='CEP'
              value={item.cep}></TextInput>
          )}
        /> */}
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
    }
})

export default FormularioCep;