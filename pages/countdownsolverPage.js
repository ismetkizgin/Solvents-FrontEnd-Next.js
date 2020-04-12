import Layout from '../components/_layout';
import { randomNumber } from '../public/js/random';
import Request from '../api/request';
import Link from 'next/link'

const isInputNumberOne = (evt) => {
    var ch = String.fromCharCode(evt.which);
    if (!(/[0-9]/.test(ch))) {
        evt.preventDefault();
    }
}

const isInputNumberTwo = (evn) => {
    var chr = String.fromCharCode(evn.which);
    if (!(/[10-99]/.test(chr))) {
        evn.preventDefault();
    }
}

const isInputNumberThree = (evnt) => {
    var krt = String.fromCharCode(evnt.which);
    if (!(/[100-999]/.test(krt))) {
        evnt.preventDefault();
    }
}

const getCountdownSolver = async () => {
    let numbers = [], state = true, target, input;
    for (let i = 0; i < 6; i++) {
        input = document.getElementById('NumberInput' + (i + 1));
        if (input.value === '' || input.value == null) {
            state = false;
        }
        numbers[i] = parseInt(input.value);
    }
    input = document.getElementById('TargetNumberInput');
    target = parseInt(input.value);
    if (target === '' || target == null) {
        state = false;
    }

    if (state) {
        document.getElementById("result-table").style.display = "block";
        document.getElementById("loading-gif").style.display = "block";
        document.getElementById("result").style.display = "none";

        const data = await Request('/countdownsolver/' + numbers + '/' + target);

        document.getElementById("loading-gif").style.display = "none";
        document.getElementById("result").style.display = "block";
        document.getElementById('result').innerHTML = data.result + '(Başarım Puanı: ' + data.score + ")";
    }
    else {
        alert('Lütfen tüm değerleri giriniz...');
    }
}

function CountdownSolverPage() {
    return (<Layout title='Sayı Çözücü'>
        <Link href="/"><a className="d-flex justify-content-start align-items-center icon"><i className="fas fa-chevron-circle-left"></i></a></Link>

        <div className="container">
            <h1>SAYI ÇÖCÜZÜ</h1>
            <div className="row">
                <div className="col-md-2">
                    <input id='NumberInput1' className="input" type="text" onKeyPress={() => isInputNumberOne(event)} maxLength="1" placeholder="Sayi 1" required />

                </div>
                <div className="col-md-2">
                    <input id='NumberInput2' className="input" type="text" onKeyPress={() => isInputNumberOne(event)} maxLength="1" placeholder="Sayi 2" required />

                </div>
                <div className="col-md-2">
                    <input id='NumberInput3' className="input" type="text" onKeyPress={() => isInputNumberOne(event)} maxLength="1" placeholder="Sayi 3" required />

                </div>
                <div className="col-md-2">
                    <input id='NumberInput4' className="input" type="text" onKeyPress={() => isInputNumberOne(event)} maxLength="1" placeholder="Sayi 4" required />

                </div>
                <div className="col-md-2">
                    <input id='NumberInput5' className="input" type="text" onKeyPress={() => isInputNumberOne(event)} maxLength="1" placeholder="Sayi 5" required />

                </div>
                <div className="col-md-2">
                    <input id='NumberInput6' className="input" type="text" onKeyPress={() => isInputNumberTwo(event)} maxLength="2" placeholder="Sayi 6" required />
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <input id='TargetNumberInput' className="target" type="text" onKeyPress={() => isInputNumberThree(event)} maxLength="3" placeholder="Hedef Sayi" required />

                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <button onClick={() => randomNumber()} className="button" type="button"> Rastgele Sayı Oluştur </button>

                </div>
                <div className="col-md-6">
                    <button onClick={() => getCountdownSolver()} className="button" type="button"> Sonuçları Görüntüle </button>

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
        </div>
    </Layout>
    )
}

export default CountdownSolverPage