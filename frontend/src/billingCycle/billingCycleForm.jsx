import React, { Component } from "react";
import { reduxForm, Field, formValueSelector } from "redux-form";
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import LabelAndInput from "../common/form/labelAndInput";
import {init} from './billingCycleActions'
import CreditList from "./creditList";

class BillingCycleForm extends Component {
  render() {
    const { handleSubmit, readOnly, credits } = this.props;
    return (
      <form role="form" onSubmit={handleSubmit}>
        <div className="box-body">
          <Field readOnly={readOnly} name="name" component={LabelAndInput} label='Nome' cols='12 4' placeholder="Informe o nome"></Field>
          <Field readOnly={readOnly} name="month" component={LabelAndInput} type='number' label='Mês' cols='12 4' placeholder="Informe o mês"></Field>
          <Field readOnly={readOnly} name="year" component={LabelAndInput} type='number' label='Ano' cols='12 4' placeholder="Informe o ano"></Field>
          <CreditList cols='12 6' list={credits} readOnly={readOnly} ></CreditList>
        </div>
        <div className="box-footer">
          <button type="submit" className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}</button>
          <button type="button" className="btn btn-default" onClick={this.props.init}>Cancelar</button>
        </div>
      </form>
    );
  }
}


BillingCycleForm = reduxForm({ form: "billingCycleForm", destroyOnUnmount: false })(BillingCycleForm);

const selector = formValueSelector('billingCycleForm')
const mapStateToProps = state => ({credits: selector(state, 'credits')})

const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)
