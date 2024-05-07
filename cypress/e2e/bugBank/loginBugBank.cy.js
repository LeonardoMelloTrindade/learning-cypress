describe('My first spec, BugBank', () => {
  let email = 'test@example.com';
  let name = 'Leonardo Mello';
  let password = '123456';
  beforeEach(() => {
    cy.visit('https://bugbank.netlify.app/');
    cy.registerBugBank(email, name, password);
    cy.loginBugBank(email, password);
  });
  it('clicar no botao transferencia', () => {
    cy.get('#btn-TRANSFERÊNCIA').click();
});
})