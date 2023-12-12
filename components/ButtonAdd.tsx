import { ButtonHTMLAttributes } from "react";

interface Parent {
  classContainer: string;
}

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    Partial<Parent> {}
/**
 *
 * @param classContainer -  assigns the class name to the button's parent's property "className".
 * @param ...buttonProps - represents all the remaining native parameters of a button element.
 */

export const ButtonAdd = ({ classContainer, ...buttonProps }: Props) => {
  return (
    <div className={classContainer}>
      <button {...buttonProps}></button>
    </div>
  );
};
