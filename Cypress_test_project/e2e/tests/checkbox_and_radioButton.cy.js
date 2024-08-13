///<reference types ="cypress"/>
///<references types ="cypress-xpath" />

describe('To Automate the Checkboxes and Radio button',()=>{


    it('verify checkboxes and radio button functionality',()=>{
        cy.visit('https://the-internet.herokuapp.com/checkboxes');
        cy.get('#checkboxes > :nth-child(1)').check();
        cy.get('#checkboxes > :nth-child(3)').uncheck();




    });

});