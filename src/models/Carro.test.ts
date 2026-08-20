import { Carro } from './Carro';

describe('Modelo Carro', () => {
    it('deve criar um carro corretamente com nome e tipo', () => {
        const nomeDoCarro = 'fusca';
        const tipoDoCarro = 'sedan';

        const carro = new Carro (nomeDoCarro, tipoDoCarro);

        expect(carro.nome).toBe('fusca');
        expect(carro.tipo).toBe('sedan');
        expect(carro.id).toBeNull();
    });
});