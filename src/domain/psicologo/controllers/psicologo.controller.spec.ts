import supertest from "supertest";
import app from "../../../";

describe("No controller, ao executar função", () => {
  describe("create", () => {
    test("em caso de sucesso, deve retornar 201", async () => {
      const response = await supertest(app).post("/psicologos").send({
        nome: "alo",
        email: "nataliiaaaaaa4423421342344@gmail.com",
        senha: "123",
        apresentacao: "bla bla bla",
        cep: "01001000",
      });
      expect(response.status).toBe(201);
    });
  });
});
