const Vertex = require('./bfs-vertex');
const bfsFunctions = [
  require('./breadth-first-search')
];

let root = null;

bfsFunctions.forEach(bfs => {
  test('bfs function is defined', () => {
    expect(bfs).toBeDefined();
  });

  test('Calling bfs with a graph with `n` nodes prints out `n` statements', () => {
    bfs(root);

    expect(console.log.mock.calls.length).toEqual(5);
  });

  test('Calling bfs with a graph prints out the correct values', () => {
    bfs(root);

    expect(console.log.mock.calls[0][0]).toEqual(1);
    expect(console.log.mock.calls[1][0]).toEqual(2);
    expect(console.log.mock.calls[2][0]).toEqual(4);
    expect(console.log.mock.calls[3][0]).toEqual(3);
    expect(console.log.mock.calls[4][0]).toEqual(5);
  });

  beforeEach(() => {
    jest.spyOn(console, 'log');

    let vertex1 = new Vertex(1);
    let vertex2 = new Vertex(2);
    let vertex3 = new Vertex(3);
    let vertex4 = new Vertex(4);
    let vertex5 = new Vertex(5);

    vertex1.neighbours.push(vertex2);
    vertex1.neighbours.push(vertex4);
    vertex4.neighbours.push(vertex5);
    vertex2.neighbours.push(vertex3);

    root = vertex1;
  });

  afterEach(() => {
    console.log.mockRestore();
  });
});