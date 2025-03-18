import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore",
  description: "Trang explore",
};

const ExploreLayout = ( {children} : Readonly<{ children: React.ReactNode }> ) => {
    return (
        <section>{children}</section>
    )
}

export default ExploreLayout;
