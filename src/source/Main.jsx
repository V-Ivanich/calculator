
import React from 'react';
import './Main.css';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      def_input: ''
    }
    this.btnClick = this.btnClick.bind(this);
  }


  btnClick(event){
    let number_1 = '',
      number_2 = '',
      operacion = '',
      spaceA = '',
      action = event.target.name;

    if( action === 'c'){ //! очистка/сброс
      this.setState({def_input: ''})
    }
    else { //! конкотенация символов
      if(action !== '='){
        if(action === '-' || action === '+' || action === '/' || action === '*'){
          spaceA = ' ';
        } else spaceA = '';

      let temp = this.state.def_input;
      this.setState({def_input: temp + spaceA + action + spaceA})
      } 
        else { //! нажата кнопка '='
          let mas = [],
            str = '',
            res = 0;

          str= this.state.def_input;
          mas = str.split(' ');
          console.log(mas);

          number_1 = Number(mas[0])
          number_2 = Number(mas[2])
          operacion = mas[1]
          switch (operacion) {
            case '-':
              res = number_1 - number_2;
              break;
            case '+':
              res = number_1 + number_2;
              break;
            case '*':
              res = number_1 * number_2;
              break;
            case '/':
              res = number_1 / number_2;
              break;
        }
        this.setState({def_input: res});
      }
    }
  }


  render() {
  return (
    <>
    <div className='block'>
      <div className='container'>
        <div className='in_put'>{this.state.def_input}</div>
        <button className='n0' name='0' onClick={this.btnClick}>0</button>
        <button className='n1' name='1' onClick={this.btnClick}>1</button>
        <button className='n2' name='2' onClick={this.btnClick}>2</button>
        <button className='n3' name='3' onClick={this.btnClick}>3</button>
        <button className='n4' name='4' onClick={this.btnClick}>4</button>
        <button className='n5' name='5' onClick={this.btnClick}>5</button>
        <button className='n6' name='6' onClick={this.btnClick}>6</button>
        <button className='n7' name='7' onClick={this.btnClick}>7</button>
        <button className='n8' name='8' onClick={this.btnClick}>8</button>
        <button className='n9' name='9' onClick={this.btnClick}>9</button>
        <button className='b_plus'name='+' onClick={this.btnClick}>+</button>
        <button className='b_minus'name='-' onClick={this.btnClick}>-</button>
        <button className='b_ymn'name='*' onClick={this.btnClick}>*</button>
        <button className='b_del'name='/' onClick={this.btnClick}>/</button>
        <button className='tch'name='.' onClick={this.btnClick}>.</button>
        <button className='b_ravno'name='=' onClick={this.btnClick}>=</button>
        <button className='C'name='c' onClick={this.btnClick}>C</button>
      </div>
    </div>
    </>
  );
}
}

export default Main;