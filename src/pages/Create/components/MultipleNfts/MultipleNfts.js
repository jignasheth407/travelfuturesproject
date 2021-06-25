import React from "react";
import {
  DropDown,
  ImageField,
  Text,
  TextBox,
  Button,
} from "../../../../components";

const SingleNft = () => {
  return (
    <div className="px-40 p-4 ">
      <div className=" py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-end space-x-2">
            <div className="w-96">
              <TextBox
                placeHolder="Enter the price for which the item will be instantly sold"
                label="Instant Sale Price"
                orientation="vertical"
              />
            </div>
            <div>
              <DropDown def="BNB" options={["BNB", "JGN", "CAKE"]} />
            </div>
          </div>
          <div>
            <ImageField label="Upload File" />
          </div>
        </div>

        <div className="py-4 space-y-2">
          <div>
            <Text size="lg" variant="primary">
              Choose Collection
            </Text>
          </div>

          <div className="p-2 border inline-block  rounded-xl bg-gray-100 cursor-pointer">
            <img src="/static/images/site.png" width="80px" />
          </div>
        </div>

        <div className="space-y-4">
          <div className="w-96">
            <TextBox
              type="text"
              placeHolder="Redeemable cards with logo"
              label="Name"
              orientation="vertical"
            />
          </div>
          <div className="w-96">
            <TextBox
              type="text"
              placeHolder="after purchasing you'll be able to get real cards"
              label="Description (optional)"
              orientation="vertical"
            />
          </div>
          <div className="w-96">
            <div className="flex space-x-4 items-center">
              <div>
                <TextBox
                  type="text"
                  placeHolder="10 %"
                  label="Royalties"
                  orientation="vertical"
                />
              </div>
              <div>
                <TextBox
                  type="text"
                  placeHolder="e.g. 10"
                  label="Number of Royalties"
                  orientation="vertical"
                />
              </div>
            </div>
          </div>
          <div className="w-96">
            <TextBox
              type="text"
              placeHolder="e.g. size"
              label="Properties"
              orientation="vertical"
            />
          </div>
        </div>
        <div className="w-96 py-4">
          <Button color="primary" variant="primary200">
            Create Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SingleNft;
