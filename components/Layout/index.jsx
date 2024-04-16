
import Navbar from "../Navbar";
import Footer from "../Footer";
import localFont from 'next/font/local'
import { useRouter } from "next/router";

const Effra = localFont({
  src: [
    {
      path: '../../public/fonts/Effra_Md.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Effra_Heavy.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Effra_Rg.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Effra-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
})

const Custom = localFont({
  src: [
    {
      path: '../../public/fonts/custom.otf',
      weight: '500',
      style: 'normal',
    },

  ],
})
export default function Layout({ children }) {
  const router = useRouter();
  const combinedStyles = {
    ...Effra.style,
    ...Custom.style,
  };


  return (
    <>
      {router.pathname.includes('year-of-arabic-poetry') || router.pathname !== '/search' &&
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