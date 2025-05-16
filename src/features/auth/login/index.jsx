import FormLogin from "./components/FormLogin";
import ButtonGoogle from "./components/ButtonGoogle"
import login from "../../../assets/images/login.png"
import { Link } from "react-router-dom";

export default function Index() {
  
  return (
    <div className="items-center flex max-lg:flex-col flex-row gap-[64px] max-lg:w-full max-w-5xl w-full py-32">
        <div className="w-1/2 items center max-w-md flex flex-col gap-[24px] max-lg:w-full">
            <h1 className="dark:text-white">Fazer login</h1>
            <FormLogin/>
            <ButtonGoogle/>
            <p className="text-black dark:text-white">Não possui conta? <Link to="/register" className="font-bold">Cadastre-se agora!</Link> </p>
        </div>
        <div className="w-1/2 max-lg:hidden">
            <img src={login} alt="Imagem e fechadura significando o entrar da tela de login" />
        </div>
    </div>
  )
}
