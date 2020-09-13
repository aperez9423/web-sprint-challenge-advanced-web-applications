import React from "react";
import { render } from "@testing-library/react";
import BubblePage from "./BubblePage";

test("Fetches data and renders the bubbles", () => {
  // Finish this test
  const { queryAllByTestId, getAllByTestId, rerender } = render (<BubblePage color={[]}/>)

  const initialColors = queryAllByTestId(/colors/i);
  expect(initialColors).toHaveLength(0);
  expect(initialColors).toEqual([]);

  rerender (<BubblePage color= {data} />);
  const color= getAllByTestId(/color/i);

  expect(color).toHaveLength(2);
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