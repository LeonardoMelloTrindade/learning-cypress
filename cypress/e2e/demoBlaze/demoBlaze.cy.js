describe("Buying in demoblaze", () => {
  let nameUser = 'Leozin'
  let passwordUser = '123456'

  before(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit("https://www.demoblaze.com/");
  });

  // it("should to register on Demoblaze", () => {
  //   cy.registerDemoBlaze(nameUser, passwordUser);
  // });

  it("should to login on Demoblaze", () => {
    cy.loginDemoBlaze(nameUser, passwordUser);
    cy.wait(1000);
  });

  it('Should add Iphone 6 32gb in cart', () => { //ADD FUCNTION DE ADIOCCIONAR ITEM
    cy.get(':nth-child(5) > .card > .card-block > .card-title > .hrefch').click();
    cy.get('.col-sm-12 > .btn').click();
    cy.get('#nava').click();
  })

  it('Should add Sony Vayo i7 in cart', () => {
    cy.get(':nth-child(9) > .card > .card-block > .card-title > .hrefch').click();
    cy.get('.col-sm-12 > .btn').click();
    cy.get('#nava').click();
    cy.get(':nth-child(4) > .nav-link').click();
    cy.get('#nava').click();
    cy.wait(1000)
  })

  it('Should go to next pagination and add Monitor ASUS Full HD in cart', () => {
    cy.get('#next2').click();
    cy.wait(1000)
    cy.get(':nth-child(5) > .card > .card-block > .card-title > .hrefch').should('contain', 'ASUS Full HD').click();
    cy.get('.col-sm-12 > .btn').click();
    cy.get(':nth-child(4) > .nav-link').should('contain.text', 'Cart').click();
  })

  it('Should verify if the total in cart is 1810', () => {
    cy.wait(1500)
    let predictTotalValueCart = 1810;
    cy.get('#totalp').invoke('text').as('totalContainerValueCart').then(totalContainerValueCart => {
      if (predictTotalValueCart == totalContainerValueCart) {
        cy.get('.col-lg-1 > .btn').should('contain.text', 'Place Order').click();
        cy.wait(1000)
        cy.insertDemoBlazeForm('Leonardo Mello', 'United States', 'Los Angeles', '1234567890123456', '12', '2024')
      } else {
        cy.get('#nava').click();
      }
    });
  });
});
