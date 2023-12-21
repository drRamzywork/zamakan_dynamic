
import Navbar from "../Navbar";
import Footer from "../Footer";
import localFont from 'next/font/local'
import { useRouter } from "next/router";

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

const Custom = localFont({
  src: [
    {
      path: '../../fonts/custom.otf',
      weight: '500',
      style: 'normal',
    },

  ],
})
export default function Layout({ children }) {
  const combinedStyles = {
    ...Effra.style,
    ...Custom.style,
  };
  const router = useRouter();

  return (
    <>
      {router.pathname !== '/search' &&
        <Navbar />
      }
      <main style={combinedStyles}>
        {children}
      </main >
      {router.pathname !== '/search' &&
        <Footer />
      }

    </>
  )
}