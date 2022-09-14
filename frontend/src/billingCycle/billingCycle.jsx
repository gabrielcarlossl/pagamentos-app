import React, {Component} from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import ContentHeader from "../common/template/contentHeader";
import Content from "../common/template/content";
import Tabs from "../common/tab/tabs";
import TabsHeader from "../common/tab/tabsHeader";
import TabsContent from "../common/tab/tabsContent";
import TabHeader from "../common/tab/tabHeader";
import TabContent from "../common/tab/tabContent";

import { init, create, update, remove } from "./billingCycleActions";

import List from '../billingCycle/billingCycleList'
import BillingCycleForm from "./billingCycleForm";

class BillingCycle extends Component {

    // função para colocar inicialização padrão da aba
    componentWillMount(){
        this.props.init()
    }
    render(){
        return(
            <div>
                <ContentHeader title='Pagamentos'small='Cadastro' />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon='bars' target='tabList'></TabHeader>
                            <TabHeader label='Incluir' icon='plus' target='tabCreate'></TabHeader>
                            <TabHeader label='Alterar' icon='pencil' target='tabUpdate'></TabHeader>
                            <TabHeader label='Excluir' icon='trash-o' target='tabDelete'></TabHeader>
                            
                        </TabsHeader>
                        
                        <TabsContent>
                            <TabContent id='tabList'>
                                <List></List>
                            </TabContent>
                            <TabContent id='tabCreate'>
                                <BillingCycleForm onSubmit={this.props.create} submitLabel='Incluir' submitClass='primary'></BillingCycleForm>
                            </TabContent>
                            <TabContent id='tabUpdate'>
                                <BillingCycleForm onSubmit={this.props.update} submitLabel='Alterar' submitClass='info'></BillingCycleForm>
                            </TabContent>
                            <TabContent id='tabDelete'>
                                <BillingCycleForm onSubmit={this.props.remove} readOnly={true} submitLabel='Remover' submitClass='danger'></BillingCycleForm>
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

// a função dispatch vai disparar a ação que vai mudar o estado do objeto para selecionar a aba
// o mapdispatch recebe o dispatch como parametro e vai chamar a bind fazendo com que o select tab esteja disponivel dentro do componente a partir das props
const mapDispatchToProps = dispatch => bindActionCreators({init, create, update, remove}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycle)