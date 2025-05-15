import { Link } from 'react-router-dom'; 
import { useMobileMenu } from '../hooks/useMobileMenu'; //Importando hook personalizado

function CTAButton({
  children = "", //Children: texto interno do botão
  SVG,
  href = "", //Href: caminho da URL (sem a `/` inicial)
  className = "", //ClassName: classes adicionais de Tailwind
  ariaLabel = "Botão de chamada para ação" //AriaLabel: acessibilidade para leitores de tela
}) {

  const {closeMenu} = useMobileMenu();  //Chama a função closeMenu do hook

  return (
    <a
      onClick={closeMenu} //Quando o botão é pressionado o menu lateral se fecha automaticamente
      href={href} //Referencia para onde o botão ira levar
      className={`
        ${className}
        flex flex-row items-center justify-around  
        p-1 pr-3 rounded-lg shrink-0 w-64
        bg-black text-white dark:bg-white dark:text-black
        transition-all duration-300 text-center
        hover:scale-105 hover:bg-gray-800 dark:hover:bg-gray-200
        focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
        focus-visible:ring-black dark:focus-visible:ring-white
      `}
      aria-label={ariaLabel} //Para acessibilidade
    >
    {SVG}
    {children} 
    </a>
  );
}

export default CTAButton;