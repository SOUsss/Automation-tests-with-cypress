describe('signup',()=>{
  it('login with values', () => {
    cy.visit("https://www.browserstack.com/users/sign_up")
  })
    it('Test login with values', () => {
    cy.get('#user_email_login').type('Fra79k@gmail.com');
    cy.get('#user_password').type('TestP5Bswo3rd');
    cy.get('#user_full_name').type('Test Test');
    cy.get('#user_group_attributes_name').type('432235 ');
    cy.get('p > input').click();
    cy.get('[style="width: 304px; height: 78px;"] > div > iframe').click();
    cy.get('#user_submit').click()
    //.should("https://accounts.browserstack.com/confirmation?code=")
      
  })

})