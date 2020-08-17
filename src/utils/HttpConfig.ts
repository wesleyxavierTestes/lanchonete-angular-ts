
const rotaBase = 'http://localhost:8080/api';

export function rotaConfig(rota: string, page: number) {
    return rotaBase+'/'+rota+'/list?page='+ page;
}

