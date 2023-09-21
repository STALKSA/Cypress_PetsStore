describe("Operations about user", () => {
    const id = 1;
    const username = "user1";
    const firstName = "Pavel";
    const lastName = "Martinov";
    const email = "Martin123@mail.ru";
    const password = "123";
    const phone = "+7 900 345 23 22";
    


    it("Add user", () => {
        cy.createUser(id, username, firstName, lastName, email, password, phone);
    });

    it("Change user", () => {
        cy.createUser(id, username, firstName, lastName, email, password, phone);
        cy.request({
            url: `/v2/user/${username}`,
            method: "PUT",
            body: {
              id: 1,
              username: "username",
              firstName: "firstName",
              lastName: "lastName",
              email: "email",
              password: "password",
              phone: "phone",
              userStatus: 0,
            },
          }).then((response) => {
            expect(response.status).to.be.eql(200);        
          });

    });

    it("Delete user", () => {
        cy.createUser(id, username, firstName, lastName, email, password, phone);
        cy.request({
            url: `/v2/user/${username}`,
            method: "DELETE"
        }).then((response) => {
            expect(response.status).to.be.eql(200);        
          });
    });
})