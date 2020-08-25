
export class PedidoModel  {

    public long id;
    public boolean ativo;
    
    public String dataCadastro;

    
    public String codigo;

    
    
    
    public BigDecimal valor;

    
    
    
    public BigDecimal valorDesconto;

    
    
    
    public BigDecimal valorTotal;
    
    
    public boolean cancelado;

    
    public String dataCancelado;

    
    public EnumEstadoPedido estado;

    
    public ClienteGenericModel cliente;

    
    public List<PedidoItemModel> pedidoitens;
}
