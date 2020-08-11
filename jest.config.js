module.exports = {
  rootDir: './src/',
  moduleFileExtensions: ['js', 'jsx'],
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  snapshotSerializers: [
    'enzyme-to-json/serializer'
  ],
  moduleNameMapper: {
    '\\.(css|sass|scss)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'identity-obj-proxy'
  },
  coverageDirectory: './#coverage',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
};
