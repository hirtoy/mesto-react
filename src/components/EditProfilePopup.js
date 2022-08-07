import React from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext.js';
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
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();

        // Передаём значения управляемых компонентов во внешний обработчик
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
                    onChange={handleChangeName} />
                <span className="popup__form-error popup__form-item-error" id="name-input-error">ошибка заполнения</span>
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
                    onChange={handleChangeDescription} />
                <span className="popup__form-error popup__form-item-error"
                    id="about-input-error">ошибка заполнения</span>
            </label>
        </PopupWithForm>
    );
}

export default EditProfilePopup;