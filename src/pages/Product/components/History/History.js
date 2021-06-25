import React from "react";
import { Text } from "../../../../components";

const History = () => {
  return (
    <div>
      <div className="h-80 py-6 custom-scroll overflow-y-scroll">
        {[...new Array(4)].map((el, index) => (
          <div key={index} className="p-4 space-y-2">
            <div>
              <Text variant="primary">Sale 1 edition 192 days ago</Text>
            </div>
            <div className="md:flex justify-between md:space-y-2 items-center">
              <div>
                <Text>by 0xfeb8...A977</Text>
              </div>
              <div>
                <Text variant="blue">0.6 BNB ($216.56 USD)</Text>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
