
import { LitElement, html } from 'lit';
import { Cpf } from './objetos/cpf';

export class App extends LitElement {
    static get properties() {
        return {
            cpf: { attribute: false }
        };
    }

    constructor() {
        super();
        this._codigo = "";
        this.cpf = new Cpf();
        this.isAnInstance = html`<span>Sou do Tipo CPF</span>`;
    }

    _onClickComObjectAssignComNovaInstancia() {
        this.cpf = Object.assign(new Cpf(), { codigo: this._codigo });
        this._isAnInstance();
    }

    _isAnInstance() {
        this.isAnInstance = this.cpf instanceof Cpf ? html`<span>Sou do Tipo CPF</span>` : html`<span><b>NÃO</b> sou do tipo CPF</span>`;
    }

    _onClickComObjectAssignComInstanciaExistente() {
        Object.assign(this.cpf, { codigo: this._codigo });
        this._isAnInstance();
        this.requestUpdate();
    }

    _onClickComSpreadOperator() {
        this.cpf = { ...this.cpf, codigo: this._codigo }
        this._isAnInstance();
    }

    _limpar() {
        try {
            this.cpf.limpar();
        } catch {
            alert('Não sou uma instância da classe Cpf, não tenho o método limpar.')
        } finally {
            this.requestUpdate();
        }
    }

    render() {
        return html`
    <input type="text" @input=${e=> this._codigo = e.target.value}>
    <br>
    <p>Resultado: ${this.cpf.codigo}</p>
    <p>Sou uma instância de Cpf? ${this.isAnInstance}</p>
    <br>
    <button @click=${this._onClickComObjectAssignComNovaInstancia}>Set com Object.assign com nova instância</button>
    <button @click=${this._onClickComObjectAssignComInstanciaExistente}>Set com Object.assign com instância existente</button>
    <button @click=${this._onClickComSpreadOperator}>Set com Spread operator</button>
    <button @click=${this._limpar}>Chamar método limpar() da instância de Cpf</button>
    <br />
    <div>
        <section>
            <h3>Com "Object.assign" e novo objeto</h3>
            <pre>
                <code>
                    _onClickComObjectAssignComNovaInstancia() {
                        this.cpf = Object.assign(new Cpf(), { codigo: this.codigo });
                        this._isAnInstance();       
                    }        
                </code>
            </pre>
        </section>
        <section>
            <h3>Com "Object.assign" utilizando a instância existente</h3>
            <pre>
                <code>
                    _onClickComObjectAssignComInstanciaExistente() {
                        Object.assign(this.cpf, { codigo: this.codigo });
                        this._isAnInstance();
                        this.requestUpdate();
                    }       
                </code>
            </pre>
        </section>
        <section>
            <h3>Com Spread operator</h3>
            <pre>
                <code>
                    _onClickComSpreadOperator() {
                        this.cpf = { ...this.cpf, codigo: this._codigo };
                        this._isAnInstance();
                    }        
                </code>
            </pre>
        </section>
    </div>
    `;
    }
}

window.customElements.define('app-wrap', App);
