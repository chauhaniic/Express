let chai = require("chai");
let chaiHttp=require("chai-http");
var like = require('chai-like');
let fs=require("chai-fs");
chai.use(require('chai-json'));
chai.use(fs);
chai.use(like);
fs=require("fs");
//chai.use(require('chai-json-schema'));
let server =require("../app");

//Assertin Style

chai.should();

chai.use(chaiHttp);

describe('File API',()=>{
    /* 
    * Test the GET route 
    */

   describe("GET /files", () => {
        it("It should GET all the Files", (done) => {
            chai.request(server)
                .get("/files")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                    //response.body.length.should.equal(1);
                done();
                });
        });
        it("It should NOT GET all the Files", (done) => {
            chai.request(server)
                .get("files")
                .end((err, response) => {
                    response.should.have.status(403);
                done();
                });
        });



    });


    /* 
    * Test the GET by id route 
    */
   describe("GET /files/:id", () => {
    it("It should GET the files by ID", (done) => {
        const id="Jblkk2211323-HS_Marksheet.pdf";
        const path="public/files/Jblkk2211323-HS_Marksheet.pdf"
        chai.request(server)
            .get("/files/"+id)
            .end((err, response) => {
                response.should.have.status(200);
                //response.body.should.be.a('array');
                console.log('RES3',response.body)
            done();
            });
    });

});

    /* 
    * Test the POST route 
    */
   describe("POST file", () => {
        it("It should POST a file", async() => {
            file="C:/Users/Gupta/Downloads/Picture/img0777.jpg"
            chai.request(server)                
                .post("/files")
                .attach('upload',fs.readFileSync(`${__dirname}/img0777.jpg`),'files/img0777.jpg')
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.like({
                        "affectedRows":1
                    });
                //
                });
        });


    });


    /* 
    * Test the Delete route 
    */
   describe("DELETE /files/:id", () => {
        it("It should DELETE an existing file", (done) => {
            const Id = 5;
            chai.request(server)                
                .delete("/files/" + Id)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.like({
                        "affectedRows":0,

                    })
                done();
                });
        });

        it("It should NOT DELETE a file AND not in the database", (done) => {
            const Id = 145;
            chai.request(server)                
                .delete("/files/" + Id)
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
   /* describe("PUT /files/:id", () => {
        it("It should PUT an existing file", (done) => {
            const Id = "Jblkk2211323-HS_Marksheet.pdf";
            const task = {
                fileName: "File_1_changed"
            };
            chai.request(server)                
                .put("/files/" + Id)
                .send(task)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.like({
                        "affectedRows":0
                    });
                done();
                });
        });

         it("PUT File not Exist!", (done) => {
            const Id = "10";
            const file = {
                fileName: "Ta.pdf"
            };
            chai.request(server)                
                .put("/files/" + Id)
                .send(file)
                .end((err, response) => {
                    response.should.have.status(500);
                    response.body.should.like({
                        "affectedRows":0
                    });
                done();
                });
        });        
    });

 */

});
