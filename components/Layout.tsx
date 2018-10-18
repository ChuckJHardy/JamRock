import * as React from 'react'
import Link from 'next/link'
import { Site, Nav, Button } from 'tabler-react'

import "tabler-react/dist/Tabler.css"

type Props = {
  title?: string
}

const Layout: React.SFC<Props> = ({ children, title = 'This is the default title' }) => (
  <div>
    <header>
      <nav>
        <Link href='/'><a>Home</a></Link> |{' '}
        <Link href='/about'><a>About</a></Link>
      </nav>
    </header>
    <Site.Wrapper
      children={children}
      headerProps={{
        href: '/',
        alt: 'Pik Space',
        imageURL: "",
        navItems: (
          <Nav.Item type="div" className="d-none d-md-flex">
            <Button.List>
              <Button href="" target="_blank" link RootComponent="a">
                Help
            </Button>
              <Button
                href=""
                target="_blank"
                outline
                size="sm"
                RootComponent="a"
                color="primary"
              >
                Install CLI
            </Button>
            </Button.List>
          </Nav.Item>
        )
      }}
    />
    <footer>
      Footer
    </footer>
  </div>
)

export default Layout