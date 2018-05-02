'use strict';

const Shelter = module.exports = {};

Shelter.enqueue = (shelter, animal) => {
  if (animal === 'cat' || animal === 'dog') {
    shelter.unshift(animal);
    return shelter;
  }
  return shelter;
};

Shelter.dequeue = (shelter, animal) => {
  if (animal !== 'cat' && animal !== 'dog') {
    shelter.pop();
    return shelter;
  }
  for (let i = shelter.length; i > 0; i--) {
    if (shelter[i] === animal) {
      shelter.splice(i, 1);
      return shelter;
    }
  }
  return shelter;
};
