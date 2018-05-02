'use strict';

const Shelter = require('../animal-shelter.js');

const shelter = [];
const testShelter = ['cat', 'dog', 'cat', 'dog', 'cat'];

describe('animal-shelter.js', () => {
  test('#enqueue', () => {
    Shelter.enqueue(shelter, 'cat');
    expect(shelter).toEqual(['cat']);
    Shelter.enqueue(shelter, 'cat');
    Shelter.enqueue(shelter, 'dog');
    Shelter.enqueue(shelter, 'dog');
    expect(shelter).toEqual(['dog', 'dog', 'cat', 'cat']);
    Shelter.enqueue(shelter, 'frog');
    expect(shelter).toEqual(['dog', 'dog', 'cat', 'cat']);
  });
  test('#dequeue', () => {
    Shelter.dequeue(testShelter, 'cat');
    expect(testShelter).toEqual(['cat', 'dog', 'cat', 'dog']);
    Shelter.dequeue(testShelter, 'cat');
    expect(testShelter).toEqual(['cat', 'dog', 'dog']);
    Shelter.dequeue(testShelter, 'either');
    expect(testShelter).toEqual(['cat', 'dog']);
  });
});
