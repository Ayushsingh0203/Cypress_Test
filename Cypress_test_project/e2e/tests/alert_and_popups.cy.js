///<reference types ="cypress"/>
///<references types ="cypress-xpath" />

describe('To Automate the alert and popups',()=>{


    it('verify JS alert and popups functionality',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

//First Alert
//         cy.get(':nth-child(1) > button').click();
//         cy.on('window:alert', (str)=>{
//             expect(str).equal('I am a JS Alert');
//         });

//         cy.get('#result').should('have.text','You successfully clicked an alert');


//Second Alert
// cy.contains('Click for JS Confirm').click();
// cy.on('window:confirm',()=>false);
// cy.get('#result').should('have.text','You clicked: Cancel');

//Third Alert
cy.window().then(($win)=>{
    cy.stub($win, 'prompt').returns("This is a sample text");
    cy.contains ('Click for JS Prompt').click();
    cy.get('#result').should('have.text','You entered: This is a sample text');
})



    });









});
