describe('To understand and verify the hooks concept',()=>{

before(function(){
cy.log('before');
});

beforeEach(function(){
    cy.visit('www.google.com');
})

    it('test1',()=>{
        
        cy.log('test1');

    });

    it('test2',()=>{
        
        cy.log('test2');

    });

    it('test3',()=>{
        
        cy.log('test3');

    });

    afterEach(function(){
        cy.log('afterEach')
    });

    after(function(){
        cy.log('after')
    });
});
