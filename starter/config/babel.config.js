module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.android.js',
            '.android.tsx',
            '.ios.js',
            '.ios.tsx',
          ],
          root: ['./'],
          alias: {
            "@starter": './starter',
            "@slice": './redux/slice',
            "@screens": './screens',
            "@components": './components',
            "@hooks": './hooks'
          },
        },
      ],
    ],
  };
};