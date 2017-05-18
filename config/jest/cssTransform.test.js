import cssTransform from './cssTransform';

describe('cssTransform', () => {
  it('should respond to process call correctly', () => {
    expect(cssTransform.process()).toEqual('module.exports = {};');
  });

  it('should respond to getCacheKey call correctly', () => {
    expect(cssTransform.getCacheKey()).toEqual('cssTransform');
  });
});
