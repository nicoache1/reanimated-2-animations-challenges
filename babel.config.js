module.exports = {
  plugins: [
    [
      'module-resolver',

      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        root: ['.'],
      },
    ],
    'react-native-reanimated/plugin',
    'optional-require',
  ],
  presets: ['module:metro-react-native-babel-preset'],
}
