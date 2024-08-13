///<reference types ="cypress"/>
///<references types ="cypress-xpath" />

describe('To Automate the dropdown menu',()=>{

    it('verify dropdown functionality',()=>{
        cy.visit('https://the-internet.herokuapp.com/dropdown');
        cy.get('h3').should('exist').should('have.text','Dropdown List');
        cy.get('#dropdown').select('Option 2')

    });

});