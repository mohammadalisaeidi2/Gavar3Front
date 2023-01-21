import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { Instagram, Telegram, Copyright, Mail } from '@material-ui/icons'
import logo from './logo.png'


function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    در شبکه های اجتماعی مارا دنبال کنید تا آفرها باخبر شوید.
                </p>
                <p className='footer-subscription-text'>
                    اعتماد شما سرمایه ماست
                </p>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>درباره ما</h2>
                        <Link> تماس باما</Link>
                        <Link> همکاری باما</Link>
                        <Link> خدمات ما</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>دسترسی سریع</h2>
                        <Link>راهنمای سایز</Link>
                        <Link> قیمت طا</Link>
                        <Link>ورود ادمین</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>شبکه اجتماعی</h2>
                        <Link> اینستاگرام</Link>
                        <Link> کانال تلگرام</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            <img src={logo} style={{height:"50px"}} alt='logo' />
                        </Link>
                    </div>
                    <small className='website-rights'>
                        تمامی حقوق متعلق به گروه گوارسه است.<Copyright />
                    </small>
                    <div className='social-icons'>
                        <Link to='' className='social-icon-link'>
                            <Instagram />
                        </Link>
                        <Link to='' className='social-icon-link'>
                            <Telegram />
                        </Link>
                        <Link to='' className='social-icon-link'>
                            <Mail />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer