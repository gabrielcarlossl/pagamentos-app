import React, {Component} from "react";
import { bindActionCreators } from "redux"; // para ligar o componente ao estado do redux é preciso do bindActionCreator
import { connect } from "react-redux";

class TabContent extends Component {
    render(){

        // função para verificar se o conteudo está selecionado para que altere a classe da div

        const selected = this.props.tab.selected === this.props.id
        return(
            // a div recebe um id, que sera o this.props.id que é semelhante ao funcionamento do target no tabHeader
            <div id={this.props.id} className={`tab-pane ${selected ? 'active' : ''}`}>
                {this.props.children}
            </div>
        )
    }
}

const mapStateToProps = state =>({tab: state.tab})
export default connect(mapStateToProps)(TabContent)
