import React from 'react'
import './App.css'
function Main() {
  return (
    <div className='main'>
      <div className='imp'>
        <div className='heading'><h1>Importants Links & Information</h1></div>
        <div className='btn'>
          <a href="#">Hello you are here</a>
          <a href="#">Hello you are here</a>
        </div>
        <div >
          <marquee className='float' onmouseover="this. stop();" onmouseout="this. start();" direction="UP" scrollamount="2" behavior="scroll" height="189px">
            <div className='entry'>
              <div className="link"><small>Hello you are here welcome to MMMMUT ERP sHello you are here welcome to MMMMUT ERP</small></div>
              <div className="link"><small>Hello you are here welcome to MMMMUT ERP sHello you are here welcome to MMMMUT ERP</small></div>
              <div className="link"><small>Hello you are here welcome to MMMMUT ERP sHello you are here welcome to MMMMUT ERP</small></div>
              <div className="link"><small>Hello you are here welcome to MMMMUT ERP sHello you are here welcome to MMMMUT ERP</small></div>
              <div className="link"><small>Hello you are here welcome to MMMMUT ERP sHello you are here welcome to MMMMUT ERP</small></div>
              <div className="link"><small>Hello you are here welcome to MMMMUT ERP sHello you are here welcome to MMMMUT ERP</small></div>
              <div className="link"><small>Hello you are here welcome to MMMMUT ERP sHello you are here welcome to MMMMUT ERP</small></div>
            </div>
          </marquee>
        </div>
      </div>
      <div className='log'>
        <h1>STUDENT LOGIN</h1>
        <form className="page" action="">
          <input type="text" name='username' placeholder='Enter Your User ID' />
          <input type="password" name="password" placeholder='Enter Your Password' />
          <button type='submit' className='contact_btn'>Log IN</button>
        </form>
      </div>
    </div>
  )
}
//#fc5c65
export default Main
