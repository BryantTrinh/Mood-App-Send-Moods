const { Emoji } = require('../models');

const emojiData = [
  {
    name: 'happy',
    value: '1',
    url: 'https://res.cloudinary.com/dnwrm14k9/image/upload/v1672862460/happy_yjgksa.svg'
  },
  {
    name: 'neutral',
    value: '2',
    url: 'https://res.cloudinary.com/dnwrm14k9/image/upload/v1672868148/neutral_sg8ak4.svg'
  },
  {
    name: 'anxious',
    value: '3',
    url: 'https://res.cloudinary.com/dnwrm14k9/image/upload/v1672868349/anxious_i0xtgm.svg'
  },
  {
    name: 'angry',
    value: '4',
    url: 'https://res.cloudinary.com/dnwrm14k9/image/upload/v1672868359/angry_i0gtne.svg'
  },
  {
    name: 'sad',
    value: '5',
    url: 'https://res.cloudinary.com/dnwrm14k9/image/upload/v1672868350/sad_i49yac.svg'
  },
];

const seedEmojis = () => Emoji.bulkCreate(emojiData);

module.exports = seedEmojis;
