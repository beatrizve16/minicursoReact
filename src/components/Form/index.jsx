import './styles.css'

export default function Header(){
   
    return(
        <header>
        <div class = "container">
        <h2>Login</h2>
           <form>
            <input type="nome" placeholder="Nome..." />
            <input type="email" placeholder="Email..." />
            <button id="confirm">Confirmar</button>
            </form>
        </div>
        </header>
        

    )
}