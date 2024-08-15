import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      {children}
      <span>Test Layouts</span>
    </div>
  );
};

export default Layout;
