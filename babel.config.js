module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@': './src' // 将 @ 别名映射为 src 目录
        }
      }
    ]
  ]
};
