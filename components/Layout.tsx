import * as React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { withRouter } from 'next/router'
import { Site, Nav, Button } from 'tabler-react'

type Props = {
  title?: string
}

const NavLink = (props) => {
  const active = props.router.pathname === props.to
  return <Link href={props.to}>
    <a className={`${active ? 'active' : null} ${props.className}`}>
      {props.children}
    </a>
  </Link>
}

const navBarItems = [
  { value: "About", to: "/about", icon: "home", LinkComponent: withRouter(NavLink) },
]

const Layout: React.SFC<Props> = ({ children, title = 'This is the default title' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Site.Wrapper
      children={children}
      headerProps={{
        href: '/',
        alt: 'Pik Space',
        imageURL: "",
        navItems: (
          <Nav.Item type="div" className="d-none d-md-flex">
            <Link href='/about'><a>About</a></Link>
          </Nav.Item>
        )
      }}
      navProps={{ itemsObjects: navBarItems }}
    />
    <footer>
      Footer
    </footer>
  </div>
)

export default Layout