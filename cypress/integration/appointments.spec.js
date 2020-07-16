const { CYCLIC_KEY } = require("@storybook/addon-actions/dist/constants")

describe("Appointments", () => {
  beforeEach(() => {
    cy.request("GET", "/api/debug/reset");
  
    cy.visit("/")
      .contains("Monday");

   });

  it("should book an interview", () => {
    cy.get("[alt=Add]")
      .first()
      .click();

    cy.get("[data-testid=student-name-input]")
      .type("Lydia Miller-Jones")
      .get("[alt='Sylvia Palmer']")
      .click();

    cy.contains("Save")
      .click();

    cy.contains(".appointment__card--show", "Lydia Miller-Jones")
      .contains(".appointment__card--show", "Sylvia Palmer");
  });

  it("should edit an interview", () => {
    cy.get("[alt=Edit]")
      .first()
      .click({ force: true });

    cy.get("[data-testid=student-name-input]")
    .clear()
    .type("Lydia")
    .get("[alt='Tori Malcolm']")
    .click();

  cy.contains("Save")
    .click();

  cy.contains(".appointment__card--show", "Lydia")
    .contains(".appointment__card--show", "Tori Malcolm");

  })
});