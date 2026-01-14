export default async function ProductCounter({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { countProduct } = await searchParams;
  const count = countProduct ? parseInt(countProduct as string) : 0;

  return (
    <div>
      <h1>Product Counter</h1>
      <p>Number of Products: {count}</p>
    </div>
  );
}
