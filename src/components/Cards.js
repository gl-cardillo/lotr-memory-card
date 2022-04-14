

export function Cards({ chArr }) {
  return (
    <div className="card-container">
      {chArr.map((arr, index) => 

          <div key={index} className="cards" >
            <img src={arr.src} alt={arr.title}  />
            <p>{arr.title}</p>
          </div>
          
        )}
    </div>
  );
}
