import React from "react";

type IconProps = React.HTMLAttributes<HTMLSpanElement>;

function Icon({ className = "", ...rest }: IconProps) {
  return (
    <span
      className={`inline-flex items-center justify-center before:content-[''] ${className}`}
      {...rest}
    />
  );
}

export default Icon;
