export interface Product {
    imageCover:string;
    category:{name:string};
    title:string;
    price:number;
    ratingsAverage:number;
    _id:string;
    description:string;
    images: string[];
}

export interface Category {
    _id: string
    name: string
    slug: string
    image: string
  }
