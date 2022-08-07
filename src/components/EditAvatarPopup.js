import React from 'react';
import PopupWithForm from './PopupWithForm';


function EditAvatarPopup(props) {
    const avatarUrl = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateAvatar(avatarUrl.current.value);
    }

    React.useEffect(
        () => {
            avatarUrl.current.value = '';
        }, [props.isOpen]
    );

    return (
        <PopupWithForm
            title="Обновить аватар"
            name="new-avatar"
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
            buttonText="Сохранить">

            <label className="popup__field">
                <input className="popup__form-item popup__form-item_place_elements popup__form-item_value_place-avatar"
                    id="avatar-input"
                    name="avatar"
                    type="url"
                    placeholder="Ссылка на аватарку"
                    required
                    ref={avatarUrl} />
                <span className="popup__form-error avatar-input-error"
                    id="popup__form-avatar_place-url">ошибка заполнения</span>
            </label>
        </PopupWithForm>
    )

}

export default EditAvatarPopup;