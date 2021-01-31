import CategoryBlock from "./CategoryBlock";

export default function CategoriesBlock({ productCategories }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
