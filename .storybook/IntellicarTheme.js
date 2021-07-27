import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: '#FF3A4B',
  colorSecondary: '#FF3A4B',

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: '#EBECEC',
  appBorderRadius: 3,

  // Typography
  fontBase: '"Montserrat", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#141D2E',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#141D2E',
  barSelectedColor: '#FF3A4B',
  barBg: '#FFFFFF',

  // Form colors
  inputBg: 'white',
  inputBorder: '#EEF1FC',
  inputTextColor: '#141D2E',
  inputBorderRadius: 4,
  
  brandTitle: 'Intellicar Design System',
  brandUrl: 'https://intellicar.in',
  brandImage: '/intellicar.png',
});