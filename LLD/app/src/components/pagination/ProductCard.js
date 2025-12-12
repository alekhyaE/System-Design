const ProductCard = ({
  id,
  title,
  price,
  description,
  thumbnail,
  discountPercentage,
}) => {
  return (
    <div className="m-4 p-4 border border-solid border-black">
     <img className="h-48 w-60 object-contain" alt={title} src={thumbnail}></img>
     <h1 className="p-2 font-bold text-xl w-60">{id}-{title}</h1>
     <h2 className="p-1 text-lg">
        Rs.{price}-{discountPercentage}%
     </h2>
     <p className="p-1 text-md w-60">{description}</p>
    </div>
  );
};
export default ProductCard;
