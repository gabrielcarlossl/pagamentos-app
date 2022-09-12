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
import { selectTab, showTabs } from "../common/tab/tabActions";
import { create } from "./billingCycleActions";

import List from '../billingCycle/bilingCycleList'
import BillingCycleForm from "./billingCycleForm";

class BillingCycle extends Component {

    // função para colocar inicialização padrão da aba
    componentWillMount(){
        this.props.selectTab('tabList')
        this.props.showTabs('tabList', 'tabCreate')
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
                                <BillingCycleForm onSubmit={this.props.create}></BillingCycleForm>
                            </TabContent>
                            <TabContent id='tabUpdate'><h1>Alterar</h1></TabContent>
                            <TabContent id='tabDelete'><h1>Excluir</h1></TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

// a função dispatch vai disparar a ação que vai mudar o estado do objeto para selecionar a aba
// o mapdispatch recebe o dispatch como parametro e vai chamar a bind fazendo com que o select tab esteja disponivel dentro do componente a partir das props
const mapDispatchToProps = dispatch => bindActionCreators({selectTab, showTabs, create}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycle)