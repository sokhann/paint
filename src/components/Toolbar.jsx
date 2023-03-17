import React from 'react';
import {
    PenIcon,
    EraserIcon,
    CircleIcon,
    SquareIcon,
    LineIcon,
    SaveIcon,
    UndoIcon,
    RedoIcon
} from '../assets'
import canvasState from '../store/canvasState';
import toolState from '../store/toolState';
import Circle from '../tools/Circle';
import Eraser from '../tools/Eraser';
import Line from '../tools/Line';
import Pen from '../tools/Pen';
import Rect from '../tools/Rect';
import style from './Toolbar.module.css'

export const Toolbar = () => {

    const changeColor = e => {
        toolState.setStrokeColor(e.target.value)
        toolState.setFillColor(e.target.value)
    }

    return (
        <div className={style.toolbar}>
            <div className={style.side}>
                <button className={style.button} onClick={()=> toolState.setTool(new Pen(canvasState.canvas))}><PenIcon/></button>
                <button className={style.button} onClick={()=> toolState.setTool(new Eraser(canvasState.canvas))}><EraserIcon/></button>
                <button className={style.button} onClick={()=> toolState.setTool(new Circle(canvasState.canvas))}><CircleIcon/></button>
                <button className={style.button} onClick={()=> toolState.setTool(new Rect(canvasState.canvas))}><SquareIcon/></button>
                <button className={style.button} onClick={()=> toolState.setTool(new Line(canvasState.canvas))}><LineIcon/></button>
                <input title={'Fill color'} onChange={e => changeColor(e)} style={{marginLeft:10}} type="color"/>
            </div>
            <div className={style.side}>
                <button className={style.button} onClick={() => canvasState.undo()}><UndoIcon/></button>
                <button className={style.button} onClick={() => canvasState.redo()}><RedoIcon/></button>
                <button className={style.button}><SaveIcon/></button>
            </div>
        </div>
    );
};