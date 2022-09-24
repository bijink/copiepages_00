const reData = {
   titleImg: [
      "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png",
      "https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png",
   ],
   place: ["Kochi"],
}

export const responseData = {
   id: "page_00",
   title: "zomato",
   place: reData.place,
   nav: {
      titleImg: reData.titleImg[0],
      btnName: ["Investor relations", "Add restaurant", "Log in", "Sign up"],
   },
   banner: {
      img: "https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png",
      titleImg: reData.titleImg[1],
      caption: "Discover the best food & drinks in",
      place: reData.place,
      searchPlaceholder: {
         location: reData.place,
         search: "Search for restaurant, cuisine or a dish",
      },
   },
   features: [
      {
         title: "Order Online",
         desc: "Stay home and order to your doorstep",
         img: "https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*",
      },
      {
         title: "Dining",
         desc: "View the city's favourite dining venues",
         img: "https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*",
      },
   ],
   collections: {
      sectionTitle: "Collections",
      caption: "Explore curated lists of top restaurants, cafes, pubs, and bars in Kochi, based on trends",
      btn: "All collections in Kochi",
      collection: [
         {
            title: "Veggie Friendly",
            details: "5 Places",
         },
         {
            title: "Trending This Week",
            details: "30 Places",
         },
         {
            title: "Must-Visit Restaurants in Kochi",
            details: "9 Places",
         },
         {
            title: " Great Cafes",
            details: "11 Places",
         },
      ],
   },
   explore: {
      sectionTitle: "Explore options near me",
      option: [
         {
            optionTitle: "Popular cuisines near me",
            options: [
               "Arabian",
               "Bakery",
               "Beverages",
               "Biryani",
               "Burger",
               "Chinese",
               "Continental",
               "Desserts",
               "Ice Cream",
               "Juices",
               "Kerala",
               "Lebanese",
               "North Indian",
               "Pizza",
               "Sandwich",
               "Seafood",
               "Shake",
               "Sichuan",
               "South Indian",
               "Street",
            ],
            optionSuffix: "food near me",
         },
         {
            optionTitle: "Popular restaurant types near me",
            options: [
               "Bakeries",
               "Bars",
               "Beverage Shops",
               "Cafés",
               "Casual Dining",
               "Confectioneries",
               "Dessert Parlors",
               "Dhabas",
               "Fine Dining",
               "Food Courts",
               "Food Trucks",
               "Kiosks",
               "Lounges",
               "Quick Bites",
               "Sweet Shops",
            ],
            optionSuffix: "near me",
         },
         {
            optionTitle: "Top Restaurant Chains",
            options: ["Burger King ", "KFC", "McDonald's", "Pizza Hut", "WOW! Momo"],
            optionSuffix: "",
         },
         {
            optionTitle: "Cities We Deliver To",
            options: [1, 2, 3, 4, 5, 6, 7],
            optionSuffix: "",
         },
      ],
   },
   footer: {
      titleImg: reData.titleImg[0],
      footerLinks: [
         {
            title: "about zomato",
            links: ["Who We Are", "Blog", "Work With Us", "Investor Relations", "Report Fraud", "Contact Us"],
         },
         {
            title: "zomaverse",
            links: ["Zomato", "Feeding India", "Hyperpure", "Zomaland"],
         },
         {
            title: "for restaurants",
            links: ["Partner With Us", "Apps For You"],
         },
         {
            title: "for enterprises",
            links: ["Zomato For Work"],
         },
         {
            title: "learn more",
            links: ["Privacy", "Security", "Terms", "Sitemap"],
         },
      ],
      // terms: 'By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2022 © Zomato™ Ltd. All rights reserved.',
      terms: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut corrupti quos explicabo illum! Non dolorem fugiat deleniti, amet quas sequi officiis laudantium, cumque, quasi ad ipsam! Numquam explicabo omnis nisi esse, hic excepturi officiis sed.",
   },
}
