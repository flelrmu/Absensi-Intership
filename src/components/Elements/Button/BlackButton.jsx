import React from "react";

function BlackButton(props) {
  const {
    children,
    variant = "",
    onClick = () => {},
    type = "Button",
  } = props;
  return (
    <button
      type={type}
      className={`flex px-4 ${variant} py-2 text-white justify-center rounded-md hover:bg-gray-800`}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
}

export default BlackButton;
