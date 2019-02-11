describe('signup', () => {
    it('open', () => {
    cy.visit('https://uk-ua.facebook.com/')
  })
    
   it('Signup with values', () => {
   cy.get('#u_0_j').type('Jack') 
   cy.get('#u_0_l').type('Jhonson')    
   cy.get('#u_0_o').type("Tehv434g@gmail.com")
   cy.get('#u_0_r').type("Tehv434g@gmail.com")
   cy.get('#u_0_v').type("TesT23tTrw") 
   cy.get('#u_0_a').click()
   cy.get('#u_0_11').click()
   cy.get('.layerConfirm').click()
  })
   
})   
    

     