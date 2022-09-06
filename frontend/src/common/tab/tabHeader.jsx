import React, {Component} from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { selectTab } from "./tabActions";


//Estrutura para renderizar uma unica aba
class TabHeader extends Component {
    render(){

        // constante para saber se foi selecionado a tab, o tab é uma string la no estado do redux, que tem um selected que é string, se ele for igual ao target entaõ sera verdadeiro e assim altera a classe do li
        const selected = this.props.tab.selected === this.props.target
        return(
                        //  para refletior o visual quando a tab for selecionada será criado uma classe css
            <li className={selected ? 'active' : ''}>
                <a href='javascript:;' data-toggle='tab'
                    onClick={()=> this.props.selectTab(this.props.target)} // mapear o evento no onclick, para chamar o this.props.selectTab, passando o target que será o conteudo
                    data-target={this.props.target}>
                    <i className={`fa fa-${this.props.icon}`}></i> {this.props.label}
                </a>
            </li>
        )
    }
}

// o componente tabHeader precisa acesso ao estado então é preciso fazer
// o metodo mapStateToProps
const mapStateToProps = state =>({tab: state.tab})
// para fazer o mapeamento dos actions creators e que seja disparados
// e estajam disponiveis pela propriedade do componenete é preciso do mapDispatchToProps
// o dispatch chama a função action creators, a resposta é a action e a action é passada ao reducer para que ele evolua o estado 
// assim o componenete é renderizado novamente mostrando o novo estado da aplicação

const mapDispatchToProps = dispatch => bindActionCreators({selectTab}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TabHeader)