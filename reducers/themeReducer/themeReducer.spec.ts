import themeReducer from './themeReducer';
import { TOGGLE_ISDARK } from '../../actions/index';

describe('themeReducer', () => {
  it('should initialize with default state', () => {
    expect(themeReducer(undefined, { type: null })).toEqual({
      isDark: true,
    });
  });

  it('should handle TOGGLE_ISDARK', () => {
    expect(themeReducer(undefined, {
      type: TOGGLE_ISDARK,
    })).toEqual({
      isDark: false, 
    });
  })
})
