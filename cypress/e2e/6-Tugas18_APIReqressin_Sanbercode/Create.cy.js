/// <reference types="cypress"/>

const headers = { 'x-api-key': 'reqres-free-v1' }

describe('API tesing Reqressin', () => {
    it('POST API create tesing', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            headers: headers,
            failOnStatusCode: false,
            body: {
                name: 'morpheus',
                job: 'leader',
            }
        })
        .then((response) => {
            expect(response.body).to.have.property('name', 'morpheus')
            expect(response.body).to.have.property('job', 'leader')
            expect(response.body).to.have.property('id') // generated secara dinamis
            expect(response.body).to.have.property('createdAt')
            expect(response.status).to.eq(201)
            expect(response.body).to.not.be.null
        })
    })
})