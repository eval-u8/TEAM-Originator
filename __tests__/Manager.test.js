const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Ryan');

    expect(manager.name).toBe('Ryan');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
});