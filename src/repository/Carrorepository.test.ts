import { CarroRepository } from './CarroRepository';

import { Carro } from '../models/Carro';

import prisma from '../lib/prisma';

jest.mock('../lib/prisma', () => ({

    __esModule: true,

    default: {

        carro: {

            create: jest.fn(),

            findMany: jest.fn(),

            findUnique: jest.fn(),

            update: jest.fn(),

            delete: jest.fn(),

        }

    }

}));

describe('Repositório CarroRepository', () => {

    let repository: CarroRepository;

    beforeEach(() => {

        repository = new CarroRepository();

        jest.clearAllMocks();

    });

    describe('Método salvar', () => {

        it('deve chamar o prisma.carro.create com os dados corretos', async () => {

            const novoCarro = new Carro('Civic', 'Sedan');

            const retornoDoBanco = {
                id: 1,
                nome: 'Civic',
                tipo: 'Sedan'
            };

            (prisma.carro.create as jest.Mock).mockResolvedValue(retornoDoBanco);

            const resultado = await repository.salvar(novoCarro);

            expect(prisma.carro.create).toHaveBeenCalledTimes(1);

            expect(prisma.carro.create).toHaveBeenCalledWith({
                data: {
                    nome: 'Civic',
                    tipo: 'Sedan'
                }
            });

            expect(resultado).toEqual(retornoDoBanco);

        });

    });

    describe('Método buscarPorId', () => {

        it('deve retornar uma nova instancia de Carro se encontrar no banco', async () => {

            const carroNoBanco = {
                id: 10,
                nome: 'Gol',
                tipo: 'Hatch'
            };

            (prisma.carro.findUnique as jest.Mock).mockResolvedValue(carroNoBanco);

            const resultado = await repository.buscarPorId(10);

            expect(prisma.carro.findUnique).toHaveBeenCalledWith({
                where: {
                    id: 10
                }
            });

            expect(resultado).toBeInstanceOf(Carro);

            expect(resultado?.nome).toBe('Gol');

        });

        it('deve retornar null se o carro nao for encontrado', async () => {

            (prisma.carro.findUnique as jest.Mock).mockResolvedValue(null);

            const resultado = await repository.buscarPorId(99);

            expect(resultado).toBeNull();

        });

    });

});