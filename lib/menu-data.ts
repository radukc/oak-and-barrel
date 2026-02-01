export interface MenuItem {
  id: string;
  category: string;
  name: string;
  description: string;
  price: number;
  badge?: "popular" | "chef's pick";
  image: string;
}

export interface MenuCategory {
  name: string;
  description: string;
  items: MenuItem[];
}

// Local optimized WebP images for menu items
const images = {
  burrata: "/burrata.webp",
  tartare: "/tartare.webp",
  calamari: "/calamari.webp",
  soup: "/soup.webp",
  omakase: "/omakase.webp",
  dragonRoll: "/dragon-roll.webp",
  salmon: "/salmon.webp",
  spicyTuna: "/spicy-tuna.webp",
  rainbow: "/rainbow.webp",
  ribeye: "/ribeye.webp",
  filet: "/filet.webp",
  strip: "/strip.webp",
  tomahawk: "/tomahawk.webp",
  classicBurger: "/classic-burger.webp",
  wagyuBurger: "/wagyu-burger.webp",
  truffleBurger: "/truffle-burger.webp",
  bbqBurger: "/bbq-burger.webp",
  ipa: "/ipa.webp",
  wheat: "/wheat.webp",
  stout: "/stout.webp",
};

export const menuItems: MenuItem[] = [
  // Appetizers
  {
    id: "app-1",
    category: "Appetizers",
    name: "Truffle Burrata",
    description: "Creamy burrata, black truffle, arugula",
    price: 18,
    badge: "popular",
    image: images.burrata,
  },
  {
    id: "app-2",
    category: "Appetizers",
    name: "Wagyu Beef Tartare",
    description: "Hand-cut wagyu, quail egg, capers",
    price: 22,
    badge: "chef's pick",
    image: images.tartare,
  },
  {
    id: "app-3",
    category: "Appetizers",
    name: "Crispy Calamari",
    description: "Lightly battered, served with marinara and garlic aioli",
    price: 16,
    image: images.calamari,
  },
  {
    id: "app-4",
    category: "Appetizers",
    name: "Soup of the Day",
    description: "Chef's daily creation, served with artisan croutons",
    price: 12,
    image: images.soup,
  },

  // Sushi & Sashimi
  {
    id: "sushi-1",
    category: "Sushi & Sashimi",
    name: "Chef's Omakase",
    description: "A curated selection of the freshest seasonal sushi",
    price: 85,
    image: images.omakase,
  },
  {
    id: "sushi-2",
    category: "Sushi & Sashimi",
    name: "Dragon Roll",
    description: "Shrimp tempura, eel, avocado, spicy mayo",
    price: 24,
    badge: "popular",
    image: images.dragonRoll,
  },
  {
    id: "sushi-3",
    category: "Sushi & Sashimi",
    name: "Salmon Sashimi",
    description: "8 pieces of premium Norwegian salmon",
    price: 26,
    badge: "chef's pick",
    image: images.salmon,
  },
  {
    id: "sushi-4",
    category: "Sushi & Sashimi",
    name: "Spicy Tuna Roll",
    description: "Fresh tuna, spicy mayo, cucumber, sesame seeds",
    price: 18,
    image: images.spicyTuna,
  },
  {
    id: "sushi-5",
    category: "Sushi & Sashimi",
    name: "Rainbow Roll",
    description: "California roll topped with assorted sashimi",
    price: 24,
    badge: "popular",
    image: images.rainbow,
  },

  // Prime Steaks
  {
    id: "steak-1",
    category: "Prime Steaks",
    name: "Prime Ribeye",
    description: "16oz aged ribeye, herb butter, roasted garlic, seasonal vegetables",
    price: 58,
    image: images.ribeye,
  },
  {
    id: "steak-2",
    category: "Prime Steaks",
    name: "Filet Mignon",
    description: "8oz center-cut tenderloin, red wine reduction, truffle mash",
    price: 52,
    badge: "chef's pick",
    image: images.filet,
  },
  {
    id: "steak-3",
    category: "Prime Steaks",
    name: "NY Strip",
    description: "14oz bone-in strip, peppercorn sauce, crispy onion rings",
    price: 48,
    image: images.strip,
  },
  {
    id: "steak-4",
    category: "Prime Steaks",
    name: "Tomahawk Ribeye",
    description: "32oz bone-in ribeye for two, roasted bone marrow, chimichurri",
    price: 125,
    image: images.tomahawk,
  },

  // Burgers & Grills
  {
    id: "burger-1",
    category: "Burgers & Grills",
    name: "The Classic Oak",
    description: "Prime beef patty, aged cheddar, lettuce, tomato, Oak & Barrel sauce",
    price: 22,
    image: images.classicBurger,
  },
  {
    id: "burger-2",
    category: "Burgers & Grills",
    name: "Wagyu Smash Burger",
    description: "Double wagyu patties, American cheese, caramelized onion",
    price: 28,
    badge: "popular",
    image: images.wagyuBurger,
  },
  {
    id: "burger-3",
    category: "Burgers & Grills",
    name: "Truffle Mushroom Burger",
    description: "Beef patty, swiss cheese, sauteed mushrooms, truffle aioli",
    price: 26,
    image: images.truffleBurger,
  },
  {
    id: "burger-4",
    category: "Burgers & Grills",
    name: "BBQ Bacon Burger",
    description: "Beef patty, smoked bacon, cheddar, crispy onions, house BBQ",
    price: 24,
    badge: "chef's pick",
    image: images.bbqBurger,
  },

  // Craft Beverages
  {
    id: "drink-1",
    category: "Craft Beverages",
    name: "Local IPA",
    description: "Hoppy and citrus-forward, from our local craft brewery",
    price: 8,
    badge: "popular",
    image: images.ipa,
  },
  {
    id: "drink-2",
    category: "Craft Beverages",
    name: "Belgian Wheat",
    description: "Light and refreshing with hints of orange and coriander",
    price: 9,
    badge: "chef's pick",
    image: images.wheat,
  },
  {
    id: "drink-3",
    category: "Craft Beverages",
    name: "Stout",
    description: "Rich and creamy with coffee and chocolate notes",
    price: 9,
    image: images.stout,
  },
];

export const categoryDescriptions: Record<string, string> = {
  "Appetizers": "Start your culinary journey with our handcrafted starters",
  "Sushi & Sashimi": "Fresh from the finest waters, prepared by master hands",
  "Prime Steaks": "USDA Prime cuts aged to perfection",
  "Burgers & Grills": "Gourmet burgers crafted with premium ingredients",
  "Craft Beverages": "Local brews and artisan drinks to complement your meal",
};

export const categories = [
  "Appetizers",
  "Sushi & Sashimi",
  "Prime Steaks",
  "Burgers & Grills",
  "Craft Beverages",
];

export function getMenuByCategory(): MenuCategory[] {
  return categories.map((category) => ({
    name: category,
    description: categoryDescriptions[category],
    items: menuItems.filter((item) => item.category === category),
  }));
}

export function getPopularItems(): MenuItem[] {
  return menuItems.filter(
    (item) => item.badge === "popular" || item.badge === "chef's pick"
  ).slice(0, 6);
}
