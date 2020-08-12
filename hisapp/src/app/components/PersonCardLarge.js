import React from 'react'
import { Card } from 'semantic-ui-react'

class PersonCardLarge extends React.Component {

    render(){
        const props = this.props
        const name = props.name
        const image = props.image
        const text = props.text

        return <Card
            image={image}
            header={name}
            meta='Friend'
            description={text}

        />
    }
}

export default PersonCardLarge