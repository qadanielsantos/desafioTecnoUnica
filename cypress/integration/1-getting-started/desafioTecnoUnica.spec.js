// <reference types="cypress"> />

describe('Busca, validaçao de item no site Magazine Luiza', () => {

      it('1 - Entrando no web site', () => {
        cy.visit('https://www.magazineluiza.com.br/');
                 }); 

      it('2 - Faça uma busca por um produto', () => {
        cy.get('[data-testid="input-search"]').type('Kit 3X1 Motorola Moto G9 Plus - Pelicula Privacidade{enter}')
      });

      it('3 - Valide o retorno da busca', () => {
        cy.get('[data-testid="list"] > :nth-child(1) > [data-testid="product-card-container"] > [data-testid="product-card-content"] > [data-testid="product-title"]').should("have.text", 'Kit 3X1 Motorola Moto G9 Plus - Pelicula Privacidade Vidro 3D + Película Camera Traseira Nano Gel 5D + Capa Anti-Impacto');
        
      });

      it('4 - Escolha um produto na lista', () => {
        cy.get(':nth-child(1) > [data-testid="product-card-container"] > [data-testid="product-card-content"] > [data-testid="product-title"]').click()
        
      });

      it('5 - Adicione o carrinho', () => {
        cy.get('.iGQNsZ > div > [data-testid="bagButton"]').click()
        
      });

      it('6 - Valide o produto no carrinho', () => {
        cy.get('.BasketItemProduct-info-title > :nth-child(1)').should("have.text", 'Kit 3X1 Motorola Moto G9 Plus - Pelicula Privacidade Vidro 3D + Película Camera Traseira Nano Gel 5D + Capa Anti-Impacto');

      });
       
  }); 