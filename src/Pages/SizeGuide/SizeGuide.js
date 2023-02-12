import React from 'react'
import './SizeGuide.css'

function SizeGuide() {
    return (
        <div className='SizeGuide-container'>
            <div className='SizeGuide-paper'>
                <h3> راهنمای سایز</h3>
                <div className='SizeGuide-info'>
                    <p style={{fontWeight:'bold',fontSize:'19px'}}>
                        برای خرید دستبند کافه دور مچ دستتون رو اندازه بگیرید
                    </p>
                    <p style={{marginRight:'30px',marginTop:'20px'}}>
                        سایز ۱ : ۱۴ - سانت سایز ۲: ۱۶سانت - سایز ۳: ۱۸ سانت
                    </p>
                    <br />
                    <br />
                    <p style={{fontWeight:'bold',fontSize:'19px'}}>
                        برای پابند هم دور مچ رو اندازه بگیرید
                    </p>
                    <p style={{marginRight:'30px',marginTop:'20px'}}>
                        سایز ۱ : ۲۰ سانت - سایز ۲ : ۲۳سانت - سایز ۳: ۲۶سانت
                    </p>

                </div>
            </div>
        </div>
    )
}

export default SizeGuide