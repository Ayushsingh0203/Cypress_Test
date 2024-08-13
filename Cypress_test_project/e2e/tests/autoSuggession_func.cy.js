///<reference types ="cypress"/>
///<references types ="cypress-xpath" />

describe('verify the auto search suggesstion functionality',()=>{

    it('verify auto search',()=>{
        cy.visit('https://www.flipkart.com/');
        cy.get('.Pke_EE').type('iphone').then(function(el){
            cy.get('_1sFryS _2x2Mmc _3ofZy1').children().each(function(el){
                cy.wrap(el).invoke('text').then(function(txt){
                    cy.log(txt)
                    if(txt.trim()=="iphone 12"){
                        cy.wrap(el).click({force:true});
                    }
                })

            });

        });

    });


});
