
import { Link } from 'react-router-dom';
import './homelog.css'


// function loguear()
// {
//     let user=document.getElementById("usuario").Value;
//     let pass=document.getElementById("password").value;
//     if (user=="am@gmail.com" && pass=="1234")
//     {
//         const a = document.createElement ('a')
//         window.location=""
//         localStorage.usuario=user
//         localStorage.contraseña=pass
//     }
//     else
//     {
//         alert("Usuario Incorrecto");
//     }
// }

export default function HomeLog() {

    return (
        <>
            <div className='content_box'>
                <div className='caja'>
                    <div className='box_img'>
                        <img src='/O.jpg' alt='logo' />
                    </div>
                    <h1 className='txt_log'>Login</h1>
                    <form>
                        <div className='content__main'>
                            <div className='content__main_inp'>
                                <img className='icon_txt' src='./icons/usuario.png' alt='' />
                                <input id='usuario' className='box_txt' type='text' placeholder='Usuario' />
                            </div>
                            <div className='content__main_inp'>
                                <img className='icon_txt' src='./icons/candado-cerrado.png' alt='' />
                                <input id='password' className='box_txt' type='password' placeholder='Contraseña' />
                            </div>
                            <div className='btn_recorder'>
                                <input className='' type='checkbox' />
                                <p>Recordarme</p>
                            </div>
                        </div>
                        <div className=''>
                            <a href='' className='txt_olvPass'>
                                Olvidaste tu contraseña?
                            </a>
                            <div className='contenedor_btn'>
                                <Link to='/Home' className='btn_login'>
                                    Iniciar Sesión
                                </Link>

                            </div>
                        </div>
                    </form>
                    <div className=''>
                        <div>
                            <p>No tienes cuenta?</p>
                            <Link to='/register'>
                                Registrarse
                            </Link>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
}