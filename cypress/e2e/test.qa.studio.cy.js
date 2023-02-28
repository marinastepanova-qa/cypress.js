describe('Тестирование флоу покупки', function () {

    it('Флоу покупки', function () {
       cy.visit('https://test.qa.studio/');
       cy.get('.post-11342 > .product-inner > .product-summary > .woocommerce-loop-product__title > .woocommerce-LoopProduct-link').click();
       cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click();
       cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click();
       cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
       cy.get('#cart-modal > .off-modal-layer').click();
       cy.get('#menu-top > .menu-item-home > a').click();
       cy.get('.post-11337 > .product-inner > .product-summary > .woocommerce-loop-product__title > .woocommerce-LoopProduct-link').click();
       cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
       cy.get('.checkout').click();
       cy.get('#billing_first_name').type('Марина');
       cy.get('#billing_last_name').type('Степанова');
       cy.get('#billing_address_1').type('Гоголя, 18');
       cy.get('#billing_city').type('Калининград');
       cy.get('#billing_state').type('Калиинградская');
       cy.get('#billing_postcode').type('123456');
       cy.get('#billing_phone').type('79010410223');
       cy.get('#billing_email').type('moraliss.c@gmail.com');
       cy.get('#place_order').click();

       cy.contains('Ваш заказ принят. Благодарим вас.').should('be.visible')

    })


})