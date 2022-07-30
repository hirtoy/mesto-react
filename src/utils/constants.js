export const selectors = {
	formSelector: ".popup__form",
	inputSelector: ".popup__form-item",
	submitButtonSelector: ".popup__submit-button",
	inputInvalidClass: "popup__form-item_state_invalid",
	buttonInvalidClass: "popup__submit-button_invalid"
};

export const imageData = {
    image: '#popup__window_image-viewer',
    imageSubtitle: '#popup__image-subtitle',
};

export const profileEditorNode = document.getElementById("profile-editor");
export const profileNameNode = document.querySelector(".profile__name");
export const profileDescriptionNode = document.querySelector(".profile__description");

export const profileEditorCloseButtonNode = document.querySelector("#profile__editor_close-button");

export const imagePopupNode = document.getElementById("image-viewer");
export const imageViewerCloseButtonNode = document.getElementById("image-viewer_close-button");

export const elementAddButtonNode = document.getElementById("element__add-button");
export const elements = document.querySelector(".elements");
export const elementCard = document.querySelector(".element");
// export const addElement = document.querySelector("element-editor");

export const profileInputName = document
.querySelector(".popup_type_profile")
.querySelector(".popup__form-item_value_name");
export const profileInputDescription = document
.querySelector(".popup_type_profile")
.querySelector(".popup__form-item_value_description");

export const editButtonAvatar = document.querySelector(".profile__avatar-overlay");
export const profileAddButtonNode = document.querySelector(".profile__add-button");
export const profileEditButtonNode = document.querySelector(".profile__edit-button");

export const popupPlaceEditorNode = document.getElementById("place-editor");
export const placeEditorCloseButtonNode = document.getElementById("place__editor_close-button");

export const popupNameInput = document.querySelector(".popup__form-item_value_name");
export const popupDescriptionInput = document.querySelector(".popup__form-item_value_description");
export const placeName = document.querySelector(".popup__form-item_value_place-name");
export const placeUrl = document.querySelector(".popup__form-item_value_place-url");

export const popUpProfileSubmitButtonNode = document.querySelector(".popup__profile-submit");
export const image = document.querySelector("#popup__window_image-viewer");
export const imageSubtitle = document.querySelector("#popup__image-subtitle");
export const submitElementBtn = document.getElementById("popup__submit-button_place_elements");

export const popupPhotoSelector = '.popup_place_photos';
export const editForm = document.querySelector(".popup__form_edit");
export const addForm = document.querySelector(".popup__form_add");

export const cohortId = 'cohort-44';
export const apiToken = '497373c8-3f58-4b67-8592-c177fbd661e3';
export const apiBaseUrl = `https://mesto.nomoreparties.co/v1/${cohortId}`