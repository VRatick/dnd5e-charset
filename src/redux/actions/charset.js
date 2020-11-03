import * as Constants from '../constants/charset';

export const changeParams = (characterParams) => ({
    type: Constants.CHANGE_PARAMS,
    characterParams
  });
