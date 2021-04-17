import React from "react";
import {Alignment, Button} from "@blueprintjs/core";
import { Navbar } from "@blueprintjs/core"

export default function Home() {
    return (
        <Navbar>
            <Navbar.Group align={Alignment.CENTER}>
                <Navbar.Heading>F1 World</Navbar.Heading>
                <Navbar.Divider />
                <Button className="bp3-minimal" icon="home" text="Home" />
                <Button className="bp3-minimal" icon="document" text="Files" />
            </Navbar.Group>
        </Navbar>
    )
}