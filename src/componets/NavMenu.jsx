import { useState } from 'react';

function NavMenu({ items = [], className = "flex-row items-center" }) {

  // Função para criar slugs a partir do texto
  function slugify(text) {
    return text
      .toLowerCase()
      .normalize("NFD")                  // separa acentos das letras
      .replace(/[\u0300-\u036f]/g, "")  // remove os acentos
      .replace(/\s+/g, "-")             // substitui espaços por hífens
      .replace(/[^\w-]+/g, "");         // remove qualquer coisa que não seja letra, número ou hífen
  }

  return (
    <nav>
      <ul className={`${className} flex min-w-4/5 gap-[24px] justify-between dark:bg-black dark:text-white text-base`}>
        {items.map((item, index) => {
          const slug = slugify(item);
          return (
            <li key={index} className="relative">
              <a 
                href={`#${slug}`} 
                className="transition-transform duration-300 ease-in-out transform hover:scale-110 hover:font-bold"
              >
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default NavMenu;
