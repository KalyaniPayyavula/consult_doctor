import React from "react";
import { MelodyGrid, MelodyBox } from "../../basic_components";

const MenuLayout = ({ header, sidebar, content, footer }) => {
  return (
    <>
      <MelodyGrid
        rows={["auto", "flex", "auto"]}
        columns={["auto", "flex", "auto"]}
        areas={[
          { name: "header", start: [0, 0], end: [1, 0] },
          { name: "sidebar", start: [0, 1], end: [0, 1] },
          { name: "main", start: [1, 1], end: [1, 1] },
          { name: "footer", start: [0, 2], end: [1, 2] }
        ]}
      >
        <MelodyBox
          gridArea="header"
          direction="row"
          align="center"
          justify="between"
          background="gray"
        >
          {header}
        </MelodyBox>
        <MelodyBox
          gridArea="sidebar"
          background="gray"
          width="small"
          border={{ color: "dark-2" }}
        >
          {sidebar}
        </MelodyBox>
        <MelodyBox gridArea="main" pad="small">
          {content}
        </MelodyBox>
        <MelodyBox as="footer" gridArea="footer" pad="small" background="black">
          {footer}
        </MelodyBox>
      </MelodyGrid>
    </>
  );
};

export default MenuLayout;
