const Card = (props) => {

  function handleClick() {
    console.log('li')
    props.onCardClick(props.card);
  }  

  return (
    <div className="element">
      <button type="button" className="element__trash-button"></button>
      <img src={props.card.link} className="element__image" onClick={handleClick}/>
      <div className="element__wrapper">
      <h2 className="element__title">{props.card.name}</h2>
        <div>
          <button type="button" className="element__like-button"></button>
          <p className="element__likes">{props.card.likes.length}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;