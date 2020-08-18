
const rotaBase = 'http://localhost:8080/api';

export function rotaFindAll(rota: string, page: number) {
    return rotaBase+'/'+rota+'/list?page='+ page;
}

export function rotaFindAllFilter(rota: string, page: number) {
    return rotaBase+'/'+rota+'/list/filter?page='+ page;
}

