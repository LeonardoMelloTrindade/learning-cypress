// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//LOGIN SAUCEDEMO
Cypress.Commands.add("loginSaucedemo", () => {
  cy.get('[data-test="username"]')
    .type("standard_user")
    .should("have.value", "standard_user");
  cy.get('[data-test="password"]')
    .type("secret_sauce")
    .should("have.value", "secret_sauce");
  cy.get('[data-test="login-button"]').click();
});

//BUGBANK CREATE AND LOGIN USER
Cypress.Commands.add("registerBugBank", (email, nome, senha) => {
  cy.get(".ihdmxA").click();
  cy.get(":nth-child(2) > .input__default").type(email, { force: true });
  cy.get(":nth-child(3) > .input__default").type(nome, { force: true });
  cy.get(
    ":nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default"
  ).type(senha, { force: true });
  cy.get(
    ":nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default"
  ).type(senha, { force: true });
  cy.get(
    ".styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0"
  ).click({ force: true });
  cy.get("#btnCloseModal").click({ force: true });
});

Cypress.Commands.add("loginBugBank", () => {
  cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').type('teste@teste.com');
  cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('123456')
  cy.get('.otUnI').click();
});

// CREATE USER IN DEMOBALZE
Cypress.Commands.add("registerDemoBlaze", (userName, password) => {
  cy.get('#signin2').click();
  cy.get('#sign-username').type(userName).should('have.value', userName);
  cy.get('#sign-password').type(password).should('have.value', password);
  cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
  cy.wait(500)
  cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary').click();
})

//LOGIN USER IN DEMOBLAZE
Cypress.Commands.add("loginDemoBlaze", (userName, password) => {
  cy.get('#login2').click();
  cy.get('#loginusername').type(userName).should('have.value', userName);
  cy.wait(500);
  cy.get('#loginpassword').type(password).should('have.value', password);
  cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
})

// INSERT INFORMATIONS IN DEMOBLAZE
Cypress.Commands.add("insertDemoBlazeForm", (name, country, city, card, month, year) => {
  cy.get('#name').type(name).should('have.value', name);
  cy.get('#country').type(country).should('have.value', country);
  cy.get('#city').type(city).should('have.value', city);
  cy.get('#card').type(card).should('have.value', card);
  cy.get('#month').type(month).should('have.value', month);
  cy.get('#year').type(year).should('have.value', year);
  cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').should('contain.text', 'Purchase').should('be.visible').click();
})

