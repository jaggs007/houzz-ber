interface OwnProps {
  condition: boolean;
  children: React.ReactNode | any;
}

export const RenderIfTrue: React.FC<OwnProps> = ({ condition, children }) => {
  if (!condition) return null;
  return typeof children === "function" ? children() : children;
};
