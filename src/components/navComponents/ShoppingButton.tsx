import { TbShoppingBag } from "react-icons/tb";

const ShoppingButton = () => {
  return (
    <>
      <div className="fixed left-4 bottom-4 lg:static">
        <div className="flex-center h-12 w-12 rounded-full bg-white shadow-md">
          <TbShoppingBag />
        </div>
      </div>
    </>
  );
};

export default ShoppingButton;
