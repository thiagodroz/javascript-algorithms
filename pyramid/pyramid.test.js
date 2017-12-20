const pyramidFunctions = [
  require('./pyramid__for'),
  require('./pyramid__recursion')
];

pyramidFunctions.forEach(pyramid => {
  test('pyramid function exists', () => {
    expect(pyramid).toBeDefined();
  });

  test('pyramid called with n = 1', () => {
    pyramid(1);
    expect(console.log.mock.calls[0][0]).toEqual('#');
    expect(console.log.mock.calls.length).toEqual(1);
  });

  test('pyramid called with n = 2', () => {
    pyramid(2);
    expect(console.log.mock.calls[0][0]).toEqual(' # ');
    expect(console.log.mock.calls[1][0]).toEqual('###');
    expect(console.log.mock.calls.length).toEqual(2);
  });

  test('pyramid called with n = 3', () => {
    pyramid(3);
    expect(console.log.mock.calls[0][0]).toEqual('  #  ');
    expect(console.log.mock.calls[1][0]).toEqual(' ### ');
    expect(console.log.mock.calls[2][0]).toEqual('#####');
    expect(console.log.mock.calls.length).toEqual(3);
  });
});

beforeEach(() => {
  jest.spyOn(console, 'log');
});

afterEach(() => {
  console.log.mockRestore();
});