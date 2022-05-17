import { createMuiTheme } from '@material-ui/core/styles'

export const colors = {
  black: '#000000',
  blue: '#2D9CDB',
  blueEgg: '#00BDBD',
  danger: '#E57373',
  darkgreen: '#00716B',
  error: '#B00020',
  green: '#219653',
  grey: '#EEEEEE',
  greyLight: '#E5E5E5',
  success: '#81C784',
  warning: '#FADE4C',
  white: '#FFFFFF',

  payments: {
    created: 'rgba(0, 0, 0, 0.87)',
    failed: '#E57373',
    overdue: '#E57373',
    pending: '#00BDBD',
    succeeded: '#81C784',
  }
}

export default createMuiTheme({
  typography: {
    fontFamily: ['"Inter Regular"', '"Inter Medium"', '"Inter ExtraLightBETA"'].join(','),
    h1: {
      fontSize: 93,
      lineHeight: '113px',
      letterSpacing: '-1.5px',
      fontFamily: 'Inter ExtraLightBETA',
    },
    h2: {
      fontSize: 58,
      lineHeight: '70px',
      letterSpacing: '-0.5px',
      fontFamily: 'Inter ExtraLightBETA',
    },
    h3: {
      fontSize: 47,
      lineHeight: '57px',
      fontStyle: 'normal',
      fontWeight: 'normal',
    },
    h4: {
      fontSize: 33,
      lineHeight: '40px',
      fontStyle: 'normal',
      fontWeight: 'normal',
      letterSpacing: '0.25px',
    },
    h5: {
      fontSize: 23,
      lineHeight: '28px',
      fontStyle: 'normal',
      fontWeight: 'normal',
    },
    h6: {
      fontSize: 19,
      lineHeight: '23px',
      letterSpacing: '0.25px',
      fontWeight: 500,
      fontFamily: 'Inter Medium',
    },
    body1: {
      fontSize: 16,
      lineHeight: '20px',
      letterSpacing: '0.5px',
    },
    body2: {
      fontSize: 14,
      lineHeight: '17px',
      letterSpacing: '0.25px',
      fontStyle: 'normal',
      fontWeight: 'normal',
    },
    subtitle1: {
      fontSize: 16,
      lineHeight: '19px',
      letterSpacing: '0.15px',
      fontStyle: 'normal',
      fontWeight: 'normal',
    },
    subtitle2: {
      fontSize: 14,
      lineHeight: '24px',
      letterSpacing: '0.1px',
      fontStyle: 'normal',
      fontWeight: 500,
      fontFamily: 'Inter Medium',
    },
    button: {
      fontSize: 14,
      lineHeight: '17px',
      letterSpacing: '0.25px',
      fontStyle: 'normal',
      fontWeight: 600,
      textTransform: 'uppercase',
      fontFamily: 'Inter Medium',
    },
    caption: {
      fontSize: 12,
      lineHeight: '16px',
      letterSpacing: '0.4px',
      fontStyle: 'normal',
      fontWeight: 'normal',
    },
    overline: {
      fontSize: 12,
      lineHeight: '15px',
      letterSpacing: '2px',
      fontStyle: 'normal',
      fontWeight: 500,
      textTransform: 'uppercase',
      fontFamily: 'Inter Medium',
    },
  },
  palette: {
    primary: {
      'light': '#ECEFF1',
      'main': '#78909C',
      'dark': '#263238',
      'contrastText': colors.white,
    },
    secondary: {
      'light': '#DEF3F4',
      'main': '#00AEAD',
      'dark': '#00544C',
      'contrastText': colors.white,
    },
    background: {
      default: '#fafafa',
      paper: colors.white,
    },
    common: {
      black: colors.black,
      white: colors.white,
    },
    error: {
      main: colors.danger,
    },
  },
})
