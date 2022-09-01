import Axios from "axios";

// o axios é o client http
// por ele faz as requisições no backend

const BASE_URL = 'http://localhost:3003/api'

// a função faz a requisição no back do summary
export function getSummary(){
    const request = axios.get(`${BASE_URL}/billingCycles/summary`) // essa é uma requisição assincrona, esse request vai armazenar uma promise que vai ser resolvida quando o resultado chegar

    // vai retornar um objeto, a função é um action creactor, ele cria um objeto que é uma ação, que tem um atributo type obrigatorio. 

    return {
        type: 'BILLING_SUMMARY_FETCHED',
        payload: request
    }
}