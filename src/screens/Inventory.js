import React, { useState } from 'react';
import { Text, View, ScrollView, StyleSheet, ImageBackground, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { changeParams } from '../redux/actions/charset';
import text from '../assets/text.json';
import textForArray from '../assets/textForArray.json';
import { TextArea } from 'react-native-ui-lib';
import { style } from '../styles/inventory';
import background from '../assets/images/background_sq.png'
import title from '../assets/images/scroll_list.png'

const styles = StyleSheet.create(style)

function Inventory(props) {
  const [characterSet, setCharacterSet ] = useState(props.characterSet.inventory)
  const coins = [];  

  textForArray.coinsText.forEach( (item) => {
    coins.push(
      <View key={item} style={styles.coins}>
        <ImageBackground source={background} style={styles.backgroundImage}>
          <Text style={styles.coinsText}>{text[0].character[item]}</Text>        
          <TextInput
            style={styles.coinsInput}
            maxLength={6}
            placeholder="Write something.."          
            onChangeText={text => {
              const charset = {...characterSet};
              charset[item] = text;                       
              setCharacterSet(charset)            
              props.changeCharacterParams(charset, 'inventory')                  
            }}           
            value={characterSet[item]}/> 
        </ImageBackground>
      </View>
    )
  })

    return (
      <ScrollView style={styles.background}>
        <View style={styles.container}>
          <View style={styles.containerCoins}>
            {coins}
          </View>
          <View style={styles.containerItems}>
            <ImageBackground source={title} style={styles.backgroundImageItems}>
              <Text style={styles.itemsText}>{text[0].character.items}</Text>
            </ImageBackground>
            <TextArea placeholder="Write something.." value={characterSet.items} onChangeText={ (text) => {
                const charset = {...characterSet};
                charset.items = text;                       
                setCharacterSet(charset)            
                props.changeCharacterParams(charset, 'inventory')                             
              }
            }/>
          </View>
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
  
export default connect(mapStateToProps, mapDispatchToProps)(Inventory);