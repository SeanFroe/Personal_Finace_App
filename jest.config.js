module.exports = {
  projects: ["<rootDir>/client", "<rootDir>/server"],
};

module.exports = {
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
};
