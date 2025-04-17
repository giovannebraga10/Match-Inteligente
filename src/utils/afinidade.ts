import { User } from '../types/IUser';
import { Filtro } from '../types/IFiltro';

export const calcularAfinidade = (user: User, filtro: Filtro) => {
  let afinidade = 0;
  if (user.nome.toLowerCase().includes(filtro.nome.toLowerCase())) afinidade += 30;
  if (user.areaInteresse.toLowerCase() === filtro.area.toLowerCase()) afinidade += 30;
  if (user.localizacao.toLowerCase() === filtro.localizacao.toLowerCase()) afinidade += 40;
  return afinidade;
};
