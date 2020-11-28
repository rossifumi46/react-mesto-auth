import editBtn from '../images/edit_button.svg';
import addBtn from '../images/add_button.svg';
import { useState, useEffect } from 'react';
import api from '../utils/api';
import Card from './Card';

const Main = (props) => {

  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getProfile()
      .then((userData) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
      })
      .catch((err) => {
        console.log(err);
      });
    api.getInitialCards()
      .then((initialCards) => {
        setCards(initialCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <div style={{ backgroundImage: `url(${userAvatar})`}} className="profile__avatar" onClick={props.onEditAvatar}>
            <img alt="аватар" className="profile__avatar-edit"/>
          </div>
          <div className="profile__text">
            <div className="profile__row">
              <h1 className="profile__title">{userName}</h1>
              <button type="button" className="profile__edit-button" onClick={props.onEditProfile}><img className="profile__edit-button-img" src={editBtn} alt="кнопка редактировать"/></button>
            </div>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
        </div>
        <button type="button" className="profile__add-button" onClick={props.onAddPlace}>
          <img className="profile__add-button-img" src={addBtn} alt="кнопка добавить"/>
        </button>
      </section>
      <section className="elements">
        {cards.map((item) => {
          return <Card
            card={item}
            onCardClick={props.onCardClick}
            key={item._id}
          />
        })}
      </section>
    </main>
  );
}

export default Main;