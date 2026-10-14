import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

/**
 * Container centralizado com largura máxima 1080px e padding horizontal 22px.
 */
export function Container({
  children,
  className = "",
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag
      className={`mx-auto w-full max-w-[1080px] px-[22px] ${className}`}
    >
      {children}
    </Tag>
  );
}
