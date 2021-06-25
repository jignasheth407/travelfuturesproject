import React, { useState } from "react";
import { Card, CustomDialog, Text } from "../../components";
import { MultipleNfts, SingleNft } from "./components";

const Create = () => {
  const [createDialogIsOpen, setCreateDialogIsOpen] = useState(false);
  const [nftSelection, setNftSelection] = useState(null);

  return (
    <div className="py-10">
      <CustomDialog
        isFullScreen={true}
        isOpen={createDialogIsOpen}
        DialogComponent={nftSelection === "single" ? SingleNft : MultipleNfts}
        setOpen={(val) => setCreateDialogIsOpen(val)}
        title="+ Create Single Collectible"
      />

      <div className="space-y-8">
        <div className="text-center">
          <Text size="xl4">Create Collectible</Text>
        </div>
        <div className="text-center">
          <Text size="xl" variant="primary">
            Choose “single” if you want your collectible to be one of a kind or
            “Multiple” if you want to sell one collectible multiple times.
          </Text>
        </div>
      </div>

      <div className="md:flex justify-center space-x-8 p-4 space-y-10 md:space-y-0 py-10 ">
        <div
          className="border-2 border-blue-200 cursor-pointer rounded-xl"
          onClick={() => {
            setCreateDialogIsOpen(true);
            setNftSelection("single");
          }}
        >
          <Card shadow="xl" rounded="xl">
            <div className="p-20">
              <img src="https://jgnnft.com/static/pic/page_create/icon-create-item.png" />
            </div>
            <div className="p-4 text-center">
              <Text variant="primary">Single</Text>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Create;
