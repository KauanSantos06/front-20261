import { useParams } from "react-router";
import { useForm } from "react-hook-form";

function Perfil() {
 const {id} = useParams();

// busca usuarios pelo o ID       

 const { register, handleSubmit, formState: {errors} } = useForm();

// register => {id: "", name: "", onChange: ""} ou seja, o register devolve um objeto

 const onSalvar = (data) => {
    console.log(data);
 };

// essa função inpede da página ficar recarregando toda vez que for salvo

const validadores = {
    nome:{
        required: "Nome é obrigatorio", 
        minLength: {value: 3, message: "O nome deve conter no mínimo 3 caracteres"},
    },

    email:{
        required: "Email é obrigatorio"
    },

    nascimento:{
        validate: {
            dataMinima: (value) =>
                Date.parse(`${value} 00:00:00 UTC`) >= new Date("01/01/1900 00:00:00 UTC").getTime() || "Data inferior",
            
            dataMaxima: (value) =>
                Date.parse(`${value} 00:00:00 UTC`) < new Date().getTime() || "Data superior",
      },
    },

    telefone:{
      min: { value: 0, message: "Telefone invalido" },
      pattern: {
        value: /^(\(?\d{2}\)?[\s.-]?)?(\d{4,5})[\s.-]?(\d{4})$/,
        message: "Telefone invalido",
      },
    },
};


    return (
    <>
        <h1> Perfil do Usuario {id}</h1>
        <form onSubmit={handleSubmit(onSalvar)}>
            <div>
                <label htmlFor="nome"> Nome </label>
                <input type="text" id="nome" {...register("nome" , validadores.nome)} />
                {errors.nome && <p>{errors.nome.message}</p>}
            </div>   
            <div>
                <label htmlFor="email"> Email</label>
                <input type="email" id="email" {...register("email" , validadores.email)}/>
                {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div>    
                <label htmlFor="nascimento"> Data de Nascimento </label>
                <input type="date" id="nascimento" {...register("nascimento" , validadores.nascimento)}/>
                {errors.nascimento && <p>{errors.nascimento.message}</p>}
            </div>
            <div>    
                <label htmlFor="telefone"> Telefone</label>
                <input type="tel" id="telefone" {...register("telefone" , validadores.telefone)}/>
                {errors.telefone && <p>{errors.telefone.message}</p>}
            </div>    
            <div> 
                <button type="submit"> Salvar </button>
            </div>   
                
            </form>
    </>
    );
}

export default Perfil;