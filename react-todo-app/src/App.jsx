import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyApp from './MyButton'

const user={name:'Manny Macado',imageurl:'https://msp.c.yimg.jp/images/v2/FUTi93tXq405grZVGgDqGzusZuH1tDPomPcf_UdBNLBh6orhLKGkvqTyO7KG9STGQ_W3SX9CL9W-Nq99KoxDpuSlOrC4XY5YPN86meC_BqjH_2p2PehmBuasYstaoH7no7-0lgWD8GoXhgulGcO1FoBv5Z-ZZZuWNoZx-LX9pnVjLGvhWP1LTQmBvPm95jhW1-ZC01AkaxZlI0kVPQp2okwyuzu9b_jaOebfKL6LZbPE2D7Na5DSyS1i_mhdNfd42FFTQUPz66tH7pPUg0XDehEyiVmEEhLs6rFCrP0iuf_fwshIkMhj65sG_BxPnrMT/20220616s00001007369000p_view.webp?errorImage=false" /'};

const datas=[{title:'Padres',isTeam:true,id:'1', image: 'https://msp.c.yimg.jp/images/v2/FUTi93tXq405grZVGgDqG8OukJW7PKHAgl2wE_Z65hKbG6ovhKFMMJMGXakz4NBXiC-efUitQH7sCODlR7vRwr7CUtdelYBVD33iHoPliyh2hJAfiR6Va6zoCSiukSkKb_7e9cuE41N7q9Bp-Ac1KJ4OM1Fti-0eKRib36JNJtblv1Qb5yFwZwcmdqDFxvDduwoqwjzKtXcupuh6Gvp8xJ-QTLRwOXylIwENSXen2ys=/s-l300-1.png?errorImage=false'},{title:'República Dominicana',isTeam:false,id:'2', image: 'https://msp.c.yimg.jp/images/v2/FUTi93tXq405grZVGgDqG40wbmc7c7NNyxgEA3e-UREQJn2EMHUbOwAn1Q0Htjf86UwY-AWdfh3kt2BQYfHMxkrG7fufyxMBKiR_PY9upvheQCJBebn62rzScXBE0l1UUar3lCv7wt50c00_y7_hdYmhD4ltjW4YDEdNuE3qE7OYfuvRd37iDsk_PFjYKg-0YN2sq0_FNhiALqo_wNP9_6liBGPdeiX1voODAPPbxpw=/102345.jpg?errorImage=false'},{title:'third baseman',isTeam:false,id:'3',image:'https://msp.c.yimg.jp/images/v2/FUTi93tXq405grZVGgDqGwCaSt4C6m3OQwWkvFLEbrHSI9kAjTpAV6WaJyq1CQqoorWr0YheyWqmlXXjIHNdyxC7zuPaaZzorkUAioL9-6WH8Qz8r5XCYtBJ46ev0lhIctxN2pJVKwhlehjJ_XqK-F8-N8U8PTdtj_LmYqfQEWQL2QcDkjdWvZd3VbYoBHUejGAT-zEp6GnoMfSZ1s9gITYiw2IQqGeQNoZfg59cKjk9o3VM1HFLA0g37wmnp6AfAhhlIWmL3Dppp79xAsruIw==/640883ec69f375abc98826a1bb99e42c.png?errorImage=false'}];

function App() {
  const [count, setCount] = useState(0)
  const listItems=datas.map(data=>{ let color;if (data.title === 'República Dominicana') {
    color = 'blue';}else if (data.title ==='third baseman'){color='brown';} else{color='orange'} return(<li key={data.id}style={{color: color,display:'flex',alignItems: 'center',marginBottom: '8px'}}>{data.image&&(<img src={data.image} style={{width: '40px',height: '40px',objectFit: 'cover',marginRight: '8px',borderRadius: '4px'}}/>)}{data.title}</li>);});
  


  return (  <>
    <h1>{user.name}</h1>
    <img className='avatar' src={user.imageurl} alt={"Photo of"+user.name} />
    <ul>{listItems}</ul>
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
