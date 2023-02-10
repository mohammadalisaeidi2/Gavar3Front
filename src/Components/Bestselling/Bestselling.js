import React from 'react'
import './Bestselling.css'
import BestsellingItem from './BestsellingItem'

function Bestselling() {
  return (
    <div className='cards'>
        <h1>محصولات برتر</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__item'>
                  <BestsellingItem
                  path='/'
                  label='Alangoo'
                  src='Images/1.jpg'
                  text=' گوشواره نگینی   '
                  />

                  <BestsellingItem
                  path='/'
                  label='Alangoo'
                  src='Images/2.jpeg'
                  text=' حلقه رز تیفانی '
                  />
                </ul>
                <ul className='cards__item'>
                  <BestsellingItem
                  path='/'
                  label='Alangoo'
                  src='Images/3.jpg'
                  text=' سرویس ماد گوارسه   '
                  />
                  <BestsellingItem
                  path='/'
                  label='Alangoo'
                  src='Images/4.jpeg'
                  text='انگشتر آلفا زمرد '
                  />
                  <BestsellingItem
                  path='/'
                  label='Alangoo'
                  src='Images/5.webp'
                  text=' سرویس جواهر '
                  />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Bestselling