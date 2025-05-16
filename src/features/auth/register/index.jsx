import register from "../../../assets/images/register.png"
import FormRegister from "./components/FormRegister"
import { Link } from "react-router-dom";

export default function Index() {
  
  return (
    <div className="items-center flex max-lg:flex-col flex-row gap-[64px] max-lg:w-full max-w-5xl w-full py-32">
        <div className="w-1/2 items center max-w-md flex flex-col gap-[24px] max-lg:w-full">
            <h1 className="dark:text-white">Formulario de cadastro</h1>
                <FormRegister/>
            <p className="text-black dark:text-white">Ja possui conta? <Link to="/login" className="font-bold">Faça login agora!</Link> </p>
        </div>
        <div className="w-1/2 max-lg:hidden">
            <img src={register} alt="Imagem de mulher fazendo um cadastro" />
        </div>
    </div>
  )
}
