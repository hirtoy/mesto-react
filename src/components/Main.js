import React from 'react';
import Api from '../utils/Api.js';
import Card from './Card.js';

function Main(props) {
    const [userName, setUserName] = React.useState("");
    const [userDescription, setUserDescription] = React.useState("");
    const [userAvatar, setUserAvatar] = React.useState("");
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        //загружаем профиль пользователя и карточки 
        Promise.all([Api.getProfile(), Api.getInitialCards()])
            .then(([profile, cards]) => {
                //отображаем информацию профиля
                setUserName(profile.name);
                setUserDescription(profile.about);
                setUserAvatar(profile.avatar);
                setCards(cards);
            })
            .catch(err => { console.log(err) })
    },[]);

    return (
        //основной контент
        <main className="content">
            <section className="profile">
                <div className="profile__avatar-place">
                    <img src={userAvatar} alt="Подождите, загружается" className="profile__avatar"/>
                    <button type="button" className="profile__avatar-overlay" onClick={props.onEditAvatar}></button>
                </div>

                <div className="profile__text">
                    <h1 className="profile__name">{userName}</h1>
                    <button type="button" 
                        className="profile__edit-button"
                        title="Редактировать профиль" 
                        aria-label="Редактировать профиль" onClick={props.onEditProfile}></button>
                    <p className="profile__description">{userDescription}</p>
                </div>
                <button type="button" 
                className="profile__add-button" 
                id="element__add-button" 
                title="Добавить фото"
                aria-label="Добавить фото" onClick={props.onAddPlace}></button>
            </section>

            <section className="elements">
                    {cards.map((card) => (
                        <Card key={card._id} card={card} onCardClick={props.onCardClick}/>
                    ))}
            </section>
        </main>

    );
}

export default Main;