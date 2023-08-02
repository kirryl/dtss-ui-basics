const { multiply } = require('./index');

test('test Jest is working', () => {
    expect(2+2).toBe(4);
});

describe('tests all functions', () => {
    test('test multiply function works with numbers', () => {
        expect(multiply(3,3)).toBe(9);
        expect(multiply(-3,2)).toBe(-6);
        expect(multiply(3.3,3)).toEqual(expect.closeTo(9.9, 5));
    })
})
