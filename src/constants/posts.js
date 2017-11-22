import moment from 'moment';

const posts = [
  {
    description: 'text1',
    image: {
      src: 'http://www.adolph-numerical.co.uk/images/100x100.gif',
      width: 100,
      height: 100
    },
    meta: {
      authorName: 'Hank',
      createdAt: moment().format('DD.MM.YYYY'),
      updatedAt: moment().format('DD.MM.YYYY'),
      countOfLikes: 0,
      id: 1
    }
  },
  {
    description: 'text2',
    image: {
      src: 'http://www.adolph-numerical.co.uk/images/100x100.gif',
      alt: 'Opps_2!',
      width: 100,
      height: 100
    },
    meta: {
      authorName: 'Hank',
      createdAt: moment().format('DD.MM.YYYY'),
      updatedAt: moment().format('DD.MM.YYYY'),
      countOfLikes: 11,
      id: 2
    }
  },
  {
    description: 'text3',
    image: {
      src: 'http://www.adolph-numerical.co.uk/images/100x100.gif',
      alt: 'Opps_3!',
      width: 100,
      height: 100
    },
    meta: {
      authorName: 'Hank',
      createdAt: moment().format('DD.MM.YYYY'),
      updatedAt: moment().format('DD.MM.YYYY'),
      countOfLikes: 12,
      id: 3
    }
  }
];

export default posts;
