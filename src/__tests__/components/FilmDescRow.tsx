
import {render, screen} from "@testing-library/react";
import FilmDescRow from "../../components/FilmDescRow";

test("renders film desc row item", () =>{
  const title="mytitle";
  const value="myvalue";

  render(<FilmDescRow title={title} value={value}></FilmDescRow>);
  
  const div = screen.getByRole('film-desc-row');
  expect(div).toBeInTheDocument();

  const resultTitle  = div.children[0];
  expect(resultTitle).toHaveTextContent(title);

  const resultValue  = div.children[1];
  expect(resultValue).toHaveTextContent(value);
});