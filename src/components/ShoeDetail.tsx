import nike1 from "../assets/n1-min.png";
import { qty, sizes } from "./constant";
import Select from "./Select";

const ShoeDetail = () => {
  return (
    <div className="flex flex-col lg:flex-row-reverse space-y-4">
      {/* Shoe Image */}
      <div className="flex-1 lg:-mt-32 lg:ml-28">
        <div
          className="h-full flex-center  bg-gradient-to-br from-[#f637cf] from-5%
             via-[#e3d876] via-40% to-[#4dd4c6]"
        >
          <img className="animate-float" src={nike1}></img>
        </div>
      </div>
      <div className="flex-1 space-y-6">
        {/* Shoe Detail */}
        <div className="text-5xl font-black md:text-8xl">Nike Air Max 270</div>

        <div className="font-medium md:text-xl">
          {
            "The Nike Air Max270 is a lifestyle shoe that's sure to turn heads. With its sleek design and comfortable fit, it's perfect for everyday wear."
          }
        </div>
        <div className="flex space-x-6">
          <div className="text-3xl font-extrabold md:text-6xl">100 $</div>
          <Select title={"QTY"} options={qty} />
          <Select title={"SIZE"} options={sizes} />
        </div>
        {/* Buttons */}
        <div className="space-x-10">
          <button
            className="h-14 w-44 bg-black text-white hover:bg-gray-900
                active:bg-gray-700 btn-press-anim"
          >
            Add to bag
          </button>
          <a
            href="#"
            className="text-lg font-bold underline underline-offset-4"
          >
            View details
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShoeDetail;
