import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList} from 'react-native';
import axios from 'axios';
import {TextInputMask} from 'react-native-masked-text';

const FormularioCep = ({navigation}) => {

    const [cep, setCep] = useState("");
    const [data, setData] = useState([]);

    const getData = async (cep, []) => {
        axios.get(`https://viacep.com.br/ws/${cep}/json/?callback=?`)
            .then(res =>{
                const addr = res.data;
                setData(addr)
            })
            .catch((err) => {
                Alert("ops! ocorreu um erro" + err);
            });
    }

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
            onPress={() => { getData(cep, [])}}
            // onPress={() => { getData(cep, []), navigation.navigate('ResultadoCep', data ) }}
        // useEffect???
        >

            <Text style={styles.textButton}>Buscar endereço</Text>
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
        backgroundColor: '#ffc800'
    },
    input: {
        borderWidth: 0.5,
        borderColor: '#2009f3',
        paddingHorizontal: 10,
        textAlign: 'center',
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
        color: '#ddd',
        fontSize: 20
    }
})

export default FormularioCep;