import React from "react";
import Menu from "../core/Menu";

const Layout = ({
  title = "defaultTitle",
  description = "defaultDescription",
  className,
  children
}) => (
  <div>
    <Menu />
    <div className="jumbotron">
      <h2>{title}</h2>
      <p className="lead">{description}</p>
    </div>
    <div className={className}>{children}</div>
  </div>
);

export default Layout;
