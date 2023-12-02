describe('My message board', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });
  it('should allow to post a message to the board as a user', () => {
    cy.get('[data-test-id="messages-array"]').should('exist');

    cy.get('[data-test-id="messages-array"]')
      .find('div')
      .should('have.length', 2);

    cy.get('button').click();

    cy.get('textarea').type('testing');
    cy.get('input').type('testUser');

    cy.get('button').click();

    cy.get('[data-test-id="messages-array"]')
      .find('div')
      .should('have.length', 3);
  });

  it('should display 2 messages by default ', () => {
    cy.get('[data-test-id="messages-array"]').should('exist');

    cy.get('[data-test-id="messages-array"]')
      .find('div')
      .should('have.length', 2);

    cy.get('[data-test-id="messages-array"]').find('p').contains('@robin');

    // cy.get('[data-testId="messages"]').should('exists');
  });

  it('should be able to navigate/toggle between the posting a new message view and the the board view with all messages', () => {
    cy.get('button').click();
    cy.get('header').click();

    cy.get('button').click();
    cy.get('header').click();
  });
});
