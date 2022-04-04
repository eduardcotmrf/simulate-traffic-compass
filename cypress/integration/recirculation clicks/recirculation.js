
function clickOnRanndomLink (numRepetitions, ratio) {
  for(let i = 0; i< numRepetitions; i++) {
    cy.visit('http://newsofcthulhu.com')

    cy.get('[data-mrf-recirculation=sidebar-with-image] a').its('length').then(elementCount => {
        let selected = Cypress._.random(elementCount - 1); // lower = 0 is default

        const anchor = cy.get('[data-mrf-recirculation=sidebar-with-image] a').eq(selected).scrollIntoView();
       anchor.then(function($elem) {

        console.log('ED: scrolling',$elem.text());
       });

        if(Math.random(0,1) < ratio) {
          console.log('ED: clicking')
          anchor.click();
        }
    });
  }
};

const cases = [{ n: 3, r: 0.3}, { n: 3, r: 0.3}, { n: 3, r: 0.3}, { n: 3, r: 0.3}, { n: 3, r: 0.3}]

describe('example to-do app', () => {

  it('click on random link', () => {
    cases.forEach(({n, r}) => {
      cy.clearLocalStorage()
      cy.clearCookies()

      clickOnRanndomLink(n, r);
    })
  })
})
