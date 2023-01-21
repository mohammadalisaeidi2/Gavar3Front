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
                  src='Images/1.jpeg'
                  text='النگو تی بتس مت '
                  />
                  <BestsellingItem
                  path='/'
                  label='Alangoo'
                  src='Images/1.jpeg'
                  text='النگوهعسلیغلسعغیب ست '
                  />
                </ul>
                <ul className='cards__item'>
                  <BestsellingItem
                  path='/'
                  label='Alangoo'
                  src='Images/1.jpeg'
                  text='النگو تی بتس مت '
                  />
                  <BestsellingItem
                  path='/'
                  label='Alangoo'
                  src='Images/1.jpeg'
                  text='النگوهعسلیغلسعغیب ست '
                  />
                  <BestsellingItem
                  path='/'
                  label='Alangoo'
                  src='Images/1.jpeg'
                  text='النگوهعسلیغلسعغیب ست '
                  />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Bestselling