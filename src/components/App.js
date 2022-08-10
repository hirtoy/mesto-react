import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import React from 'react';
import Api from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import AddPlacePopup from './AddPlacePopup';
import EditAvatarPopup from './EditAvatarPopup';


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  
  const handleEditProfileClick = () => { setIsEditProfilePopupOpen (true); } 
  const handleAddPlaceClick = () => { setIsAddPlacePopupOpen (true); } 
  const handleEditAvatarClick = () => { setIsEditAvatarPopupOpen(true); } 
  const handleCardClick = (card) => { setSelectedCard(card); }

  // React.useEffect(
  //     ()=>{
  //         //загружаем профиль пользователя и карточки 
  //         Promise.all([Api.getProfile(), Api.getInitialCards()])
  //             .then(([profile, cards]) => {
  //                 //отображаем информацию профиля    
  //                 setCurrentUser(profile);
  //                 //рисуем все карточки
  //                 setCards(cards);
  //         })
  //         .catch(console.error); 
  //     },[]
  // );

  React.useEffect(() => {
    Api.getProfile()
    .then(setCurrentUser)
    .catch(console.error)
  }, []);

  React.useEffect(() => {
    Api.getInitialCards()
    .then(res => {
      setCards(res);
    })
    .catch(console.error)
  }, []);
      
  const closeAllPopups = () => {
      setIsEditProfilePopupOpen(false);
      setIsAddPlacePopupOpen(false);
      setIsEditAvatarPopupOpen(false);
      setSelectedCard(null);
  }

  function handleUpdateUser(user){
      Api.patchProfile(user.name,user.about)
      .then((res)=>{
          setCurrentUser(res);
          closeAllPopups();
      })
      .catch(console.error)
      
  }

  function handleUpdateAvatar(avatarUrl){
      Api.patchProfilePhoto(avatarUrl)
      .then((res)=>{
          setCurrentUser(res);
          closeAllPopups();
      })
      .catch(console.error)   
  }

  function handleAddPlaceSubmit(card){
      Api.createNewCard(card.name, card.link)
      .then((newCard)=>{
          console.log(newCard);
          setCards([newCard,...cards]);
          closeAllPopups();
      })
      .catch(console.error)   
  }

  function handleCardLike(card) {
      // Снова проверяем, есть ли уже лайк на этой карточке
      const isLiked = card.likes.some(i => i._id === currentUser._id);
      // Отправляем запрос в API и получаем обновлённые данные карточки
      Api.updateLikeStatus(card._id, !isLiked)
      .then((newCard) => {
          setCards((prevState)=>{return prevState.map((c) => c._id === card._id ? newCard : c)});
      })
      .catch(console.error);
  } 

  function handleCardDelete(card){
      Api.deleteCard(card._id)
      .then (res=>{
          console.log (res)
          setCards ((prevState)=> prevState.filter((c) => c._id !== card._id && c));
      })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header />

      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        cards={cards}
        onCardLike={handleCardLike}
        onCardClick={handleCardClick}
        onCardDelete={handleCardDelete}
      />

      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onUpdateUser={handleUpdateUser}
        onClose={closeAllPopups}
      />

      <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        onAddPlace={handleAddPlaceSubmit}
        onClose={closeAllPopups}
      />

      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onUpdateAvatar={handleUpdateAvatar}
        onClose={closeAllPopups}
      />

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />

      <Footer />
    </CurrentUserContext.Provider>
  );
}

export default App;