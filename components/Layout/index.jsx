
import Navbar from "../Navbar";
import Footer from "../Footer";
import localFont from 'next/font/local'
import { SpeedInsights } from "@vercel/speed-insights/next"

const Effra = localFont({
  src: [
    {
      path: '../../fonts/Effra_Md.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../fonts/Effra_Heavy.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../fonts/Effra_Rg.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../fonts/Effra-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
})
export default function Layout({ children }) {

  return (
    <>
      <Navbar />
      <main style={...Effra.style}>
      {/* {children?.filter(str => str != ';')} */}
      {children}
      <SpeedInsights />
    </main >
      <Footer />
    </>
  )
}