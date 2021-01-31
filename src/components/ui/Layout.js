import Header from "./Header";
import Footer from "./Footer";
import { AppProvider } from "@context/AppContext";
import { ApolloProvider } from "@apollo/client";
// APOLLO REACT HOOKS
import client from "../ApolloClient";

export default function Layout(props) {
  return (
    <AppProvider>
      <ApolloProvider client={client}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 lg:container px-4 py-6 mx-auto md:px-6 md:py-12">
            {props.children}
          </main>
          <Footer />
        </div>
      </ApolloProvider>
    </AppProvider>
  );
}
