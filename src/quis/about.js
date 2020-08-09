import React from 'react'
import './public/css/about.css'
import { Link } from 'react-router-dom'

function About() {
    return (
        <section>
            <h1>Data Peserta Sanbercode Bootcamp Reactjs</h1>
            <article>
                <ol>
                    <li><b>Nama</b>: Hadi Hudhori</li>
                    <li><b>Email</b>: hudhorisan@gmail.com</li>
                    <li><b>Sistem Operasi yang digunakan</b>: Windows</li>
                    <li><b>Akun Github</b>: hudhorisan</li>
                    <li><b>Akun Telegram</b>: mashudhori</li>
                </ol>
            </article>
            <Link to="/">kembali ke index</Link>
        </section>
    )
}

export default About