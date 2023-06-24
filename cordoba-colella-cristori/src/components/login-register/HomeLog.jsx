import './homelog.css'


export default function HomeLog() {

    return (
        <>
            <div className="content_box">
                <div className="caja">
                    <div className="box_img">
                        <img src="/O.jpg" alt="logo" />
                    </div>
                    <h1 className=''>Login</h1>
                    <form>
                        <div className='content__main'>
                            <div className='content__main_inp'>
                                <img className='icon_txt' src="./icons/usuario.png" alt="" />
                                <input className="box_txt" type="text" placeholder="Usuario" />
                            </div>
                            <div className='content__main_inp'>
                                <img className='icon_txt' src="./icons/candado-cerrado.png" alt="" />
                                <input className="box_txt" type="password" placeholder="Contraseña" />
                            </div>
                            <div>
                                <input className="" type="checkbox" />
                                <p>Recordarme</p>
                            </div>
                        </div>

                        <div className="">

                            <div className="">
                                <a href="#" className="">
                                    Olvidaste tu contraseña?
                                </a>
                            </div>
                        </div>
                        <div>
                            <a className="" href="/html/menu.html">
                                Login
                            </a>
                        </div>
                    </form>
                    <div className="">
                        <div>No tienes cuenta?</div>
                        <a href="#" className="">
                            Registrarse
                        </a>
                    </div>
                </div>

            </div>


        </>
    );
}