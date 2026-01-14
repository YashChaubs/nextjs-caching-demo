import { revalidatePath } from 'next/cache';
import Link from 'next/link';

type ProductType = {
  id: number;
  price: number;
  name: string;
  description: string;
};

// You need to replace this URL with the one from your own MockAPI
const URL = 'https://69648a69e8ce952ce1f20387.mockapi.io/products';

// Page level Purge Cache
// export const revalidate = 0;

const getData = async () => {
  const response = await fetch(URL, { cache: 'no-store' });
  return await response.json();
};

export default async function Page() {
  async function revalidateAction(formData: FormData) {
    'use server';

    revalidatePath('/');
  }

  const products = await getData();
  return (
    <div className="p-10">
      <div className="my-4 flex items-center justify-between gap-6">
        <form>
          <button formAction={revalidateAction}>
            Purge Cache for Products
          </button>
        </form>
        <Link
          href={`/product-counter?countProduct=${products.length}`}
          className=" underline text-2xl underline-offset-2 decoration-orange-600"
          prefetch={false}
        >
          Go to Product Counter <span className="text-xl">↗</span>
        </Link>
      </div>

      <p className="py-4">Number of Products: {products.length}</p>

      {products.map((product: ProductType) => (
        <div
          key={product.id}
          className="border-2 border-dashed border-pink-600 rounded-xl my-6 p-4 py-6 flex gap-6 lg:gap-12"
        >
          <div className="min-w-24">
            <p className="text-3xl leading-6 text-purple-800 pt-6">
              ${product.price}
            </p>
          </div>
          <div>
            <p className="">{product.name}</p>
            <p className="text-lg leading-6 text-gray-500">
              {product.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
