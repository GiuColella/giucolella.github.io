import './homelog.css'


export default function HomeLog() {

    return (
        <>
            <div className="content_box">
                <div className="caja">
                    <div className="box_img">
                        <img src="/O.jpg" alt="logo" />
                    </div>
                    <h1 className='txt_log'>Login</h1>
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
                            <div className='btn_recorder'>
                                <input className="" type="checkbox" />
                                <p>Recordarme</p>
                            </div>
                        </div>
                        <div className="">
                                <a href="#" className="txt_olvPass">
                                    Olvidaste tu contraseña?
                                </a>
                            <div className='contenedor_btn'>
                                <button className='btn_login'>Iniciar Sesión</button>
                            </div>
                        </div>
                    </form>
                    <div className="">
                        <div>
                            <p>No tienes cuenta?</p>
                            <a href="#" className="">
                                Registrarse
                            </a>
                        </div>
                    </div>
                </div>

            </div>


        </>
    );
}