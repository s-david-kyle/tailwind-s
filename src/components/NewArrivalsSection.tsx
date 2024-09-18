import Card from "./Card";
import { Shoe } from "./constant";

interface Props {
  shoes: Shoe[];
}

const NewArrivalsSection = ({ shoes }: Props) => {
  return (
    <div className="mt-20">
      <div className="flex-center">
        <div className="bg-[url('./assets/lines.png')] bg-center text-4xl font-extrabold">
          NEW ARRIVALS
        </div>
      </div>
      <div className="justify-between mt-10 grid gap-y-24 gap-x-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(3,25%)]">
        {shoes.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
      {shoes.length}
    </div>
  );
};

export default NewArrivalsSection;
