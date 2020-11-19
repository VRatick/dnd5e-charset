import React, { useState } from 'react';
import { Text, View, ScrollView, TextInput, StyleSheet, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { changeParams } from '../redux/actions/charset';
import text from '../assets/text.json';
import textForArray from '../assets/textForArray.json';
import { TextArea } from 'react-native-ui-lib';
import { style } from '../styles/info';
import title from '../assets/images/scroll_list.png'

const styles = StyleSheet.create(style)

function Info(props) {
  const [characterSet, setCharacterSet ] = useState(props.characterSet.info);
  const info = [];
  const description = [];  
  
  textForArray.infoText.forEach( (item) => {
    info.push(
      <View key={item} style={{
        height: 120,       
        padding: 10,
        borderColor: 'black',
        borderBottomWidth: 1,        
        borderLeftWidth: 1        
      }}>
        <ImageBackground source={title} style={styles.backgroundImageItems}>
          <Text style={styles.text}>{text[0].character[item]}</Text>  
        </ImageBackground>      
        <TextInput
          placeholder="Write something.."
          style={styles.text}
          onChangeText={text => {            
            const charset = {...characterSet};
            charset[item] = text;                       
            setCharacterSet(charset)            
            props.changeCharacterParams(charset, 'info')                      
          }}           
          value={characterSet[item]}/> 
      </View>
    )
  })
  textForArray.descriptionText.forEach( (item) => {
    description.push(
      <View key={item} style={{
        height: 100,                
        padding: 10,
        borderColor: 'black',
        borderBottomWidth: 1,          
      }}>
        <ImageBackground source={title} style={styles.backgroundImageItems}>
          <Text style={styles.text}>{text[0].character[item]}</Text>    
        </ImageBackground>    
        <TextInput
          placeholder="Write something.."
          style={styles.text}
          onChangeText={text => {            
            const charset = {...characterSet};
            charset[item] = text;                       
            setCharacterSet(charset)            
            props.changeCharacterParams(charset, 'info')                            
          }}           
          value={characterSet[item]}/> 
      </View>
    )
  })
    return (
      <ScrollView style={styles.background}>
        <View style={styles.container}>
          <View style={styles.containerDescription}>          
            {description}
          </View>
          <View style={styles.containerInfo}>
            {info}
          </View>
        </View>
        <View>
          <ImageBackground source={title} style={styles.backgroundImageItems}>
            <Text style={styles.text}>{text[0].character.features_and_abilities}</Text>    
          </ImageBackground>    
          <TextArea
            placeholder="Write something.."
            style={styles.text}
            onChangeText={text => {            
              const charset = {...characterSet};
              charset.features_and_abilities = text;                       
              setCharacterSet(charset)            
              props.changeCharacterParams(charset, 'info')                            
            }}           
            value={characterSet.features_and_abilities}/> 
        </View>
      </ScrollView>
    );
  }

const mapStateToProps = ( state ) => ({
    characterSet: state.characterSet.characterSet,    
  });

const mapDispatchToProps = (dispatch) => ({    
    changeCharacterParams: (charSet, screen) => dispatch(changeParams(charSet, screen)),    
    
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Info);