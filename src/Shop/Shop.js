import React, { Component } from 'react'
import Product from '../Product/Product'
import CartProduct from '../CartProduct/CartProduct'
import Form from 'react-bootstrap/Form';
import './Shop.css'
import swal from "sweetalert";
import Header from '../components/Header';
export default class Shop extends Component {


    constructor(props) {
        super(props)
        this.state = {

            count: 0,

            actresses: [
                { imgactress: 'images/1/1.jpg' },
                { imgactress: 'images/1/ww.webp' },
                { imgactress: 'images/1/18.jpg' },

            ],
            products: [
                { actress: 'c', id: 11, desc: '9/5 از 10', price: "300", img: 'images/1/ww.webp', title: 'اسید' },
                {
                    actress: 'c', id: 2, desc: '6/5 از 10', price: "20", img: 'images/1/m.jpg', title:
                        'آرامش در دره'

                },
                
                { actress: 'j', id: 16, desc: '8/5 از 10', price: "120", img: 'images/1/1.jpg', title: 'عشق در مزرعه' },
                { actress: 'j', id: 6, desc: '8/5 از 10', price: " 50", img: 'images/1/tt.jpg', title: 'ببر سه' },
                { actress: 'e', id: 18, desc: '6/5 از 10', price: "60", img: 'images/1/18.jpg', title: 'برنامه خانوداگی' },
                { actress: 'e', id: 3, desc: '6/5 از 10', price: "60", img: 'images/1/v.jpg', title: 'اتاق ' },
                { actress: 'j', id: 6, desc: '7/5 از 10', price: " 50", img: 'images/1/20.jpg', title: 'نامه به بابانوئل' },


                { actress: 'c', id: 1, desc: '7/5 از 10', price: "300", img: 'images/1/g.jpg', title: 'کافه بین راهی' },
                { actress: 'j', id: 8, desc: '7/5 از 10', price: "120", img: 'images/1/qq.jpg', title: 'یک تکه شیکاگویی ' },

           
               


                { actress: 'c', id: 9, desc: '7/5 از 10', price: " 120", img: 'images/1/pp.jpg', title: 'عشق زمین گلف' },

                { actress: 'j', id: 5, desc: '5 از 10', price: "90", img: 'images/1/x.jpg', title: 'آرامش در شمال' },
                { actress: 'e', id: 4, desc: '6/5 از 10', price: "80", img: 'images/1/b.jpg', title: 'اصل مساله' },
             

         
                { actress: 'j', id: 10, desc: '7/5 از 10', price: "120", img: 'images/1/zz.jpg', title: 'معمای قتل' },
               
                { actress: 'e', id: 12, desc: '6/5 از 10', price: "60", img: 'images/1/kk.jpg', title: 'بدشانسی بتی' },
                {
                    actress: 'c', id: 15, desc: '6/5 از 10', price: "20", img: 'images/1/27.jpg', title:
                        'نجات کریسمس'

                },
                { actress: 'e', id: 13, desc: '6/5 از 10', price: "60", img: 'images/1/13.jpg', title: 'بعد از عروسی ' },

          
              
                { actress: 'c', id: 17, desc: '3/5 از 10', price: "300", img: 'images/1/4.jpg', title: 'اسید' },
            
             
                { actress: 'e', id: 7, desc: '6/5 از 10', price: "70", img: 'images/1/u.jpg', title: 'خانم وب ' }],
            shoppingCart: [],
            filterCoffee: [],
            tow: "",
            one: "",
            three: "",
            all: "true",

        }
    }

    addProductToCart(d) {

        let ma = this.state.shoppingCart.find(product => {
            return product.id === d
        })

        if (ma) {

            swal({
                title: 'این فیلم را قبلا خریداری کردید',
                icon: "error",
                buttons: " باشه !",
                className: "rrr",
            })


        }
        else {
            let mainProduct = this.state.products.find(product => {
                return product.id === d
            })
            this.setState(prevState => {
                return {
                    shoppingCart: [...prevState.shoppingCart, mainProduct]
                }
            })

            this.setState(prevState => {
                return {
                    count: this.state.count + 1

                }
            })
        }
    }

    emptyShoppingCart() {
        this.setState(prevState => {
            return {
                count: 0

            }
        })
        this.setState({
            shoppingCart: []
        })
    }


    removeProductFromCart(productId) {
        this.setState(prevState => {
            return {
                count: this.state.count - 1

            }
        })

        let newShoppingCart = this.state.shoppingCart.filter(product => {
            return product.id !== productId
        })

        this.setState({
            shoppingCart: newShoppingCart
        })
    }


    all(d) {


        this.state.one = ""
        this.state.all = "true"

        this.state.tow = ""
        this.state.three = ""
        this.setState({
            filterCoffee: this.state.products
        })
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }





    onFilterj(d) {

        this.state.one = ""
        this.state.all = ""

        this.state.tow = ""
        this.state.three = "true"
        let filteredj = this.state.products.filter(product => {
            return product.actress === 'j'
        })

        this.setState({
            filterCoffee: filteredj
        })
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }

    onFilterc(d) {

        this.state.one = ""
        this.state.all = ""

        this.state.tow = "true"
        this.state.three = ""
        let filteredc = this.state.products.filter(product => {
            return product.actress === 'c'
        })

        this.setState({
            filterCoffee: filteredc
        })
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }



    onFiltere(d) {

        this.state.one = "true"

        this.state.all = ""
        this.state.tow = ""
        this.state.three = ""
        let filterede = this.state.products.filter(product => {
            return product.actress === 'e'
        })

        this.setState({
            filterCoffee: filterede
        })

        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }


    componentDidMount() {
        this.setState({
            filterCoffee: this.state.products
        })
    }

    render() {
        const scrolltosells = () => {
            if (this.state.all === "true") {
                window.scrollTo({ top: 3350, left: 0, behavior: 'smooth' });

            }

            else {
                window.scrollTo({ top: 1350, left: 0, behavior: 'smooth' });
            }


        };
        const scrollToTopfilm = () => {

            window.scrollTo({ top: 30, left: 0, behavior: 'smooth' });



        };

        return (




            <>




                <Header />


                <div className='shop-body'>

                    <p onClick={scrolltosells} className='shop-list'>
                        <img class="listimage" src="list.png" />
                        لیست خریدها
                    </p>
                    <p onClick={scrollToTopfilm} className='shop-list films'>
                        <img class="listimage" src="list.png" />
                        لیست فیلم ها
                    </p>
                    <figure className='shop-count'>
                        <img class="shop-count-image" src="cart.png" />

                        سبد خرید
                        <span className='shop-count-count' >

                            {this.state.count}

                        </span>





                    </figure>

                    <header class="zz">



                        <h1 class="band-name-large-animation">فروش  فیلم های انگلیسی   </h1>

                    </header>





                    <div className='valed-parent-filters' >

                        <h1 class="bottom-text">   فیلتر بر اساس ژانر فیلم

                            <img className='filterimage' src="imagess.png" />
                        </h1>

                        {['radio'].map((type) => (



                            <div key={`reverse-${type}`} className="parent-filters">


                                <Form.Check onClick={this.all.bind(this)} className={this.state.all ? 'formcheck-shop red' : 'formcheck-shop'}
                                    reverse
                                    name="group1"
                                    label="همه"
                                    type={type}
                                    id={`reverse-${type}-4`}
                                />

                                <Form.Check className={this.state.three ? 'formcheck-shop red' : 'formcheck-shop '} onClick={this.onFilterj.bind(this)}
                                    reverse
                                    label="عاشقانه"
                                    name="group1"
                                    type={type}
                                    id={`reverse-${type}-1`}
                                />


                                <Form.Check className={this.state.tow ? 'formcheck-shop red' : 'formcheck-shop '} onClick={this.onFilterc.bind(this)}
                                    reverse
                                    label="اکشن"

                                    name="group1"
                                    type={type}
                                    id={`reverse-${type}-2`}
                                />





                                <Form.Check onClick={this.onFiltere.bind(this)} className={this.state.one ? 'formcheck-shop red' : 'formcheck-shop'}
                                    reverse
                                    name="group1"
                                    label="درام"
                                    type={type}
                                    id={`reverse-${type}-3`}
                                />


                            </div>

                        ))}
                    </div>


                    <div className='valed-parent-actressimage'  >
                        <div className='parent-actressimage' >

                            <button className={this.state.three ? 'btn-actressthree opa' : 'btn-actressthree '} type="button" onClick={this.onFilterj.bind(this)}>


                            </button>
                            <img className={this.state.three ? 'actressimage opai ' : '  actressimage '} src={this.state.actresses[0].imgactress} />

                        </div>



                        <div className='parent-actressimage'>

                            <button className={this.state.tow ? 'btn-actresstow opa' : 'btn-actresstow '} type="button" onClick={this.onFilterc.bind(this)}>

                            </button> <img className={this.state.tow ? 'actressimage opai' : 'actressimage '} src={this.state.actresses[1].imgactress} />
                        </div>

                        <div className='parent-actressimage'>



                            <button className={this.state.one ? 'btn-actressone opa' : 'btn-actressone '} type="button" onClick={this.onFiltere.bind(this)}>

                            </button>
                            <img className={this.state.one ? 'actressimage opai' : '  actressimage '} src={this.state.actresses[2].imgactress} />
                        </div>
                    </div>





                    <div class="animation-items">

                        {this.state.filterCoffee.map(product => (
                            <Product {...product} onFilterj={this.onFilterj.bind(this)}
                                onFiltere={this.onFiltere.bind(this)}

                                onFilterc={this.onFilterc.bind(this)} onAddProduct={this.addProductToCart.bind(this)} />
                        ))}
                    </div>





                    <div class="cart-row row-tow">



                        <span class="cart-header cart-column p-name">نام فیلم</span>
                        <span class="cart-header cart-column">هزینه</span>
                        <span class="cart-header cart-column">حذف از سبد</span>


                    </div>





                    <div class="cart-items ">

                        {this.state.shoppingCart.map(product => (

                            <CartProduct {...product} onRemove={this.removeProductFromCart.bind(this)} />



                        ))}


   </div>

<div class=" btn-parent-orig" >


                        <button class=" btn-purchase" type="button" onClick={this.emptyShoppingCart.bind(this)}>
                            حذف کل خریدها
                        </button>
                    </div>
                </div>

            </>
   )
    }
}