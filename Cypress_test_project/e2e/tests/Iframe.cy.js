///<reference types ="cypress"/>
///<references types ="cypress-xpath" />

describe('To Automate the iFrame',()=>{

    it('verify the iframe',()=>{
    cy.visit('https://jqueryui.com/checkboxradio/');
    cy.get('.demo-frame').then(el=>{
        cy.wrap(el.contents().find('body')).as('iframe')
        cy.get('@iframe').find('.ui-checkboxradio-icon.ui-corner-all.ui-icon.ui-icon-background.ui-icon-blank').eq(0).click();



    });





});
});

