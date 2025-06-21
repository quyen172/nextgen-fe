import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <header>Client header</header>

      <main>
        <Outlet />
      </main>

      <footer>Client footer</footer>
    </>
  );
};

export default MainLayout;
