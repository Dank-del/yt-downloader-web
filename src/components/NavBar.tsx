import { Fragment } from 'react';
import { Navbar } from '@nextui-org/react';
export default function NavBar() {
    return (
        <Fragment>
            <Navbar style={{
                margin: "3px"
            }} isBordered variant="floating">
                <Navbar.Brand
                    style={{
                        fontFamily: 'Unbounded',
                        fontSize: 18,
                        textAlign: 'center'
                        // fontWeight: 'bold',
                    }}
                >
                    Sayan's Quick Video downloader
                </Navbar.Brand>
            </Navbar>
        </Fragment>
    )
}