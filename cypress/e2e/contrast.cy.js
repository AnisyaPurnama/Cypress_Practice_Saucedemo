describe('Contrast Advisor', () => {
  it('should show contrast issue on Applitools dashboard', () => {
    cy.eyesOpen({
      appName: 'Contrast Advisor',
      batchName: 'Contrast Advisor',
      accessibilityValidation: {
        level: 'AA',
        guidelinesVersion: 'WCAG_2_1',
      },
    });

    cy.visit('https://www.google.com/');
    cy.eyesCheckWindow();
    cy.eyesClose();
  });
});
