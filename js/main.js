// Функция, возвращающая случайное целое число из переданного диапазона включительно

const getRandomInt = (min, max) => {

  if (max < 0 || min < 0) {
    return -1;
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно

const getRandomFloat = (min, max, digit) => {

  if (max < 0 || min < 0) {
    return -1;
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  return +(Math.random() * (max - min) + min).toFixed(digit);
};

const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHECKIN = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const MIN_PRICE = 0;
const MAX_PRICE = 100000;
const MIN_COUNT_ROOM = 1;
const MAX_COUNT_ROOM = 15;
const MIN_GUESTS = 1;
const MAX_GUESTS = 15;
const MIN_LAT = 35.65000;
const MAX_LAT = 35.70000;
const MIN_LNG = 139.70000;
const MAX_LNG = 139.80000;
const MAX_COUNT_AD = 10;

const getRandomArrayElement = (elements) => elements[getRandomInt(0, elements.length - 1)];

const getRandomArray = (arr) => arr.sort(()=>Math.random()-0.5).slice(0, getRandomInt(0, arr.length));

const createAd = (id) => ({
  author: {
    avatar: `img/avatars/user${String(id).padStart(2, '0')}.png`,
  },
  offer: {
    title: 'Маленький дом в саду',
    address: `${getRandomFloat(MIN_LAT, MAX_LAT, 5)}, ${getRandomFloat(MIN_LNG, MAX_LNG, 5)}`,
    price: getRandomInt(MIN_PRICE, MAX_PRICE),
    type: getRandomArrayElement(TYPE),
    rooms: getRandomInt(MIN_COUNT_ROOM, MAX_COUNT_ROOM),
    guests: getRandomInt(MIN_GUESTS, MAX_GUESTS),
    checkin: getRandomArrayElement(CHECKIN),
    checkout: getRandomArrayElement(CHECKOUT),
    features: getRandomArray(FEATURES),
    description: 'Дом с гаражом, расположенный в живописной местности среди лесов и лугов',
    photos: getRandomArray(PHOTOS)
  },
  location: {
    lat: getRandomFloat(MIN_LAT, MAX_LAT, 5),
    lng: getRandomFloat(MIN_LNG, MAX_LNG, 5)
  }
});

const makeAds = (count) => {
  const arAds = [];
  for (let i = 1; i <=count; i++) {
    arAds.push(createAd(i));
  }

  return arAds;
};


makeAds(MAX_COUNT_AD);


