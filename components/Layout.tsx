import * as React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { withRouter } from 'next/router'
import { Site, Grid, List, Nav, Button } from 'tabler-react'

import "../css/layout.css"
import Logo from '../static/logo.svg'

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
  { value: "Home", to: "/", icon: "home", LinkComponent: withRouter(NavLink) },
  { value: "About", to: "/about", icon: "eye", LinkComponent: withRouter(NavLink) },
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
        imageURL: Logo,
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
      navProps={{ itemsObjects: navBarItems }}
      footerProps={{
        links: [
          <Link href="/"><a>Home</a></Link>,
        ],
        copyright: (
          <React.Fragment>
            Copyright © 2018 <Link href="/"><a>Pik.Space</a></Link> All rights reserved.
          </React.Fragment>
        ),
        nav: (
          <React.Fragment>
            <Grid.Col auto={true}>
              <List className="list-inline list-inline-dots mb-0">
                <List.Item className="list-inline-item">
                  <a target="_blank" rel="nofollow" href="">
                    Documentation
                  </a>
                </List.Item>
                <List.Item className="list-inline-item">
                  <a target="_blank" rel="nofollow" href="">
                    Help
                  </a>
                </List.Item>
              </List>
            </Grid.Col>
            <Grid.Col auto={true}>
              <Button href="" size="sm" outline color="primary" RootComponent="a">
                Install CLI
              </Button>
            </Grid.Col>
          </React.Fragment>
        )
      }}
    />
  </div>
)

export default Layout