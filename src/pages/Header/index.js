import logo from 'svg/blog-logo.svg'



const Header = () =>{
    return(

        <>
           {/* <!--============ HEADER ============--> */}
    <header className="px-2 py-1">
        <nav>
            <div className="logo">
                <a href=""><img src={logo} alt="" /></a>
            </div>
            <ul className="menu">
                <li><a href="">Sobre</a></li>
                <li><a href="">Contato</a></li>
                <li><a href="">Categorias</a></li>
            </ul>
        </nav>


        <div className="bx"></div>


            <div className="flex-start-row">
                <div className="search">
                    <form  className="flex">
                        <input type="text" name="search" placeholder="Buscar..." />
                        <button className="btn-search"></button>
                    </form>
                </div>
                <div className="cta-desktop ml-3">
                    <a href="" className="btn">Login</a>
                </div>
                <div className="cta-mobile">
                    <a href="" className="link color-primary">Login</a>
                </div>
            </div>
        
    </header>

    {/* <!--============ MENU MOBILE ============--> */}
    <div className="relative">
        <div className="menu-mobile">
            <ul className="nav-mobile">
                <li><a href="#" className="link-menu-mobile">Sobre</a></li>
                <li><a href="#" className="link-menu-mobile">Contato</a></li>
                <li class="py-2 px-2">
                    <form class="flex">
                        <input type="text" name="search" placeholder="Buscar..." />
                        <button className="btn-search"></button>
                    </form>
                </li>
            </ul>
        </div>
    </div>

       

        </>
    )
}


export default Header;