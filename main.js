function getAdviceById() {
  const adviceId = document.getElementById('adviceId').value;

  const apiUrl = `https://api.adviceslip.com/advice/${adviceId}`;

  axios.get(apiUrl)
    .then(response => {
      const advice = response.data.slip.advice;

      document.getElementById('result').innerText = `Advice: ${advice}`;
    })
    .catch(error => {
      console.error('Error fetching advice:', error.message);

      document.getElementById('result').innerText = 'Error fetching advice. Please check the ID and try again.';
    });
}
