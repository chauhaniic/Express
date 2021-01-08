let chai = require("chai");
let chaiHttp=require("chai-http");
chai.use(require('chai-json'));
var like = require('chai-like');
chai.use(like);
//chai.use(require('chai-json-schema'));
let server =require("../app");

//Assertin Style

chai.should();

chai.use(chaiHttp);

describe('Task API',()=>{
    /* 
    * Test the GET route 
    */

   describe("GET /tasks", () => {
        it("It should GET all the tasks", (done) => {
            chai.request(server)
                .get("/tasks")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                    //response.body.length.should.equal(1);
                done();
                });
        });
        it("It should NOT GET all the tasks", (done) => {
            chai.request(server)
                .get("tasks")
                .end((err, response) => {
                    response.should.have.status(403);
                done();
                });
        });
        it("Wrong URL", (done) => {
            chai.request(server)
                .get("/error")
                .end((err, response) => {
                    response.should.have.status(404);
                done();
                });
        });



    });


    /* 
    * Test the GET by id route 
    */
   describe("GET /tasks/:id", () => {
    it("It should GET the tasks by ID", (done) => {
        const id=5;
        chai.request(server)
            .get("/tasks/"+id)
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a('array');
            done();
            });
    });

});

    /* 
    * Test the POST route 
    */
   describe("POST tasks", () => {
        it("It should POST a new task", (done) => {
            const task = {
                Id:"2",
                Title: "Task 4",
                Status: "pending"
            };
            chai.request(server)                
                .post("/tasks")
                .send(task)
                .end((err, response) => {
                    response.should.have.status(200);
                    
                done();
                });
        });


    });


    /* 
    * Test the Delete route 
    */
   describe("DELETE /tasks/:id", () => {
        it("It should DELETE an existing task", (done) => {
            const taskId = 5;
            chai.request(server)                
                .delete("/tasks/" + taskId)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.like({
                        "affectedRows":0,

                    })
                done();
                });
        });

        it("It should NOT DELETE a task that is not in the database", (done) => {
            const taskId = 145;
            chai.request(server)                
                .delete("/tasks/" + taskId)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.like({
                        "affectedRows":0
                    });
                done();
                });
        });

    });


    /* 
    * Test the Update/PUT route 
    */
   describe("PUT /tasks/:id", () => {
        it("It should PUT an existing task", (done) => {
            const taskId = 1;
            const task = {
                Title: "Task 1 changed",
                Status: true
            };
            chai.request(server)                
                .put("/tasks/" + taskId)
                .send(task)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.like({
                        "affectedRows":1
                    });
                done();
                });
        });

        it("It should NOT PUT an existing task with a name with less than 3 characters", (done) => {
            const taskId = 10;
            const task = {
                Title: "Ta",
                Status: "true"
            };
            chai.request(server)                
                .put("/tasks/" + taskId)
                .send(task)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.like({
                        "affectedRows":0
                    });
                done();
                });
        });        
    });



});
