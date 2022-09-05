import React, {Component} from "react";

//Estrutura para renderizar uma unica aba
class TabHeader extends Component {
    render(){
        return(
                        //  
            <li>
                <a href='javascript:;' data-toggle='tab' data-target={this.props.target}>
                    <i className={`fa fa-${this.props.icon}`}></i> {this.props.label}
                </a>
            </li>
        )
    }
}

export default TabHeader