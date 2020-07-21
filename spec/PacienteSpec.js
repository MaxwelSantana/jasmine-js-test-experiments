describe("Paciente", function() {

    var guilherme;

    beforeEach(function() {
        guilherme = new Paciente("Guilherme", 28, 72, 1.82);
    });

    it("deve calcular o IMC", function() {
        expect(guilherme.imc()).toEqual(72 / (1.82*1.82));
    });

    it("deve calcular batimentos cardiacos", function() {
        expect(guilherme.batimentos()).toEqual(1177344000);
    });
});