import ButtonSearch from "./ButtonSearch";
import ThemeToggle from "./ThemeToggle";

function Header() {
  return (
    <header className="flex items-center justify-between p-6 mb-4 gap-4">
      <h1 className="text-black dark:text-white font-bold text-[1.25rem] sm:text-2xl inline-flex items-center gap-2 justify-center before:content[''] before:w-[22px] before:h-[22px] before:bg-[url(/heart.svg)]">Nutri</h1>
      <ButtonSearch />
      <ThemeToggle />
    </header>
  );
}

export default Header;
