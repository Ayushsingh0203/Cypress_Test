///<reference types ="cypress"/>
///<references types ="cypress-xpath" />
import pageObject from "./pageObject.cy";

const pageObject_objects = new pageObject;


describe('To Check implicit and exlicit wait',function(){
    // it('wait demo',()=>{
    //     cy.visit('https://the-internet.herokuapp.com/');
    //     cy.wait(5000);
    //     cy.get(':nth-child(6) > a').click();
    // })


    it('wait demo',()=>{
        pageObject_objects.visit_site();
       // pageObject_objects.dummymethod();

       cy.api_checks('https://the-internet.herokuapp.com/');



        //cy.visit('www.yahoo.com');
        //cy.wait(5000);
        //cy.get(':nth-child(6) > a', {timeout:10000}).should('be.visible').click();
    })


});
// it('wait demo',()=>{
//     pageObject_objects.visit_site();
//     //cy.wait(5000);
//     cy.get(':nth-child(6) > a', {timeout:10000}).should('be.visible').click();
// })
// it('wait demo',()=>{
//     pageObject_objects.visit_site();
//     //cy.wait(5000);
//     cy.get(':nth-child(6) > a', {timeout:10000}).should('be.visible').click();
// })

// it('wait demo',()=>{
//     pageObject_objects.visit_site();
//     //cy.wait(5000);
//     cy.get(':nth-child(6) > a', {timeout:10000}).should('be.visible').click();
// })





