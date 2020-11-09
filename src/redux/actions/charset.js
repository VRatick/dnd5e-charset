import * as Constants from '../constants/charset';

export const changeParams = (characterParams, screen) => ({
    type: Constants.CHANGE_PARAMS,
    characterParams,
    screen
  });
