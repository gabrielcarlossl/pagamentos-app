import React, {Component} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getSummary } from "./dashboardActions";
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'

class Dashboard extends Component {

    // função é invocada sempre que o componente é renderizado
    
    componentWillMount() {
        this.props.getSummary()
    }

    render(){
        const {credit, debt} = this.props.summary
        return(
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0'></ContentHeader>
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='green' icon='bank' value={`R$ ${credit}`} text='Total de Créditos'></ValueBox>
                        <ValueBox cols='12 4' color='red' icon='credit-card' value={`R$ ${debt}`} text='Total de Débitos'></ValueBox>
                        <ValueBox cols='12 4' color='blue' icon='money' value={`R$ ${credit - debt}`} text='Valor Consolidado'></ValueBox>
                    </Row>
                    
                </Content>
            </div>
        )
    }
}

// metodo mapStateToProps: ele recebe a função que tem o paramentro estado que é uma arrow function que vai retornar um objeto
// o objeto retornado vai ensinar ao react redux de como ele vai tirar o dado da store e que dado do state vai ser adicionado as propriedades do componente dashboard 

const mapStateToProps = (state) =>({ summary: state.dashboard.summary })

// para conseguir chamar o action creactor deve ser bindado a função

// o bindActionCreators ele faz a ligação de todas as actions creators e liga com o dispatch, o dispatch dispara a ação,
// sempre que chamar o metodo getSummary automaticamente ele vai fazer o dispatch pra todos os reducers da aplicação

const mapDispatchToProps = (dispatch) => bindActionCreators({getSummary}, dispatch)

// vai retornar o dashboard integrado com o estado mapeado

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)