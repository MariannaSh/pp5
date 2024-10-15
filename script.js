function handleSubmit(event) {
    event.preventDefault();
    
    const data = {
      nazwaFirmy: document.getElementById('inputName4').value,
      nip: document.getElementById('inputNip4').value,
      ulica: document.getElementById('inputUlica').value,
      numerDomu: document.getElementById('inputNrDomu').value,
      numerMieszkania: document.getElementById('inputNrMieszkania').value,
      miasto: document.getElementById('inputCity').value,
      branza: document.getElementById('inputState').value,
      kodPocztowy: document.getElementById('inputZip').value,
      uwagi: document.getElementById('floatingTextarea').value,
      aktywny: document.getElementById('gridCheck').checked
    };

    console.log(data);
  }

  function dodajDane() {
    
    document.getElementById('inputName4').value = 'ABB';
    document.getElementById('inputNip4').value = '3232';
    document.getElementById('inputUlica').value = 'Koszykarska';
    document.getElementById('inputNrDomu').value = '33';
    document.getElementById('inputNrMieszkania').value = '5';
    document.getElementById('inputCity').value = 'Krakow';
    document.getElementById('inputState').value = 'Kobieta';
    document.getElementById('inputZip').value = '42829';
    document.getElementById('floatingTextarea').value = 'Brak uwag';
    document.getElementById('gridCheck').checked = true;


    document.getElementById('inputName4').readOnly = true;
    document.getElementById('inputNip4').readOnly = true;
    document.getElementById('inputUlica').readOnly = true;
    document.getElementById('inputNrDomu').readOnly = true;
    document.getElementById('inputNrMieszkania').readOnly = true;
    document.getElementById('inputCity').readOnly = true;
    document.getElementById('inputState').disabled = true;
    document.getElementById('inputZip').readOnly = true;
    document.getElementById('floatingTextarea').readOnly = true;
    document.getElementById('gridCheck').disabled = true;
  }