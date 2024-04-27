import { render, screen } from "@testing-library/react";
// render component, screen ekranda neyin olup olmadığını test etmek istiyorsak

import App from "./App";

test("renders learn react h1 tag", () => {
  render(<App />);

  const titleElement = screen.getByText(/Learn React/i);
  expect(titleElement).toBeInTheDocument();
});
