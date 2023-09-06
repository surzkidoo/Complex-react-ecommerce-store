export const ads = {
  mainAd: ["ad2.jpeg", "ad1.jpeg", "ad3.jpg"],
  sideTop: ["ad1.jpeg"],
  SideBottom: ["ad3.jpg"],
  banner: ["ad2.jpeg", "ad1.jpeg"],
  smallBanner: ["ad2.jpeg"],
};
  export const users =[
    {
      id: Math.random(),
      fullname:'Abubakar Mukhtar',
      address: 'Arkilla Layout',
      email:'Abubakarsurzkidoo@gmail.com',
      password:'Surzkidoo@67505',
    }
    
  ]
export const brands = [
  {
    id: 1,
    name: "Gucci",
    brandimage:"product-1.jpg",
    numberProducts: 410,
  },

  {
    id: 1,
    name: "Samsung",
    brandimage:"product-1.jpg",
    numberProducts: 120,
  },
  {
    id: 1,
    name: "Iphone",
    brandimage:"product-1.jpg",
    numberProducts: 210,
  },
  {
    id: 1,
    name: "HP",
    numberProducts: 510,
  },
  {
    id: 1,
    name: "LG",
    brandimage:"product-1.jpg",
    numberProducts: 710,
  },
];
export const products = [
  {
    product_id: 1,
    product_name: "Black Iphone 11 promax",
    product_price: 18000,
    product_discount: 10,
    product_quantity: 32,
    product_discount_price: 20000,
    product_category: 1,
    product_brand: 'Gucci',
    product_feature: {size:'XL',color:'Red'},
    product_rating: 3.3,
    product_desc: "bla-bla-bla",
    product_spec: {
      speaker: "Loud x2",
      screen: "1200px",
    },
    product_img: ["product-1.jpg", "product-2.jpg"],
    product_review: [
      {
        user: "musa",
        review: "the product the great",
        rate: 3,
      },
    ],
  },

  {
    product_id: 2,
    product_name: "Ios Smart watch wit 2000mah battery",
    product_price: 12000,
    product_discount: 3,
    product_brand: 'Gucci',
    product_quantity: 32,
    product_discount_price: 20000,
    product_category: 1,
    product_feature: {size:'XL',color:'Red'},
    product_rating: 5,
    product_desc: "bla-bla-bla",
    product_spec: {
      speaker: "Loud x2",
      screesn: "1200px",
    },
    product_img: ["product-2.jpg", "product-2.jpg"],
    product_review: [
      {
        user: "musa",
        review: "the product the great",
        rate: 3,
      },
    ],
  },

  {
    product_id: 3,
    product_name: "Power bank with a lasting battery",
    product_price: 41000,
    product_brand: 'Gucci',
    product_discount: 40,
    product_quantity: 32,
    product_discount_price: 10000,
    product_feature: {size:'XL',color:'Blue'},
    product_category: 1,
    product_rating: 2,
    product_desc: "bla-bla-bla",
    product_spec: {
      speaker: "Loud x2",
      screen: "1200px",
    },
    product_img: ["product-5.jpg", "product-2.jpg"],
    product_review: [
      {
        user: "musa",
        review: "the product the great",
        rate: 3,
      },
    ],
  },
  {
    product_id: 4,
    product_name: "Power bank with a lasting battery",
    product_price: 20000,
    product_discount: 40,
    product_brand: 'Gucci',
    product_quantity: 32,
    product_discount_price: 10000,
    product_category: 6,
    product_rating: 3,
    product_feature: {size:'XL',color:'Red'},
    product_desc: "bla-bla-bla",
    product_spec: {
      speaker: "Loud x2",
      screen: "1200px",
    },
    product_img: ["product-3.jpg", "product-2.jpg"],
    product_review: [
      {
        user: "musa",
        review: "the product the great",
        rate: 3,
      },
    ],
  },
  {
    product_id: 5,
    product_name: "Power Lv battery",
    product_feature: {size:'L',color:'Blue'},
    product_price: 4000,
    product_discount: 40,
    product_quantity: 32,
    product_discount_price: 1000,
    product_category: 6,
    product_brand: "Lv",
    product_rating: 5,
    product_desc: "bla-bla-bla",
    product_spec: {
      speaker: "Loud x2",
      screen: "1200px",
    },
    product_img: ["product-4.jpg", "product-2.jpg","product-4.jpg", "product-2.jpg","product-4.jpg", "product-2.jpg","product-2.jpg","product-4.jpg", "product-2.jpg"],
    product_review: [
      {
        user: {fullname:'Abubakar Mukhtar'},
        review: "Wow this is my first review",
        rate: 3,
      },
    ],
  },

  {
    product_id: 6,
    product_name: "Lv Shirt",
    product_brand: "Lv",
    product_feature: {size:'L',color:'Red'},
    product_price: 33000,
    product_discount: 40,
    product_quantity: 32,
    product_discount_price: 10000,
    product_category: 2,
    product_rating: 2.4,
    product_desc: "bla-bla-bla",
    product_spec: {
      speaker: "Loud x2",
      screen: "1200px",
    },
    product_img: ["product-3.jpg", "product-2.jpg"],
    product_review: [
      {
        user: "musa",
        review: "the product the great",
        rate: 3,
      },
    ],
  },
];

export const categories = [
  {
    category_id: 1,
    category_name: "Clothings",
    category_image: "product-1.jpg",
    subcategory: [
      {
        category_id: 2,
        category_name: "Babies cloths",
        category_image: "product-1.jpg",
        subcategory: [
          {
            category_id: 3,
            category_name: "Babies pants",
            category_image: "product-1.jpg",
            subcategory: [],
          },
          {
            category_id: 4,
            category_name: "Babies pajamas",
            category_image: "product-1.jpg",
            subcategory: [],
          },
        ],
      },{

        category_id: 5,
        category_name: "Mens wears",
        category_image: "product-1.jpg",
        subcategory: [
          {
            category_id: 6,
            category_name: "Mens pants",
            category_image: "product-1.jpg",
            subcategory: [],
            brands:['Gucci','Lv','Versace','Fantom','khaki'],
            features:[
              {
                name:'size',
                value:['XS','S','L','XL','XXL']
              },
              {
                name:'Color',
                value:['Red','Green','Blue','Others']
              }
            ]
          },
          {
            category_id: 7,
            category_name: "Mens pajamas",
            category_image: "product-1.jpg",
            subcategory: [],
          },
        ],
        
      }
    ],
    brands:['Gucci','Lv','Versace','Fantom','khaki'],
    features:[
      {
        name:'size',
        value:['XS','S','L','XL','XXL']
      },
      {
        name:'color',
        value:['Red','Green','Blue','Others']
      }
    ]
  },
  {
    category_id: 8,
    category_name: "Electronics",
    category_image: "product-1.jpg",
    subcategory: [],
    brands:['LG','Samsung',],
    features:[
      {
        name:'size',
        value:['XS','S','L','XL','XXL']
      },
      {
        name:'Color',
        value:['red','green','blue','others']
      }
    ]
  },

  {
    category_id: 9,
    category_name: "Furniture",
    category_image: "product-1.jpg",
    subcategory: [],
  },

  {
    category_id: 10,
    category_name: "Mobile phone",
    category_image: "product-1.jpg",
    subcategory: [],
  },

  {
    category_id: 18,
    category_name: "Food & nutritions",
    category_image: "product-1.jpg",
    subcategory: [],
  },
];
