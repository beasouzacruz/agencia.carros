import { ConcessionariaService } from './ConcessionariaService';

describe('Serviço ConcessionariaService', () => {

    let mockRepository: any;
    let concessionariaService: ConcessionariaService;

    beforeEach(() => {

        mockRepository = {
            salvar: jest.fn(),
            listarTodos: jest.fn(),
            buscarPorId: jest.fn(),
            atualizar: jest.fn(),
            excluir: jest.fn()
        };

        concessionariaService = new ConcessionariaService(mockRepository);
    });

    describe('Testando validações do método cadastrar', () => {

        it('deve lançar erro se o nome tiver menos de 2 caracteres', async () => {

            await expect(
                concessionariaService.cadastrar('A', '123456789', 'São Paulo')
            ).rejects.toThrow(
                'O nome deve ter no mínimo 2 caracteres'
            );

            await expect(
                concessionariaService.cadastrar('', '123456789', 'São Paulo')
            ).rejects.toThrow(
                'O nome deve ter no mínimo 2 caracteres'
            );

        });

        it('deve lançar erro se o CNPJ não for informado', async () => {

            await expect(
                concessionariaService.cadastrar(
                    'Honda',
                    '',
                    'São Paulo'
                )
            ).rejects.toThrow(
                'O CNPJ é obrigatório!'
            );

        });

        it('deve lançar erro se a cidade não for informada', async () => {

            await expect(
                concessionariaService.cadastrar(
                    'Honda',
                    '123456789',
                    ''
                )
            ).rejects.toThrow(
                'A cidade é obrigatória!'
            );

        });

    });

    describe('Testando validações do método buscarPorId', () => {

        it('deve lançar erro se a concessionária não existir no banco', async () => {

            mockRepository.buscarPorId.mockResolvedValue(null);

            await expect(
                concessionariaService.buscarPorId(999)
            ).rejects.toThrow(
                'Concessionária não encontrada.'
            );

        });

    });

    describe('Testando validações do método atualizar', () => {

        it('deve lançar erro se o ID não for informado', async () => {

            await expect(
                concessionariaService.atualizar(
                    null,
                    'Honda',
                    '123456789',
                    'São Paulo'
                )
            ).rejects.toThrow(
                'Id é obrigatória para atualização.'
            );

        });

        it('deve lançar erro se algum dado obrigatório não for informado', async () => {

            await expect(
                concessionariaService.atualizar(
                    1,
                    '',
                    '123456789',
                    'São Paulo'
                )
            ).rejects.toThrow(
                'Nome, CNPJ e cidade são obrigatórios.'
            );

        });

    });

    describe('Testando validações do método excluir', () => {

        it('deve lançar erro se a concessionária não existir', async () => {

            mockRepository.buscarPorId.mockResolvedValue(null);

            await expect(
                concessionariaService.excluir(999)
            ).rejects.toThrow(
                'Concessionária não encontrada.'
            );

        });

    });

});