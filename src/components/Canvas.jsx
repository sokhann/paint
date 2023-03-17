import { observer } from 'mobx-react-lite';
import React, { useEffect, useRef } from 'react';
import canvasState from '../store/canvasState';
import toolState from '../store/toolState';
import Pen from '../tools/Pen';
import style from './Canvas.module.css'

export const Canvas = observer(() => {
    const canvasRef = useRef()

    useEffect(()=> {
        canvasState.setCanvas(canvasRef.current)
    }, [])

    return (
        <div className={style.canvas}>
            <canvas ref={canvasRef} width={800} height={600}>

            </canvas>
        </div>
    );
});
