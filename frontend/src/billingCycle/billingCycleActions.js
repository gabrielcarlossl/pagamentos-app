import axios from "axios";
import { toastr } from "react-redux-toastr";
import { reset as resetForm, initialize } from "redux-form";
import { showTabs, selectTab } from "../common/tab/tabActions";

const BASE_URL = "http://localhost:3003/api";
const INITIAL_VALUES = {credits:[{}]};

export function getList() {
  const request = axios.get(`${BASE_URL}/billingCycles`);
  return {
    type: "BILLING_CYCLES_FETCHED",
    payload: request,
  };
}

// fazer a chamada da api do backend fazendo o post dos valores o objeto do metodo create
export function create(values) {
  return submit(values, 'post')
}

export function update(values) {
  return submit(values, 'put')
}
export function remove(values) {
  return submit(values, 'delete')
}

function mensagem(method){
  let operacao = ''
  if(method == 'put'){
    operacao = 'Alterado'
  }
  else if(method == 'delete'){
    operacao = 'Removido'
  }
  else if(method == 'post'){
    operacao = 'Inserido'
  }
  
  return operacao
}

function submit(values, method) {
  return dispatch => {
    const id = values._id ? values._id : '';

    axios[method](`${BASE_URL}/billingCycles/${id}`, values)
      .then((resp) => {
        toastr.success(`${mensagem(method)} com sucesso!`);
        dispatch(init());
      })
      .catch((e) => {
        e.response.data.errors.forEach((error) => toastr.error("Erro", error));
      });
  };
}

// quando mostrar a tela de alterar ele vai selecionar a aba de alterar e vai inicializar o formulario, passando como paramentro o ciclo de pagamento

export function showUpdate(billingCycle) {
  return [
    showTabs("tabUpdate"),
    selectTab("tabUpdate"),
    initialize("billingCycleForm", billingCycle),
  ];
}

export function showDelete(billingCycle) {
  return [
    showTabs("tabDelete"),
    selectTab("tabDelete"),
    initialize("billingCycleForm", billingCycle),
  ];
}

// actions para inicializar o cadastro
// a primeira apenas para mostrar a aba de listar e de criar
export function init() {
  return [
    showTabs("tabList", "tabCreate"),
    selectTab("tabList"),
    getList(),
    initialize("billingCycleForm", INITIAL_VALUES),
  ];
}
