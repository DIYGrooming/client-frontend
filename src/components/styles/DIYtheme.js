import '../../index.css';
import global from './globalStyle';
import { pxToRem } from '../../utils/general';
import { createTheme } from '@mui/material/styles';
import { pink } from '@mui/material/colors/';

/* 400, 700 */
/* font-family: 'Libre Baskerville', serif; */
/* 400, 600, 800 */
/* font-family: 'Montserrat', sans-serif; */

const { palette } = createTheme();

const theme = (mode) =>
  createTheme({
    // color settings
    palette: {
      mode: 'light',
      primary: {
        main: global.colorPrimary,
      },
      secondary: {
        main: global.colorSecondary,
      },
      background: {
        default: global.colorBase,
      },
      text: {
        primary: global.colorPrimary,
      },
      // accent colors
      error: {
        main: pink[500],
      },
      warning: {
        main: '#ff9800',
      },
      info: {
        main: '#4dd0e1',
      },
      success: {
        main: '#aed581',
      },
      divider: global.colorPrimary,
      // generate new custom colors to be used in MUI components
      accentYellow: palette.augmentColor({
        color: { main: global.accentYellow },
      }),
      accentPink: palette.augmentColor({
        color: { main: global.accentPink },
      }),
      white: palette.augmentColor({
        color: { main: '#fff' },
      }),
      textGrey: palette.augmentColor({
        color: { main: global.colorTextGrey },
      }),
    },
    typography: {
      fontFamily: global.fontPrimary,
      h1: {
        fontFamily: global.fontPrimary,
        // fontWeight: 700,
      },
      h2: {
        fontFamily: global.fontPrimary,
        // fontWeight: 700,
        fontStyle: 'italic',
      },
      h3: {
        fontFamily: global.fontPrimary,
        // fontWeight: 700,
        fontStyle: 'italic',
      },
      h4: {
        fontFamily: global.fontPrimary,
        // fontWeight: 700,
        fontStyle: 'italic',
      },
      // Section headings
      h5: {
        fontFamily: global.fontPrimary,
        letterSpacing: -0.5,
        lineHeight: 1.5,
        fontStyle: 'italic',
        textTransform: 'capitalize',
      },
      // Post Card title
      h6: {
        fontFamily: global.fontPrimary,
        letterSpacing: -0.5,
        lineHeight: 1.35,
        textTransform: 'capitalize',
      },
      body1: {
        fontFamily: global.fontSecondary,
      },
      body2: {
        fontFamily: global.fontSecondary,
      },
      button: {
        fontFamily: global.fontSecondary,
        fontWeight: 600,
        letterSpacing: 1,
        textTransform: 'capitalize',
      },
      subtitle1: {
        fontFamily: global.fontSecondary,
        fontWeight: 600,
        fontSize: '1rem',
        lineHeight: 1.5,
        // textTransform: 'uppercase',
      },
      subtitle2: {
        fontFamily: global.fontSecondary,
        textTransform: 'uppercase',
      },
      subtitle3: {
        fontFamily: global.fontSecondary,
        fontWeight: '800',
        fontSize: '1rem',
      },
      caption: {
        fontFamily: global.fontSecondary,
      },
      overline: {
        fontFamily: global.fontSecondary,
      },
      headerTitle: {
        fontFamily: global.fontPrimary,
        fontStyle: 'italic',
        fontSize: '1.5rem',
        letterSpacing: -0.5,
        textTransform: 'capitalize',
      },
      bodyIntro: {
        fontFamily: global.fontSecondary,
        fontWeight: 400,
        fontSize: pxToRem(22),
      },
      author: {
        fontFamily: global.fontPrimary,
        fontStyle: 'italic',
        paddingBottom: 0,
      },
      role: {
        fontFamily: global.fontSecondary,
        fontWeight: 600,
        letterSpacing: 1,
        fontSize: '0.8rem',
        textTransform: 'uppercase',
      },
      tinyOverTitle: {
        fontFamily: global.fontSecondary,
        fontWeight: 600,
        lineHeight: -0.5,
        fontSize: pxToRem(12),
      },
      h7: {
        fontFamily: global.fontPrimary,
        fontWeight: 600,
        fontSize: '0.85rem',
        fontStyle: 'italic',
      },
    },
    components: {
      MuiChip: {
        styleOverrides: {
          root: {
            fontFamily: global.fontSecondary,
            fontSize: '0.7rem',
            letterSpacing: 1,
            paddingRight: 10,
            paddingLeft: 10,
            fontWeight: 600,
          },
        },
      },
      MuiAvatar: {
        styleOverrides: {
          root: {
            fontFamily: global.fontSecondary,
            fontWeight: 600,
            textTransform: 'uppercase',
            width: 50,
            height: 50,
            backgroundColor: global.colorSecondary,
          },
        },
      },
    },
  });

export default theme;
