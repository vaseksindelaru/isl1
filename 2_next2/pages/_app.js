 
import '@/styles/globals.css'
import { Provider } from 'react-redux'
import reduxStore from "../redux/store"
export default function App({ Component, pageProps }) {
  
  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(
   <Provider store={reduxStore}>
 <Component {...pageProps} />
   </Provider>




  )
}
