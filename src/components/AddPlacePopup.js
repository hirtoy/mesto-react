import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
    const [name, setName] = React.useState('');
    const [link, setLink] = React.useState('');

    function handleChangeName(e) { setName(e.target.value) };
    function handleChangeLink(e) { setLink(e.target.value) };

    function handleSubmit(e) {
        e.preventDefault();
        props.onAddPlace({ name, link });
    }

    React.useEffect(
        () => {
            setName('');
            setLink('');
        }, [props.isOpen]
    );

    return (
        <PopupWithForm
            title="Новое место"
            name="add" 
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
            buttonText="Создать">

            <label className="popup__field">
                <input className="popup__form-item popup__form-item_place_elements popup__form-item_value_place-name"
                    id="title-input"
                    name="name"
                    type="text"
                    placeholder="Название"
                    required
                    minLength="2"
                    maxLength="30"
                    value={name}
                    onChange={handleChangeName}/>
                <span className="popup__form-error" id="title-input-error">Ошибка заполнения</span>
            </label>

            <label className="popup__field">
                <input className="popup__form-item popup__form-item_place_elements popup__form-item_value_place-url"
                    id="link-input"
                    name="link"
                    type="url"
                    placeholder="Ссылка на картинку"
                    required
                    value={link}
                    onChange={handleChangeLink}/>
                <span className="popup__form-error" id="link-input-error">Ошибка заполнения</span>
            </label>
        </PopupWithForm>
    );
}
export default AddPlacePopup;