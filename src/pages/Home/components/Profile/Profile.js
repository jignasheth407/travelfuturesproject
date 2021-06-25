import React, { useState } from "react";
import { ImageField, Button, TextBox, Text } from "../../../../components";

const Profile = () => {
  const [isNextContent, setNextContent] = useState(false);
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  return (
    <div>
      {!isNextContent ? (
        <div className="py-10">
          <div className="space-y-4">
            <div className="text-center ">
              <Text>Welcome</Text>
            </div>
            <div className="md:w-60 mx-auto py-3">
              <ImageField label="Select Profile Photo" />
            </div>
          </div>

          <div className="py-6 space-y-4">
            <div>
              <TextBox
                label="Display Name"
                orientation="vertical"
                placeHolder="Enter your display name"
              />
              <span>
                <Text size="xs" variant="primary">
                  Only use letters, numbers, underscores and emojis
                </Text>
              </span>
            </div>
            <div>
              <TextBox
                label="Bio"
                orientation="vertical"
                placeHolder="Tell us a little about yourself"
              />
              <span>
                <Text size="xs" variant="primary">
                  URLs are allowed
                </Text>
              </span>
            </div>
          </div>

          <div>
            <Button
              variant="primary200"
              color="primary"
              onClick={() => setNextContent(true)}
            >
              Next
            </Button>
          </div>
        </div>
      ) : (
        <div>
          <div className="text-center">
            <Text capitalize={true} size="xl" weight="700">
              xyz Terms of service
            </Text>
          </div>
          <div className="text-center w-max-96 py-4">
            <Text size="sm" variant="primary">
              Please take few minutes to read and understand xyz terms of
              service. To continue, u'll need to accept the Terms of service by
              checkig the box
            </Text>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <input
              type="checkbox"
              id="accept"
              onChange={handleCheckboxChange}
              checked={isChecked}
            />
            <label htmlFor="accept">
              <Text capitalize={true} size="xs">
                I accept the xyz terms of service
              </Text>
            </label>
          </div>
          <div className="py-4 w-40 mx-auto">
            <Button
              color="primary"
              rounded="lg"
              variant="primary200"
              isDisable={!isChecked}
            >
              Proceed
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
