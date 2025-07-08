import React from "react";

interface InputfieldProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

const Inputfield = (props: InputfieldProps) => {
  return (
    <>
      <input
        type="text"
        placeholder="Type here"
        className="input"
        onChange={props.onChange}
        value={props.value}
      />
    </>
  );
};

export default Inputfield;
