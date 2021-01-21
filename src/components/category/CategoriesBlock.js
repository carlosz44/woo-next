import CategoryBlock from "./CategoryBlock";

export default function CategoriesBlock({ productCategories }) {
  return (
    <div className="product-categories grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
      {productCategories.length
        ? productCategories.map((productCategory) => (
            <CategoryBlock
              key={productCategory.id}
              category={productCategory}
            />
          ))
        : ""}
    </div>
  );
}
