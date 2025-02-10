describe('testes para agenda de contatos',() => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('deve renderizar a agenda corretamente', () => {
        cy.get('input').should('have.length', 3)
    })

    it('deve adicionar um novo contato', () => {
        cy.get('input[type="text"]').type('Nome teste')
        cy.get('input[type="email"]').type('Nometeste@gmail.com')
        cy.get('input[type="tel"]').type('51 12345678')
        cy.get('button[type="submit"]').click()

        cy.contains('Nome teste').should('exist')
        cy.contains('Nometeste@gmail.com').should('exist')
    })

    it('deve editar o contato existente', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .edit').click()
        cy.get('input[type="text"]').type('editouNome')
        cy.get('.alterar').click()

        cy.contains('editouNome').should('exist')
    })

    it('deve apagar o contato criado anteriormente', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .delete').click()

        cy.contains('Nome testeeditouNome').should('not.exist')
    })
})