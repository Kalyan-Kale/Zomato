import React from "react";

const Nextarrow = (props) => {
    const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{
        ...style,
        background: "white",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "4px",
      }}
      onClick={onClick}
    >
      Nextarrow
    </div>
  );
};

export default Nextarrow;
