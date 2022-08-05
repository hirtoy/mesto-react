import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup(props){
    const currentUser = React.useContext(CurrentUserContext);

    React.useEffect(()=>{
        setName(currentUser.name);
        setDescription(currentUser.about);
        },[currentUser, props.isOpen]
    );

    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');

    function handleChangeName(e){setName(e.target.value)};
    function handleChangeDescription(e){setDescription(e.target.value)};

    function handleSubmit(e){
        e.preventDefault();
        props.onUpdateUser({
            name,
            about: description,
        });
    }

return (
    <PopupWithForm
        title="Редактировать профиль"
        name="edit"
        isOpen={props.isOpen}
        onClose={props.onClose}
        onSubmit={handleSubmit}
        buttonText="Сохранить">

        <label className="popup__field">
          <input className="popup__form-item popup__form-item_value_name"
            id="name-input"
            name="username"
            type="text"
            placeholder="Жак-Ив Кусто"
            required
            minLength="2"
            maxLength="40"
            value={name || ''}
            onChange={handleChangeName}/>
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
            maxLength="200"
            value={description || ''}
            onChange={handleChangeDescription}/>
          <span className="popup__form-error about-input-error"
            id="popup__form-item_description">ошибка заполнения</span>
        </label>
      </PopupWithForm>
    );
}

export default EditProfilePopup;