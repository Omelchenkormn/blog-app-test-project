import { ReactNode } from "react";
import { Header } from "./Header";

interface LayoutProps {
  children: ReactNode;
}
export const Layout: React.FC<LayoutProps> = ({
  children,
}: React.PropsWithChildren) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};
