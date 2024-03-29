import React, { useState } from 'react';
import { SafeAreaView, Text, Image, TouchableOpacity} from 'react-native';
import wateringImg from '../../assets/watering.png';
import styles from './styles';
import { Button } from '../../components/Button';

export function Welcome() {

    const [visible, setVisible] = useState(false);

    function handleVisibility() {
        setVisible(true);
    }

    return(
        <SafeAreaView 
            style={styles.container}>
            <Text 
                style={styles.title}>
                Gerencie {'\n'}
                suas plantas {'\n'}
                de forma fácil
            </Text>

            {
                visible &&
                <Image 
                source={visible ? wateringImg : ''} 
                style={styles.image} /> 
            }

            <Text 
                style={styles.subtitle}>
                Não esqueça mais de regar suas plantas. 
                Nós cuidamos de lembrar você sempre que precisar
            </Text>

            <Button title=">" onPress={handleVisibility}/>
        </SafeAreaView>
    );
}