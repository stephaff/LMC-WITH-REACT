import React from 'react';
import '../styles/Banner.css';
import Button from './Button';

function Banner() {
  return (
    <div className='banner'>
        <div className="banner-container">
            <h1>Bénéficiez de vos articles <br/> préférés en gros et en détails</h1>
            <p>Achetez et faites vous livrer vos colis en Côte d'Ivoire, au <br/> Burkina Faso, au Libéria et en Sierra Léonne</p>
            <Button btn='acheter-maintenant' lbl='Acheter maintenant' />
        </div>
    </div>
  )
}

export default Banner;