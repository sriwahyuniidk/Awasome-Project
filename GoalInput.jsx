import { useState} from 'react';
import {
    View, 
    TextInput, 
    Button, 
    StyleSheet, 
    Modal, 
    Image,
} from 'react-native';

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }  

    
    return (
        <Modal visible={props.visible}animationType="slide"> 
        <View style={styles.inputContainer}>
            <Image 
            style={styles.image} 
            source={require('../assets/image/paw.png')}
            />
        <TextInput 
          style={styles.textInput} 
          placeholder='Your course Poem' 
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}> 
            <View style={styles.button}> 
                <Button style={styles.btn} title='Add Poem' onPress={addGoalHandler} color= "#ADCF9F"/>
            </View>
            <View style={styles.button}>
                <Button title="Cancel" onPress={props.onCancel } color= "#ADCF9F"/>
            </View>
        </View>
      </View>
      </Modal>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 24,
        padding: 13,
        backgroundColor: '#FFFBF5',
    },
    image: {
        width: 150,
        height: 150,
    },
    
    textInput: {
        borderWidth: 1,
        borderColor:'#cccccc',
        backgroundColor:'#cccccc',
        borderRadius: 5,
        width:'100%',
        padding: 15,
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
    },
    button: {
        width: '30%',
        marginHorizontal: 8
    }
})