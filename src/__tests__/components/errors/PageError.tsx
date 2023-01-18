
import {render, screen} from "@testing-library/react";
import PageErrorFallback from "../../../components/errors/PageError";

test("renders page error", () =>{
  const error={
    message: "something went wrong"
  };
  const resetErrorBoundary={};

  render(<PageErrorFallback error={error} resetErrorBoundary={resetErrorBoundary}></PageErrorFallback>);
  
  const errorDiv = screen.getByRole('page-error-fallback');
  expect(errorDiv).toBeInTheDocument();

  const icon = errorDiv.children[0];
  expect(icon).toHaveAttribute("class", "bi bi-bug px-2 py-1 rounded-md bg-blue-600 text-3xl");

  const title = errorDiv.children[1];
  expect(title).toHaveTextContent("Failed to load your page");

  const message = errorDiv.children[2];
  expect(message).toHaveTextContent(error.message);

  const tryAgain = errorDiv.children[3];
  expect(tryAgain).toHaveTextContent("Try again");
});