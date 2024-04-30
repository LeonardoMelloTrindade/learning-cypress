describe('My first spec, BugBank', () => {
  beforeEach(() => {
    cy.visit('https://bugbank.netlify.app/');
    cy.registerBugBank('teste@teste.com', 'Nome Teste', '123456');
    cy.loginBugBank();
  });
  it('clicar no botao transferencia', () => {
    cy.get('#btn-TRANSFERÊNCIA').click();
});
})