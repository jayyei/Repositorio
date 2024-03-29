import { Component, h, State, Element, Prop, Watch, Listen } from '@stencil/core';
import { AV_API_KEY } from '../../global/global';

@Component({
  tag: 'uc-stock-price',
  styleUrl: './stock-price.css',
  shadow: true
})
export class StockPrice {

  stockInput: HTMLInputElement;

  // initialStockSymbol: string;

  @Element()
  el: HTMLElement;

  @State()
  fetchedPrice: number = 0;

  @State()
  stockUserInput: string;

  @State()
  stockInputValid = false;

  @State()
  error: string;

  @Prop({mutable: true, reflect: true})
  stockSymbol: string;

  @State()
  loading: boolean = false;

  @Watch('stockSymbol')
  stockSymbolChanged(newValue: string, oldValue: string) {
    if (newValue !== oldValue){ 
      this.stockUserInput = newValue;
      this.stockInputValid = true;
      this.fetchStockPrice(newValue);
    }
  }


  onUserInput(event: Event) {
    this.stockUserInput = (event.target as HTMLInputElement).value;
    if (this.stockUserInput.trim() !== '') {
      this.stockInputValid = true;
    } else  {
      this.stockInputValid = false;
    }
  }

  onFetchStockPrice(event: Event) {
    
    event.preventDefault();
    // const stockSymbol = (this.el.shadowRoot.querySelector('#stock-symbol') as HTMLInputElement).value
    this.stockSymbol = this.stockInput.value;
    // this.fetchStockPrice(stockSymbol);
  }

  componentWillLoad() {
    // run this method right before your component is about to load
    console.log('componentWillLoad');
    console.log(this.stockSymbol);
    // use it for change the state in your component, it does not cause a rerender
  }

  componentDidLoad() {
    // if you change your state here, it produces a new render()
    console.log('componentDidLoad')
    if (this.stockSymbol) {
      // this.initialStockSymbol = this.stockSymbol
      this.stockUserInput = this.stockSymbol;
      this.stockInputValid = true;
      this.fetchStockPrice(this.stockSymbol);
    }
  }

  componentWillUpdate(){
    // it run right before it wll rerender because some prop or tate changed
    console.log('componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
    // if (this.stockSymbol !== this.initialStockSymbol) {
    //   this.initialStockSymbol = this.stockSymbol;
    //   this.fetchStockPrice(this.stockSymbol);
    // }
  }

  disconnectedCallback() {
    console.log('componentDidUnload');
  }

  @Listen('ucSymbolSelected', { target: 'body' })
  onStockSymbolSelected(event: CustomEvent) {
    console.log('Hello');
    if (event.detail && event.detail != this.stockSymbol) {
      this.stockSymbol = event.detail

    }
  }

  fetchStockPrice(stockSymbol: string) {
    this.loading = true;
    fetch(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=${AV_API_KEY}`
      )
      .then(res => {
        if (res.status !== 200) {
          throw new Error('Invalid')
        }        
        return res.json();
      })
      .then(parsedRes => {
        if (!parsedRes['Global Quote']['05. price']) {
          throw new Error('Invalid Symbol')
        }
        this.error = null;
        this.fetchedPrice = +parsedRes['Global Quote']['05. price'];
        this.loading = false;
      })
      .catch(err => {
        console.log(err)
        this.error = err.message;
        this.fetchedPrice = null;
        this.loading = false;
      })
  }

  // Host data is executed whenever render is executed
  hostData() {
    return {
      class: this.error ? 'error': ''
    };
  }

  render() {
    let dataContent = <p>Please enter a symbol</p>
    if (this.error) {
      dataContent = <p>{this.error}</p>
    }
    if (this.fetchedPrice) {
      dataContent = <p>Price: ${this.fetchedPrice}</p>;
    }
    if (this.loading) {
      dataContent = <uc-spinner></uc-spinner>
    }
    return [
      <form onSubmit={this.onFetchStockPrice.bind(this)}>
        <input 
          id="stock-symbol" 
          type="text" 
          ref={el => this.stockInput = el} 
          value={this.stockUserInput}
          onInput={this.onUserInput.bind(this)}
        />
        <button type='submit' disabled={!this.stockInputValid || this.loading}>
          Fetch
        </button>
      </form>,
      <div>
        {dataContent}
      </div>
    ];
  }
}