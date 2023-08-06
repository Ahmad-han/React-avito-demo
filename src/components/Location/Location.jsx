

export const Location = ({ item }) => {
  return (
    <div style={{marginTop: "100px"}}>
      <h2>Расположение</h2>
        <p>{item.address}</p>
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A5d2496b5257411b9c2202d3c2a06595e7fdd28b3c4cb1d426602e4b4f1a2bdd4&amp;source=constructor"
        width="600"
        height="450"
        frameborder="0"
      ></iframe>
    </div>
  );
};
