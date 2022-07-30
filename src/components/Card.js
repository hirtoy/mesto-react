function Card(props) {
  return (
      <li key={props.card._id} className="template">
        <div className="element">
        <button className="element__remove-button" type="button"></button>
          <img className="element__image" src={props.card.link} alt={props.card.name} onClick={ ()=> {props.onCardClick(props.card.link)} }/>
          <div className="element__info">
              <h2 className="element__title">{props.card.name}</h2>
            <div className="element__likes-counter">
                <button className="element__heart-icon" type="button"></button>
                <p className="element__heart-counter">{props.card.likes.length}</p>
            </div>
          </div>
        </div>
      </li>
  );
}

export default Card;