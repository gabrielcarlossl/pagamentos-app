// gerenciar o estado para controlar o componente de abas

// estado inicial, SELECTED

const INITIAL_STATE = { selected: ''}

// variavel state é um parametro padrão, se ele estiver undefined ele irá para o valor inicial

export default (state= INITIAL_STATE, action) => {
    // criar o switch em cima do tipo da ação que for gerada, o reducer é chamado no momento que a ação for disparada no dispatch,
    // quando a ação é disparada esse método é chamado em cima do tipo de ação que for gerada vai ser decidido no switch se essa parte do estado das abas se ele vai ser  evoluido ou nao
    // o case será criado para quando a aba for selecionada ele vai alterar o atributo select, 
    // para evoluir o estado vai retornar o estado, e o atributo select será agora o action.payload
    // caso tenha outro evento que não seja o esperado, ele deevera retornar o estado STATE
    switch(action.type){
        case 'TAB_SELECTED':
            return {...state, selected: action.payload }
        default: return state
    }
}