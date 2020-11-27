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
  const [selectedCard, setSelectedCard] = useState('');

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
    setSelectedCard('');
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
        children={(
          <>
            <input id="name" required type="text" className="popup__input popup__input_type_name" placeholder="Имя" name="name" minlength="2" maxlength="40"/>
            <span className='popup__error' id='name-error'></span>
            <input id="about" required type="text" className="popup__input popup__input_type_job" placeholder="Род деятельности" name="job" minlength="2" maxlength="200"/>
            <span className='popup__error' id='about-error'></span>
            <button type="submit" className="popup__button">Сохранить</button>  
          </>  
        )}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      />
      <PopupWithForm
        title='Новое место'
        name='create'
        children={(
          <>
            <input id="title-input" type="text" required className="popup__input" placeholder="Название" name="name" minlength="2" maxlength="40"/>
            <span className='popup__error' id='title-input-error'></span>
            <input id="link-input" type="url" required className="popup__input" placeholder="Ссылка на картинку" name="img-link"/>
            <span className='popup__error' id='link-input-error'></span>
            <button type="submit" className="popup__button">Создать</button>
          </>
        )}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      />
      <PopupWithForm
        title='Обновить аватар'
        name='avatar'
        children={(
          <>
            <input id="link_input" type="url" required className="popup__input" placeholder="Ссылка на картинку" name="img-link"/>
            <span className='popup__error' id='link_input-error'></span>
            <button type="submit" className="popup__button">Сохранить</button>
          </>
        )}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      />
      <PopupWithForm
        title='Вы уверены ?'
        name='submit'
        children={(
          <>
            <button type="submit" className="popup__button">Да</button>
          </>
        )}

      />
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
