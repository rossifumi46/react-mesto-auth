import logo from '../images/logo.svg';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="лого" className="header__logo"/>
    </header>
  );
}

export default Header;