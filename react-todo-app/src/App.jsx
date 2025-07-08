import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyApp from './MyButton'

function App() {
  const [count, setCount] = useState(0)

  return (
  <> <img className="avatar" src="https://msp.c.yimg.jp/images/v2/FUTi93tXq405grZVGgDqGzusZuH1tDPomPcf_UdBNLBh6orhLKGkvqTyO7KG9STGQ_W3SX9CL9W-Nq99KoxDpuSlOrC4XY5YPN86meC_BqjH_2p2PehmBuasYstaoH7no7-0lgWD8GoXhgulGcO1FoBv5Z-ZZZuWNoZx-LX9pnVjLGvhWP1LTQmBvPm95jhW1-ZC01AkaxZlI0kVPQp2okwyuzu9b_jaOebfKL6LZbPE2D7Na5DSyS1i_mhdNfd42FFTQUPz66tH7pPUg0XDehEyiVmEEhLs6rFCrP0iuf_fwshIkMhj65sG_BxPnrMT/20220616s00001007369000p_view.webp?errorImage=false" />


      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h1>Hello React</h1>

      <MyApp/>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
  </>
  );
}

export default App;
