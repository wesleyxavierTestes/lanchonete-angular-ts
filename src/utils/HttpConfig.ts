
const rotaBase = (() => {
    const ehSg = false;

    const ip = ehSg ? "192.168.1.31" : "192.168.1.11";
    const port = ehSg ? "8080" : "7071";

    return `http://${ip}:${port}/api`;
})();

export function rotaFindAll(rota: string, page: number) {
    return rotaBase + '/' + rota + '/list?page=' + page;
}

export function rotaFindAllNome(rota: string, page: number, nome: string) {
    return rotaBase + '/' + rota + '/list/nome?page=' + page +'&nome='+nome;
}


export function rotaFindAllFilter(rota: string, page: number) {
    return rotaBase + '/' + rota + '/list/filter?page=' + page;
}

export function rotaActive(rota: string, id: number) {
    return rotaBase + '/' + rota + '/active?id=' + id;
}

export function rotaDesactive(rota: string, id: number) {
    return rotaBase + '/' + rota + '/desactive?id=' + id;
}

export function rotaFind(rota: string, id: string) {
    return rotaBase + '/' + rota + '/find?id=' + id;
}

export function rotaNovo(rota: string) {
    return rotaBase + '/' + rota + '/novo';
}

export function rotaSave(rota: string) {
    return rotaBase + '/' + rota + '/save';
}

export function rotaUpdate(rota: string) {
    return rotaBase + '/' + rota + '/update';
}
