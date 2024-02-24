describe("PHPTravels", () => {
  before(() => {
    cy.visit("https://phptravels.com/");
  });

  it("Trying enjoy the Hotels Modules", () => {
    cy.get(".navbar-toggler").click();
    cy.get(".navbar-nav > :nth-child(5) > .nav-link")
      .contains("Features")
      .click();
    cy.get(":nth-child(5) > .dropdown-menu > :nth-child(4) > .dropdown-item")
      .contains("Hotels Modules")
      .click();
    cy.url().should("eq", "https://phptravels.com/hotels-module-features");
    cy.get(
      ":nth-child(1) > .container > .row > :nth-child(2) > .btn-lg"
    ).click();
    cy.wait(500);
    cy.get(".first_name").type("Leonardo").should("have.value", "Leonardo");
    cy.get(".last_name").type("Trindade").should("have.value", "Trindade");
    cy.get(".business_name")
      .type("Leopple Inc.")
      .should("have.value", "Leopple Inc.");
    cy.get(".email")
      .type("teste@gmail.com")
      .should("have.value", "teste@gmail.com");

    let number1;
    let number2;

    cy.get("#numb1")
      .invoke("text")
      .then((valor) => {
        number1 = valor;

        return cy.wrap(number1);
      })
      .then(() => {
        cy.get("#numb2")
          .invoke("text")
          .then((text) => {
            number2 = text;
            cy.log("Valor do input2 dentro do bloco then:", text);
            cy.log(`n1: ${number1}`);
          });
      })
      .then(() => {
        let result = parseInt(number1) + parseInt(number2);
        cy.get("#number").type(`${result}`).should("have.value", result);
      });
    cy.get("#demo").click();
  });
});
