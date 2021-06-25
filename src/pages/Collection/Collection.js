import React from "react";
import { Button, DropDown, Text, Card } from "../../components";

const Collection = () => {
  return (
    <div className="p-8">
      <div className="space-y-4 ">
        <div className="md:flex-col md:space-y-8 border-b flex items-center md:items-start justify-between">
          <div className="w-20 h-20 rounded-full bg-gray-300 "></div>
          <div className="md:flex space-x-6  pb-8 space-y-4 md:space-y-0 ">
            <div className="">
              <Button color="primary" variant="primary200" rounded="lg">
                My Collection
              </Button>
            </div>
            <div>
              <Button color="primary" variant="primary200" rounded="lg">
                Liked
              </Button>
            </div>
            <div>
              <Button color="primary" variant="primary200" rounded="lg">
                Activity
              </Button>
            </div>
          </div>
        </div>

        <div className="md:py-10 py-4">
          <div className="flex md:justify-end justify-center">
            <div className="w-52">
              <DropDown
                label="sort"
                options={[
                  "all",
                  "available for sale",
                  "most liked",
                  "cheapest",
                  "highest price",
                  "recently added",
                ]}
              />
            </div>
          </div>
          <div className="text-center py-20">
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
        </div>
      </div>
    </div>
  );
};

export default Collection;
