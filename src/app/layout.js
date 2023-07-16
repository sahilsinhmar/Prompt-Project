import "@styles/globals.css";
import App from "@src/components/Provider";
import Nav from "@src/components/Nav";

export const metadata = {
  title: "Promptopia",
  description: "AI Pompts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <App>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </App>
      </body>
    </html>
  );
};

export default RootLayout;
