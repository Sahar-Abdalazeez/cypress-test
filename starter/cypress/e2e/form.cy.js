describe("forms validation tests", () => {
    beforeEach(() => {
        cy.visit("http://localhost:1234");
        cy.get("#cardSetPage").click();
        cy.get(".cardPageContainer").should("exist").and("be.visible");
        cy.get('[data-cy="toggle_form"]').click();
        cy.get('[data-cy="set_form"]').should("exist");
    });

    it("shows error when trying to submit an empty Create Set form", () => {
        cy.get('input[type="submit"]').click();
        cy.get("#titleInput").should("have.value", "");
        cy.get(".error").should("exist");
        cy.wait(5000); // Optional for debug
    });

    it("submits the Create Set form with valid input", () => {
        cy.get("#titleInput").clear().type("Fullstack");
        cy.get('input[type="submit"]').click();
        cy.contains("Fullstack").should("exist");
        cy.wait(2000); // Optional for debug
    });
});
