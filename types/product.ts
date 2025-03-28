export type ProductType = {
      id: number;
      documentId: string;
      productName: string;
      slug: string;
      description: string;
      active: boolean;
      price: number;
      origin: string;
      taste: string;
      isFeatured: boolean;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      images: {
        id: number;
        url: string;
      }[];
    };
    