import React from 'react';

function ImagePopup(props) { 
    return (
        // формочка увеличения карточки
        <div className={`popup popup_place_photos ${props.link && 'popup_visible'}`} onClick={() => props.onClose()}>
            <figure className="figure">
                <img className="popup__image" src={props.link} alt=""/>
                <figcaption className="popup__image-subtitle" id="popup__image-subtitle"></figcaption>
                <button className="popup__close-button" id="image-viewer_close-button" type="button" onClick={() => props.onClose()}></button>
            </figure>
        </div>
    );
}

export default ImagePopup;