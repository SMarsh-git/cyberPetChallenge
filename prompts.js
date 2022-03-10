const prompts = {
  typeOfPet: {
    type: 'list',
    name: 'typeOfPet',
    message: 'Which animal do you wish to keep as a pet?',
    choices: [
      {
        key: 'a',
        name: 'Cat',
        value: 'cat',
      },
      {
        key: 'b',
        name: 'Dog',
        value: 'dog',
      },
      {
        key: 'c',
        name: 'Rabbit',
        value: 'rabbit',
      },
    ],
  },
  action: {
    type:`list`,
    name:`action`,
    message:`What do you want to do?`,
    choices: [
      {
        key: 'a',
        name: 'Feed your pet',
        value: 'feed',
      },
      {
        key: 'b',
        name: 'Give your pet some water.',
        value: 'drink',
      },
      {
        key: 'c',
        name: 'Play with your pet.',
        value: 'play',
      },
    ],
  },
  feeding: {
    type:`list`,
    name:`action`,
    message:`What do you want to feed your pet?`,
    choices: [
      {
        key: 'a',
        name: 'Feed your pet a can of wet food.',
        value: 'wetFood',
      },
      {
        key: 'b',
        name: 'Feed your pet some biscuits.',
        value: 'biscuits',
      },
      {
        key: 'c',
        name: 'Feed your pet some treats.',
        value: 'treats',
      },
    ],
  },
  drinking: {
    type:`list`,
    name:`action`,
    message:`How much water do you want to give your pet?`,
    choices: [
      {
        key: 'a',
        name: 'Give your pet a whole dish of water.',
        value: 'fullDish',
      },
      {
        key: 'b',
        name: 'Give your pet half a dish of water.',
        value: 'halfDish',
      },
    ],
  },
  catPlay: {
    type: 'list',
    name: 'play',
    message: 'How do you want to play with your cat?',
    choices: [
      {
        key: 'a',
        name: 'A fluffy fake mouse',
        value: 'mouse',
      },
      {
        key: 'b',
        name: 'A long piece of string',
        value: 'string',
      },
      {
        key: 'c',
        name: 'A small bag of Catnip',
        value: 'catnip',
      },
    ],
  },
  dogPlay: {
    type: 'list',
    name: 'play',
    message: 'How do you want to play with your dog?',
    choices: [
      {
        key: 'a',
        name: 'A big stick',
        value: 'stick',
      },
      {
        key: 'b',
        name: 'A tasty bone',
        value: 'bone',
      },
      {
        key: 'c',
        name: 'A shiny chewy ball',
        value: 'ball',
      },
    ],
  },
  rabbitPlay: {
    type: 'list',
    name: 'play',
    message: 'How do you want to play with your rabbit?',
    choices: [
      {
        key: 'a',
        name: 'A cardboard loo roll middle',
        value: 'looRoll',
      },
      {
        key: 'b',
        name: 'A ball filled with hay',
        value: 'hayBall',
      },
    ],
  },
}

module.exports = {
  prompts,
};
