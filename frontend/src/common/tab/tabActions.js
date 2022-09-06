// arquivo para criar as funções que vão gerar as ações que serão disparadas para atualizar o estado da aplicação pelos reducers

// ação de selecionar a aba e ação de mostrar qual aba está visivel

export function selectTab(tabId){
    
    // devido a função ser um action creator, ela cria a ação e retorna um objeto
    // com um tipo e um payload que será o id da tab selecionada 
    return{
        type: 'TAB_SELECTED',
        payload: tabId
    }
}

// ação para dependendo da aba selecionada o componente das abas deve mostrar ou não algumas abas
// função vai receber varis parametros passado no parametro
export function showTabs(...tabIds){
    // objeto que vai ter varios atributo, cada atributo é uma aba que deve ser exibida

    const tabsToShow ={}

    // esta pegando o objeto com nenhum atributo, coloca o atributo dentro do objeto,
    tabIds.forEach(e => tabsToShow[e]=  true )
    return {
        type: 'TAB_SHOWED',
        payload: tabsToShow
    }
}