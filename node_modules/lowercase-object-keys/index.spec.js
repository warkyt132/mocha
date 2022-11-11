const lowerCaseObjectKeys = require('./index');

describe('Test', () => {
  it('should transform the properties to lowercase and the original does not exist to be different from it.', () => {
    const testObject = lowerCaseObjectKeys({ One: 1, TWO: 2 });
    expect(testObject.one).toBeDefined();
    expect(testObject.two).toBeDefined();
    expect(testObject.One).toBeUndefined();
    expect(testObject.TWO).toBeUndefined();
  });
});
