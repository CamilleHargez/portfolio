describe('Data in DOM vs JSON', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5500')
    })

    it('Skills in DOM vs JSON', () => {
        cy.fixture('skills.json').then((skillsData) => {

            cy.get('[data-cy="skillsSection"]')
                .should('exist');

            cy.get('[data-cy="skillsCardText"]')
                .should('have.length', skillsData.length);

        });
    })

    it('Tools in DOM vs JSON', () => {
        cy.fixture('tools.json').then((toolsData) => {

            cy.get('[data-cy="toolsSection"]')
                .should('exist');

            cy.get('[data-cy="toolsImg"]')
                .should('have.length', toolsData.length * 2);

        });
    })

    it('Portfolio in DOM vs JSON', () => {
        cy.fixture('portfolio.json').then((portfolioData) => {

            cy.get('[data-cy="portfolioSection"]')
                .should('exist');

            cy.get('[data-cy="cardPortfolio"]')
                .should('have.length', portfolioData.length);

        });
    })
})