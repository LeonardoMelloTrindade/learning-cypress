describe('My first spec, BugBank', () => {
  before(() => {
      cy.visit('https://bugbank.netlify.app/');
    }
)

  it('Should write the email in the login and password field.', () => {
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default')
    .type('teste@gmail.com')
    .should('have.value', 'teste@gmail.com')

    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default')
    .type('123456')
    .should('have.value', '123456')

    cy.wait(1000);
    cy.get('.otUnI').click();
    cy.url().should('eq', 'https://bugbank.netlify.app/');
    
  })

})