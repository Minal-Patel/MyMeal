import {IMG} from './image';
import {STRING} from './strings';

export const ONBOARDINGJSON = [
  {
    id: 1,
    title: STRING.ONBORDING.ONE,
    image: IMG.ONBORD1,
  },
  {
    id: 2,
    title: STRING.ONBORDING.TWO,
    image: IMG.ONBORD2,
  },
  {
    id: 3,
    title: STRING.ONBORDING.THREE,
    image: IMG.ONBORD3,
  },
];

export const tabbar = [
  {
    id: 1,
    name: 'Home',
    img: IMG.TAB_HOME,
  },
  {
    id: 1,
    name: 'Favorite',
    img: IMG.TAB_FAVORITE,
  },
  {
    id: 1,
    name: 'Cart',
    img: IMG.TAB_BAG,
  },
  {
    id: 1,
    name: 'User',
    img: IMG.TAB_USER,
  },
];

export const search = [
  {
    id: 1,
    name: 'Rescued',
  },
  {
    id: 2,
    name: 'Vegen',
  },
  {
    id: 3,
    name: 'Delivery',
  },
  {
    id: 4,
    name: '>100 cal',
  },
  {
    id: 5,
    name: 'Populer',
  },
  {
    id: 6,
    name: 'Veg',
  },
];

export const option = [
  {
    id: 1,
    title: 'Hot Deals',
    img: IMG.OPTION_HOT,
  },
  {
    id: 1,
    title: 'New on FastFood',
    img: IMG.OPTION_FOOD,
  },
  {
    id: 1,
    title: 'Save Food Save Hunger',
    img: IMG.OPTION_BADGET,
  },
  {
    id: 1,
    title: 'Set Your Preferences Now!',
    img: IMG.OPTION_PREFERENCE,
  },
];

export const resturant = [
  {
    id: 101,
    name: 'Suhani Restaurant',
    type: 'Chinnese, North Indian',
    desc: 'Left over food and supplies are gathered and sold for 50% off!',
    cover: IMG.REST_COVER2,
    price: 200,
    offer: {
      value: '50% OFF',
      price: 100,
      name: 'RESCUED',
    },
    rating: 4.5,
    cal: 145,
    foodtag: [
      {
        tag: 'breakfast',
      },
      {
        tag: 'lunch',
      },
      {
        tag: 'dinner',
      },
    ],
    menu : [
      {
        id : 1,
        tag : "breakfast",
        name : "Cappuccino",
        price : 200,
        offer: {
          value: '50% OFF',
          price: 100,
          name: 'RESCUED',
        },

      }
    ]

  },
  {
    id: 102,
    name: 'Suhani Restaurant',
    type: 'Chinnese, North Indian',
    desc: 'Left over food and supplies are gathered and sold for 50% off!',
    cover: IMG.REST_COVER2,
    price: 200,
    offer: {
      value: '50% OFF',
      price: 100,
      name: 'RESCUED',
    },
    rating: 4.5,
    cal: 145,
    foodtag: [
      {
        tag: 'breakfast',
      },
      {
        tag: 'lunch',
      },
      {
        tag: 'dinner',
      },
    ],

  },
  {
    id: 103,
    name: 'Suhani Restaurant',
    type: 'Chinnese, North Indian',
    desc: 'Left over food and supplies are gathered and sold for 50% off!',
    cover: IMG.REST_COVER2,
    price: 200,
    offer: {
      value: '50% OFF',
      price: 100,
      name: 'RESCUED',
    },
    rating: 4.5,
    cal: 145,
    foodtag: [
      {
        tag: 'breakfast',
      },
      {
        tag: 'lunch',
      },
      {
        tag: 'dinner',
      },
    ],

  },
 
];

export const breakfast = [
  {
 
    id : 1,
    tag : "Breakfast",
    name : "Cappuccino",
    cover : IMG.COFFEE,
    resname : "Suhani Restaurant",
    price : 200,
    offer: {
    },

  },
  {
    
    id : 2,
    tag : "Breakfast",
    cover : IMG.EGG,
    name : "Egg and cheese sandwich",
    resname : "Mehfil’s Place",
    price : 200,
    offer: {
      value: '50% OFF',
      price: 100,
      name: 'RESCUED',
    },

  },
  {
 
    id :3,
    tag : "Lunch",
    name : "Wow! Momo",
    cover : IMG.SALAD,
    resname : "Fastfood , Chinese",
    price : 250,
    offer: {
      value: '30% OFF',
      price: 125,
      name: 'RESCUED',
    },

  },
  {
    
    id : 4,
    tag : "Lunch",
    cover : IMG.NOODLEEGG,
    name : "Istah - Shawarma",
    resname : "Arabian, Lebanse",
    price : 250,
    offer: {
      value: '30% OFF',
      price: 125,
      name: 'RESCUED',
    },

  },
  {
 
    id :5,
    tag : "Dinner",
    name : "Wow! Momo",
    cover : IMG.ITALIANRICE,
    resname : "Fastfood , Chinese",
    price : 250,
    offer: {
      value: '30% OFF',
      price: 125,
      name: 'RESCUED',
    },

  },
  {
    
    id : 6,
    tag : "Dinner",
    cover : IMG.RICE,
    name : "Istah - Shawarma",
    resname : "Arabian, Lebanse",
    price : 250,
    offer: {
      value: '30% OFF',
      price: 125,
      name: 'RESCUED',
    },

  },

]

export const foodtype = [
  {
    id :1 ,
    img : IMG.PURE,
    title : "Daily Meals"
  },
  {
    id :2 ,
    img : IMG.BIRYANI,
    title : "Middle- Eastern"
  },
  {
    id :3,
    img : IMG.NOODLE,
    title : "Chinese"
  },
  {
    id :4,
    img : IMG.DESI,
    title : "Desi"
  },


]

export const pastorder = [
  {
    id : 1,
    name : "KFC Combo",
    price : 230,
    order :[
      {
      
      },
    ]
  },
] 



