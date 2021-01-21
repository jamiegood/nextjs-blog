import "../styles/global.css";

//this App component will be the top-level across all components.
// Can use this for state across the App when navigating between pages
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
