<template>
  <header class="header">
    <div class="shadow-nav">
      <div class="container">
        <nav class="main-nav">
          <a href="#" class="main-nav__logo"
            ><img src="@/public/img/logo.png" alt="Logo"
          /></a>
          <ul class="main-nav__list">
            <li class="main-nav__link"><a href="#">Контакты</a></li>
            <li class="main-nav__link"><a href="#">Каталог</a></li>
            <li class="main-nav__link"><a href="#">О нас</a></li>
            <li class="main-nav__link"><a href="#">Обратный звонок</a></li>
          </ul>
          <button class="btn mobail-btn">
            <BurgerMenuIcon />
          </button>
        </nav>
      </div>
    </div>
    <section class="hero">
      <div class="container">
        <div class="hero-logo-wrapper">
          <img
            class="hero-logo__img"
            src="@/public/img/hero-logo.png"
            alt="Hero-logo"
          />
          <p class="hero__paragraph">Рекламное агентство</p>
        </div>
        <div class="hero-contact-wrapper">
          <div class="hero-soc-wrapper">
            <p class="hero__paragraph">Присоединяйтесь к нам</p>
            <span class="hero-soc__line"></span>
            <ul class="hero-soc__list">
              <li>
                <a class="hero-soc__link" href="">
                  <InstagramIcon />
                </a>
              </li>
              <li>
                <a class="hero-soc__link" href="">
                  <TelegramIcon />
                </a>
              </li>
              <li>
                <a class="hero-soc__link" href="">
                  <VkIcon />
                </a>
              </li>
            </ul>
          </div>
          <div class="hero-tel-wrapper">
            <a class="hero-tel__link" href="#">+7 949 347 56 34</a>
            <a class="hero-tel__link" href="#">+7 949 481 88 97</a>
            <button class="btn hero-tel__btn">Обратный звонок</button>
          </div>
        </div>
      </div>
    </section>
  </header>
  <main class="home">
    <section class="about">
      <div class="container">
        <div class="about-wrapper">
          <div class="about-wrapper__text">
            <h2 class="about-heading">Мы нацелены на результат</h2>
            <p class="about-paragraph">
              Осуществление рекламных услуг высоко уровня и высокого качества.
              Благодаря наличию собственных производственных мощностей, наше
              агентство может предложить своим клиентам широкий спектр услуг,
              направленных на создание качественной рекламы.
            </p>
            <p class="about-paragraph">
              Одним из главных элементов в продвижении бизнеса является внешняя
              реклама, которая остается на виду у каждого пешехода, водителя,
              посетителя определенного заведения.
            </p>
            <p class="about-paragraph">
              Создадим эффективную работающую рекламу, чтобы увеличить прирост
              клиентов в бизнес. Помимо этого, в нашем агентстве недорого можно
              заказать множество востребованных на сегодняшний день услуг.
            </p>
          </div>
          <img
            class="about-img"
            src="@/public/img/home-abus.png"
            alt="Картинки"
          />
        </div>
        <button class="btn btn-orange about-btn">Каталог</button>
      </div>
    </section>

    <section class="services">
      <div class="container">
        <div class="services-wrapper">
          <h3 class="services-heading">Услуги</h3>
          <ul class="services-list">
            <li class="services-list__item">
              Широкоформатная печать любого типа
            </li>
            <li class="services-list__item">
              Разработка и дизайн рекламного макета
            </li>
            <li class="services-list__item">
              Изготовление и размещение рекламы в любой форме
            </li>
            <li class="services-list__item">Печать (офсет и цифровая)</li>
            <li class="services-list__item">
              Организация нестандартной рекламы
            </li>
            <li class="services-list__item">Услуги полиграфии</li>
          </ul>
        </div>
        <button class="btn btn-orange services-btn">Обратный звонок</button>
      </div>
    </section>

    <section class="advantages">
      <div class="container">
        <div class="advantages__wrapper">
          <h2 class="advantages__header">
            Нас выбирают за опыт, честность и креативность. А ещё, за:
          </h2>
          <ul class="advantages__list">
            <li class="advantages__item">
              <div class="advantages__item--elipse"></div>
              <h3 class="advantages__item--header">Лояльные цены</h3>
              <p class="advantages__item--paragraph">
                Собственная сеть носителей позволяет экономить время и около 20%
                Вашего бюджета
              </p>
            </li>
            <li class="advantages__item">
              <div class="advantages__item--elipse"></div>
              <h3 class="advantages__item--header">Комплексный подход</h3>
              <p class="advantages__item--paragraph">
                Медиапланирование Вашей рекламы, разработка эксклюзивного
                дизайна, печать и размещение
              </p>
            </li>
            <li class="advantages__item">
              <div class="advantages__item--elipse"></div>
              <h3 class="advantages__item--header">Надежность</h3>
              <p class="advantages__item--paragraph">
                Работаем без посредников. Оперативно, без форс-мажоров
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </main>
  <footer class="footer">
    <div class="container footer__wrapper">
      <div class="footer__wrapper--left">
        <img class="footer__logo" src="@/public/img/logo.png" alt="Логотип" />
        <div class="telephone">
          <a class="telephone__link" href="tel:+79493475634"
            >+7 949 347 56 34</a
          >
          <a class="telephone__link" href="tel:+79494818897"
            >+7 949 481 88 97</a
          >
        </div>
        <div class="social">
          <p class="social__paragraph">Присоединяйтесь к нам</p>
          <div class="social__line"></div>
          <ul class="social__list">
            <li class="social__item">
              <a href="#">
                <InstagramIcon />
              </a>
            </li>
            <li class="social__item">
              <a href="#">
                <TelegramIcon />
              </a>
            </li>
            <li class="social__item">
              <a href="#">
                <VkIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <nav class="footer-nav">
        <ul class="footer-nav__list">
          <li class="footer-nav__link"><a href="#">Галерея</a></li>
          <li class="footer-nav__link"><a href="#">О нас</a></li>
          <li class="footer-nav__link"><a href="#">Оформить заказ</a></li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script setup>
import InstagramIcon from "@/assets/icons/instagram.svg";
import TelegramIcon from "@/assets/icons/telegram.svg";
import VkIcon from "@/assets/icons/vk.svg";
import BurgerMenuIcon from "@/assets/icons/burger-menu.svg";
</script>
