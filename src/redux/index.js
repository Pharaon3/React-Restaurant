// Databse initialize
// import Database_Dish from '../Database/Database_Dish'
// import Database_DishGroup from '../Database/Database_DishGroup'
// import Database from '../Database/Database'

let initState = {
  totalPrice: 0,
  dishCount: 0,
  dishGroup: [
    {
      Gid: 0,
      Gname: 'Warmevorspeisen',
      Gtitle: 'Warme vorspeisen',
      dish: [
        {
          id: 0,
          title: 'Gemüse Pakoras',
          comment: 'frisches Gemüse in Kichererbsenmehl gebacken',
          price: 4.60,
          quantity: 0,
          groupID: 0,
        },
        {
          id: 1,
          title: 'Paneer Pakoras',
          comment: 'Käse in Kichererbsenmehl gebacken',
          price: 6.50,
          quantity: 0,
          groupID: 0,
        },
        {
          id: 2,
          title: 'Onion Bhaji',
          comment: 'Zwiebeln in Kichererbsenmehl gebacken',
          price: 4.60,
          quantity: 0,
          groupID: 0,
        },
        {
          id: 3,
          title: 'Chicken Pakoras',
          comment: 'Hähchenstücke in Kicherebsenmehl gebacken',
          price: 6.50,
          quantity: 0,
          groupID: 0,
        },
        {
          id: 4,
          title: 'Vegetable Samosa (2 Stück)',
          comment: 'Pastetchen mit frischem Gemüse gefüllt',
          price: 6.50,
          quantity: 0,
          groupID: 0,
        },
        {
          id: 5,
          title: 'Gemischte Vorspeisen (für 2 Personen)',
          comment: 'mit Onions, Bhajia, Chicken, Pakoras, Vegetable Pakoras und Paneer Pakoras',
          price: 13.50,
          quantity: 0,
          groupID: 0,
        },
        {
          id: 6,
          title: 'Papadam (2 Stück)',
          comment: 'hauchdünne, gewürzte Linsenfladen',
          price: 3.60,
          quantity: 0,
          groupID: 0,
        }
      ]
    },
    {
      Gid: 1,
      Gname: 'Suppen',
      Gtitle: 'Suppen',
      dish: [
        {
          id: 7,
          title: 'Dal Suppe',
          comment: 'Linsensuppe',
          price: 3.90,
          quantity: 0,
          groupID: 1,
        },
        {
          id: 8,
          title: 'Sabji Suppe',
          comment: 'indische Gemüsesuppe',
          price: 3.90,
          quantity: 0,
          groupID: 1,
        },
        {
          id: 9,
          title: 'Tomatensuppe',
          comment: 'frische Tomatencremesuppe',
          price: 4.50,
          quantity: 0,
          groupID: 1,
        },
        {
          id: 10,
          title: 'Chicken Creme Soup',
          comment: 'Hühnercremesuppe',
          price: 4.80,
          quantity: 0,
          groupID: 1,
        },
        {
          id: 11,
          title: 'Malkatani Suppe',
          comment: 'mit Linsen, Reis und Hühnerfleisch',
          price: 4.80,
          quantity: 0,
          groupID: 1,
        },
      ]
    },
    {
      Gid: 2,
      Gname: 'Salate',
      Gtitle: 'Salate',
      dish: [
        {
          id: 12,
          title: 'Channa Chat',
          comment: 'Kichererbsen mit Kartoffeln, Tomaten, Zwiebeln und Joghurtsauce',
          price: 5.50,
          quantity: 0,
          groupID: 2,
        },
        {
          id: 13,
          title: 'Gemischter Salat',
          comment: 'mit verschiedenem gemischten Salaten',
          price: 4.90,
          quantity: 0,
          groupID: 2,
        },
        {
          id: 14,
          title: 'Firteen salate',
          comment: 'It is firteen salate',
          price: 8.50,
          quantity: 0,
          groupID: 2,
        },
        {
          id: 15,
          title: 'Fifteen salate',
          comment: 'It is fifteen salate',
          price: 9.50,
          quantity: 0,
          groupID: 2,
        },
        {
          id: 16,
          title: 'Sixteen salate',
          comment: 'It is sixteen salate',
          price: 7.50,
          quantity: 0,
          groupID: 2,
        },
      ]
    },
    {
      Gid: 3,
      Gname: 'Beilagen',
      Gtitle: 'Beilagen',
      dish: [
        {
          id: 17,
          title: 'Seventeen Beilagen',
          comment: 'It is Seventeen Beilagen',
          price: 4.5,
          quantity: 0,
          groupID: 3,
        },
        {
          id: 18,
          title: 'Eighteen Beilagen',
          comment: 'It is Eighteen Beilagen',
          price: 6.8,
          quantity: 0,
          groupID: 3,
        },
        {
          id: 19,
          title: 'Nineteen Beilagen',
          comment: 'It is Nineteen Beilagen',
          price: 3.6,
          quantity: 0,
          groupID: 3,
        },
        {
          id: 20,
          title: 'Twenty Beilagen',
          comment: 'It is Twenty Beilagen',
          price: 5.2,
          quantity: 0,
          groupID: 3,
        },
        {
          id: 21,
          title: 'TwoOne Beilagen',
          comment: 'It is TwoOne Beilagen',
          price: 7.3,
          quantity: 0,
          groupID: 3,
        },
        {
          id: 22,
          title: 'DoubleTwo Beilagen',
          comment: 'It is DoubleTwo Beilagen',
          price: 4.2,
          quantity: 0,
          groupID: 3,
        },
        {
          id: 23,
          title: 'TowThree Beilagen',
          comment: 'It is TowThree Beilagen',
          price: 6.8,
          quantity: 0,
          groupID: 3,
        },
        {
          id: 24,
          title: 'TwoFour Beilagen',
          comment: 'It is TwoFour Beilagen',
          price: 6.1,
          quantity: 0,
          groupID: 3,
        },
      ]
    },
    {
      Gid: 4,
      Gname: 'Spezialitäten',
      Gtitle: 'Spezialitäten aus dem tandoor',
      dish: [
        {
          id: 25,
          title: 'TowThree Beilagen',
          comment: 'It is TowThree Beilagen',
          price: 6.8,
          quantity: 0,
          groupID: 4,
        },
        {
          id: 26,
          title: 'TwoFour Beilagen',
          comment: 'It is TwoFour Beilagen',
          price: 6.1,
          quantity: 0,
          groupID: 4,
        },
        {
          id: 27,
          title: 'TowThree Beilagen',
          comment: 'It is TowThree Beilagen',
          price: 6.8,
          quantity: 0,
          groupID: 4,
        },
        {
          id: 28,
          title: 'TwoFour Beilagen',
          comment: 'It is TwoFour Beilagen',
          price: 6.1,
          quantity: 0,
          groupID: 4,
        },
        {
          id: 29,
          title: 'TowThree Beilagen',
          comment: 'It is TowThree Beilagen',
          price: 6.8,
          quantity: 0,
          groupID: 4,
        },
        {
          id: 30,
          title: 'TwoFour Beilagen',
          comment: 'It is TwoFour Beilagen',
          price: 6.1,
          quantity: 0,
          groupID: 4,
        },
        {
          id: 31,
          title: 'TowThree Beilagen',
          comment: 'It is TowThree Beilagen',
          price: 6.8,
          quantity: 0,
          groupID: 4,
        },
        {
          id: 32,
          title: 'TwoFour Beilagen',
          comment: 'It is TwoFour Beilagen',
          price: 6.1,
          quantity: 0,
          groupID: 4,
        },
      ]
    },
    {
      Gid: 5,
      Gname: 'Vegetarische',
      Gtitle: 'Vegetarische-spezialitäten',
      dish: [
        {
          id: 33,
          title: 'ThreeThree Beilagen',
          comment: 'It is TowThree Beilagen',
          price: 6.8,
          quantity: 0,
          groupID: 5,
        },
        {
          id: 34,
          title: 'ThreeFour Beilagen',
          comment: 'It is ThreeFour Beilagen',
          price: 6.1,
          quantity: 0,
          groupID: 5,
        },
        {
          id: 35,
          title: 'ThreeFive Beilagen',
          comment: 'It is TowThree Beilagen',
          price: 6.8,
          quantity: 0,
          groupID: 5,
        },
        {
          id: 36,
          title: 'TwoFour Gekdi Beilagen',
          comment: 'It is TwoFouFour Carlr Beilagen',
          price: 6.1,
          quantity: 0,
          groupID: 5,
        },
        {
          id: 37,
          title: 'TowThree Idenio Beilagen',
          comment: 'It is Four Carl TowThree Beilagen',
          price: 6.8,
          quantity: 0,
          groupID: 5,
        },
        {
          id: 38,
          title: 'TwoFour Andie Beilagen',
          comment: 'It is TwoFour Four Carl Beilagen',
          price: 6.1,
          quantity: 0,
          groupID: 5,
        },
        {
          id: 39,
          title: 'TowThree Louis Beilagen',
          comment: 'It is Tow Four Carl Three Beilagen',
          price: 6.8,
          quantity: 0,
          groupID: 5,
        },
        {
          id: 40,
          title: 'TwoFour Carl Beilagen',
          comment: 'It is TwoFour Four Carl Beilagen',
          price: 6.1,
          quantity: 0,
          groupID: 5,
        },
      ]
    }
  ],
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_DISH': {
      var temp = state;
      temp.dishGroup[action.payload.groupId].dish[action.payload.dishID].quantity ++;
      temp.totalPrice += temp.dishGroup[action.payload.groupId].dish[action.payload.dishID].price;
      // return Object.assign({}, temp);
      return {
        ...state,
        dishGroup: [...temp.dishGroup]
      }
    }
    case 'REMOVE_DISH': {
      var temp1 = state;
      temp1.dishGroup[action.payload.groupId].dish[action.payload.dishID].quantity --
      temp1.totalPrice -= temp1.dishGroup[action.payload.groupId].dish[action.payload.dishID].price;
      return {
        ...state,
        dishGroup: [...temp1.dishGroup]
      }
    }
    default: return { ...state }
  }
}

export default reducer
