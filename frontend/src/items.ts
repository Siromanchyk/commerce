import { ref } from "vue";
import { router } from "@/routers/index"
export const languageItems = ref([
  {
    label: 'Українська',
    class: 'p-1',
  },
  {
    label: 'Polska',
    class: 'p-1',
  },
]);

export const menuItems = ref([
  {
    label: 'Manage My Account',
    icon: 'pi pi-user',
    command: () => router.push('/account'),
  },
  {
    label: 'My Orders',
    icon: 'pi pi-receipt',
    command: () => router.push('/cart'),
  },
  {
    label: 'My Cancellations',
    icon: 'pi pi-times',
    command: () => router.push('/cart'),
  },
  {
    label: 'My Wishlist',
    icon: 'pi pi-heart',
    command: () => router.push('/wishlist'),
    badge: 2,
  },
  {
    label: 'My Reviews',
    icon: 'pi pi-star',
    command: () => router.push('/cart'),
  },
  {
    label: 'Logout',
    icon: 'pi pi-sign-out',
    command: () => router.push('/cart'),
  }
]);

export const navigationItems = [
  {
    label: 'Home',
  },
  {
    label: 'Contact',
  },
  {
    label: 'About',
  },
  {
    label: 'Sign Up',
  },
]

export const catalogItems = ref([
  {
    label: 'Woman’s Fashion',
    items: [
      {
        label: 'Living Room',
        items: [
          { label: 'Accessories' },
          { label: 'Armchair' },
          { label: 'Coffee Table' },
          { label: 'Couch' },
          { label: 'TV Stand' }
        ]
      },
      {
        label: 'Header2',
        items: [{ label: 'Paragraph2' }]
      }
    ],
  },
  {
    label: 'Men’s Fashion',
  },
  {
        label: 'Electronics',
    },
    {
        label: 'Home & Lifestyle',
    },
    {
        label: 'Medicine',
    },
    {
        label: 'Sports & Outdoor',
    },
    {
        label: 'Baby’s & Toys',
    },
    {
        label: 'Groceries & Pets',
    },
    {
        label: 'Health & Beauty',
    }
]);

export const accountSettingItems = ref([
  {
    label: 'Manage My Account',
    items: [
      {
        label: 'My profile',
      },
      {
        label: 'Address Book',
      },
      {
        label: 'My Payment Options'
      },
    ]
  },
  {
    label: 'My Orders',
    items: [
      {
        label: 'My Returns',
      },
      {
        label: 'My Cancellations',
      }
    ]
  },
  {
    label: 'My Wishlist',
    items: [],
  }
]);

export const categoriesItems = ref([
    {
      label: 'Woman’s Fashion',
      items: [
        [
          {
            label: 'Living Room',
            items: [{ label: 'Accessories' }, { label: 'Armchair' }, { label: 'Coffee Table' }, { label: 'Couch' }, { label: 'TV Stand' }]
          },
        ],
        [
          {
            label: 'Header2',
            items: [{ label: 'Paragraph2'}]
          }
        ]
      ],
    },
    {
        label: 'Men’s Fashion',
        items: [],
    },
    {
        label: 'Electronics',
        items: [],
    },
    {
      label: 'Home & Lifestyle',
      items: [],
    },
    {
      label: 'Medicine',
      items: [],
    },
    {
      label: 'Sports & Outdoor',
      items: [],
    },
    {
      label: 'Baby’s & Toys',
      items: [],
    },
    {
      label: 'Groceries & Pets',
      items: [],
    },
    {
      label: 'Health & Beauty',
      items: [],
    }
]);

export const categoriesPhoto = [
  {
    name: 'Phones',
    img: './assets/images/category/Category-CellPhone.png',
    imgAlt: 'phones',
  },
  {
    name: 'Computers',
    img: './assets/images/category/Category-Computer.png',
    imgAlt: 'computers',
  },
  {
    name: 'SmartWatch',
    img: './assets/images/category/Category-SmartWatch.png',
    imgAlt: 'smartwatch',
  },
  {
    name: 'Camera',
    img: './assets/images/category/Category-Camera.png',
    imgAlt: 'camera',
  },
  {
    name: 'HeadPhones',
    img: './assets/images/category/Category-Headphone.png',
    imgAlt: 'headphones',
  },
  {
    name: 'Gaming',
    img: './assets/images/category/Category-Gamepad.png',
    imgAlt: 'gaming',
  }
]

export const imageSlides = [
  {
    id: 1,
    src: '',
    alt: '',
  },
  {
    id: 2,
    src: '',
    alt: '',
  }
]