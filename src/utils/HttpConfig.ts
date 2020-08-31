
const rotaBaseApi = `${base()}/api`;

const rotaBase = `${base()}`;

function base() {
    const ehSg = false;

    const ip = ehSg ? "192.168.1.31" : "192.168.1.11";
    const port = ehSg ? "8080" : "7071";

    return `http://${ip}:${port}`;
}

export function rotaLogin() {
    return rotaBase + '/login';
}

export function rotaFindAll(rota: string, page: number) {
    return rotaBaseApi + '/' + rota + '/list?page=' + page;
}

export function rotaFindAllNome(rota: string, page: number, nome: string) {
    return rotaBaseApi + '/' + rota + '/list/nome?page=' + page + '&nome=' + nome;
}


export function rotaFindAllFilter(rota: string, page: number) {
    return rotaBaseApi + '/' + rota + '/list/filter?page=' + page;
}

export function rotaActive(rota: string, id: number) {
    return rotaBaseApi + '/' + rota + '/active?id=' + id;
}

export function rotaDesactive(rota: string, id: number) {
    return rotaBaseApi + '/' + rota + '/desactive?id=' + id;
}

export function rotaFind(rota: string, id: string) {
    return rotaBaseApi + '/' + rota + '/find?id=' + id;
}

export function rotaNovo(rota: string) {
    return rotaBaseApi + '/' + rota + '/novo';
}

export function rotaSave(rota: string) {
    return rotaBaseApi + '/' + rota + '/save';
}

export function rotaUpdate(rota: string) {
    return rotaBaseApi + '/' + rota + '/update';
}

export function rotaSaveTipo(rota: string, tipo?: string) {
    if (!tipo) tipo = "";
    return rotaBaseApi + '/' + rota + '/save/' + tipo;
}

export function rotaUpdateTipo(rota: string, tipo?: string) {
    if (!tipo) tipo = "";
    return rotaBaseApi + '/' + rota + '/update/' + tipo;
}