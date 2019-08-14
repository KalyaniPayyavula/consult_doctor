import React from "react";
import { render } from "@testing-library/react";
import PageLayout from "./PageLayout";

test("test snapshot for page layout", () => {
  const header = <p> Header </p>;
  const content = <p> Content </p>;
  const footer = <p> Footer </p>;
  const { container } = render(
    <PageLayout header={header} content={content} footer={footer} />
  );
  expect(container).toMatchSnapshot();
});
