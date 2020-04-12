import Layout from '../components/_layout';
import { randomLetter } from '../public/js/random';
import Request from '../api/request';
import Link from 'next/link'

const keyUp = (evnt) => {
    var krt = String.fromCharCode(evnt.which);
    if (!(/^[a-zA-Z|çşığü]+$/.test(krt))) {
        evnt.preventDefault();
    }
}

const getWordSolver = async () => {
    let letters = [], state = true;
    for (let i = 0; i < 8; i++) {
        letters[i] = $('#LetterInput' + (i + 1)).val();
        if (letters[i] === '' || letters[i] == null) {
            state = false;
        }
    }

    if (state) {
        document.getElementById("result-table").style.display = "block";
        document.getElementById("loading-gif").style.display = "block";
        document.getElementById("result").style.display = "none";

        const data = await Request('/wordsolver/' + letters);

        document.getElementById("loading-gif").style.display = "none";
        document.getElementById("result").style.display = "block";
        $('#result').html(data.word + '</br>(Başarım Puanı: ' + data.score + ")");
    }
    else {
        alert('Lütfen tüm değerleri giriniz...');
    }
}

function WordSolverPage() {
    return (
        <Layout title="Kelime Çözücü">
            <Link href="/"><a className="d-flex justify-content-start align-items-center icon"><i className="fas fa-chevron-circle-left"></i></a></Link>

            <h1>KELİME ÇÖZÜCÜ</h1>

            <div className="row">
                <div className="col">
                    <input id='LetterInput1' onKeyPress={() => { keyUp(event) }} className="input" type="text" maxLength="1" placeholder="Harf 1" required />
                </div>
                <div className="col">
                    <input id='LetterInput2' onKeyPress={() => { keyUp(event) }} className="input" type="text" maxLength="1" placeholder="Harf 2" required />
                </div>
                <div className="col">
                    <input id='LetterInput3' onKeyPress={() => { keyUp(event) }} className="input" type="text" maxLength="1" placeholder="Harf 3" required />
                </div>
                <div className="col">
                    <input id='LetterInput4' onKeyPress={() => { keyUp(event) }} className="input" type="text" maxLength="1" placeholder="Harf 4" required />
                </div>
                <div className="col">
                    <input id='LetterInput5' onKeyPress={() => { keyUp(event) }} className="input" type="text" maxLength="1" placeholder="Harf 5" required />
                </div>
                <div className="col">
                    <input id='LetterInput6' onKeyPress={() => { keyUp(event) }} className="input" type="text" maxLength="1" placeholder="Harf 6" required />
                </div>
                <div className="col">
                    <input id='LetterInput7' onKeyPress={() => { keyUp(event) }} className="input" type="text" maxLength="1" placeholder="Harf 7" required />
                </div>
                <div className="col">
                    <input id='LetterInput8' onKeyPress={() => { keyUp(event) }} className="input" type="text" maxLength="1" placeholder="Harf 8" required />
                </div>
                <div className="col">
                    <input className="input" type="text" placeholder="Bonus Harf" disabled />
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <button onClick={() => randomLetter()} className="button" type="button">Rastgele Harf Oluştur</button>
                </div>
                <div className="col-md-6">
                    <button onClick={() => getWordSolver()} className="button" type="button">Sonucu Göster</button>

                </div>
            </div>

            <div id="result-table" className="row">
                <div className="col">
                    <table>
                        <thead>
                            <tr>
                                <th>Sonuc</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td id='loading-gif'>
                                    <img src={require("../public/images/loading.gif").default} />
                                </td>
                                <td id='result'>

                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    )
}

export default WordSolverPage;