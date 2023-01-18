
import {render, screen} from "@testing-library/react";
import ActionButton from "../../../components/controls/ActionButton";

test("renders action button", () =>{
  const title="Details";
  const action= ()=>{};

  render(<ActionButton title={title} action={action}></ActionButton>);
  
  const button = screen.getByRole('action-button');
  expect(button).toBeInTheDocument();
  expect(button).toHaveTextContent(title);
});