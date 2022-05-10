function showMultiplicationTable() {
	const userNumTable = document.getElementById('input-num').value;

	if (userNumTable < 1 || userNumTable > 10) {
		alert('Numero incorrecto');
		return;
	}

	let multipResult;
	let resultado;

	const arrayTable = [];
    let arrayTableFormat = [];
	
    for (let num = 0; num < 10; num++) {
		multipResult = userNumTable * (num + 1);

		resultado = `${userNumTable} x ${num + 1} = ${multipResult} \n`;

		arrayTable.push(resultado);
        arrayTableFormat = arrayTable.join('')

	}
   
    document.getElementById('result').innerHTML = `La tabla del ${userNumTable} es:
                                                        ${arrayTableFormat}`;
}
