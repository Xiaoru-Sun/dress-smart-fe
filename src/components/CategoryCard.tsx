type CategoryCardProp = {
  categoryObject: { category: string };
};

const CategoryCard = ({ categoryObject }: CategoryCardProp) => {
  return <div>{categoryObject.category}</div>;
};

export default CategoryCard;
