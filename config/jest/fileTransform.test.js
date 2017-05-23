import fileTransform from './fileTransform';

describe('fileTransform', () => {
  it('should respond to process call correctly', () => {
    const path = '/assets';
    const filename = 'icon.svg';
    expect(fileTransform.process(path, filename)).toEqual(
      `module.exports = \"${filename}\";`
    );
  });
});
