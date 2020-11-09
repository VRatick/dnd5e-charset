import {    
    CHANGE_PARAMS    
  } from '../constants/charset';

import { AsyncStorage } from 'react-native';
  
const initialState = {
    characterSet: {
        basic: {
            name: null,
            lvl: null,
            class: null,
            pre_history: null,
            history: null,
            worldviewer: null,
            experience_points: null,
            experience_points_max: null,
            armor_class: null,
            initiative: null,
            speed: null,
            hp_full: null,
            hp_now: null,
            hp_for_lvl: null,
            hp_temporary: null,
            weapon: ['', '', '', '', ''],
            weapon_count: 1,
            death_rolls: null,
            passive_wisdom: null,
            equipment: null,
        },

        attributes: {
            inspiration_points: null,
            skill_bonus: null,
            body_type: null,
            wisdom: null,
            charisma: null,
            strength: null,
            dexterity: null,
            intelligence: null,
            mod_body_type: null,
            mod_wisdom: null,
            mod_charisma: null,
            mod_strength: null,
            mod_dexterity: null,
            mod_intelligence: null,
            save_body_type: null,
            save_wisdom: null,
            save_charisma: null,
            save_strength: null,
            save_dexterity: null,
            save_intelligence: null,
            save_body_type_chek: null,
            save_wisdom_chek: null,
            save_charisma_chek: null,
            save_strength_chek: null,
            save_dexterity_chek: null,
            save_intelligence_chek: null,
            acrobatics: null,
            athletics: null,
            magic: null,
            deception: null,
            history: null,
            insight: null,
            intimidation: null,
            investigation: null,
            medicine: null,
            nature: null,
            perception: null,
            performance: null,
            conviction: null,
            religion: null,
            sleight_of_hand: null,
            secrecy: null,
            survival: null,
            communication_with_animals: null,
            acrobatics_chek: null,
            athletics_chek: null,
            magic_chek: null,
            deception_chek: null,
            history_chek: null,
            insight_chek: null,
            intimidation_chek: null,
            investigation_chek: null,
            medicine_chek: null,
            nature_chek: null,
            perception_chek: null,
            performance_chek: null,
            conviction_chek: null,
            religion_chek: null,
            sleight_of_hand_chek: null,
            secrecy_chek: null,
            survival_chek: null,
            communication_with_animals_chek: null,
        },

        history: {
            history: null
        },       
        
        inventory: {
            copper_coins: null,
            silver_coins: null,
            electrum_coins: null,
            gold_coins: null,
            platinum_coins: null,
            items: null,
        },        
        
        info: {
            age: null,
            height: null,
            weight: null,
            eye_color: null,
            hair_color: null,
            color_of_the_skin: null,
            personality_traits: null,
            ideals: null,
            affection: null,
            vices: null,
            languages: null,
            features_and_abilities: null,
        },

        spells: {
            caster_class: null,
            caster_characteristic: null,
            spell_throw: null,
            spell_attack_bonus: null,
            conspiracies: [0],
            conspiracies_count: 1,
            conspiracies_text: null,
            spell_lvl_1: [9],
            spell_lvl_1_count: 1,
            spell_lvl_1_text: null,
            spell_lvl_2: [1],
            spell_lvl_2_count: 1,
            spell_lvl_2_text: null,
            spell_lvl_3: [7],
            spell_lvl_3_count: 1,
            spell_lvl_3_text: null,
            spell_lvl_4: [3],
            spell_lvl_4_count: 1,
            spell_lvl_4_text: null,
            spell_lvl_5: [15],
            spell_lvl_5_count: 1,
            spell_lvl_5_text: null,
            spell_lvl_6: [8],
            spell_lvl_6_count: 1,
            spell_lvl_6_text: null,
            spell_lvl_7: [23],
            spell_lvl_7_count: 1,
            spell_lvl_7_text: null,
            spell_lvl_8: [2],
            spell_lvl_8_count: 1,
            spell_lvl_8_text: null,
            spell_lvl_9: [5],
            spell_lvl_9_count: 1,
            spell_lvl_9_text: null,
        }
    },    
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_PARAMS: {
            const { characterParams } = action;
            const { screen } = action; 
            let characterSet;
            if (screen) {  
                characterSet = {...initialState.characterSet}             
                characterSet[screen] = characterParams;
            }
            else {
                characterSet = {...characterParams}  
            }
            try {
                AsyncStorage.setItem(
                  'CHARSET',
                  JSON.stringify(characterSet)
                );
              } catch (error) {
                console.log(error)
              }                     
            return { ...state, characterSet};
        }          
        default: {
            return state;
        }
    }
};