describe('signup', () => {
    it('open', () => {
    cy.visit("https://www.pornhub.com/signup")
  })
    it('Signup with values', () => {
   cy.get('input[name=Email]').type("Tehv434g@gmail.com") 
   cy.get('input[name=Username (6+ charecters)]').type("FrEnK246")  
   cy.get('input[name=Password (6+ charecters)]').type("TesTtTrw")  
   cy.get("//input[@id='submit_buttom']").click()
  })  
})
     
    
    
    
    
      
      
    
        

    
