import React from "react";
import { Dialog, Slide } from "@material-ui/core";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const SearchSlide = ({ isOpen, close }) => {
  return (
    <div>
      <Dialog fullScreen open={isOpen} TransitionComponent={Transition}>
        <div className="bg-blue-100 py-4 grid place-items-center  grid-cols-10 w-full">
          <div className="col-span-1" onClick={close}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-blue-700"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div className="col-span-8 w-full">
            <input
              className="w-full h-8 p-2 rounded-full focus:outline-none"
              placeholder="Search.."
            />
          </div>
          <div className="col-span-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default SearchSlide;
