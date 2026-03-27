import { tesloApi } from '@/api/tesloApi';
import { getProductImageAction } from '@/modules/products/actions';
import type { Product } from '@/modules/products/interfaces/product.interface';

export const getProductById = async (productId: string) => {
  // TODO pensar la creación de un nuevo producto

  try {
    const { data } = await tesloApi.get<Product>(`/products/${productId}`);
    console.log({ data: data });
    return {
      ...data,
      images: data.images.map(getProductImageAction),
    };
  } catch (error) {
    console.log(error);
    throw new Error(`Error getting product by Id ${productId}`);
  }
};
