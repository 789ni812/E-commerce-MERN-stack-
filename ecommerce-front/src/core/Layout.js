import React from "react";

const Layout = ({
  title = "defaultTitle",
  description = "defaultDescription",
  className,
  children
}) => (
  <div>
    <div className="jumbotron">
      <h2>{title}</h2>
      <p className="lead">{description}</p>
    </div>
    <div className="{className}">{children}</div>
  </div>
);

export default Layout;
