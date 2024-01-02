import './Header.css'

function Header() {
  return (
    <>
      <header className="app-header">
        <ul className="app-header-ul">
          <li className="app-header-li">
            5110
            <p className="app-header-p">Leads Found</p>
          </li>
          <li className="app-header-li">
            1923
            <p className="app-header-p">Emails Drafted</p>
          </li>
          <li className="app-header-li">
            3951
            <p className="app-header-p">Messages Sent</p>
          </li>
          <li className="app-header-li">
            0<p className="app-header-p">Opportunities</p>
          </li>
        </ul>
      </header>
    </>
  )
}

export default Header