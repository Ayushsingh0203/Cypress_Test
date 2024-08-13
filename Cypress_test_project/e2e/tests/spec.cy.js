 ///<reference types ="cypress"/>
///<references types ="cypress-xpath" />

 describe('to check the google functionality',()=>{
  it('verify user is able to open google.com',()=>{
      cy.visit("www.google.com");
  });

  it('Verify google search text is present or not',()=>{
    cy.get('.FPdoLc > center > .gNO89b').should('exist');
  });
  
  it('verify google search field is present or not',()=>{
    //cy.get('#APjFqb').should('exist');
    cy.xpath('//textarea[@class="gLFyf"]').should('exist');
  });
  
  it('Verify user is able to type something',()=>{
    cy.get('#APjFqb').type('cypress');
  });

  it('verify user is able to click button or not',()=>{
    cy.get('[value="Google Search"]').eq(0).click({force:true});
  });
});




