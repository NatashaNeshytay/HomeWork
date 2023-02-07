import './Header.scss';

export const Header = () => {
  return `
    <header class="header">
        <div class="header__logo">
            <img class="header__logo-images" src="./assets/images/Yellow-Duck.png" alt="logo"/>
        </div>
        <nav class="header__navigation">
            <a class="header__navigation-text" href="#">Home</a>
            <a class="header__navigation-text" href="#">Home</a>
            <a class="header__navigation-text" href="#">Home</a>
        </nav>
        <button class="header__button">Open</button>
    </header>
    `.trim();
};
