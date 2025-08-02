// import Footer from "@/components/shared/Footer";

import Navbar from "@/Components/Navbar/Navbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default CommonLayout;
