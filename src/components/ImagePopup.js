import React from 'react';

function ImagePopup(props) { 
    return (
        // формочка увеличения карточки
        <div className={`popup popup_place_photos ${props.card && 'popup_visible'}`} onClick={() => props.onClose()}>
            <figure className="figure">
                <img className="popup__image" src={props.card ? props.card.link : ''} alt={props.card ? props.card.name : ''}/>
                <figcaption className="popup__image-subtitle">{props.card ? props.card.name : ''}</figcaption>
                <button className="popup__close-button" id="image-viewer_close-button" type="button" onClick={() => props.onClose()}></button>
            </figure>
        </div>
    );
}

export default ImagePopup;