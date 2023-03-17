import React from 'react';
import toolState from '../store/toolState';
import style from './Settings.module.css'

export const Settings = () => {
    return (
        <div className={style.settings}>
            <label htmlFor={'line-width'}>Line width</label>
            <input 
                id={'line-width'} 
                type={'number'} 
                defaultValue={1} 
                min={1} 
                max={50} 
                onChange={e => toolState.setLineWidth(e.target.value)}
            />
            <label htmlFor="stroke-color">Line color</label>
            <input onChange={e => toolState.setStrokeColor(e.target.value)} id="stroke-color" type="color"/>
        </div>
    );
};
