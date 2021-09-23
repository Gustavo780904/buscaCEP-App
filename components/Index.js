import React from 'react';
import { Text, View, TouchableOpacity, Button, StyleSheet } from 'react-native';

const Index = ({ navigation }) => {
    return (
        <View>
            <Text>teste</Text>
            <TouchableOpacity>
                <View style={styles.buttonContainer}>
                    <Button
                        color="#fdc200"
                        title="Busca por CEP"
                        onPress={() => navigation.navigate('FormularioCep')}
                    />
                    </View>
                    <View style={styles.buttonContainer}>
                    <Button

                        color="#1100fd"
                        title="Busca por Endereço"
                        onPress={() => navigation.navigate('FormularioRua')}
                    />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
 
    buttonContainer: {
        marginHorizontal: 90,
        marginVertical: 10
    }
})

export default Index;