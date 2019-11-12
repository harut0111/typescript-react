import * as React from 'react';
import CheckboxMUI from './CheckboxMUI';
import TableMUI from './TableMUI';
import TextFieldsMUI from './TextFieldsMUI';


const CargoInfo = () => (
    <div className='cargoInfo'>
        <div className='header'>
            <h1>Подтвердить ваш заказ</h1>
        </div>
        <div className='mainContent'>
            <div className='mainContent-info'>
                <div className='sender'>
                    <div className='title'>
                        <h2>Отправитель</h2>
                    </div>
                    <ul className='list'>
                        <li>Json test 1</li>
                        <li>Moskca, yl</li>
                        <li>30.10.2019 10:00 do 16:00</li>
                        <li>Ivan Ivanov</li>
                        <li>+7 (111)111-11-11</li>
                    </ul>
                </div>
                <div className='receiver'>
                    <div className='title'>
                        <h2>Получатель</h2>
                    </div>
                    <ul className='list'>
                        <li>Json test 1</li>
                        <li>Moskca, yl</li>
                        <li>30.10.2019 10:00 do 16:00</li>
                        <li>Ivan Ivanov</li>
                        <li>+7 (111)111-11-11</li>
                    </ul>
                </div>
            </div>
            <div className='mainContent-info'>
                <TextFieldsMUI />
            </div>
            <div className='mainContent-table'>
                <TableMUI />
            </div>
            <div className='totalCargoSpace'>
                <p>всего грузовый место 5</p>
            </div>
            <div style={{ textAlign: 'center' }}>
                <CheckboxMUI />
            </div>
        </div>
    </div>)

export default CargoInfo