import React from "react";
import { DropDown, Text } from "../../../../components";
import Card from "../../../../components/Card";
import { history } from "../../../../utils";

const Products = () => {
  const handleProductCardClick = () => {
    history.push("/product");
  };

  return (
    <div className="space-y-32">
      <div className="space-y-10 md:px-10">
        <div className="flex bg-blue-100 md:bg-white items-center py-4 justify-center md:justify-start space-x-2 md:px-4">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 text-blue-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                clip-rule="evenodd"
              />
            </svg>
          </div>

          <div>
            <Text size="xl" variant="blue" isTitle={true} weight="700">
              Trending Collections
            </Text>
          </div>
        </div>
        <div className="grid md:grid-cols-4 place-items-center space-y-10 md:space-y-0">
          {[...new Array(4)].map((e, index) => (
            <div style={{ maxWidth: "280px" }}>
              <Card color="white" rounded="lg" shadow="lg">
                <img
                  className="rounded-t-lg object-contain w-60 h-40"
                  src="https://travelfutures.club/wp-content/uploads/2021/05/vid-front-870x555.jpg"
                />
                <div className="space-y-2 p-4">
                  <div>
                    <Text variant="primary">Avalon Castle Ubud Bali</Text>
                  </div>
                  <div>
                    <Text>0.612 BNB ($227.17 USD)</Text>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className=" md:px-10">
        <div className="md:flex justify-between bg-blue-100 md:bg-white py-6 space-y-4 items-center md:px-4">
          <div className="flex justify-center items-center space-x-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <div className="text-center">
              <Text size="xl" variant="blue" isTitle={true} weight="700">
                Recently Minted
              </Text>
            </div>
          </div>
          <div className="md:w-60 w-full md:inline-block flex w-40 justify-center z-10">
            <DropDown
              label="Sort"
              options={[
                "All",
                "Available for sale",
                "most liked",
                "cheapest",
                "Highest price",
                "recently added",
              ]}
            />
          </div>
        </div>
        <div className="grid md:grid-cols-4 place-items-center space-y-10">
          {[...new Array(12)].map((e, index) => (
            <div className="mt-10 cursor-pointer" style={{ maxWidth: "280px" }}>
              <Card
                color="white"
                rounded="lg"
                shadow="lg"
                onClick={handleProductCardClick}
              >
                <img
                  className="rounded-t-lg"
                  src="https://travelfutures.club/wp-content/uploads/2021/05/vid-front-870x555.jpg"
                  width="280px"
                />
                <div className="space-y-2 p-4">
                  <div>
                    <Text variant="primary">Avalon Castle Ubud Bali</Text>
                  </div>
                  <div>
                    <Text>0.612 BNB ($227.17 USD)</Text>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
