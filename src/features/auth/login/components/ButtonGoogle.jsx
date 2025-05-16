// src/components/ButtonGoogle.jsx
import { FaGoogle } from "react-icons/fa";

export default function ButtonGoogle({ onClick, text = "Entrar com Google", className = "" }) {
  return (
    <button
      onClick={onClick}
      ariaLabel="Botao para fazer login com o google"
      className={`flex items-center justify-center gap-2 px-4 py-2 rounded-xl border bg-none
        border-black shadow-sm hover:bg-black  dark:border-white  transition 
        hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black${className}`}
    >
      <FaGoogle size={20} />
      <span className="font-semibold">{text}</span>
    </button>
  );
}
