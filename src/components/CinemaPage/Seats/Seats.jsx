import styles from "./seats.module.css";

const Seats = ({ hallData }) => {
  const totalSeats = hallData.total_seats;
  const rows = hallData.rows;
  const minCols = hallData.cols;

  // Генерация плана зала
  const generateSeatsLayout = () => {
    const layout = [];
    let seatNumber = 1;

    for (let i = 0; i < rows; i++) {
      const remainingSeats = totalSeats - seatNumber + 1;
      const seatsInThisRow = Math.min(remainingSeats, minCols);
      const row = [];

      for (let j = 0; j < seatsInThisRow; j++) {
        row.push(seatNumber++);
      }

      layout.push(row);
    }

    return layout;
  };

  const seatLayout = generateSeatsLayout();

  return (
    <div className={styles.hallWrapper}>
      <h2 className={styles.title}>Схема зала: {hallData.name}</h2>
      <div className={styles.rows}>
        {seatLayout.map((row, rowIndex) => (
          <div key={rowIndex} className={styles.row}>
            {row.map((seat) => (
              <div key={seat} className={styles.seat}>
                {seat}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Seats;
