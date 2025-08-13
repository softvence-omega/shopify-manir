import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="">{children}</main>
      <Footer />
    </>
  );
};

export default CommonLayout;
