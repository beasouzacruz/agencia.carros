'use client';

import { useState, useCallback } from 'react';
import api from '../lib/api';
import { Concessionaria } from '@/app/types/Concessionaria';
import Swal from 'sweetalert2';

export function useConcessionarias(){
    const [concessionarias, setConcessionarias] = useState<Concessionaria[]>([]);
    const [loading, setLoading] = useState(false);

    const extrairErro = (error: any, mensagemPadrao: string) => {
        const data = error.response?.data;

        if (data) {
            if (data.erro) return String(data.erro);
            if (data.message) return String(data.message);
            if (data.error) return String(data.error);
        }

        return error.message || mensagemPadrao;
    };

    const listarConcessionarias = useCallback(async () => {
        setLoading(true);

        try {
            const resposta = await api.get('/concessionaria');
            setConcessionarias(resposta.data);
        } catch (error: any) {
            Swal.fire(
                'Erro!',
                extrairErro(error, "Erro ao buscar Concessionárias"),
                'error'
            );
        } finally {
            setLoading(false);
        }
    }, []);

    const excluir = async (id: number) => {
        const confirmacao = await Swal.fire({
            title: 'Excluir concessionária?',
            text: "Esta ação não poderá ser desfeita!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#ef4444',
            cancelButtonColor: '#9ca3af',
            confirmButtonText: 'Sim, excluir!',
            cancelButtonText: 'Cancelar'
        });

        if (confirmacao.isConfirmed) {
            try {
                await api.delete(`/concessionaria/${id}`);

                Swal.fire(
                    'Excluída!',
                    'A concessionária foi removida.',
                    'success'
                );

                listarConcessionarias();

            } catch (error: any) {
                Swal.fire(
                    'Erro!',
                    extrairErro(error, "Erro ao excluir"),
                    'error'
                );
            }
        }
    };

    return {
        concessionarias,
        loading,
        listarConcessionarias,
        excluir
    };
}