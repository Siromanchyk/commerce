export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  altText: string;
  price: {
    current: number;
    currency: string;
    old?: number;
    discountPercentage?: number;
  };
  rating: {
    stars: number;
    reviewsCount: number;
  };
  actions: {
    addToCartAvailable: boolean;
    hasWishlist: boolean;
    hasQuickView: boolean;
  };
}

export interface ICategory {
  name: string,
  img: string,
  imgAlt: string,
}
