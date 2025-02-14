import useClient from "@sanity/client";

class CrudSanity {
  client;
  debugConsole = true;

  constructor(parameters) {
    this.client = useClient({
      projectId: "ffzuhqrr",
      dataset: "production",
      useCdn: false,
      apiVersion: "2025-02-13",
      token: "skNRDchppdMIoLLX1xeWOwaggNCkqz5nHJCpNnTDa1tjIhJnGGsKEj8B5PHrrf0uPV2DfoeGJAP0SbjooZmQyRJ281t4RBqVahsVGVHlQFFMUFuAuV8vPuHFeql73nK6h4cLOHvqGcTZWfbkSljsitWuKrkGw3IeuVBso6QGZWPdhJwvHdMS",
    });
  }

  jsonSuccess(){ return {error: false, errorMsg: null}; }
  jsonError(msg){ return {error: true, errorMsg: msg}; }

  async insert(table, data){
    try {
      if(this.debugConsole) console.log('%cRequisição feita para "' + table + '" para adicionar dados.', "color: #f7b34d;");
      data._type = table; // tabela que será feita a chamada da API
      const sanityRequisicao = await this.client.create(data);
      console.log("%cRequisição finalizada com sucesso!", "color: #b6ff63;");
      return this.jsonSuccess();
    } catch (error) {
      if(this.debugConsole) console.log("%cRequisição deu errado :(", "color: #f75e4d;");
      console.error('Erro ao fazer Requisição para "' + table + '"...', error);
      return this.jsonError();
    }
  }
  async update(table, columns, values, filters){
    let oldDebugConsole = this.debugConsole;
    try {
      if(this.debugConsole) console.log('%cRequisição feita para "' + table + '" para atualizar dados.', "color: #f7b34d;");
      this.debugConsole = false;
      const sanityRequisicao = await this.select(table, [], filters);
      for (let i = 0; i < sanityRequisicao.length; i++) {
        const obj = sanityRequisicao[i];
        let objCopy = {...obj};
        await this.delete(table, '_id == "' + obj._id + '"');
        if(columns.length == values.length){
          for (let u = 0; u < columns.length; u++) {
            if(values[u] != null) objCopy[columns[u]] = values[u];
          }
        } else {
          this.debugConsole = oldDebugConsole;
          if(this.debugConsole) console.log("%cFalta de parametros... :X", "color: #f75e4d;");
          return this.jsonError();
        }
        await this.client.create(objCopy);
      }

      this.debugConsole = oldDebugConsole;
      if(this.debugConsole) console.log("%cRequisição finalizada com sucesso!", "color: #b6ff63;");
      return this.jsonSuccess();
    } catch (error) {
      this.debugConsole = oldDebugConsole;
      if(this.debugConsole) console.log("%cRequisição deu errado :(", "color: #f75e4d;");
      console.error('Erro ao fazer Requisição para "' + table + '"...', error);
      return this.jsonError();
    }
  }
  async delete(table, filters = ''){
    try {
      if(this.debugConsole) console.log('%cRequisição feita para "' + table + '" para deletar dados.', "color: #f7b34d;");
      let query = '*[_type == "' + table + '"';
      if(filters.length > 0) query += " && (" + filters + ")";
      query += ']';

      const sanityRequisicao = await this.client.delete({query: query});
      if(this.debugConsole) console.log("%cRequisição finalizada com sucesso!", "color: #b6ff63;");
      return this.jsonSuccess();
    } catch (error) {
      if(this.debugConsole) console.log("%cRequisição deu errado :(", "color: #f75e4d;");
      console.error('Erro ao fazer Requisição para "' + table + '"...', error);
      return this.jsonError();
    }
  }

  async select(table, columns = [], filters = '', order = '', desc = true){
    try {
      if(this.debugConsole) console.log('%cRequisição feita para "' + table + '" para selecionar dados.', "color: #f7b34d;");
      let query = '*[_type == "' + table + '"';
      if(filters.length > 0) query += " && (" + filters + ")";
      query += ']';
      try {
        if(columns.length > 0) query += "{" + columns.join(", ") + "}";
      } catch (error) {
        if(columns.length > 0) query += "{" + columns + "}";
      }
      if(order.length > 0) query += " | order(" + order + " " + (desc == true ? "desc" : "asc") + ")";

      const sanityRequisicao = await this.client.fetch(query);
      sanityRequisicao.error = false;
      sanityRequisicao.errorMsg = null;
      if(this.debugConsole) console.log("%cRequisição finalizada com sucesso!", "color: #b6ff63;");
      return sanityRequisicao;
    } catch (error) {
      if(this.debugConsole) console.log("%cRequisição deu errado :(", "color: #f75e4d;");
      console.error('Erro ao fazer Requisição para "' + table + '"...', error);
      return this.jsonError();
    }
  }
  async getHightest(table, column){
    try {
      if(this.debugConsole) console.log('%cRequisição feita para "' + table + '" para selecionar maior item.', "color: #f7b34d;");

      let query = '*[_type == "' + table + '"] | order(' + column + ' desc)[0].' + column; // *[_type == "pessoaTesteJPF"] | order(cod desc)[0].cod
      const sanityRequisicao = await this.client.fetch(query);
      if(this.debugConsole) console.log("%cRequisição finalizada com sucesso!", "color: #b6ff63;");
      return sanityRequisicao;
    } catch (error) {
      if(this.debugConsole) console.log("%cRequisição deu errado :(", "color: #f75e4d;");
      console.error('Erro ao fazer Requisição para "' + table + '"...', error);
      return this.jsonError();
    }
  }
}
const crudSanity = new CrudSanity();

export default crudSanity;