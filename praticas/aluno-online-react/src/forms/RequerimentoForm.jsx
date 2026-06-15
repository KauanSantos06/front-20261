import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export function RequerimentoForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      tipo: '',
      descricao: '',
      data: new Date().toISOString().split('T')[0]
    }
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log('Requerimento enviado com sucesso!', data);
    reset();
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Meus Requerimentos</h2>
      <h3 className="text-xl text-gray-600 mb-6">Novo Requerimento</h3>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
        <div>
          <label htmlFor="tipo" className="block text-gray-700 text-sm font-bold mb-2">
            Tipo de Requerimento
          </label>
          <select
            id="tipo"
            {...register('tipo', { required: 'Tipo é obrigatório' })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Selecione um tipo...</option>
            <option value="matricula">Declaração de Matrícula</option>
            <option value="prova">Segunda Chamada de Prova</option>
            <option value="historico">Histórico Escolar</option>
          </select>
          {errors.tipo && (
            <span className="text-red-500 text-xs italic mt-1 block">{errors.tipo.message}</span>
          )}
        </div>

        <div>
          <label htmlFor="descricao" className="block text-gray-700 text-sm font-bold mb-2">
            Descrição
          </label>
          <textarea
            id="descricao"
            rows="5"
            {...register('descricao', {
              required: 'Descrição é obrigatória',
              minLength: { value: 10, message: 'A descrição deve ter no mínimo 10 caracteres' }
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.descricao && (
            <span className="text-red-500 text-xs italic mt-1 block">{errors.descricao.message}</span>
          )}
        </div>

        <div>
          <label htmlFor="data" className="block text-gray-700 text-sm font-bold mb-2">
            Data do Requerimento
          </label>
          <input
            type="date"
            id="data"
            {...register('data')}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="flex justify-end space-x-3 pt-4">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-gray-400 text-white font-semibold rounded-md hover:bg-gray-500 transition-colors"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
          >
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
}