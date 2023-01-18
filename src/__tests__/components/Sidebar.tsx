
import {render, screen} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

test("renders sidebar", () =>{
  const genres = [{
    name:"anime",
    id: 232512
  }];

  render(<Sidebar genres={genres}></Sidebar>, {wrapper: MemoryRouter});
  
  const logoLink = screen.getByText('Films Catalog');
  expect(logoLink).toBeInTheDocument();
  expect(logoLink).toHaveAttribute("href", "/"); 

  const items = screen.getAllByRole("sidebar-item");
  expect(items.length).toBe(genres.length)
});