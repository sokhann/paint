import { observer } from 'mobx-react-lite';
import React, { useEffect, useRef } from 'react';
import canvasState from '../store/canvasState';
import style from './Canvas.module.css'

export const Canvas = observer(() => {
    const canvasRef = useRef()

    useEffect(()=> {
        canvasState.setCanvas(canvasRef.current)
    }, [])

    const mouseDownHandler = () => {
        canvasState.pushToUndo(canvasRef.current.toDataURL())
    }

    return (
        <div className={style.canvas}>
            <canvas 
                ref={canvasRef} 
                width={800} 
                height={600}
                onMouseDown={() => mouseDownHandler()}
            >

            </canvas>
        </div>
    );
});
