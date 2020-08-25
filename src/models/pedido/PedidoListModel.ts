
export class PedidoListModel {

    public long id;
    public boolean ativo;

    public List<PedidoItemModel> pedidoitens;

    public String codigo;

    public String valor;
    public String valorDesconto;
    public String valorTotal;
    public ClienteDefaultModel cliente;

    public EnumEstadoPedido estado;
    
    public boolean cancelado;
    public String dataCancelado;
}
