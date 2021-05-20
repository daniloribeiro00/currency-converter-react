import './App.css';
import Converter from './components/Converter'

function App() {
  return (
    <div className="App">
      <h1>Conversor de Moedas</h1>
      <h3>Dólar Americano</h3>
      <div className= "line">
        <Converter currencyA="USD" currencyB="BRL"></Converter>
        <Converter currencyA="BRL" currencyB="USD"></Converter>
      </div>
      <h3>Euro</h3>
      <div className= "line">
        <Converter currencyA="EUR" currencyB="BRL"></Converter>
        <Converter currencyA="BRL" currencyB="EUR"></Converter>
      </div>
      <h3>Libra Esterlina</h3>
      <div className= "line">
        <Converter currencyA="GBP" currencyB="BRL"></Converter>
        <Converter currencyA="BRL" currencyB="GBP"></Converter>
      </div>
    </div>
  );
}

export default App;
