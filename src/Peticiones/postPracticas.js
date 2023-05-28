export const postPracticas = async (practica) => {
    const url = 'http://localhost:8080/practicas/todas';
    const resp = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }, 
      body: JSON.stringify(practica)
    });
  };
