describe("navigation test ", () => {
    //to check if pressing "Card Set" navigates to page with card sets
    // i can see card sets page contain div with "cardPageContainer" class name
    beforeEach(() => {
        cy.visit("http://localhost:1234");
    });

    it("Clicking on 'Card Set' in the side menu navigates to the page containing the card sets", () => {
        cy.get("#cardSetPage").click();
        // Assert that the Card Sets page is now visible
        cy.get(".cardPageContainer").should("exist").and("be.visible");
    });
    //Clicking on "About" in the side menu navigates to the About page.
    it("Clicking on About in the side menu navigates to the About page", () => {
        cy.get("#aboutPage").click();
        cy.get(".aboutContainer").should("exist").and("be.visible");
    });

    // Clicking on "Home" in the side menu navigates to the Home page.
    it("Clicking on Home in the side menu navigates to the Home page", () => {
        cy.get("#homePage").click();
        cy.get(".homeContainer").should("exist").and("be.visible");
    });
});
