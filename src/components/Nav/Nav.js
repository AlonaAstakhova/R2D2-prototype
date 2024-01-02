import { MdOutlinePersonSearch } from 'react-icons/md'
import { LuLayoutList } from 'react-icons/lu'
import { AiOutlineMail } from 'react-icons/ai'
import { TbTelescope } from 'react-icons/tb'
import './Nav.css'

function Nav() {
  return (
    <div>
      <nav className="app-main-nav">
        <li>
          <MdOutlinePersonSearch />
          <p className="app-main-p">Find Leads</p>
        </li>
        <li>
          <LuLayoutList />
          <p className="app-main-p">Enrich Leads</p>
        </li>
        <li>
          <AiOutlineMail />
          <p className="app-main-p">Create Outreach</p>
        </li>
        <li>
          <TbTelescope />
          <p className="app-main-p active">Run Research</p>
        </li>
      </nav>
      <hr />
    </div>
  )
}

export default Nav
