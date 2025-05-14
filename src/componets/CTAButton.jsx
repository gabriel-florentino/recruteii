import { Link } from 'react-router-dom';
import { useMobileMenu } from '../hooks/useMobileMenu'; // ajuste o caminho

export default function CTAButton({
  children = "Fazer login",
  href = "",
  className = "",
  ariaLabel = "Botão de chamada para ação"
}) {
  const {closeMenu} = useMobileMenu();
  return (
    <Link 
      onClick={closeMenu}
      to={`/${href}`} 
      className="max-lg:w-full transition-transform duration-300 ease-in-out transform hover:scale-105"
    > 
      <button
        aria-label={ariaLabel}
        className={`
          ${className}
          max-lg:w-full text-base px-6 py-4 rounded-full shrink-0
          bg-black text-white dark:bg-white dark:text-black
          transition-colors duration-300
          hover:bg-gray-800 dark:hover:bg-gray-200
          focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
          focus-visible:ring-black dark:focus-visible:ring-white
        `}
      >
        {children}
      </button>
    </Link>
  );
}
