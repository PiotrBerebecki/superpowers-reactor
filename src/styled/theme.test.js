import theme from './theme';

describe('theme', () => {
  it('includes widthContainer function', () => {
    expect(Array.isArray(theme.widthContainer())).toBe(true);
  });
});
