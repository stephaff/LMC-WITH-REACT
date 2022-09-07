import React from 'react';
import '../styles/HeaderTopRight.css';
import Button from './Button';

function HeaderTopRight() {
  return (
    <div className='header-top-right'>
        <select>
            <option value="français">Français</option>
            <option value="français">Anglais</option>
            <option value="français">Chinois</option>
        </select>
        <select>
            <option value="français">XOF</option>
            <option value="français">USD</option>
            <option value="français">STR</option>
        </select>
        <Button btn='connexion' lbl='Connexion' />
        <Button btn='inscription' lbl='Inscription' />
    </div>
  )
}

export default HeaderTopRight;