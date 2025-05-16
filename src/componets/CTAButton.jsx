import { Link } from 'react-router-dom'; 
import { useMobileMenu } from '../context/MobileMenuContext'; //Importando hook personalizado

function CTAButton({
  children = "Fazer login", //Children: texto interno do botão
  href = "", //Href: caminho da URL (sem a `/` inicial)
  className = "", //ClassName: classes adicionais de Tailwind
  ariaLabel = "Botão de chamada para ação" //AriaLabel: acessibilidade para leitores de tela
}) {

  const {closeMenu} = useMobileMenu();  //Chama a função closeMenu do hook

  return (
    <Link
      onClick={closeMenu} //Quando o botão é pressionado o menu lateral se fecha automaticamente
      to={href.startsWith("/") ? href : `/${href}`} //Referencia para onde o botão ira levar
      className={`
        ${className}
        max-lg:w-full px-6 py-4 rounded-full shrink-0
        bg-black text-white dark:bg-white dark:text-black
        transition-all duration-300 text-center font-bold
        hover:scale-105 hover:bg-gray-800 dark:hover:bg-gray-200
        focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
        focus-visible:ring-black dark:focus-visible:ring-white
      `}
      aria-label={ariaLabel} //Para acessibilidade
    >
      {children} 
    </Link>
  );
}

export default CTAButton;