const DynamicArray = require('./dynamic-array');

const array = new DynamicArray();

test('DynamicArray class is defined', () => {
  expect(typeof DynamicArray).toEqual('function');
});

test('array initial size is 0', () => {
  expect(array.size).toEqual(0);
});

test('array initial capacity is 2', () => {
  expect(array.capacity).toEqual(2);
});

test('DynamicArray.pushBack to insert a new element at the end of the array', () => {
  array.pushBack(8);
  expect(array.get(0)).toEqual(8);
});

test('DynamicArray.get returns the element at the index', () => {
  array.pushBack(3);
  expect(array.get(1)).toEqual(3);
});

test('DynamicArray.pushBack to double its capacity if capacity === size', () => {
  array.pushBack(7);
  expect(array.capacity).toEqual(4);
});

test('DynamicArray.pushBack to increase the size', () => {
  array.pushBack(10);
  expect(array.size).toEqual(4);
});

test('DynamicArray.get to throw an error if i >= size', () => {
  expect(() => array.get(1000)).toThrowError();
});

test('DynamicArray.set to change the element at the index', () => {
  array.set(0, 5);
  expect(array.get(0)).toEqual(5);
});

test('DynamicArray.set to throw an error if i >= size', () => {
  expect(() => array.set(1000, 9)).toThrowError();
});

test('DynamicArray.remove to throw an error if i >= size', () => {
  expect(() => array.remove(1000)).toThrowError();
});

test('DynamicArray.remove to the element at the index', () => {
  array.remove(2);
  expect(array.size).toEqual(3);
  expect(() => array.get(3)).toThrowError();
});
