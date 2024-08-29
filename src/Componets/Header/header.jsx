import "./header_style.css"

function Header () {

    return (

        <div className="container">
            <form className="nome" action="">
                <label htmlFor="" name="nome" value="nome"> Nome </label>
                <input type="text" placeholder="Digite seu nome" />
            </form>
            <form className="matricula" action="">
                <label htmlFor="" name="matricula" value="matricula"> Matricula </label>
                <input type="text" placeholder="Digite sua matricula" />
            </form>
        </div>

    )
}

export default Header;