type CategoryCardProp = {
  categoryObject: { category: string };
};

const CategoryCard = ({ categoryObject }: CategoryCardProp) => {
  return (
    <>
      <div className="ml-4">{categoryObject.category}</div>
    </>
  );
};

export default CategoryCard;
