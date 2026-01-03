import React,{useState} from "react";
import {Button, Text, View} from "react-native";

export default function Index() {
    const [firstLetter, setFirstLetter] = useState('');
    const [firstNumber, setFirstNumber] = useState('');
    const [secondLetter, setSecondLetter] = useState('');
    const [secondNumber, setSecondNumber] = useState('');

    const handleLetterChange = (text: string) => {
        if (firstLetter === '') {
            setFirstLetter(text);
        } else if (secondLetter === '') {
            setSecondLetter(text);
        }
    }

    const handleNumberChange = (text: string) => {
        if (firstNumber === '') {
            setFirstNumber(text);
        } else if (secondNumber === '') {
            setSecondNumber(text);
        }
    }

    const handleReset = () => {
        setFirstLetter('');
        setFirstNumber('');
        setSecondLetter('');
        setSecondNumber('');
    }


        return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >

        <Text style={{
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 20,
        }}>{firstLetter}{firstNumber} TO {secondLetter}{secondNumber}</Text>
<View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginVertical: 20}}>
        {['A','B','C','D','E','F','G','H'].map((letter) => (
        <Text key={letter} onPress={() => handleLetterChange(letter)} style={{
            margin: 5,
            padding: 10,
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 5,
        }}>{letter}</Text>
        ))}
</View>

<View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginVertical: 20}}>

        {['1','2','3','4','5','6','7','8'].map((number) => (
        <Text key={number} onPress={() => handleNumberChange(number)} style={{
            margin: 5,
            padding: 10,
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 5,
        }}>{number}</Text>
        ))}
</View>

        <Button title="Reset" onPress={handleReset} />
    </View>
  );
}
