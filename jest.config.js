module.exports = {
  rootDir: './src/',
  moduleFileExtensions: ['js', 'jsx'],
  collectCoverageFrom: ['<rootDir>/**/*.{js,jsx}'],
  coveragePathIgnorePatterns: ['.*__snapshots__/.*', '.*#coverage/.*', '.*index.js.*'],
  snapshotSerializers: [
    'enzyme-to-json/serializer'
  ],
  setupFilesAfterEnv: [
    './setupTests.js'
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
