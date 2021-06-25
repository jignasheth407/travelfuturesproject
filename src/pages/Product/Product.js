import React, { useState } from "react";
import { Text, Button } from "../../components";
import { Information, Bids, History } from "./components";

const Product = () => {
  const [activeSection, setActiveSection] = useState("information");

  return (
    <div className="">
      <div className="grid md:grid-cols-5 ">
        <div className="col-span-3">
          <div className="md:py-40">
            <img
              className="mx-auto rounded-lg shadow-2xl md:w-96 w-40"
              src="https://travelfutures.club/wp-content/uploads/2021/05/vid-front-870x555.jpg"
            />
          </div>
        </div>

        <div
          className="bg-gray-100 col-span-2 "
          style={{
            height: window.innerWidth < 469 ? "100%" : `calc(100vh - 5rem)`,
          }}
        >
          <div className="mx-auto text-center py-4 p-8">
            <Text variant="black" size="lg">
              2019 50 YEARS OF MOON LANDING Gold Coin
            </Text>
          </div>

          <div className="py-4 ">
            <div className="grid grid-cols-3 gap-8 px-2 border-b">
              <div
                className={`md:w-24 text-center ${
                  activeSection === "information" && "border-b-4"
                } border-blue-500 cursor-pointer`}
                onClick={() => setActiveSection("information")}
              >
                <Text>information</Text>
              </div>
              <div
                className={`md:w-24 text-center  ${
                  activeSection === "history" && "border-b-4"
                } border-blue-500 cursor-pointer`}
                onClick={() => setActiveSection("history")}
              >
                <Text>History</Text>
              </div>
              <div
                className={`md:w-24 text-center ${
                  activeSection === "bids" && "border-b-4"
                }  border-blue-500 cursor-pointer`}
                onClick={() => setActiveSection("bids")}
              >
                <Text>Bids</Text>
              </div>
            </div>

            {/* information section */}

            {activeSection === "information" ? (
              <Information />
            ) : activeSection === "history" ? (
              <History />
            ) : (
              <Bids />
            )}

            <div className="py-6 border-t border-blue-200 border-dashed space-y-4">
              <div className="flex space-x-10 justify-center">
                <div>
                  <Button color="primary" rounded="full" variant="primary200">
                    buy now
                  </Button>
                </div>
                <div>
                  <Button color="primary" rounded="full" variant="primary200">
                    place bid
                  </Button>
                </div>
              </div>
              <div className="text-center">
                <Text>Service fee 2.5%. 0.918 BNB ($329.6 USD)</Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
