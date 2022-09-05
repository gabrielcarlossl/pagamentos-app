// arquivo para criar as funções que vão gerar as ações que serão disparadas para atualizar o estado da aplicação pelos reducers

// ação de selecionar a aba e ação de mostrar qual aba está visivel

export function selectTab(tabId){
    console.log(tabId)
    // devido a função ser um action creator, ela cria a ação e retorna um objeto
    // com um tipo e um payload que será o id da tab selecionada 
    return{
        type: 'TAB_SELECTED',
        payload: tabId
    }
}