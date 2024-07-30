import { Navbar, Container, Nav } from 'react-bootstrap'
import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'



import './Navbar.css'
import { useNavigate, Outlet } from 'react-router-dom';

import { MdKeyboardArrowDown } from 'react-icons/md';




export default function Header() {



    let navigate = useNavigate()
    return (



        <div>




            <Container className='container-valed-navbar' >

                <Navbar className='valed-navbar' >




                    <Nav className='nav'>

                        <img className='logoimage-header logoimage' src="easli.png" href="/" >

                        </img>





                        <figure className='shop-count z-i'>
                            <img class="shop-count-image" src="cart.png" />

                            سبد خرید
                            <span className='shop-count-count' >


                                0
                            </span>


                        </figure>

                        <button className='button-register' onClick={() => {
                            navigate('/ثبت نام')
                        }}>
                            ورود / ثبت نام




                            <img class="userimage" />
                        </button>



                        <ul class="valed-ul">
                            <Link className='main-navy  tr' to="/">
                                <li class=" parentnav ">

                                    دوره ها<MdKeyboardArrowDown class="arrow" />
                                    <ul class="inside-nav">

                                        <div class="left-nav">








                                            <Link className=' secondy underline-left tis'>
                                                دوره های عمومی


                                            </Link>






                                            <Link className='secondy left-ch' to={`/e/${4}`}>
                                                کودکان
                                                <img src="../images/image-courses/how-to-prepare-for-toefl-750x430.webp" className='link-image'>

                                                </img>



                                            </Link>







                                            <Link className=' secondy   left-ch' to={`/e/${6}`}>نوجوانان

                                                <img src="../images/image-courses/g.jpg" className='link-image'>

                                                </img>
                                            </Link>




                                            <Link className='secondy  left-ch' to={`/e/${5}`}>بزرگسالان

                                                <img src="../images/image-courses/images.jpeg" className='link-image'>

                                                </img>
                                            </Link>


                                        </div>





                                        <div class="right-nav">

                                            <Link className=' secondy taf underline' >
                                                دوره های تخصصی



                                            </Link>





                                            <Link className='secondy eng' to={`/e/${2}`}>TTC <img src="../images/image-courses/ttc.jpeg" className='link-image'>

                                            </img></Link>


                                            <Link className=' secondy eng' to={`/e/${1}`}>Tofel

                                                <img src="../images/image-courses/tofel1.png" className='link-image'>

                                                </img>


                                            </Link>




                                            <Link className=' secondy eng ' to={`/e/${3}`}>
                                                <img src="../images/image-courses/ss.jpg" className='link-image'>

                                                </img>

                                                Speeking</Link>





                                        </div>



                                    </ul>
                                </li>

                            </Link>

                        </ul>





                        <Link className='main-navy navf' to="/">خانه
                            <Link className='child-navy ' to="/">
                            </Link>


                        </Link>




                        <Link className='main-navy online-shop' to="/فروشگاه" >
                            <Link className='child-navy navone' to="/">
                            </Link>

                            خرید آنلاین



                        </Link>


                        <Link className='main-navy ' to="/چک لیست" >چک لیست
                            <Link className='child-navy navcheck' to="/">
                            </Link></Link>


                        <Link className='main-navy ' to="/دوره ها" > دپارتمان ها
                            <Link className='child-navy navcourses' to="/">
                            </Link></Link>







                    </Nav>



                </Navbar>



            </Container>









            <div className="col-lg-2 col-sm-2 col-md-10">



                <a href="#" className='brandf'>



                </a>




                <div className="div-button">

                </div>



            </div>







        </div>






    )






}






























