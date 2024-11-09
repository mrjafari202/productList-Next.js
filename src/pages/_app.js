import TanstackQueryProvider from "@/providers/TanstackQueryProvider";
import { ToastContainer} from 'react-toastify';
import "@/styles/globals.css";
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  return (
    <TanstackQueryProvider>
      <Component {...pageProps} />
      <ToastContainer />
    </TanstackQueryProvider>
  )
}
