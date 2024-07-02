import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

const Card = (props: CardProps) => {
  return (
    <div>
      <div>User Info Below</div>
      {props.children}
      <div>End of User Info</div>
    </div>
  );
};

export default Card;
