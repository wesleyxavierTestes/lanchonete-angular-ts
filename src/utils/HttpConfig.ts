
const rotaBase = 'http://localhost:8080/api';

export function rotaConfig(rota: string) {
    return rotaBase+'/'+rota+'/list?page=1';
}

