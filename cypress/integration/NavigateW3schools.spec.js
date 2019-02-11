describe('sample',()=>{
    it("signup with value", () => {
     cy.visit('https://www.w3schools.com/w3css/')
     cy.get('.w3-bar > [href="/sql/default.asp"]').click()
    })
})