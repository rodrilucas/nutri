function Footer() {
  return (
    <footer className="bg-white rounded-lg dark:bg-gray-900 m-4 mt-18">
      <div className="w-full mx-auto p-4 md:py-8">
        <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
          © 2025 Nutri™ Todos os Direitos Reservados.
          <a className="ml-1 block sm:inline" href="https://www.fatsecret.com">
            <img
              src="https://platform.fatsecret.com/api/static/images/powered_by_fatsecret.svg"
              className="border-0 inline"
            />
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
