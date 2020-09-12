import React from "react";
import { render } from "@testing-library/react";
import BubblePage from "./BubblePage";

test("Fetches data and renders the bubbles", () => {
  // Finish this test
  const { queryAllByTestId, getAllByTestId, rerender } = render (<BubblePage color={[]}/>)

  const initialColors = queryAllByTestId(/color/i);
  expect(initialColors).toHaveLength(0);
  expect(initialColors).toEqual([]);

  rerender (<BubblePage color= {data} />);
  const colors = getAllByTestId(/color/i);

  expect(colors).toHaveLength(2);
});

let data = [
  {
    color: "aliceblue",
    code: {
      hex: "#f0f8ff"
    },
    id: 1
  },
  {
    color: "limegreen",
    code: {
      hex: "#99ddbc"
    },
    id: 2
  }
];