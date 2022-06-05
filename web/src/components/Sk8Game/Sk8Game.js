import { FieldError, Form, Label, NumberField, Submit, TextField } from "@redwoodjs/forms"
import { useState } from "react"

import { v4 as uuidv4 } from 'uuid'

const Sk8Game = () => {
  const [sk8GameState, setSk8GameState] = useState({
    inProgress: false,
    settingPlayers: false,
    players: [],
    outOrder: [],
    lastWinner: [],
    letterPool: ['s', 'k', '8']
  })

  const startSk8Game = (e) => {
    setSk8GameState({
      ...sk8GameState,
      inProgress: true,
      settingPlayers: false,
    })

  }

  const endSk8Game = (e) => {
    setSk8GameState({
      ...sk8GameState,
      inProgress: false,
      players: []
    })
  }

  const addPlayer = (data, e) => {
    const list = sk8GameState.players
    list.push(data)

    setSk8GameState({
      ...sk8GameState,
      settingPlayers: false,
      players: list
    })

    e.target.reset()
  }

  return (
    <div>
      <button className={"button primary" + ((sk8GameState.inProgress) ? " visually-hidden" : "")} onClick={startSk8Game}>Start Game</button>
      <button className={"button " + ((!sk8GameState.inProgress) ? " visually-hidden" : "")} onClick={endSk8Game}>End Game</button>

      <hr />

      {sk8GameState.inProgress ? (
        <Form onSubmit={addPlayer} id="addPlayerForm">
          <div className="row">
            <div className="col-8">
              <span className="visually-hidden"><TextField name="id" defaultValue={uuidv4()} required={true} readOnly="true" /></span>

              <Label>
                <span className="visually-hidden">Player Name</span>
                <TextField name="playername" placeholder="Add Player Name" required={true} />
                <FieldError name="playername" />
              </Label>

              <span className="visually-hidden"><TextField name="letters" defaultValue={""} required={true} readOnly /></span>
            </div>

            <div className="col-4">
              <Submit className="primary"><i className="fa fa-plus"></i></Submit>
            </div>
          </div>
        </Form>
      ) : false}
      <hr />
      <ul className="text-left">
        {sk8GameState.players.map((p) => (
          <li key={p.playername}>{p.playername}</li>
        ))}
      </ul>
      <hr />
      <pre style={{ textAlign: "left" }}>{JSON.stringify(sk8GameState, null, 2)}</pre>
    </div>
  )
}

export default Sk8Game
