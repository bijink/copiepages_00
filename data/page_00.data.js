const reData = {
   titleImg: [
      'https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png',
      'https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png',
   ],
   place: ['Malappuram'],
}

export const responseData = {
   id: 'page_00',
   title: 'zomato',
   place: reData.place,
   nav: {
      titleImg: reData.titleImg[0],
      btnName: ['Investor relations', 'Add restaurant', 'Log in', 'Sign up'],
   },
   banner: {
      img: 'https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png',
      titleImg: reData.titleImg[1],
      caption: 'Discover the best food & drinks in',
      place: reData.place,
      searchPlaceholder: {
         location: reData.place,
         search: 'Search for restaurant, cuisine or a dish',
      },
   },
}
