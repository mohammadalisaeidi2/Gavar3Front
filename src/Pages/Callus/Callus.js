import React from 'react'
import './Callus.css'
import logo from './logo.png'

function Callus() {
    return (
        <div className='call-container'>
            <div className='call-paper'>
                <h3>درباره ما</h3>
                <div className='call-info'>
                    <p>گوارسه با هدف فروش و تولید محتوا با کیفیت در زمینه طلا و جوار در سال زمستان 1401 تاسیس شده است.
                        ارائه کالای با اصالت و قیمت مناست و همچنین رقابت سالم با همکاران اهمیت زیادی دارند.
                    </p>
                    <br />
                    <br />
                    
                    <p>
                        آدرس تهران میدان ارتش خیابان سپد بن بست نگین پلاک7
                        تلفن : 22819759-021
                    </p>

                </div>
                <div className='call-logo'>
                    <img src={logo} className='call-logo-img' alt='logo' />
                </div>

            </div>
        </div>
    )
}

export default Callus