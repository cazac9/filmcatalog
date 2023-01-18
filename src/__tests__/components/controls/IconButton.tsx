
import {render, screen} from "@testing-library/react";
import IconButton from "../../../components/controls/IconButton";

test("renders icon button", () =>{
  const icon="bug";
  const action= ()=>{};

  render(<IconButton icon={icon} action={action}></IconButton>);
  
  const button = screen.getByRole('icon-button');
  expect(button).toBeInTheDocument();
  expect(button.children[0]).toHaveAttribute("class", "bi " + icon);
});