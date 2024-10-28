import {StyleSheet, Text, TextInput, View, Button, Alert, TouchableOpacity, ToastAndroid, Image,ScrollView} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import RNPickerSelect from 'react-native-picker-select';
import React, {useState}  from 'react';

const App=() => {
    const [pw, SetPw] = useState("");
    const [pd, SetPd] = useState("");
    const [pe, SetPe] = useState("");
    return (
        <ScrollView style={styles.container}>
            <Image
                source={require('./img/Question1.png')}
                style={{ width: 400, height: 200 }}
                resizeMode="contain"
            />
            <RNPickerSelect
                onValueChange={(value) => SetPw(value)}
                items={[
                    { label: '24', value: '24' },
                    { label: '10', value: '10' },
                    { label: '11', value: '11' },

                ]}
            />
            <Text>What is the answer?</Text>
            <Image
                source={require('./img/Question2.png')}
                style={{ width: 400, height: 200 }}
                resizeMode="contain"
            />
            <RNPickerSelect
                onValueChange={(value) => SetPd(value)}
                items={[
                    { label: '20/9', value: '20/9' },
                    { label: '2.22', value: '2.22' },
                    { label: '2 2/9', value: '2 2/9' },

                ]}
            />
            <Text>What is the answer?</Text>

            <Image
                source={require('./img/Question3.png')}
                style={{ width: 400, height: 200 }}
                resizeMode="contain"
            />
            <RNPickerSelect
                onValueChange={(value) => SetPe(value)}
                items={[
                    { label: '-16288', value: '-16288' },
                    { label: '-1056', value: '-1056' },
                    { label: '-1101', value: ' -1101' },

                ]}
            />
            <Text>What is the answer?</Text>



            <Button onPress={() => {
                const SetPw = '10'
                const SetPd = '2 2/9'
                const SetPe = '-16288'
                let message = 'No answer was entered'
                let score = 0
                if (pw === SetPw){
                    score += 1;
                }
                if (pd === SetPd){
                    score += 1;
                }
                if (pe === SetPe){
                    score += 1;
                }
                message = 'You have' + score + 'correct answers'
                Alert.alert(message)
            }}
                title="Submit answers" color="cadetblue"
            />




            <StatusBar hidden={true} />
        </ScrollView>
    );
};

export default App;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',


    },
});








