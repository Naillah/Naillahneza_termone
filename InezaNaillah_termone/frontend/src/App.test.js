import { render, screen } from "@testing-library/react";
import App from "./App";

test("render calculation App", () => {
  render(<App />);
  const ACDigit = screen.getByText(/AC/);

  expect(ACDigit).toBeInTheDocument();
});