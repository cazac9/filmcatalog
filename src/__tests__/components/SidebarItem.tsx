
import {render, screen} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SidebarItem from "../../components/SidebarItem";

test("renders sidebar item", () =>{
  const genre = {
    name:"anime",
    id: 232512
  };

  render(<SidebarItem genre={genre}></SidebarItem>, {wrapper: MemoryRouter});
  
  const div = screen.getByRole('sidebar-item');
  expect(div).toBeInTheDocument();

  const link  = div.children[0];
  expect(link).toHaveTextContent(genre.name);
  expect(link).toHaveAttribute("href", "/" + genre.name); 
});