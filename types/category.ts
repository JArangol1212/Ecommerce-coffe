export type CategoryType = {
      id: number;
      documentId: string;
      categoryName: string;
      slug: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      mainimage: {
        id: number;
        documentId: string;
        name: string;
        alternativeText: string | null;
        caption: string | null;
        url: string;
      };
    };
    