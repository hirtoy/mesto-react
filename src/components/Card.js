import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = props.card.owner._id === currentUser._id;
  const isLiked = props.card.likes.some(i => i._id === currentUser._id);

  const cardDeleteButton = (
      `element__remove-button element__remove-button${!isOwn && '_active'}`
  ); 

  const LikesButton = (
      `element__heart-icon ${isLiked && 'element__heart-icon_active'}`
  ); 

  function handleDeleteCard(){
      props.onCardDelete(props.card)
  }

  return (
      <li key={props.card._id} className="template">
        <div className="element">
        <button className={cardDeleteButton} type="button" onClick={handleDeleteCard}></button>
          <img className="element__image" src={props.card.link} alt={props.card.name} onClick={ ()=> {props.onCardClick(props.card.link)} }/>
          <div className="element__info">
              <h2 className="element__title">{props.card.name}</h2>
            <div className="element__likes-counter">
                <button className={LikesButton} type="button" onClick={ ()=> {props.onCardLike(props.card)}}></button>
                <p className="element__heart-counter">{props.card.likes.length}</p>
            </div>
          </div>
        </div>
      </li>
  );
}

export default Card;