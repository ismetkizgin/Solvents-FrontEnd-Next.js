import Layout from '../components/_layout';
import Random from '../public/js/random';
import countdownSolver from '../public/solvent/countdownsolver';

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
    let numbers = [];
    let target;

    for (let i = 0; i <= 6; i++) {
        numbers[i] = parseInt($('#NumberInput' + i).val());
    }
    target = parseInt($('#TargetNumberInput').val());
    $('#result').html(await countdownSolver(numbers, target));
}

function CountdownSolverPage() {
    return (<Layout>
        <div className="container">
            <h1>SAYI HESAPLAYICI</h1>

            <div className="row">
                <div className="col-md-2">
                    <input id='NumberInput1' className="Number" type="text" onKeyPress={() => isInputNumberOne(event)} maxlength="1" placeholder="Sayi 1" required />

                </div>
                <div className="col-md-2">
                    <input id='NumberInput2' className="Number" type="text" onKeyPress={() => isInputNumberOne(event)} maxlength="1" placeholder="Sayi 2" required />

                </div>
                <div className="col-md-2">
                    <input id='NumberInput3' className="Number" type="text" onKeyPress={() => isInputNumberOne(event)} maxlength="1" placeholder="Sayi 3" required />

                </div>
                <div className="col-md-2">
                    <input id='NumberInput4' className="Number" type="text" onKeyPress={() => isInputNumberOne(event)} maxlength="1" placeholder="Sayi 4" required />

                </div>
                <div className="col-md-2">
                    <input id='NumberInput5' className="Number" type="text" onKeyPress={() => isInputNumberOne(event)} maxlength="1" placeholder="Sayi 5" required />

                </div>
                <div className="col-md-2">
                    <input id='NumberInput6' className="Number" type="text" onKeyPress={() => isInputNumberTwo(event)} maxlength="2" placeholder="Sayi 6" required />
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <input id='TargetNumberInput' className="target" type="text" onKeyPress={() => isInputNumberThree(event)} maxlength="3" placeholder="Hedef Sayi" required />

                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <button onClick={() => Random.randomNumber()} type="button"> Rastgele Sayı Oluştur </button>

                </div>
                <div className="col-md-6">
                    <button onClick={() => getCountdownSolver()} type="button"> Sonuçları Görüntüle </button>

                </div>
            </div>

            <div className="row col">
                <table>
                    <thead>
                        <tr>
                            <th>Sonuc</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
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

export default CountdownSolverPage