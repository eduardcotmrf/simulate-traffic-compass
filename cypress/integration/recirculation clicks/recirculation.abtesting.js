
function clickOnRanndomLink (numRepetitions, ratio) {
  for(let i = 0; i< numRepetitions; i++) {
    cy.visit('https://newsofcthulhu.com')

    cy.get('[data-mrf-recirculation=sidebar-with-image] a').its('length').then(elementCount => {
        let selected = Cypress._.random(elementCount - 1); // lower = 0 is default

        const anchor = cy.get('[data-mrf-recirculation=sidebar-with-image] a').eq(selected).scrollIntoView();

        if(Math.random(0,1) < ratio) {
          anchor.click();
        }
    });
  }
};

const cases = [{ n: 3, r: 0.3}]

describe('example reciruclation with ab testing', () => {

  before(() => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  })

  it('click on random link with ab testing', () => {
    cases.forEach(({n, r}) => {
      cy.clearLocalStorage()
      cy.clearCookies()

      clickOnRanndomLink(n, r);
    })
  })
})
