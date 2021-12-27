import { useEffect } from "react";
import AOS from "aos";
import Navbar from "../component/layout/Navbar";
import MainBanner from "../component/layout/Homepage/MainBanner";
import TransactionStep from "../component/layout/Homepage/TransactionStep";
import FeatureGame from "../component/modules/homepage/FeatureGame";
import Reached from "../component/layout/Homepage/Reached";
import Story from "../component/layout/Homepage/Story";
import Footer from "../component/layout/Footer";

export default function Home() {
  useEffect(() => {
    //https://medium.com/codelabs-unikom/mengenal-react-hooks-63aafde79da0
    AOS.init();
  }, []);
  return (
    <>
      <Navbar />
      <MainBanner />
      <TransactionStep />
      <FeatureGame />
      <Reached />
      <Story />
      <Footer />
    </>
  );
}
