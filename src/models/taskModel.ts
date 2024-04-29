export interface Task {
  id: string;
  título: string;
  descrição: string;
  data_criação: Date;
  data_conclusão?: Date | null;
  tipo: "simples" | "completa";
  categoria?: string;
  status: "pendente" | "em andamento" | "concluída";
  usuário_associado: string;
}
