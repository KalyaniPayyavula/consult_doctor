import React from "react";
import { MelodyBox } from "../../basic_components";
import PropTypes from "prop-types";

const PageLayout = ({ header, content, footer, dataTestId }) => {
  return (
    <MelodyBox direction="column" data-testid={`${dataTestId}-page-layout`}>
      <MelodyBox border={{ side: "bottom", color: "gray" }}>{header}</MelodyBox>
      <MelodyBox pad="small" background="light-2">
        {content}
      </MelodyBox>
      <MelodyBox background="gray">{footer}</MelodyBox>
    </MelodyBox>
  );
};

PageLayout.propTypes = {
  header: PropTypes.node,
  content: PropTypes.node,
  footer: PropTypes.node,
  dataTestId: PropTypes.string
};

export default PageLayout;
