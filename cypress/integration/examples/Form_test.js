describe("App", () => {
beforeEach(() => {
cy.visit("http://localhost:1234");
});

const textInput = () => cy.get('input[name="text"]');
const emailInput = () => cy.get('input[email="text]');
const passwordInput = () => cy.get('input[password="text"]');
const submitButton = () => cy.get('button[id="submitButton"]');
it("sanity test goes here", () => {
    expect(1 + 2).to.equal(3);
});

it("the name text input is working", () => {
textInput().should("exist");
emailInput().should("exist");
passwordInput().should("exist");
submitButton().should("exist");
});
});