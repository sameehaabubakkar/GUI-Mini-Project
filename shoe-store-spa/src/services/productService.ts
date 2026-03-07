import type { ProductsResponse } from '../types/product'

const BASE_URL = 'https://dummyjson.com'

export const fetchProducts = async (limit = 12): Promise<ProductsResponse> => {
  const response = await fetch(`${BASE_URL}/products?limit=${limit}`)

  if (!response.ok) {
    throw new Error(`Unable to load products (HTTP ${response.status})`)
  }

  const data: ProductsResponse = await response.json()
  return data
}
