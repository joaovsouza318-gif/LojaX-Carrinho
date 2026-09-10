// Local sugerido: src/app/models/pedido.ts
//
// Interfaces espelhando os schemas do backend (observados em
// pedido_schema.py e pedidoproduto_schema.py) para tipar as
// chamadas HTTP feitas pelo Angular.

export interface PedidoCreate {
  idpessoa: number;
  data_pedido: string;   // formato "YYYY-MM-DD"
  status_pedido: string; // 1 caractere (coluna String(1) no model) — ex: 'P' = Pendente
}

export interface PedidoUpdate {
  status_pedido?: string;
}

export interface PedidoResponse {
  idpedido: number;
  idpessoa: number;
  data_pedido: string;
  status_pedido: string;
}

export interface PedidoProdutoCreate {
  idpedido: number;
  idproduto: number;
  quantidade: number;
  valor_unitario: number;
}

export interface PedidoProdutoResponse {
  idpedido: number;
  idproduto: number;
  quantidade: number;
  valor_unitario: number;
}

export interface PessoaPedidoResponse {
  idpessoa: number;
  nome: string;
}

export interface ProdutoPedidoResponse {
  idproduto: number;
  descricao: string;
}

export interface PedidoProdutoDetalhado {
  idproduto: number;
  quantidade: number;
  valor_unitario: number;
  produto: ProdutoPedidoResponse;
}


export interface PedidoDetalhadoResponse {
  idpedido: number;
  status: string;
  pessoa: PessoaPedidoResponse;
  produtos: PedidoProdutoDetalhado[];
}
