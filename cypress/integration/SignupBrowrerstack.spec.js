describe('signup',()=>{
  it('signup without captcha', () => {
    cy.visit("https://www.browserstack.com/users/sign_up")
  })
    it('signup without captcha', () => {
    cy.get('#user_email_login').type('Fra79k@gmail.com');
    cy.get('#user_password').type('TestP5Bswo3rd');
    cy.get('#user_full_name').type('Test Test');
    cy.get('#user_group_attributes_name').type('432235 ');
    cy.get('p > input').click();
    cy.get('#user_submit').click()
    cy.get('.g-recaptcha').should('have.text','Captcha validation is required.')
      
  })

})