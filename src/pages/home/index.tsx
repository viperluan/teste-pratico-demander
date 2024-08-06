import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main className="h-full flex flex-col items-center justify-center gap-4 p-4">
        <h1 className="text-5xl">Aplicações</h1>

        <nav className="flex flex-col w-full gap-2 border border-slate-50 rounded">
          <Link className="hover:bg-slate-400 p-4" to="converter">
            Converter
          </Link>
          <Link className="hover:bg-slate-400 p-4" to="treemap">
            TreeMap
          </Link>
        </nav>
      </main>
    </>
  );
};

export { Home };
