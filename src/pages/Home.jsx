import React from 'react'
import { Link } from 'react-router-dom'

export default class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">Приветствуем Вас, дорогой гость!</h1>
          <p className="lead">
            Наслажлайтесь, читайте! Наш ДОМ ждет ВАС!
          </p>
          <hr className="my-4" />
          <p>Администрация делает всё, чтобы Вам было у нас комфортно и уютно.</p>
          <Link to="/messages" className="btn btn-primary btn-lg" href="#" role="button">Начать</Link>
        </div>
      </div>
    )
  }
}