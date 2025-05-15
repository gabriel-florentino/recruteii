import { Link } from 'react-router-dom'

function NavMenu({ items = [], className = "flex-row items-center" }) {
  function slugify(text) {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "-")
  }

  return (
    <nav>
      <ul className={`${className} flex min-w-4/5 gap-[24px] justify-between dark:bg-black dark:text-white text-base`}>
        {items.map(({ label, path }, index) => {
          const slug = slugify(path || "");
          return (
            <li key={index} className="relative">
              <Link
                to={slug}
                className="transition-transform duration-300 ease-in-out transform hover:scale-110 hover:font-bold"
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default NavMenu;
