import { CarroService } from './CarroService';

describe('Serviço CarroService', () => {

    let mockRepository: any;
    let carroService: CarroService;

    beforeEach(() => {

        mockRepository = {
            salvar: jest.fn(),
            listarTodos: jest.fn(),
            buscarPorId: jest.fn(),
            atualizar: jest.fn(),
            excluir: jest.fn()
        };

        carroService = new CarroService(mockRepository);
    });

    describe('Testando validações do método cadastrar', () => {

        it('deve lançar erro se o nome tiver menos de 2 caracteres', async () => {

            await expect(
                carroService.cadastrar('A', 'SUV')
            ).rejects.toThrow('O nome deve ter no mínimo 2 caracteres.');

            await expect(
                carroService.cadastrar('', 'SUV')
            ).rejects.toThrow('O nome deve ter no mínimo 2 caracteres.');

        });

        it('deve lançar erro se o tipo não for informado', async () => {

            await expect(
                carroService.cadastrar('Honda Civic', '')
            ).rejects.toThrow('O tipo deve ser informado.');

        });

    });

    describe('Testando validações do método buscarPorId', () => {

        it('deve lançar erro se o carro não existir no banco', async () => {

            mockRepository.buscarPorId.mockResolvedValue(null);

            await expect(
                carroService.buscarPorId(999)
            ).rejects.toThrow('Veículo não encontrado');

        });

    });

});