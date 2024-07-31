import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import CoursesData from '../CoursesData/CoursesData';
import { PiBookOpenTextLight } from "react-icons/pi";
import { FaRegClock } from "react-icons/fa6";
import { IoIosMan } from "react-icons/io";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { useEffect } from 'react'; import { CgDanger } from "react-icons/cg";
import Tilt from 'react-parallax-tilt';
import { useLocation } from "react-router-dom";
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useNavigate, Outlet } from 'react-router-dom';
import { MdKeyboardArrowDown } from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Header.css';
import P from '../Particle';
import './Maincourse.css';
import './Navbar.css'
export default function MainCourse() {
    let navigate = useNavigate();
    const { pathname } = useLocation();
    let params = useParams()
    useEffect(() => {
        AOS.init();
    }, [params]);
    const [show, setShow] = useState(true);
    const showinfo = () => {
        setShow(current => !current);
    }
    let mainCouseData = CoursesData.find(course => course.id == params.courseID)
    const mystyle = {
        width: `${mainCouseData.percent}` + '%',
    };
    return (
        <>
            <div>
                <Container className='container-valed-navbar' >
                    <Navbar className='valed-navbar' >
                        <Nav className='nav'>
                            <img className='logoimage-header logoimage' src={CoursesData[6].image} href="/" >
                            </img>
                            <figure className='shop-count z-i'>
                                <img class="shop-count-image" src={CoursesData[6].image2} />
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
            <body className="main-course-body">
                <div className="tspart">
                    <P />
                </div>
                <h2 className="p-course range" >
                    میزان سختی
                    <p className='percent-number'>
                        %{mainCouseData.percent}
                    </p>
                </h2>
                <div class="progress">
                    <div class="progress-bar " role="progressbar"
                        style={mystyle}
                        aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">{mainCouseData.percent}%</div>
                </div>
                <h2 className="p-coursee">
                    {mainCouseData.title}
                </h2>
                <h2 className="p-course"  >
                    <div className={show ? 'showlup ' : 'hidden'} style={{ width: '80%', height: '300px' }} >
                        <div className='teacher-panel'>
                            <div className='teacher'>
                                استاد دوره
                                <br>
                                </br><p className='teacher-name'>
                                    {mainCouseData.teacher}
                                </p>
                            </div>
                            <div className='teacher course-book'>

                                <Tilt tiltMaxAngleX={23}
                                    tiltMaxAngleY={23}
                                    perspective={900}
                                    scale={1}
                                    transitionSpeed={2000}
                                    gyroscope={true}>

                                    <img src={mainCouseData.img} className="image-teacher course-img" />

                                </Tilt>

                                کتاب
                                <br>
                                </br>
                                <p className='book-name'>
                                    {mainCouseData.book}
                                </p>
                            </div>
                        </div>
                        <div className='parentallitems'>
                            <p className="more-info">
                                اطلاعات دوره
                            </p><CgDanger className="danger-icon" />

                            <h className="hover-left-child-price left-one" >
                                قیمت<h className="hover-left-child-price-adad top-p">
                                    {mainCouseData.price}   تومان
                                </h>
                                <        PiBookOpenTextLight className="book-one the-price" />
                            </h>

                            <h className="hover-left-child-online left-one">

                                رده سنی                        <h className="hover-left-child-price-adad online age-book">
                                    {mainCouseData.age}
                                </h>

                                <IoIosMan className="book-one " />
                            </h>
                            <h className="hover-left-child-time">
                                مدت دوره
                                <h className="hover-left-child-price-adad time-book">
                                    {mainCouseData.sath}
                                </h>      <FaRegClock className="book-one watch" />
                            </h>
                            <h className="hover-left-child-sath">
                                تدریس انلاین
                                <h className="hover-left-child-price-adad sath-book">
                                    {mainCouseData.online}
                                </h>
                                <HiOutlineStatusOnline className="book-one " />
                            </h>
                        </div>
                    </div>

                    <div className={show ? 'showlup' : 'hidden'} style={{ width: '80%', height: '300px' }} >
                    </div>
                </h2>

                <Tilt tiltMaxAngleX={23}
                    tiltMaxAngleY={23}
                    perspective={900}
                    scale={1}
                    transitionSpeed={2000}
                    gyroscope={true}>

                    <img src={mainCouseData.image} className="image-teacher" />

                </Tilt>

                <li className="h-course" data-aos="fade-up" >

                    <p className='course-description'>

                        توضیحات دوره
                    </p>
                    <br>
                    </br>
                    {mainCouseData.description}
                    <div
                        style={{
                            whiteSpace: "pre"
                        }}
                    >
                    </div>
                </li>
            </body>
        </>
    )
}
