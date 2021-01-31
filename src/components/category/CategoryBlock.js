import Link from "next/link";

export default function CategoryBlock({ category }) {
  return (
    <div className="product mb-5">
      <Link href={`/product-category/${category.slug}`}>
        <a>
          {/* <img
            className="object-cover h-40 md:h-64"
            src={category?.image?.sourceUrl ? category.image.sourceUrl : ""}
            srcSet={category?.image?.srcSet ? category.image.srcSet : ""}
            alt="ParentCategoryBlock image"
          /> */}
          <div className="p-3">
            <h3 className="text-lg font-medium">{category.name}</h3>
            <span className="shop-now text-sm">Ver más</span>
          </div>
        </a>
      </Link>
    </div>
  );
}
