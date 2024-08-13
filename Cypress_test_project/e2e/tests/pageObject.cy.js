///<reference types ="cypress"/>

export default class pageObject{
    lc = ':nth-child(6) > a';

    visit_site(){
        cy.visit('https://the-internet.herokuapp.com/')
    }

    dummymethod(){
        cy.get(this.lc, {timeout:10000}).should('be.visible').click();
    }
}