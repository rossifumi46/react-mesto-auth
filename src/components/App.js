import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { useState } from 'react';


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  }

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  const handleCardClick = (card) => {
    setSelectedCard(card);
  }

  return (
    <div className="App">
      <Header/>
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer/>
      <PopupWithForm
        title='Редактировать профиль'
        name='edit'
        button='Сохранить'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input id="name" required type="text" className="popup__input popup__input_type_name" placeholder="Имя" name="name" minlength="2" maxlength="40"/>
        <span className='popup__error' id='name-error'></span>
        <input id="about" required type="text" className="popup__input popup__input_type_job" placeholder="Род деятельности" name="job" minlength="2" maxlength="200"/>
        <span className='popup__error' id='about-error'></span>
      </PopupWithForm>
      <PopupWithForm
        title='Новое место'
        name='create'
        button='Создать'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input id="title-input" type="text" required className="popup__input" placeholder="Название" name="name" minlength="2" maxlength="40"/>
        <span className='popup__error' id='title-input-error'></span>
        <input id="link-input" type="url" required className="popup__input" placeholder="Ссылка на картинку" name="img-link"/>
        <span className='popup__error' id='link-input-error'></span>
      </PopupWithForm>
      <PopupWithForm
        title='Обновить аватар'
        name='avatar'
        button='Создать'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input id="link_input" type="url" required className="popup__input" placeholder="Ссылка на картинку" name="img-link"/>
        <span className='popup__error' id='link_input-error'></span>
      </PopupWithForm>
      <PopupWithForm
        title='Вы уверены ?'
        name='submit'
        button='Да'
      >
      </PopupWithForm>
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
