console.log(`Loading environment from: ${process.env.ENVFILE || '.env'}`);

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: process.env.ENVFILE || '.env',
        blocklist: null,
        allowlist: null,
        safe: false,
        allowUndefined: true,
        verbose: true, // Set verbose to true for more detailed logging
      },
    ],
  ],
};
