import "@styles/globals.css";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app theme">{children}</main>
        <script src="/assets/js/flowbite/dist/flowbite.min.js"></script>
      </body>
    </html>
  );
};

export default RootLayout;
