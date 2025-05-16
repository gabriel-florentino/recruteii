function ButtonSend({
  children = "Entrar", //Children: texto interno do botão
  ariaLabel = "Botão de chamada para ação" //AriaLabel: acessibilidade para leitores de tela
}) {
  return (
      <button
        type="submit"
        ariaLabel={ariaLabel}
        className="w-full bg-black text-white dark:bg-white dark:text-black 
        py-2 rounded-xl border hover:bg-white hover:text-black  hover:border-black 
         dark:hover:bg-black dark:hover:text-white  dark:hover:border-white transition max-lg:w-full"
      >
        {children}
      </button>
  );
}

export default ButtonSend;