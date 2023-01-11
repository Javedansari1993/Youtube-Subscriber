const { default: axios } = require("axios");
const { expect } = require("chai");
const  chai  = require("chai");


// GET route test for all subscriber
test("GET /subscribers", async () => {
  await axios.get("http://localhost:3000/subscribers").then((response) => {
    // Check the response type and length
    expect(response.status).to.equal(200);
    console.log("respone", response.data);
    expect(Array.isArray(response.data)).to.equal(true);
    for (let i = 0; i < response.data.length; i++) {
        const element = response.data[i];
        expect(typeof element.name).to.equal("string");
      expect(typeof element.subscribedChannel).to.equal("string");
    }
  });
});

// GET route test for specifice subscriber via ids
test("GET /subscribers/:id", async () => {
  await axios
    .get("http://localhost:3000/subscribers/63bd6d26cf475a4ecc60b1de")
    .then((response) => {
      // Check the response type and length
      expect(response.status).to.equal(200);
      console.log("respone", response.data);
      expect(response.data).to.include({ name: "Jeread Krus" });
      expect(typeof response.data.name).to.equal("string");
      expect(typeof response.data.subscribedChannel).to.equal("string");
    });
});

// GET route test for all subscriber for subscribers and names
test("GET /subscribers/names", async () => {
  await axios.get("http://localhost:3000/subscribers/names").then((response) => {
    // Check the response type and length
    expect(response.status).to.equal(200);
    console.log("respone", response.data);
    expect(Array.isArray(response.data)).to.equal(true);
    for (let i = 0; i < response.data.length; i++) {
        const element = response.data[i];
        expect(typeof element.name).to.equal("string");
      expect(typeof element.subscribedChannel).to.equal("string");
    }
  });
});

// DELETE route test for specifice subscriber via ids
test("DELETE /subscribers/:id", async () => {
  await axios
    .get("http://localhost:3000/subscribers/63bd6d26cf475a4ecc60b1de")
    .then((response) => {
      // Check the response type and length
      expect(response.status).to.equal(200);
      console.log("respone", response.data);
      expect(typeof response.data.name).to.equal("string");
      expect(typeof response.data.subscribedChannel).to.equal("string");
    });
});

