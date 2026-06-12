export const IMAGES = {
  logo: "https://serenitycustomwoodworking.com/wp-content/uploads/2023/06/Serenity-Custom-Woodworking_Wordmark_White-1-2048x878.png",
  hero: "https://serenitycustomwoodworking.com/wp-content/uploads/2023/06/final-35-1024x812.jpg",
  kitchen: [
    "https://serenitycustomwoodworking.com/wp-content/uploads/2023/06/final-17-1-1024x819.jpg",
    "https://serenitycustomwoodworking.com/wp-content/uploads/2024/09/pleasant-hill-kitchen-island-after-8-1024x768.jpg",
    "https://serenitycustomwoodworking.com/wp-content/uploads/2025/12/des-moines-custom-kitchen-cabinets.jpeg",
    "https://serenitycustomwoodworking.com/wp-content/uploads/2025/06/cumming-kitchen-remodel-121-1024x685.jpg",
    "https://serenitycustomwoodworking.com/wp-content/uploads/2023/10/custom-cabinets-clive-iowa-177th-court-1-1024x683.jpeg",
    "https://serenitycustomwoodworking.com/wp-content/uploads/2023/10/custom-cabinets-clive-iowa-177th-court-2.jpeg",
    "https://serenitycustomwoodworking.com/wp-content/uploads/2025/05/home-kitchen-remodeling-theme--1024x682.jpg"
  ],
  bath: [
    "https://serenitycustomwoodworking.com/wp-content/uploads/2025/08/4047-NW-177th-Ct_24-1024x683.jpeg",
    "https://serenitycustomwoodworking.com/wp-content/uploads/2023/11/custom-cabinets-altoona-iowa-5-scaled.jpg",
    "https://serenitycustomwoodworking.com/wp-content/uploads/2023/06/IMG_0224-scaled.jpg"
  ],
  builtIns: [
    "https://serenitycustomwoodworking.com/wp-content/uploads/2023/07/4047-NW-177th-Ct_08-1024x683.jpeg",
    "https://serenitycustomwoodworking.com/wp-content/uploads/2024/05/west-des-moines-custom-bookcases-4-768x1024.jpg",
    "https://serenitycustomwoodworking.com/wp-content/uploads/2024/01/custom-cabinets-and-closets-clive-iowa-14-1024x683.jpeg",
    "https://serenitycustomwoodworking.com/wp-content/uploads/2024/12/tree-of-christmas-over-a-blurred-decorated-bookshelf-in-living-room-1024x576.jpg"
  ],
  mudroom: [
    "https://serenitycustomwoodworking.com/wp-content/uploads/2025/07/clive-bathroom-cabinets-102-1024x768.jpg",
    "https://serenitycustomwoodworking.com/wp-content/uploads/2024/12/custom-mudroom-iowa-winter-1024x1024.png",
    "https://serenitycustomwoodworking.com/wp-content/uploads/2024/05/custom-mudroom-cabinets.webp",
    "https://serenitycustomwoodworking.com/wp-content/uploads/2025/04/sitting-amongst-the-storage-portrait-of-a-young-girl-sitting-on-a-box-in-a-garage--1024x683.jpg"
  ],
  closets: [
    "https://serenitycustomwoodworking.com/wp-content/uploads/2024/01/custom-cabinets-and-closets-clive-iowa-26-1024x683.jpeg",
    "https://serenitycustomwoodworking.com/wp-content/uploads/2024/01/custom-closets-central-iowa-3-scaled.jpg",
    "https://serenitycustomwoodworking.com/wp-content/uploads/2025/06/woman-organizing-clothes-at-home-spring-cleaning-putting-away-things-decluttering-1024x681.jpg"
  ],
  about: "https://serenitycustomwoodworking.com/wp-content/uploads/2023/06/IMG_20181110_150206474-1024x768.jpg"
};

export const SERVICES = [
  { id: "kitchens", title: "Custom Kitchen Cabinets", description: "Bespoke kitchen cabinetry, functional islands, and custom-built wood range hoods.", image: IMAGES.kitchen[0] },
  { id: "bathrooms", title: "Bathroom Vanities & Cabinets", description: "Custom-built for durability in high-moisture spaces, blending luxury styling with maximized storage.", image: IMAGES.bath[0] },
  { id: "built-ins", title: "Built-Ins & Living Spaces", description: "Fireplace surrounds, floating shelves, custom home bars, home theater cabinetry, and library bookcases.", image: IMAGES.builtIns[0] },
  { id: "mudrooms", title: "Laundry & Mudroom Storage", description: "Meticulously organized master closets, laundry room cabinets, mudroom storage solutions.", image: IMAGES.mudroom[0] }
];

export const TESTIMONIALS = [
  {
    name: "Christie",
    text: "I hired Serenity Custom Woodworking to build custom cabinets/bookshelves and a fireplace mantle for my family room. The high quality of design and woodworking skills far exceeded my expectations. Great care was taken to produce and install the beautiful pieces... Travis is a true professional who pays attention to detail and strives to please his customers."
  },
  {
    name: "Matt",
    text: "Travis did an amazing job designing and building our cabinets and bookcases. He was very easy to work with and they look great!"
  },
  {
    name: "Dave",
    text: "We used Travis to make some updates to our kitchen and pantry with custom cabinetry. He went to great lengths to make sure he was providing exactly what we wanted, even developing a special finish for the cabinets to meet our design needs."
  }
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "Trick or Treat: Clever Cabinet Storage Ideas for Every Room",
    date: "October 29, 2025",
    image: "https://serenitycustomwoodworking.com/wp-content/uploads/2024/10/the-child-takes-out-the-candy-from-the-bucket-for-halloween-1024x682.jpg",
    excerpt: "Halloween might be all about hiding candy, but around the house, it's the clutter that usually needs a good disguise."
  },
  {
    id: 2,
    title: "Fall Remodel Season: Perfect Time to Upgrade Your Kitchen",
    date: "October 16, 2025",
    image: IMAGES.kitchen[3],
    excerpt: "As the leaves change and the air turns crisp, fall brings one of the best times of year to start your kitchen remodel."
  },
  {
    id: 3,
    title: "Cabinet Clarity: Custom Storage Matters During Spring Cleaning",
    date: "June 24, 2025",
    image: IMAGES.closets[2],
    excerpt: "Spring in Iowa brings a fresh sense of renewal. It’s also the perfect time to declutter and reclaim your space with custom cabinetry."
  }
];

// All 60+ locations for the hidden SEO sitemap.
export const LOCATIONS = [
  "Adel", "Alleman", "Altoona", "Ames", "Ankeny", "Bondurant", "Bouton", "Cambridge", 
  "Carlisle", "Clive", "Colfax", "Cumming", "Dallas Center", "De Soto", "Des Moines", 
  "Dexter", "Earlham", "Elkhart", "Farrar", "Granger", "Grimes", "Hartford", "Huxley", 
  "Indianola", "Johnston", "Kelley", "Knoxville", "Madrid", "Martensdale", "Maxwell", 
  "Minburn", "Mitchellville", "New Virginia", "Norwalk", "Patterson", "Perry", "Pleasant Hill", 
  "Polk City", "Prole", "Redfield", "Runnells", "Slater", "Spring Hill", "St. Charles", 
  "St. Marys", "Stuart", "Urbandale", "Van Meter", "Waukee", "West Des Moines", "Windsor Heights", 
  "Winterset", "Woodward"
];
