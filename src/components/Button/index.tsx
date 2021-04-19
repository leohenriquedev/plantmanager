import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps} from 'react-native';
import styles from './styles';

interface ButtonProps extends TouchableOpacityProps {
    title: String;
}

export function Button({ title, ...rest } : ButtonProps) {
    return(
        <>
            <TouchableOpacity 
                    style={styles.button} 
                    activeOpacity={0.7}
                    {...rest}
                    >
                   
                    <Text 
                        style={styles.buttonText}>
                        {title}
                    </Text>
            </TouchableOpacity>
        </>
    );
}