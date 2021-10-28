import '../public/global.css'
import '../public/app.css'
import { Provider } from 'react-redux'
import store from '../store'

{/* <link href="/expert-landing.css" rel="stylesheet" type="text/css">
<link href="/normalize.css" rel="stylesheet" type="text/css">
<link href="/css/burger.css" rel="stylesheet" type="text/css">
<link rel="stylesheet" href="/css/pure-min.css" />
<link href="/webflow.css" rel="stylesheet" type="text/css">
<link href="/crop-component.css" rel="stylesheet" type="text/css">
<link href="/opendoorv1.webflow.css" rel="stylesheet" type="text/css">
<link href="/datepicker.css" rel="stylesheet" type="text/css">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/manifest.json">
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
 */}


export default function MyApp({ Component, pageProps }) {
  console.log("myApp")
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}


