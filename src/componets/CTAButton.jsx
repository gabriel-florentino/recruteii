export default function CTAButton({ children = "Fazer login", onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-base bg-black text-white px-6 py-4 rounded-full shrink-0 dark:bg-white dark:text-black"
    >
      {children}
    </button>
  );
}
