import Layout from "@/components/Layout";
import "@/styles/globals.scss";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "styled-components";
// import { ThemeProvider, createTheme } from '@mui/material/styles';

const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
};

const theme = createTheme({
  backgroundColor: "red",
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </ThemeProvider>
  );
}
