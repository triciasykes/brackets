import React from "react"
import { InputGroup, Input, Button } from "reactstrap"

const WinnerName = (props) => {
  console.log(props.onChange)
  return (
    <div>
      <InputGroup>
        <Button>
          <Input
            value={`${props.winner}`}
            onChange={props.onChange}
            onClick={props.onClick}
          />
        </Button>
      </InputGroup>
    </div>
  )
}

export default WinnerName
