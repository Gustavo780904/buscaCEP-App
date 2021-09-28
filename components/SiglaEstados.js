import React from 'react';
import { View } from 'react-native';
import { Picker } from '@react-native-community/picker'
import React, { useState } from 'react';


const SiglaEstados = () => {
    
    const [uf, setUf] = useState("");

    return (
        <View>
            <Picker
                // selectedValue={selectedValue}
                style={styles.input}
                onValueChange={(uf) => setUf(uf)}
            >
                <Picker.Item label="MG" value="MG" />
                <Picker.Item label="RJ" value="RJ" />
            </Picker>
        </View>
    )
}


export default SiglaEstados;