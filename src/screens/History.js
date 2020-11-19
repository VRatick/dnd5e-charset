import React, { useState, useCallback } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { changeParams } from '../redux/actions/charset';
import text from '../assets/text.json';
import { TextArea } from 'react-native-ui-lib';
import background from '../assets/images/background.png'
import { style } from '../styles/history'

const styles = StyleSheet.create(style)

function History(props) {
  const [characterSet, setCharacterSet ] = useState(props.characterSet.history)  

    return (
      <View style={styles.container}>
        <View style={styles.bgImageWrapper}>
          <Image source={background} style={styles.bgImage} resizeMode={'stretch'}/>
        </View>
        <View style={styles.text}>
          <Text>{text[0].character.history}</Text>
          <TextArea placeholder="Write something.." 
          value={characterSet.history} 
          onChangeText={ 
            (text) => {                   
              const charset = {...characterSet};
              charset.history = text;                       
              setCharacterSet(charset)            
              props.changeCharacterParams(charset, 'history')      
          }}        
          />
       </View>
      </View>
    );
  }

const mapStateToProps = ( state ) => ({
    characterSet: state.characterSet.characterSet,    
  });

const mapDispatchToProps = (dispatch) => ({    
    changeCharacterParams: (charSet, screen) => dispatch(changeParams(charSet, screen)),    
    
});
  
export default connect(mapStateToProps, mapDispatchToProps)(History);