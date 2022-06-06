import { FieldError, Form, Label, NumberField, Submit, TextField } from "@redwoodjs/forms"
import { useState } from "react"

import { v4 as uuidv4 } from 'uuid'

const Sk8Game = () => {
  const [sk8GameState, setSk8GameState] = useState({
    inProgress: false,
    editingPlayers: false,
    players: [],
    pIdLimit: 0,
    outOrder: [],
    lastWinner: [],
    sk8Word: "skate"
  })

  const editPlayers = (e) => {
    setSk8GameState({
      ...sk8GameState,
      editingPlayers: true,
    })

  }

  const endSk8Game = (e) => {
    setSk8GameState({
      ...sk8GameState,
      inProgress: false,
      editingPlayers: false,
      players: [],
      pIdLimit: 0,
      outOrder: [],
    })
  }

  const addPlayer = (data, e) => {
    const list = sk8GameState.players
    data.playerId = sk8GameState.pIdLimit
    list.push(data)

    setSk8GameState({
      ...sk8GameState,
      players: list,
      pIdLimit: sk8GameState.players.length,
    })

    e.target.reset()
  }

  const removeAllPlayers = () => {
    const list = []

    setSk8GameState({
      ...sk8GameState,
      players: list,
      pIdLimit: 0
    })
  }

  const removePlayer = (pid) => {
    const list = sk8GameState.players

    for (var i = 0; i < list.length; i++) {
      if (list[i].playerId === pid) {
        list.splice(i, 1);
      }
    }

    setSk8GameState({
      ...sk8GameState,
      players: list,
    })
  }

  const startGame = () => {
    setSk8GameState({
      ...sk8GameState,
      inProgress: true,
      editingPlayers: false,
    })
  }

  const addLetter = (pid) => {
    const list = sk8GameState.players

    for (var i = 0; i < list.length; i++) {
      if (list[i].playerId === pid) {
        let nli = parseInt(list[i].letters.length)

        if (list[i].letters.length + 1 === sk8GameState.sk8Word.length) {
          list[i].letters = sk8GameState.sk8Word

          console.log("move player out!")
        } else {
          list[i].letters = list[i].letters.concat(sk8GameState.sk8Word[nli])
        }
      }
    }

    setSk8GameState({
      ...sk8GameState,
      players: list,
    })
  }

  const removeLetter = (pid) => {
    const list = sk8GameState.players

    for (var i = 0; i < list.length; i++) {
      if (list[i].playerId === pid) {
        let nli = parseInt(list[i].letters.length)

        list[i].letters = list[i].letters.slice(0, nli - 1)
      }
    }

    setSk8GameState({
      ...sk8GameState,
      players: list,
    })
  }

  return (
    <div>
      {sk8GameState.inProgress ? (
        <button className={"button " + ((!sk8GameState.inProgress) ? " visually-hidden" : "")} onClick={endSk8Game}>End Game</button>
      ) : (
        <button className={"button primary" + ((sk8GameState.editingPlayers) ? " visually-hidden" : "")} onClick={editPlayers}>Begin</button>
      )}


      <button className={"button" + ((!sk8GameState.editingPlayers) ? " visually-hidden" : "")} disabled={(sk8GameState.players.length < 2)} onClick={startGame}>Start Game!</button>

      <hr />

      {sk8GameState.editingPlayers ? (
        <>
          <Form onSubmit={addPlayer} id="addPlayerForm">
            <div className="row">
              <div className="col-8">

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
          <hr />
          {sk8GameState.players.length >= 1 ? (
            <div className="playerEditList">
              {sk8GameState.players.map((p) => (
                <div key={p.playerId} className="row">
                  <div className="col-6 text-left">
                    <span>{p.playername}</span>
                  </div>
                  <div className="col-6 text-right">
                    <button onClick={() => { removePlayer(p.playerId) }}><i className="fa fa-trash-alt"></i></button>
                  </div>
                </div>
              ))}
            </div>
          ) : false}
          <hr />
          {sk8GameState.pIdLimit > 0 ? (
            <button className={"button primary" + ((!sk8GameState.editingPlayers) ? " visually-hidden" : "")} onClick={removeAllPlayers}>Remove All Players</button>
          ) : false}
        </>
      ) : false}


      {sk8GameState.inProgress ? (
        <div className="playerEditList">
          {sk8GameState.players.map((p) => (
            <div key={p.playerId} className="row">
              <div className="col-4 text-left">
                <span>{p.playername}</span>
              </div>
              <div className="col-4 text-center">
                <span>{p.letters}</span>
              </div>
              <div className="col-4 text-right">
                <button onClick={() => { removeLetter(p.playerId) }}><i className="fa fa-minus"></i></button>
                {' '}<button onClick={() => { addLetter(p.playerId) }}><i className="fa fa-plus"></i></button>
              </div>
            </div>
          ))}
        </div>
      ) : false}
      <hr />
      {/* <pre style={{ textAlign: "left" }}>{JSON.stringify(sk8GameState, null, 2)}</pre> */}
    </div>
  )
}

export default Sk8Game
