import React from "react";
import "../styles/css/header.css"

function Header() {
    return (
<header className="content__container">
  <div className="content__wrapper">
    <div className="content__wrapper-item">
      <a className="content__logo" href="https://yandex.ru/">SkillDrive</a>
    </div>
    <div className="content__wrapper-item is-desktop">
      <nav className="menu__frame">
        <div className="menu__frame-link is-animated" data-target="about">О нас</div>
        <div className="menu__frame-link is-animated" data-target="contact">Условия</div>
        <div className="menu__frame-link is-animated" data-target="team">Частые вопросы</div>
      </nav>
    </div>
    <div className="content__wrapper-item is-desktop">
      <button className="content-button is-animated"><span className="content-button-text">Войти</span></button>
    </div>
    <div className="mobile__burger is-mobile">
      <div className="mobile__burger-item" />
      <div className="mobile__burger-item" />
      <div className="mobile__burger-item" />
    </div>
  </div>
  <div className="menu__mobile is-mobile is-animeted">
    <div className="menu__mobile-header">
      <div className="menu__mobile-item">
        <a className="content__logo" href="https://yandex.ru/">SkillDrive</a>
      </div>
      <div className="menu__mobile-close"><img src="../img/menu_close.svg" alt /></div>
    </div>
    <div className="menu__mobile-frame">
      <nav>
        <div className="menu__mobile-link is-animated is-active">О нас</div>
        <div className="menu__mobile-link is-animated">Условия</div>
        <div className="menu__mobile-link is-animated">Частые вопросы</div>
      </nav>
    </div>
    <div className="menu__mobile-button">
      <button className="menu__mobile-but is-animated"><span className="content-button-text">Войти</span></button>
    </div>
  </div>
</header>

    );
    }

export default Header;