import { Concessionaria } from './Concessionaria';

describe('Modelo Concessionaria', () => {
    it('deve criar uma concessionaria corretamente com nome, cnpj e cidade', () => {
        const nomeDaConcessionaria = 'Concessionaria ABC';
        const cnpjDaConcessionaria = '12.345.678/0001-90';
        const cidadeDaConcessionaria = 'São Paulo';

        const concessionaria = new Concessionaria(
            nomeDaConcessionaria,
            cnpjDaConcessionaria,
            cidadeDaConcessionaria
        );

        expect(concessionaria.nome).toBe('Concessionaria ABC');
        expect(concessionaria.cnpj).toBe('12.345.678/0001-90');
        expect(concessionaria.cidade).toBe('São Paulo');
        expect(concessionaria.id).toBeNull();
    });
});