/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { override, addBabelPreset } = require('customize-cra');
const emotionBabelPreset = require('@emotion/babel-preset-css-prop').default;

module.exports = override(
  addBabelPreset(emotionBabelPreset) // addBabelPreset으로 프리셋을 추가
);
