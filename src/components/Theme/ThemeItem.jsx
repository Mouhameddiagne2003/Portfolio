import React from 'react';

function ThemeItem({color, img, changeColor}) {
    return (
        <div>
            <img src={img} alt="" className="theme__img cursor-pointer w-[30px]" onClick={()=>{
                changeColor(color);
            }} />
        </div>
    );
}

export default ThemeItem;