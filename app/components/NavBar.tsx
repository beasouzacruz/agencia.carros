import "./navBar.css";

export default function NavBar(){
    return(
        <nav>
            <div>
                <span>Seja bem-vindo! Fulano</span>
            </div>
            <ul>
                <li><a href="/">Inicio</a></li>
                <li><a href="/carro">Carros</a></li>
                <li><a href="/concessionaria">Concessionária</a></li>
            </ul>
        </nav>
    );
}