describe('My message board', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });
  it('should allow to post a message to the board as a user', () => {
    cy.get('[data-testId="test"]').should('exist');
  });

  it('should display all messages', () => {
    cy.get('[data-testId="messages"]').should('exists');
  });

  it('should be able to navigate/toggle between the posting a new message view and the the board view with all messages', () => {});
});
