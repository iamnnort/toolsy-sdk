const config = require('@iamnnort/config/tsup');

module.exports = config({
  entry: ['src/nest-js/index.ts', 'src/node-js/index.ts', 'src/types/index.ts'],
});
