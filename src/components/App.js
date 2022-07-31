import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import React from 'react';


function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  const handleEditProfileClick = () => { setIsEditProfilePopupOpen(true); }
  const handleAddPlaceClick = () => { setIsAddPlacePopupOpen(true); }
  const handleEditAvatarClick = () => { setIsEditAvatarPopupOpen(true); }
  const handleCardClick = (link) => { setSelectedCard(link); }

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <>
      <Header />

      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick} />

      <PopupWithForm
        title="Редактировать профиль"
        name="edit"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        buttonText="Сохранить">

        <label className="popup__field">
          <input className="popup__form-item popup__form-item_value_name"
            id="name-input"
            name="name"
            type="text"
            placeholder="Жак-Ив Кусто"
            required
            minLength="2"
            maxLength="40" />
          <span className="popup__form-error name-input-error" id="popup__form-item_name">ошибка заполнения</span>
        </label>

        <label className="popup__field">
          <input className="popup__form-item popup__form-item_value_description"
            id="about-input"
            name="about"
            type="text"
            placeholder="Исследователь океана"
            required
            minLength="2"
            maxLength="200" />
          <span className="popup__form-error about-input-error"
            id="popup__form-item_description">ошибка заполнения</span>
        </label>
      </PopupWithForm>

      <PopupWithForm
        title="Новое место"
        name="add" isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        buttonText="Сохранить">

        <label className="popup__field">
          <input className="popup__form-item popup__form-item_place_elements popup__form-item_value_place-name"
            id="title-input"
            name="name"
            type="text"
            placeholder="Название"
            required
            minLength="2"
            maxLength="30" />
          <span className="popup__form-error title-input-error"
            id="popup__form-item_place-name">ошибка заполнения</span>
        </label>

        <label className="popup__field">
          <input className="popup__form-item popup__form-item_place_elements popup__form-item_value_place-url"
            id="link-input"
            name="link"
            type="url"
            placeholder="Ссылка на картинку"
            required />
          <span className="popup__form-error link-input-error"
            id="popup__form-item_place-url">ошибка заполнения</span>
        </label>
      </PopupWithForm>

      <PopupWithForm
        title="Обновить аватар"
        name="new-avatar"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        buttonText="Сохранить">

        <label className="popup__field">
          <input className="popup__form-item popup__form-item_place_elements popup__form-item_value_place-avatar"
            id="avatar-input"
            name="avatar"
            type="url"
            placeholder="Ссылка на аватарку"
            required />
          <span className="popup__form-error avatar-input-error"
            id="popup__form-avatar_place-url">ошибка заполнения</span>
        </label>
      </PopupWithForm>

      <ImagePopup
        link={selectedCard}
        onClose={closeAllPopups} />

      <Footer />
    </>
  );
}

export default App;