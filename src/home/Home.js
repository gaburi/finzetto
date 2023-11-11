import { GlobalStyle } from "../styles/GlobalStyles";
import Navbar from "../components/menu/Nav";
import Slider from "../components/slyder";
import { Cards } from "../components/card";
import { Faq } from "../components/faq";
import { Targe } from "../components/targe";
import { Icon } from "../components/icon";
import { Footer } from "../components/footer";
import { About } from "../components/about";

export default function Home() {
   return (
      <>
         <GlobalStyle />
         <Navbar />
         <Slider />
         <Icon />
         <Cards />
         <Targe />
         <About />
         <Faq />
         <Footer />
      </>
   )




}