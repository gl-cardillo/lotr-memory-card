import uniqid from 'uniqid';

export function Cards({ chArr, handleGame }) {
  return (
    <div className="card-container" onClick={handleGame} >
      {chArr.map((arr) => 
          <div key={uniqid()} className="cards"  >
            <img src={arr.src} alt={arr.title} id={arr.title}  />
            <p id={arr.title}>{arr.title}</p>
          </div>
        )}
    </div>
  );
}
