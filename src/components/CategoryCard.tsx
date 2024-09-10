type CategoryCardProp = {
  categoryObject: { category: string };
};

const CategoryCard = ({ categoryObject }: CategoryCardProp) => {
  return (
    <>
      <div className="ml-4 text-secondary font-semibold">
        {categoryObject.category}
      </div>
      <div></div>
    </>
  );
};

export default CategoryCard;
