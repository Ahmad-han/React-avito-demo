



export const HouseInfo = () => {

  return (
    <div style={{ marginTop: "100px" }}>
      <h2>Информация по квартире</h2>

      <div className="container-1">
        <div className="left_block">
          <p>
            <span className="bold">Количество комнат:</span> <span> 2</span>
          </p>
          <p>
            <span className="bold">Общая площадь:</span> <span> 67.8 м²</span>
          </p>
          <p>
            <span className="bold">Площадь кухни:</span> <span> 15.5 м²</span>
          </p>
          <p>
            <span className="bold">Жилая площадь:</span> <span> 27 м²</span>
          </p>
          <p>
            <span className="bold">Этаж:</span> <span> 7 из 22</span>
          </p>
        </div>

        <div className="right_block">
          <p>
            <span className="bold">Балкон или лоджия:</span> <span> балкон, лоджия</span>
          </p>
          <p>
            <span className="bold">Тип комнат:</span> <span> Изолированные</span>
          </p>
          <p>
            <span className="bold">Ремонт:</span> <span> Требует ремонта</span>
          </p>
          <p>
            <span className="bold">Способ продажи:</span> <span> Свободная</span>
          </p>
        </div>
      </div>
    </div>
  );
};
