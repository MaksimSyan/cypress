describe('Автотест формы логина и пароля', function () {
    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); // поситили сайт
         cy.get('#mail').type('german@dolnikov.ru'); // ввели логин
         cy.get('#pass').type('iLoveqastudio1'); // ввели пароль
         cy.get('#loginButton').click(); // нажали кнопку Войти 
         cy.get('#messageHeader').should('be.visible'); // проверка видимости текста
         cy.get('#messageHeader').contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })
 })
 describe('Автотест формы логина и пароля', function () {
    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); // поситили сайт
         cy.get('#mail').type('german@dolnikov.ru'); // ввели логин
         cy.get('#forgotEmailButton').click();
         cy.get('#forgotForm > .header').contains('Восстановите пароль'); // надпись видима
         cy.get('#exitRestoreButton > .exitIcon').should('be.visible'); // крестик виден
         cy.get('#mailForgot').type('german@dolnikov.ru'); // ввести почту
         cy.get('#restoreEmailButton').click(); //  нажать по кнопке восстановить
         cy.get('#messageHeader').should('be.visible');
         cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); 
     })
 }) 
 describe('Автотест формы логина и пароля', function () {
    it('Верный логин и  не верный пароль', function () {
         cy.visit('https://login.qa.studio/'); // поситили сайт
         cy.get('#mail').type('german@dolnikov.ru'); // ввели логин
         cy.get('#loginButton').should('be.disabled'); // кнопка войти не кликабельна
         cy.get('#pass').type('iLoveqastudio12'); // ввели не правильный пароль
         cy.get('#loginButton').should('be.enabled'); // кнопка войти кликабельна
         cy.get('#loginButton').click(); // нажали кнопку Войти 
         cy.get('#messageHeader').contains('Такого логина или пароля нет');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик видимый
     })
 }) 
describe('Автотест формы логина и пароля', function () {
   it('Не верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // поситили сайт
        cy.get('#mail').type('german@dolnikov1.ru'); // ввели не верный логин
        cy.get('#loginButton').should('be.disabled'); // кнопка войти не кликабельна
        cy.get('#pass').type('iLoveqastudio1'); // ввели правильный пароль
        cy.get('#loginButton').should('be.enabled'); // кнопка войти кликабельна
        cy.get('#loginButton').click(); // нажали кнопку Войти 
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик видимый
    })
})
describe('Автотест формы логина и пароля', function () {
    it('логин без @ и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); // поситили сайт
         cy.get('#mail').type('germandolnikov1.ru'); // ввели логин без @
         cy.get('#loginButton').should('be.disabled'); // кнопка войти не кликабельна
         cy.get('#pass').type('iLoveqastudio1'); // ввели правильный пароль
         cy.get('#loginButton').should('be.enabled'); // кнопка войти кликабельна
         cy.get('#loginButton').click(); // нажали кнопку Войти 
         cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик видимый
     })
 })
 describe('Автотест формы логина и пароля', function () {
    it('логин со строчными буквами и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); // поситили сайт
         cy.get('#mail').type('GerMan@Dolnikov.ru'); // ввели логин со строчными буквами
         cy.get('#loginButton').should('be.disabled'); // кнопка войти не кликабельна
         cy.get('#pass').type('iLoveqastudio1'); // ввели правильный пароль
         cy.get('#loginButton').should('be.enabled'); // кнопка войти кликабельна
         cy.get('#loginButton').click(); // нажали кнопку Войти 
         cy.get('#messageHeader').contains('Такого логина или пароля нет');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик видимый
     })
 })
 describe('Покупка аватара в покемонах', function () {
    it('e2e тест на покупку нового аватара для тренера', function () {
         cy.visit('https://pokemonbattle.me/');
         cy.get(':nth-child(1) > .auth__input').type('maksym.syanov@yandex.ru');
         cy.get('#password').type('Alina2003alina');
         cy.get('.auth__button').click();
         cy.get('.header__btns > [href="/shop"]').click();
         cy.get('.shop__list > li').not('.feature-empty').children('.shop__button').eq(0).click();
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996');
         cy.get(':nth-child(1) > .pay_base-input-v2').type('1225');
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('German Dolnikov');
         cy.get('.pay-btn').click();
         cy.get('#cardnumber').type('56456');
         cy.get('.payment__submit-button').click();
         cy.get('.payment__adv').click();
     })
 })