import * as actions from '../index';

describe('actions', () => {
  it('should create an action to toggle dark mode', () => {
    const expected = {
      type: actions.TOGGLE_ISDARK,
    };

    expect(actions.toggleIsDark()).toEqual(expected);
  }); 
})
