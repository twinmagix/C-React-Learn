import React from "react";
import { Link } from "react-router-dom";
import { Button, Header, Icon, Segment } from "semantic-ui-react";

export default function NotFound() {
    return (
        <Segment placeholder>
            <Header icon>
                <Icon name='search' />
                Oopps - we've looked everywhere and could not found this.
            </Header>
            <Segment.Inline>
                <Button as={Link} to='/activities'>
                    Return to activites page
                </Button>
            </Segment.Inline>
        </Segment>
    )
}